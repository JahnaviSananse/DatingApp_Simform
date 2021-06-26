import AsyncStorage from '@react-native-community/async-storage';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';

import {
  AccountPhoto,
  useMyAccountImageQuery,
  useUpdatedAccountPhotoSubscription,
} from '../store/generated/graphql';
import useInternetConnection from './useInternetConnection';

export type PhotoActionType = {
  hasError: boolean;
  processing: boolean;
  destroy: boolean;
};

export type UserPhotoType = {
  photo?: AccountPhoto;
  photoUrl: string | undefined;
  position: number;
  action: PhotoActionType;
};

const DEFAULT_ACTION: PhotoActionType = {
  destroy: false,
  hasError: false,
  processing: false,
};

const MAIN_USER_PHOTO: UserPhotoType = {
  action: DEFAULT_ACTION,
  photo: undefined,
  photoUrl: undefined,
  position: 1,
};

type CheckVideosType = {
  mainPhoto: UserPhotoType;
  updateMainPhoto: () => void;
};

const useUserPhotos = (): CheckVideosType => {
  useInternetConnection();

  // Main photo
  const [mainPhoto, setMainPhoto] = useState<UserPhotoType>(MAIN_USER_PHOTO);
  // console.log('mainPhoto', mainPhoto);

  // Raw subscribe network image
  const [rawSubscribeImage, setRawSubscribeImage] = useState<
    AccountPhoto | undefined
  >();

  // Network request
  const {data: networkData, error: networkError} = useMyAccountImageQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });

  // Subscription
  const {
    data: subscribeData,
    error: subscribeError,
  } = useUpdatedAccountPhotoSubscription();
  // console.log('subscribeData', subscribeData);

  // Configure the actions in the items
  const configureActions = useCallback((item: UserPhotoType) => {
    const {photo} = item;
    // console.log('photo', photo);

    // Check whether errors and photos approved or not
    const hasError = !photo?.moderation.approved;

    // Configure the action
    const action: PhotoActionType = {
      ...item.action,
      hasError,
    };

    // Change the action in the item and return
    return {
      ...item,
      action,
    };
  }, []);

  // Update the main photo data
  const updateMainPhotoData = useCallback(
    async (item: UserPhotoType) => {
      const {photo} = item;

      // Use the local photo when processing on the endpoint
      const processing =
        photo?.urls.middle === null ||
        photo?.urls.original === null ||
        photo?.urls.small === null;
      // console.log('processing', processing, photo?.urls);

      // Get the local photo and network
      let photoUrl: string | undefined;
      if (processing) {
        const localPhotoUrl = await AsyncStorage.getItem(`photo-${photo?.id}`);
        photoUrl = localPhotoUrl !== null ? localPhotoUrl : undefined;
        // console.log('localPhotoUrl', localPhotoUrl);
      } else {
        photoUrl = photo?.urls.middle !== null ? photo?.urls.middle : undefined;
        // console.log('photoUrl', photoUrl);
        await AsyncStorage.removeItem(`photo-${photo?.id}`);
      }

      // Change the item
      const changedItem: UserPhotoType = {
        ...item,
        action: {
          ...item.action,
          processing,
        },
        photoUrl: photoUrl,
      };

      // console.log('changedItem', changedItem);
      // console.log(
      //   'photo moderation approved',
      //   changedItem.photo?.moderation?.approved,
      // );

      // Set configured data and update list
      setMainPhoto(configureActions(changedItem));
    },
    [configureActions],
  );

  const applyImageChanges = useCallback(
    (accountPhoto: AccountPhoto) => {
      updateMainPhotoData({
        ...mainPhoto,
        photo: accountPhoto,
        photoUrl: undefined,
      });
      // console.log('accountPhoto', accountPhoto, mainPhoto);
    },
    [mainPhoto, updateMainPhotoData],
  );

  const updateMainPhoto = useCallback(() => {
    let updatedPhoto: UserPhotoType = mainPhoto;
    if (mainPhoto.photo) {
      updatedPhoto = {
        ...mainPhoto,
        photo: {
          ...mainPhoto.photo,
          urls: {
            blur: null,
            middle: null,
            original: null,
            small: null,
          },
        },
      };
      // console.log('updatedPhoto', updatedPhoto);
    }
    updateMainPhotoData(updatedPhoto);
  }, [mainPhoto, updateMainPhotoData]);

  useEffect(() => {
    if (networkData && networkData.myAccountImage) {
      applyImageChanges(networkData.myAccountImage);
    }

    if (networkError) {
      Alert.alert(networkError.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [networkData, networkError]);

  const mounted = useRef(true);
  useEffect(() => {
    if (mounted.current) {
      if (
        subscribeData &&
        subscribeData.updatedAccountPhoto &&
        subscribeData.updatedAccountPhoto !== rawSubscribeImage
      ) {
        setRawSubscribeImage(subscribeData.updatedAccountPhoto);
        applyImageChanges(subscribeData.updatedAccountPhoto);
      }

      if (subscribeError) {
        Alert.alert(subscribeError.message);
      }
    }
    // console.log('mounted', mounted, subscribeData, rawSubscribeImage);
    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawSubscribeImage, subscribeData, subscribeError]);

  return {
    mainPhoto: mainPhoto,
    updateMainPhoto: updateMainPhoto,
  };
};

export default useUserPhotos;
