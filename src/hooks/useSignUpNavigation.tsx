import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

import NavigationKey from '../navigation/NavigationKey';

type CurrentScreenType =
  | 'EMAIL'
  | 'FIRSTNAME'
  | 'BIRTHDAY'
  | 'WHAT_GENDER'
  | 'WOULD_LIKE';

type SignUpNavigationType = {
  currentScreen: CurrentScreenType;
  phoneFlow?: boolean;
  checkAge?: boolean;
};

type NavigateNext = () => void;
type NavigateAgeError = () => void;

const useSignUpNavigation = ({
  currentScreen,
}: SignUpNavigationType): [NavigateNext, NavigateAgeError] => {
  // Navigation
  const {navigate} = useNavigation();

  // console.log('currentScreen useSignUpNavigation', currentScreen);
  const navigateNext = useCallback<NavigateNext>(async () => {
    switch (currentScreen) {
      case 'EMAIL':
        navigate(NavigationKey.SignInName);
        AsyncStorage.setItem('currentScreen', 'FIRSTNAME');
        break;
      case 'FIRSTNAME':
        navigate(NavigationKey.SignInBirthday);
        AsyncStorage.setItem('currentScreen', 'BIRTHDAY');
        break;
      case 'BIRTHDAY':
        navigate(NavigationKey.WhatGender);
        AsyncStorage.setItem('currentScreen', 'WHAT_GENDER');
        break;
      case 'WHAT_GENDER':
        navigate(NavigationKey.WouldLike);
        AsyncStorage.setItem('currentScreen', 'WOULD_LIKE');
        break;
      case 'WOULD_LIKE':
        navigate(NavigationKey.VideoRecordIntro, {fromSettings: false});
        AsyncStorage.removeItem('currentScreen');
        break;
    }
  }, [currentScreen, navigate]);

  const navigateAgeError = useCallback<NavigateAgeError>(() => {
    navigate(NavigationKey.AgeConfirmError);
  }, [navigate]);

  return [navigateNext, navigateAgeError];
};

export default useSignUpNavigation;
