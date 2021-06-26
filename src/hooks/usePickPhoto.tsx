import AsyncStorage from '@react-native-community/async-storage';
import {useCallback, useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import ImagePicker, {
  ImagePickerCustomButtonOptions,
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {
  PERMISSIONS,
  RESULTS,
  openSettings,
  request,
} from 'react-native-permissions';

import constants from '../configs/constants';
import strings from '../configs/styles/strings';
import usePhotoRequest from './usePhotoRequest';
import {setLocalImage} from './usePhotoVideoModeration';

const takePhotoButton: ImagePickerCustomButtonOptions = {
  name: 'Take Photo…',
  title: 'Take Photo…',
};

const libraryButton: ImagePickerCustomButtonOptions = {
  name: 'Choose from Library…',
  title: 'Choose from Library…',
};

const options: ImagePickerOptions = {
  chooseFromLibraryButtonTitle: undefined,
  customButtons: [takePhotoButton, libraryButton],
  maxHeight: 1440,
  maxWidth: 2560,
  noData: true,
  permissionDenied: {
    okTitle: strings.photoFlow.permissions.buttons.ok,
    reTryTitle: strings.photoFlow.permissions.buttons.openSettings,
    text: strings.photoFlow.permissions.storagePermissions.message,
    title: strings.photoFlow.permissions.storagePermissions.title,
  },
  storageOptions: {
    path: 'images',
    skipBackup: true,
  },
  takePhotoButtonTitle: undefined,
  title: 'ADD PHOTO',
};

type PickPhotoType = {
  uploading: boolean;
  localPhotoUri: undefined | string;
  showFilePicker: () => void;
};

const usePickPhoto = (
  photoId: string,
  updateProfileImage: (photoUri: string) => void,
  onPhotoUpload?: (uploading: boolean) => void,
): PickPhotoType => {
  // Check the list updated state
  const [listUpdated, setListUpdated] = useState(false);

  // Temporary photo uri
  const [localPhotoUri, setLocalPhotoUri] = useState<string | undefined>();

  // Upload photo request
  const [uploadPhoto, {error, success, uploading}] = usePhotoRequest();

  // Sve the photo uri to local storage
  const onSavePhotoUri = useCallback(
    async (photoUri: string) => {
      await AsyncStorage.setItem(`photo-${photoId}`, photoUri);

      if (!listUpdated) {
        setListUpdated(true);
        updateProfileImage(photoUri);
      }
    },
    [listUpdated, photoId, updateProfileImage],
  );

  // Show the error and save local photo uri
  useEffect(() => {
    if (error) {
      Alert.alert(error);

      // Reset local photo
      setLocalPhotoUri(undefined);

      // Set photo uploading state
      if (onPhotoUpload) {
        onPhotoUpload(false);
      }
    }

    if (success && localPhotoUri) {
      // Set photo uploading state
      if (onPhotoUpload) {
        onPhotoUpload(false);
      }

      onSavePhotoUri(localPhotoUri);
    }
  }, [error, localPhotoUri, onPhotoUpload, onSavePhotoUri, success]);

  // Start photo uploading
  const onStartUpload = useCallback(
    (imageUri: string) => {
      // Set photo uploading state
      if (onPhotoUpload) {
        onPhotoUpload(true);
      }

      // Set temporary photo
      setLocalPhotoUri(imageUri);

      setLocalImage(imageUri);
      // Update the photo on the endpoint
      // console.log(photoId);
      if (photoId) {
        uploadPhoto(imageUri, photoId);
      }

      // Reset the list updated state
      setListUpdated(false);
    },
    [onPhotoUpload, photoId, uploadPhoto],
  );

  // Check camera permissions
  const onCheckCameraPermissions = useCallback(() => {
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA,
    ).then((result) => {
      if (result == RESULTS.GRANTED) {
        ImagePicker.launchCamera(
          constants.IMG_PICKER_OPTIONS_GENERAL as ImagePickerOptions,
          (response: ImagePickerResponse) => {
            if (response?.uri) {
              onStartUpload(response.uri);
            }
          },
        );
      } else {
        Alert.alert(
          strings.photoFlow.permissions.cameraPermissions.title,
          strings.photoFlow.permissions.cameraPermissions.message,
          [
            {
              onPress: () => null,
              style: 'cancel',
              text: strings.photoFlow.permissions.buttons.ok,
            },
            {
              onPress: () => openSettings(),
              text: strings.photoFlow.permissions.buttons.openSettings,
            },
          ],
          {cancelable: false},
        );
      }
    });
  }, [onStartUpload]);

  // Check library permissions
  const onCheckLibraryPermissions = useCallback(() => {
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY,
    ).then((result) => {
      if (result == RESULTS.GRANTED) {
        ImagePicker.launchImageLibrary(
          constants.IMG_PICKER_OPTIONS_GENERAL as ImagePickerOptions,
          (response: ImagePickerResponse) => {
            if (response?.uri) {
              onStartUpload(response.uri);
            }
          },
        );
      } else {
        Alert.alert(
          strings.photoFlow.permissions.storagePermissions.title,
          strings.photoFlow.permissions.storagePermissions.message,
          [
            {
              onPress: () => null,
              style: 'cancel',
              text: strings.photoFlow.permissions.buttons.ok,
            },
            {
              onPress: () => openSettings(),
              text: strings.photoFlow.permissions.buttons.openSettings,
            },
          ],
          {cancelable: false},
        );
      }
    });
  }, [onStartUpload]);

  // Show the picker to choose the file
  const onShowImagePicker = useCallback(() => {
    ImagePicker.showImagePicker(
      options,
      async (response: ImagePickerResponse) => {
        // console.log(response);
        // if (response.didCancel) {
        //   console.log('User cancelled image picker');
        // } else if (response.error) {
        //   console.log('ImagePicker Error: ', response.error);
        // } else
        if (!response.didCancel && !response.error && response.customButton) {
          switch (response.customButton) {
            case takePhotoButton.name:
              onCheckCameraPermissions();
              break;
            case libraryButton.name:
              onCheckLibraryPermissions();
              break;
          }
          // console.log('User tapped custom button: ', response.customButton);
        }
      },
    );
  }, [onCheckCameraPermissions, onCheckLibraryPermissions]);

  return {
    localPhotoUri: localPhotoUri,
    showFilePicker: onShowImagePicker,
    uploading: uploading,
  };
};

export default usePickPhoto;
