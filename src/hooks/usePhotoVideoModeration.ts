import {filter, whereEq} from 'ramda';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {singletonHook} from 'react-singleton-hook';

import {
  AccountPhoto,
  useMyAccountImageQuery,
  useMyAccountVideosQuery,
  useUpdateVideoPreviewSubscription,
  useUpdatedAccountPhotoSubscription,
} from '../store/generated/graphql';

type LocalPhoto = {
  moderation: {
    approved: boolean;
  };
  urls: {
    middle: string;
  };
};

const init = {
  isDataChecking: false,
  isPhotoChecking: false,
  isPhotoPassed: true,
  isVideoPassed: true,
  photoUrl: '',
  videoCount: 7,
  // isUploadedProfile: true,
};
let globalSetIsPhotoChecking = (value: boolean): void | null => null;
let globalSetPhotoImage = (photo: string): void | null => null;
let globalSetIsVideoChecking = (photo: boolean): void | null => null;
let globalResetUserData = (): void | null => null;

export const usePhotoVideoModeration = singletonHook(init, () => {
  const [mainPhoto, setMainPhoto] = useState<
    AccountPhoto | LocalPhoto | null
  >();
  const [isVideoPassed, setIsVideoPassed] = useState<boolean>(
    init.isVideoPassed,
  );
  const [isVideoChecking, setIsVideoChecking] = useState(false);
  const [isPhotoChecking, setIsPhotoChecking] = useState(false);
  const [videoCount, setVideoCount] = useState(init.videoCount);

  // const [isVideosUploaded, setIsVideosUploaded] = useState(true);
  const firstFetchVideo = useRef(true);
  const firstFetchPhoto = useRef(true);

  globalSetIsPhotoChecking = setIsPhotoChecking;
  // globalSetPhotoImage =   setMainPhoto;
  globalSetPhotoImage = useCallback((photoUri: string) => {
    setMainPhoto((prev) => ({
      moderation: {approved: prev?.moderation?.approved ?? false},
      urls: {middle: photoUri},
    }));
  }, []);
  globalSetIsVideoChecking = setIsVideoChecking;

  globalResetUserData = useCallback(() => {
    firstFetchPhoto.current = true;
    firstFetchVideo.current = true;
    setMainPhoto(null);
    setVideoCount(7);
  }, []);

  const {data: myPhotoData} = useMyAccountImageQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });

  const {data: subscribePhotoData} = useUpdatedAccountPhotoSubscription();

  const {data: myVideoData} = useMyAccountVideosQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });

  const {data: subscribeVideoData} = useUpdateVideoPreviewSubscription();

  const filterVideos = useMemo(() => {
    return filter(whereEq({approved: true}));
    // return value.filter((el) => el?.approved);
  }, []);

  useEffect(() => {
    if (subscribePhotoData?.updatedAccountPhoto) {
      setMainPhoto(subscribePhotoData.updatedAccountPhoto);
      setIsPhotoChecking(false);
    }
  }, [subscribePhotoData]);

  useEffect(() => {
    if (subscribeVideoData?.updateVideoPreview?.videos) {
      // setIsVideosUploaded(subscribeVideoData?.updateVideoPreview?.videos.length < 7 ? false : true);
      setVideoCount(subscribeVideoData.updateVideoPreview.videos.length);
      const approvedVideo = filterVideos(
        subscribeVideoData.updateVideoPreview.videos,
      );
      if (approvedVideo.length >= 7) {
        setIsVideoPassed(true);
      } else {
        setIsVideoPassed(false);
      }
      setIsVideoChecking(false);
    }
  }, [filterVideos, subscribeVideoData]);

  useEffect(() => {
    if (myPhotoData?.myAccountImage && firstFetchPhoto.current) {
      setMainPhoto(myPhotoData.myAccountImage);
      firstFetchPhoto.current = false;
      setIsPhotoChecking(false);
    }
  }, [myPhotoData]);

  useEffect(() => {
    if (myVideoData?.myAccountVideos?.videos && firstFetchVideo.current) {
      // setIsVideosUploaded(myVideoData?.myAccountVideos?.videos.length < 7 ? false : true);
      setVideoCount(myVideoData.myAccountVideos.videos.length);
      const approvedVideo = filterVideos(myVideoData.myAccountVideos.videos);
      if (approvedVideo.length >= 7) {
        setIsVideoPassed(true);
      } else {
        setIsVideoPassed(false);
      }
      firstFetchVideo.current = false;
      setIsVideoChecking(false);
    }
  }, [filterVideos, myVideoData]);

  return {
    isDataChecking: isVideoChecking || isPhotoChecking,
    isPhotoChecking,
    isPhotoPassed: mainPhoto?.moderation?.approved,
    isVideoPassed: isVideoPassed,
    photoUrl: mainPhoto?.urls?.middle,
    videoCount,
    // isUploadedProfile:  isVideosUploaded && mainPhoto?.urls?.middle,
  };
});

export const setLocalImage = (value: string) => {
  globalSetIsPhotoChecking(true);
  globalSetPhotoImage(value);
};

export const setIsVideoChecking = (value: boolean) =>
  globalSetIsVideoChecking(value);

export const resetUserValidationData = () => globalResetUserData();
