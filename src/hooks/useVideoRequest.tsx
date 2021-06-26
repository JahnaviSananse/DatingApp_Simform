import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {useCallback, useReducer} from 'react';

import config from '../configs/config';

export type State =
  | {status: 'suspense'}
  | {status: 'uploading'}
  | {status: 'success'}
  | {status: 'error'; message: string};

export type Action =
  | {type: 'suspense'}
  | {type: 'uploading'}
  | {type: 'success'}
  | {type: 'error'; message: string};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'suspense':
      return {
        ...state,
        status: 'suspense',
      };
    case 'success':
      return {
        ...state,
        status: 'success',
      };
    case 'error':
      return {
        ...state,
        message: action.message,
        status: 'error',
      };
    case 'uploading':
      return {
        ...state,
        status: 'uploading',
      };
  }
}

type UploadVideoType = (videoUrl: string, questionId: number) => void;

type ResetStateType = () => void;

type UploadResultType = {
  uploading: boolean;
  success: boolean;
  error: string | undefined;
};

const useVideoRequest = (): [
  UploadVideoType,
  ResetStateType,
  UploadResultType,
] => {
  const [state, dispatch] = useReducer(reducer, {status: 'suspense'});
  const uploadVideo = useCallback<UploadVideoType>(
    async (videoUrl, questionId) => {
      dispatch({type: 'uploading'});

      const fileName = videoUrl.split('/');

      const formData = new FormData();
      formData.append('question_id', questionId);
      formData.append('file', {
        name: fileName[fileName.length - 1],
        type: 'video/mp4',
        uri: videoUrl,
      });

      axios({
        data: formData,
        headers: {
          Accept: 'application/json',
          Authorization: await AsyncStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        url: config.BASE_URL + '/api/user_accounts/video',
      })
        .then(() => {
          dispatch({type: 'success'});
        })
        .catch((error) => {
          console.error(error);
          dispatch({message: error, type: 'error'});
        });
    },
    [],
  );

  const resetState = useCallback<ResetStateType>(() => {
    dispatch({type: 'suspense'});
  }, []);

  return [
    uploadVideo,
    resetState,
    {
      error: state.status === 'error' ? state.message : undefined,
      success: state.status === 'success',
      uploading: state.status === 'uploading',
    },
  ];
};

export default useVideoRequest;
