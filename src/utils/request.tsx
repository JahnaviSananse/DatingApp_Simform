/* MODULES */
import axios from 'axios';

import config from '../configs/config';

type UploadPhotoType = {name: string; source: {uri: string}};

export const CreateFormData = (data, id: number) => {
  const fileName = data.uri.split('/');
  const newData = new FormData();
  newData.append('position', id);
  newData.append('file', {
    name: fileName[fileName.length - 1],
    type: 'image/jpg',
    uri: data.uri,
  });
  return newData;
};

export const request = (newData, token: string) => {
  return axios
    .post(`${config.BASE_URL}/api/user_accounts/image`, newData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export const requestUpdatePhoto = (newData, token: string, id: number) => {
  return axios
    .put(`${config.BASE_URL}/api/user_accounts/image/${id}`, newData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export const AuthForPhoto = () => {
  const body = {
    oneTimeCode: '2367',
    phone: '+380974039529',
  };
  return axios
    .post(`${config.BASE_URL}/api/user_accounts/auth`, body, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
    .catch((error) => {
      throw error;
    });
};

export const SendMessageToServer = async (data: {
  message: string;
  chatId: number | string;
  token: string;
}) => {
  const body = {
    text: data.message,
  };
  return axios.post(`${config.BASE_URL}/api/chats/${data.chatId}/push/`, body, {
    headers: {
      Authorization: data.token,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  });
};
export const createFormDataBlockReport = (imageData: UploadPhotoType) => {
  const formData = new FormData();
  formData.append('file', {
    name: imageData.name,
    type: 'image/jpg',
    uri: imageData.source.uri,
  });
  return formData;
};
export const SendImageBlockReport = (
  imageData: UploadPhotoType,
  token: string,
) => {
  return axios.post(`${config.BASE_URL}/api/blobs`, imageData, {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
    },
  });
};

export const createFormDataChatAttachment = (
  name: string,
  uri: string,
  type: string,
) => {
  const formData = new FormData();
  formData.append('file', {
    name,
    type: type === 'image' ? 'image/jpg' : 'video/mp4',
    uri,
  });
  return formData;
};
export const SendAttachMessage = (
  formData: FormData,
  token: string | null,
  chatId: number,
) => {
  return axios.post(`${config.BASE_URL}/api/chats/${chatId}/push`, formData, {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
    },
  });
};
