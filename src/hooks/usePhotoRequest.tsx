import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {useCallback, useReducer} from 'react';

import config from '../configs/config';
import {reducer} from './useVideoRequest';

type UploadPhotoType = (photoUrl: string, photoId: string) => void;

type RequestResultType = {
  uploading: boolean;
  success: boolean;
  error: string | undefined;
};

const usePhotoRequest = (): [UploadPhotoType, RequestResultType] => {
  const [state, dispatch] = useReducer(reducer, {status: 'suspense'});

  // Update the photo request
  const uploadPhoto = useCallback<UploadPhotoType>(
    async (photoUrl, photoId) => {
      dispatch({type: 'uploading'});

      const fileName = photoUrl.split('/');

      const formData = new FormData();
      formData.append('file', {
        name: fileName[fileName.length - 1],
        type: 'image/jpg',
        uri: photoUrl,
      });

      axios({
        data: formData,
        headers: {
          Accept: 'application/json',
          Authorization: await AsyncStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
        method: 'PUT',
        url: config.BASE_URL + `/api/user_accounts/image/${photoId}`,
      })
        .then(() => {
          dispatch({type: 'success'});
        })
        .catch((error) => {
          dispatch({message: error, type: 'error'});
        });
    },
    [],
  );

  return [
    uploadPhoto,
    {
      error: state.status === 'error' ? state.message : undefined,
      success: state.status === 'success',
      uploading: state.status === 'uploading',
    },
  ];
};

export default usePhotoRequest;
