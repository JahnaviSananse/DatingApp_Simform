import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import usePickPhoto from '../../hooks/usePickPhoto';
import {useProfileData} from '../../hooks/useProfileData';
import NavigationKey from '../../navigation/NavigationKey';
import dimensions from '../../utils/dimensions';
import MoreQuestionsIcon from '../icons/MoreQuestionsIcon';
import UploadPhotoIcon from '../icons/UploadPhotoIcon';
import PhotoActionButton from './PhotoActionButton';

const GALLERY_WIDTH =
  dimensions.WIDTH - constants.PROFILE.paddingHorizontal * 2;
const MAIN_PHOTO_SIZE = dimensions.HEIGHT * 0.68;

interface Props {
  photo: UserPhotoType;
  onUpdatePhoto: () => void;
  onPhotoUpload?: (uploading: boolean) => void;
  onNextStep?: () => void;
  index?: number;
  hidePopUp?: boolean;
}

const MainPhoto: React.FunctionComponent<Props> = ({
  photo,
  onUpdatePhoto,
  onPhotoUpload,
  onNextStep,
  index,
  hidePopUp,
}) => {
  const {navigate} = useNavigation();

  // User profile data
  const {updateProfileImage} = useProfileData();

  // const {data} = useMeQuery();
  // const {navigate} = useNavigation();

  const moderationNotPassed = useCallback(() => {
    // const option = photoFlickValidationAction(data?.me?.photoModerationPassed);
    // navigate(NavigationKey.WarningModal, option);
  }, []);

  // Photo updated
  const onPhotoUpdated = useCallback(
    (photoUri: string) => {
      onUpdatePhoto();
      updateProfileImage(photoUri);
      if (onNextStep) {
        onNextStep();
      }
    },
    [onNextStep, onUpdatePhoto, updateProfileImage],
  );

  const {localPhotoUri, uploading, showFilePicker} = usePickPhoto(
    photo?.photo?.id!!,
    onPhotoUpdated,
    onPhotoUpload,
  );

  useEffect(() => {
    if (photo?.photoUrl) {
      updateProfileImage(photo?.photoUrl);
    }
  }, [localPhotoUri, photo, photo.photoUrl, updateProfileImage]);

  useEffect(() => {
    if (
      index === 1 &&
      photo.action.hasError &&
      photo.photoUrl &&
      !photo.action.processing &&
      !hidePopUp
    ) {
      navigate(NavigationKey.WarningModal, {
        hideCloseButton: true,
        message: strings.navigationPage.warningModalModerationPassed.text(
          'photo',
        ),
        negativeText:
          strings.navigationPage.warningModalModerationPassed.cancel,
        onPressPositive: showFilePicker,
        oneBtn: false,
        positiveText:
          strings.navigationPage.warningModalModerationPassed.changePhoto,
        textAlign: 'center',
        title: strings.navigationPage.warningModalModerationPassed.issueWith(
          'cover photo',
        ),
      });
    }
  }, [
    hidePopUp,
    index,
    navigate,
    photo.action.hasError,
    photo.action.processing,
    photo.photoUrl,
    showFilePicker,
  ]);

  const uploadPhoto = useCallback(() => {
    if (photo.action.processing) {
      showFilePicker();
    }
  }, [photo, showFilePicker]);

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.darkSand50,
          borderColor: colors.blazeDarker,
          borderRadius: 12,
          borderWidth: 1,
          height: MAIN_PHOTO_SIZE,
          justifyContent: 'flex-start',
          width: GALLERY_WIDTH,
        }}>
        {onPhotoUpdated && photo.photoUrl && (
          <FastImage
            style={{
              borderColor: colors.raspberry,
              borderRadius: 12,
              borderWidth:
                photo.action.hasError && !photo.action.processing && !uploading
                  ? 2
                  : 0,
              height: MAIN_PHOTO_SIZE,
              width: GALLERY_WIDTH,
            }}
            source={{
              priority: FastImage.priority.high,
              uri: photo.photoUrl,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
        {!photo.photoUrl && !uploading && (
          <TouchableOpacity onPress={uploadPhoto} style={{marginTop: 70}}>
            <UploadPhotoIcon />
            <MoreQuestionsIcon
              style={{bottom: 0, position: 'absolute', right: 0}}
              width={30}
              height={30}
            />
          </TouchableOpacity>
        )}
        {uploading && !photo?.photo?.errors && moderationNotPassed()}
        {uploading && (
          <ActivityIndicator
            style={{alignSelf: 'center', position: 'absolute', top: '45%'}}
            color={COLORS.blazeBlue}
            size="large"
          />
        )}
      </View>
      {photo.photoUrl && !uploading && (
        <PhotoActionButton onPressReplace={showFilePicker} />
      )}
    </>
  );
};

export default React.memo(MainPhoto);
