import React from 'react';
import {View} from 'react-native';

import constants from '../../configs/constants';
import useUserPhotos from '../../hooks/useUserPhotos';
import MainPhoto from './MainPhoto';

interface Props {
  onPhotoUpload?: (uploading: boolean) => void;
  onPhotoUploaded?: () => void;
  onNextStep?: () => void;
  index?: number;
  hidePopUp?: boolean;
}

const PhotoGalleryBlock: React.FunctionComponent<Props> = ({
  onPhotoUpload,
  onNextStep,
  index,
  hidePopUp,
}) => {
  const {mainPhoto, updateMainPhoto} = useUserPhotos();

  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: constants.PROFILE.paddingHorizontal,
      }}>
      <MainPhoto
        onUpdatePhoto={updateMainPhoto}
        onPhotoUpload={onPhotoUpload}
        photo={mainPhoto}
        onNextStep={onNextStep}
        index={index}
        hidePopUp={hidePopUp}
      />
    </View>
  );
};

export default React.memo(PhotoGalleryBlock);
