import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {View} from 'react-native';

import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import NavigationKey from '../../navigation/NavigationKey';
import {CarouselContext} from '../../screens/SearchPeople';
import {AccountPhoto, UserAccountVideo} from '../../store/generated/graphql';
import ImagePreviewItem from '../CheckYourFlick/ImagePreviewItem';
import VideoPreviewItem from '../CheckYourFlick/VideoPreviewItem';

type AdditionalUserDataType = {
  age: string;
  name: string;
  userId: string;
  userProfileId: string;
  distance?: string | null;
};

interface Props {
  itemIndex: number;
  item: AccountPhoto | UserAccountVideo;
  currentVideoVisible: boolean;
  muted: boolean;
  navigated: boolean;
  visible: boolean;
  autoplay: boolean;
  showEditButton: boolean;
  onNextVideo: () => void;
  onPrevVideo: () => void;
  openUserModal?: (value: string) => void;
  additionalUserData?: AdditionalUserDataType;
  showUserData?: boolean;
  hideIconPlay: boolean;
  isShowImage: boolean;
  onUploadedImage?: () => void;
  isCheckYourFlick?: boolean;
  resetVideo?: (index: number) => void;
}

const EVPreviewItem: React.FunctionComponent<Props> = ({
  item,
  itemIndex,
  currentVideoVisible,
  muted,
  navigated,
  visible,
  autoplay,
  showEditButton,
  additionalUserData,
  showUserData,
  onNextVideo,
  onPrevVideo,
  openUserModal,
  hideIconPlay,
  isShowImage,
  onUploadedImage,
  isCheckYourFlick,
  resetVideo,
}) => {
  const {navigate} = useNavigation();
  const {checkPermissions} = useCameraPermissions();
  const {isPaused} = useContext(CarouselContext);

  // Edit single video
  const onEditSingleFlick = useCallback(
    (index: number, questionId: number, playVideo: () => void) => {
      navigate(NavigationKey.WarningModal, {
        hideCloseButton: true,
        message: strings.checkYourFlick.editSingleFlickModal.message,
        negativeText: strings.checkYourFlick.editSingleFlickModal.negative,
        onPressNegative: () => {
          checkPermissions().then(() => {
            if (resetVideo) {
              resetVideo(index - 1);
            }
            navigate(NavigationKey.VideoRecord, {
              editStepNumber: index,
              isCheckYourFlick: isCheckYourFlick,
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
    [checkPermissions, isCheckYourFlick, navigate, resetVideo],
  );

  switch (item.__typename) {
    case 'AccountPhoto':
      return (
        <>
          <ImagePreviewItem
            imageUrl={item.urls.middle ?? undefined}
            onNextVideo={onNextVideo}
            additionalUserData={additionalUserData}
            openUserModal={openUserModal}
            autoplay={autoplay}
            showUserData={showUserData}
            hideIconPlay={hideIconPlay}
            isShowImage={isShowImage}
            onUploadedImage={onUploadedImage}
            isImageStep={currentVideoVisible}
          />
          <View
            style={{
              alignItems: 'center',
              bottom: 16,
              left: 0,
              position: 'absolute',
              right: 0,
            }}
          />
        </>
      );
    case 'UserAccountVideo':
      return (
        <VideoPreviewItem
          index={itemIndex}
          currentVideoVisible={currentVideoVisible}
          muted={muted}
          visible={visible}
          item={item}
          navigated={navigated}
          onNextVideo={onNextVideo}
          onPrevVideo={onPrevVideo}
          onVideoEdit={onEditSingleFlick}
          visibilityControl={{
            showEditButton: showEditButton,
          }}
          pausedProps={isPaused}
        />
      );
    default:
      return <View />;
  }
};

export default React.memo(EVPreviewItem);
