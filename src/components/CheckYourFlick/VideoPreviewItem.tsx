import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';

import colors from '../../configs/styles/colors';
import {Question, UserAccountVideo} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import FFVideoLoader from '../FFVideoLoader';
import EditIcon from '../icons/EditIcon';
import SmallQuestionCard from './SmallQuestionCard';
import VideoProcessingError from './VideoProcessingError';

type VisibilityControlType = {
  showEditButton?: boolean;
};

interface VideoItemProps {
  index: number;
  currentVideoVisible: boolean;
  item: UserAccountVideo;
  muted: boolean;
  navigated: boolean;
  visible: boolean;
  onPrevVideo: () => void;
  onNextVideo: () => void;
  onVideoEdit?: (
    index: number,
    questionId: number,
    playVideo: () => void,
  ) => void;
  visibilityControl?: VisibilityControlType;
  pausedProps?: boolean;
}

const VideoPreviewItem: React.FunctionComponent<VideoItemProps> = ({
  index,
  currentVideoVisible,
  item,
  muted,
  visible,
  navigated,
  onPrevVideo,
  onNextVideo,
  onVideoEdit,
  visibilityControl,
  pausedProps = false,
}) => {
  const video = useRef<Video>(null);
  const [paused, setPaused] = useState(true);
  const timeOutId = useRef<NodeJS.Timeout | null>(null);
  const [isPressVideoEdit, setIsPressVideoEdit] = useState(false);

  // Play the video
  const playVideo = useCallback(() => {
    timeOutId.current = setTimeout(() => {
      setPaused(false);
    }, 700);
  }, []);

  useEffect(() => {
    if (
      (!currentVideoVisible || isPressVideoEdit || pausedProps) &&
      timeOutId.current
    ) {
      setIsPressVideoEdit(false);
      clearInterval(timeOutId.current);
    }
  }, [currentVideoVisible, isPressVideoEdit, pausedProps]);

  // Pause the video
  const pauseVideo = useCallback(() => {
    setPaused(true);
  }, []);

  // Pause the video when invisible
  useEffect(() => {
    if (currentVideoVisible) {
      if (!paused && !visible) {
        pauseVideo();
      }
    }
  }, [currentVideoVisible, pauseVideo, paused, playVideo, visible]);

  // Seek the video to begin
  const seekToBegin = useCallback(() => {
    video?.current?.seek(0);
  }, []);

  // Video seek is completed
  const onSeek = useCallback(() => {
    if (currentVideoVisible && !navigated) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [currentVideoVisible, navigated, pauseVideo, playVideo]);

  useEffect(() => {
    if (navigated) {
      seekToBegin();
    }

    if (currentVideoVisible) {
      if (!isPressVideoEdit && !pausedProps) {
        playVideo();
      }
    } else {
      seekToBegin();
    }
  }, [
    currentVideoVisible,
    isPressVideoEdit,
    navigated,
    pausedProps,
    playVideo,
    seekToBegin,
  ]);

  // Go to the previous video
  const goPrev = useCallback(() => {
    onPrevVideo();
  }, [onPrevVideo]);

  // Go to the next video and pause
  const goNext = useCallback(() => {
    onNextVideo();
  }, [onNextVideo]);

  // Pause the video when pressing in
  const onPressIn = useCallback(() => {
    pauseVideo();
  }, [pauseVideo]);

  // Play video after pressing out
  const onPressOut = useCallback(() => {
    setPaused(false);
  }, []);

  // Pause when the video id ready to display
  const onReadyForDisplay = useCallback(() => {
    if (currentVideoVisible && !isPressVideoEdit) {
      playVideo();
    }

    // console.log('Video is ready:', index);
  }, [currentVideoVisible, isPressVideoEdit, playVideo]);

  // The video edit button callback
  const onVideoEditPress = useCallback(() => {
    pauseVideo();
    setIsPressVideoEdit(true);
    if (onVideoEdit && item.question) {
      onVideoEdit(index, Number(item.question.id), () => {
        setIsPressVideoEdit(false);
        setPaused(false);
      });
    }
  }, [index, item.question, onVideoEdit, pauseVideo]);

  // const onProgress = useCallback(
  //   (data: OnProgressData) => {
  //     console.log(
  //       `Video ${index} progress: ${data.currentTime.toFixed(
  //         2,
  //       )} of ${data.playableDuration.toFixed(2)}`,
  //     );
  //   },
  //   [index],
  // );

  return (
    <View
      style={{
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
      }}>
      {item?.screenUrl && item?.url && (
        <FFVideoLoader
          ref={video}
          key={index}
          source={{
            uri: item?.url,
          }}
          paused={pausedProps || !currentVideoVisible || paused}
          repeat={false}
          onReadyForDisplay={onReadyForDisplay}
          onEnd={goNext}
          //onProgress={onProgress}
          onSeek={onSeek}
          muted={muted}
        />
      )}
      {!item?.screenUrl && <VideoProcessingError />}
      <View
        style={{
          bottom: 8,
          left: 0,
          position: 'absolute',
          right: 0,
          zIndex: 200,
        }}>
        {item.question && item.screenUrl && (
          <QuestionCardPreview
            question={item.question}
            showEdit={visibilityControl?.showEditButton ?? false}
            onVideoEdit={onVideoEditPress}
          />
        )}
      </View>
      <View
        style={{
          alignItems: 'center',
          bottom: 0,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.3,
              height: dimensions.HEIGHT * 0.45,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
              onPress={goPrev}
            />
          </View>
          <View
            style={{
              flex: 0.4,
              height: dimensions.HEIGHT * 0.45,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            />
          </View>
          <View
            style={{
              flex: 0.3,
              height: dimensions.HEIGHT * 0.45,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
              onPress={goNext}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

interface QuestionCardPreviewProps {
  question: Question;
  showEdit: boolean;
  onVideoEdit: () => void;
}

const QuestionCardPreview: React.FunctionComponent<QuestionCardPreviewProps> = React.memo(
  ({question, showEdit, onVideoEdit}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          width: '84%',
        }}>
        {showEdit && (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'absolute',
              right: -16,
              top: -16,
              zIndex: 100,
            }}>
            <VideoEditButton onPress={onVideoEdit} />
          </View>
        )}
        <SmallQuestionCard question={question.name} />
      </View>
    );
  },
);

interface VideoEditButtonProps {
  onPress: () => void;
}

const VideoEditButton: React.FunctionComponent<VideoEditButtonProps> = React.memo(
  ({onPress}) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: colors.raspberry,
          borderRadius: 17,
          height: 32,
          justifyContent: 'center',
          width: 32,
        }}
        onPress={onPress}>
        <EditIcon width={18} height={18} />
      </TouchableOpacity>
    );
  },
);

export default React.memo(VideoPreviewItem);
