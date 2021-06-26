import AsyncStorage from '@react-native-community/async-storage';
import JwtDecode from 'jwt-decode';
import {useEffect, useState} from 'react';

export type TokenDto = {
  exp: number;
  user_id: number;
  profile_id: number;
  uid: string;
  token?: string;
};

type UserDataResultType = {
  userId: number | undefined;
  profileId: number | undefined;
  token?: string | undefined | null;
};

const useUserData = (): UserDataResultType => {
  const [tokenDto, setTokenDto] = useState<TokenDto | undefined>(undefined);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem('token');

      // TokenDto from JWT token
      if (token) {
        const dto = JwtDecode<TokenDto>(token);
        // console.log(dto);
        setTokenDto({...dto, token});
      }
    };

    bootstrapAsync();
  }, []);

  return {
    profileId: tokenDto?.profile_id,
    token: tokenDto?.token,
    userId: tokenDto?.user_id,
  };
};

export default useUserData;
