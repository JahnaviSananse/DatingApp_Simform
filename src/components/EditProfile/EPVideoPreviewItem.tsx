import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';

import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import NavigationKey from '../../navigation/NavigationKey';
import {AccountPhoto, UserAccountVideo} from '../../store/generated/graphql';
import ImagePreviewItem from '../CheckYourFlick/ImagePreviewItem';
import VideoPreviewItem from '../CheckYourFlick/VideoPreviewItem';

interface Props {
  itemIndex: number;
  item: AccountPhoto | UserAccountVideo;
  currentVideoVisible: boolean;
  muted: boolean;
  navigated: boolean;
  visible: boolean;
  onNextVideo: () => void;
  onPrevVideo: () => void;
  onPressPlayVideo: () => void;
  snapToFirst?: () => void;
  paused?: boolean;
  resetVideo: (value: number) => void;
}

const EPVideoPreviewItem: React.FunctionComponent<Props> = ({
  item,
  itemIndex,
  currentVideoVisible,
  muted,
  visible,
  navigated,
  onNextVideo,
  onPrevVideo,
  onPressPlayVideo,
  snapToFirst,
  paused,
  resetVideo,
}) => {
  const {navigate} = useNavigation();

  // User profile data
  // const {profileImage} = useProfileData();

  // Check the camera permissions granted
  const {checkPermissions} = useCameraPermissions();

  // Edit single video
  const onEditSingleFlick = useCallback(
    (index: number, questionId: number, playVideo: () => void) => {
      navigate(NavigationKey.WarningModal, {
        hideCloseButton: true,
        message: strings.checkYourFlick.editSingleFlickModal.message,
        negativeText: strings.checkYourFlick.editSingleFlickModal.negative,
        onPressNegative: () => {
          checkPermissions().then(() => {
            resetVideo(index - 1);
            navigate(NavigationKey.VideoRecord, {
              editStepNumber: index,
              questionId: questionId,
              singleEdit: true,
            });
          });
        },
        onPressPositive: playVideo,
        positiveText: strings.checkYourFlick.editSingleFlickModal.positive,
        title: strings.checkYourFlick.editSingleFlickModal.title,
      });
    },
    [resetVideo, checkPermissions, navigate],
  );

  switch (item.__typename) {
    case 'AccountPhoto':
      return (
        <>
          <ImagePreviewItem
            imageUrl={item?.urls?.middle}
            onNextVideo={onNextVideo}
            onPressPlayVideo={onPressPlayVideo}
            isShowImage
          />
        </>
      );
    case 'UserAccountVideo':
      return (
        <VideoPreviewItem
          index={itemIndex}
          currentVideoVisible={currentVideoVisible}
          muted={muted}
          item={item}
          visible={visible}
          navigated={navigated}
          onNextVideo={onNextVideo}
          onPrevVideo={onPrevVideo}
          onVideoEdit={onEditSingleFlick}
          pausedProps={paused ?? true}
          visibilityControl={{
            showEditButton: true,
          }}
        />
      );
    default:
      return <View />;
  }
};

export default React.memo(EPVideoPreviewItem);
