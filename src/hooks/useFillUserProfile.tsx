import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef} from 'react';

import NavigationKey from '../navigation/NavigationKey';
import {useMyAccountVideosQuery} from '../store/generated/graphql';

export const useFillUserProfile = () => {
  const {data: myVideoData} = useMyAccountVideosQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });

  const {navigate, reset} = useNavigation();
  const isCanNavigate = useRef(true);

  useEffect(() => {
    if (
      myVideoData &&
      isCanNavigate.current &&
      (myVideoData?.myAccountVideos?.videos?.length < 7 ||
        !myVideoData?.myAccountVideos?.profileImage?.urls?.original)
    ) {
      AsyncStorage.getItem('skippOpeSettings').then((el) => {
        isCanNavigate.current = false;
        if (el) {
          AsyncStorage.removeItem('skippOpeSettings');
        } else {
          navigate(NavigationKey.EditProfileNavigator, {
            params: {
              openCover: !(myVideoData?.myAccountVideos?.videos?.length < 7),
            },
            screen: NavigationKey.EditProfile,
          });
        }
      });
    }
  }, [myVideoData, navigate, reset]);
};
