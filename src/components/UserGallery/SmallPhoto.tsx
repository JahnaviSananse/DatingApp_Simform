import React, {useCallback, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {Shadow} from 'react-native-neomorph-shadows';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import usePickPhoto from '../../hooks/usePickPhoto';
import {useProfileData} from '../../hooks/useProfileData';
import {UserPhotoType} from '../../hooks/useUserPhotos';
import {AccountPhoto} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import NoPhoto from './NoPhoto';
import PhotoActionButton from './PhotoActionButton';

const GALLERY_WIDTH =
  dimensions.WIDTH - constants.PROFILE.paddingHorizontal * 2;
const SMALL_PHOTO_SIZE = GALLERY_WIDTH * 0.29;

interface Props {
  item: UserPhotoType;
  photo: AccountPhoto;
  updateList: (updatedPhotoId: string) => void;
  onRemovePhoto: (photoId: string) => void;
  onPhotoUpload?: (uploading: boolean) => void;
}

const SmallPhoto: React.FunctionComponent<Props> = ({
  item,
  photo,
  updateList,
  onRemovePhoto,
  onPhotoUpload,
}) => {
  // User profile data
  const {updateProfileImage} = useProfileData();

  const {
    localPhotoUri,
    uploading,
    showFilePicker,
    removeLocalPhoto,
  } = usePickPhoto(photo.id, updateList, onPhotoUpload);

  useEffect(() => {
    if (item.photoUrl && item.position === 1) {
      updateProfileImage(item.photoUrl);
    }
  }, [item.photoUrl, item.position, localPhotoUri, updateProfileImage]);

  useEffect(() => {
    if (localPhotoUri && item.position === 1) {
      updateProfileImage(localPhotoUri);
    }
  }, [item.position, localPhotoUri, updateProfileImage]);

  // Remove action listener
  const onPressRemove = useCallback(() => {
    if (item.photo?.id) {
      onRemovePhoto(item?.photo?.id);
      removeLocalPhoto();
    }
  }, [item, onRemovePhoto, removeLocalPhoto]);

  return (
    <Shadow
      inner
      useArt
      style={{
        alignItems: 'center',
        backgroundColor: colors.catskillWhite,
        borderRadius: 12,
        height: SMALL_PHOTO_SIZE,
        justifyContent: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        width: SMALL_PHOTO_SIZE,
      }}>
      {item.photoUrl && !uploading && (
        <PhotoActionButton
          onPressRemove={onPressRemove}
          onPressReplace={showFilePicker}
          errorMessage={item.photo?.errors}
          action={item.action}
        />
      )}
      {item.photoUrl || localPhotoUri ? (
        <FastImage
          style={{
            borderColor: colors.redReport,
            borderRadius: 12,
            borderWidth:
              item.action.hasError && !item.action.processing && !uploading
                ? 1
                : 0,
            height: SMALL_PHOTO_SIZE,
            width: SMALL_PHOTO_SIZE,
          }}
          source={{
            priority: FastImage.priority.high,
            uri: localPhotoUri ?? item.photoUrl,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <NoPhoto
          size={SMALL_PHOTO_SIZE}
          primary={item.position === 1}
          canUpload={item.action.canUpload}
          onShowFilePicker={showFilePicker}
        />
      )}
    </Shadow>
  );
};

export default React.memo(SmallPhoto);
