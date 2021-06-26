import AsyncStorage from '@react-native-community/async-storage';
import {useCallback, useEffect, useRef, useState} from 'react';

import constants from '../configs/constants';
import {
  AccountPhoto,
  UserAccountVideo,
  VideoPreview,
  useMyAccountVideosQuery,
  useUpdateVideoPreviewSubscription,
} from '../store/generated/graphql';

export type VideoErrors = {
  title: string;
  description: string;
};

export type VideoErrorType =
  | 'DEFICIENCY' // Videos less than 7
  | 'MODERATION' // Single video is processing
  | 'EMPTY'; // No videos

type CheckVideosType = {
  error: VideoErrorType | undefined;
  lastVideoIndex: number | undefined;
  problemVideoIndexes: number[];
  profileImage: AccountPhoto | undefined;
  videos: UserAccountVideo[] | undefined;
  resetVideo: (index: number) => void;
};

const useCheckVideos = (): CheckVideosType => {
  // Video flow error type
  const [videoFlowError, setVideoFlowError] = useState<
    undefined | VideoErrorType
  >();

  // Last recorded video index
  const [lastVideoIndex, setLastVideoIndex] = useState<number | undefined>();

  // Unrecognized or not approved video indexes
  const [problemVideoIndexes, setProblemVideoIndexes] = useState<number[]>([]);

  // Profile image url
  const [profileImageUrl, setProfileImageUrl] = useState<
    AccountPhoto | undefined
  >();

  // Videos list
  const [videos, setVideos] = useState<UserAccountVideo[] | undefined>();

  const videoIndexOnChecking = useRef<number | null>(null);

  // Network request
  const {data: networkData} = useMyAccountVideosQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });
  // Subscription
  const {data: subscribeData} = useUpdateVideoPreviewSubscription();

  const updateVideos = useCallback(
    (videoPreview: VideoPreview, isSubscription: boolean) => {
      let localVideoFlowError: VideoErrorType | undefined;

      const {videos: profileVideos, profileImage} = videoPreview;

      // Set profile image
      if (profileImage?.urls?.middle) {
        setProfileImageUrl(profileImage);
      }

      // Reset the error indexes
      setProblemVideoIndexes([]);

      // Map endpoint videos to local videos
      profileVideos?.forEach(
        (
          {id, url, screenUrl, question: {name}, approved, recognized},
          index,
        ) => {
          // Add video index to the problem video list
          if (!approved) {
            setProblemVideoIndexes((prevState) => [...prevState, index + 1]);
          }
        },
      );

      // Video count error
      if (profileVideos && profileVideos.length === 0) {
        localVideoFlowError = 'EMPTY';
        setLastVideoIndex(1);
      } else if (profileVideos && profileVideos?.length < 7) {
        localVideoFlowError = 'DEFICIENCY';
        setLastVideoIndex(profileVideos.length);
      }

      // Set parsed videos
      if (typeof videoIndexOnChecking.current === 'number' && !isSubscription) {
        setVideos((prevState) =>
          prevState?.map((el, index) =>
            videoIndexOnChecking.current === index
              ? {...el, screenUrl: null, url: null}
              : el,
          ),
        );
      } else {
        setVideos(profileVideos ?? undefined);
      }

      // Skip the check flick when no errors
      if (!localVideoFlowError) {
        AsyncStorage.setItem(constants.SKIP_CHECK_FLICK_STATE, 'true');
      }

      // Set found error
      setVideoFlowError(localVideoFlowError);
    },
    [],
  );

  useEffect(() => {
    if (networkData && networkData.myAccountVideos) {
      updateVideos(networkData.myAccountVideos, false);
    }
  }, [networkData, updateVideos]);

  useEffect(() => {
    if (subscribeData && subscribeData.updateVideoPreview) {
      videoIndexOnChecking.current = null;
      updateVideos(subscribeData.updateVideoPreview, true);
    }
  }, [subscribeData, updateVideos]);

  const resetVideo = useCallback(
    (videoIndex: number) => {
      if (videos) {
        videoIndexOnChecking.current = videoIndex;
        setVideos((prevState) =>
          prevState?.map((el, index) =>
            videoIndex === index ? {...el, screenUrl: null, url: null} : el,
          ),
        );
      }
    },
    [videos],
  );

  return {
    error: videoFlowError,
    lastVideoIndex: lastVideoIndex,
    problemVideoIndexes: problemVideoIndexes,
    profileImage: profileImageUrl,
    resetVideo,
    videos: videos,
  };
};

export default useCheckVideos;
