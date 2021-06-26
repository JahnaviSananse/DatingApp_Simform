import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo} from 'react';

import {FfwdLogo} from '../../assets/images';
import {FastImageComponent} from '../components';
import HeaderLeft from '../components/header/headerLeftButton/headerLeftButton';
import {COLORS} from '../configs';
import useInternetConnection from '../hooks/useInternetConnection';
import AgeConfirmError from '../screens/AgeConfirmError/AgeConfirmError';
import VideoRecordIntroScreen from '../screens/mediaFlow/VideoRecordIntroScreen';
import OnBoardingBirthday from '../screens/onBoardingBirthday/onBoardingBirthDay';
import OnBoardingEmail from '../screens/OnBoardingEmail/OnBoardingEmail';
import OnBoardingName from '../screens/onBoardingName/onBoardingName';
import OtherGenderScreen from '../screens/OtherGenderScreen';
import WhatGenderScreen from '../screens/WhatGenderScreen';
import WouldLikeScreen from '../screens/WouldLikeScreen';
import MainNavigator from './MainNavigator';
import NavigationKey from './NavigationKey';

const DataStack = createStackNavigator();
const DataNavigator: React.FunctionComponent = () => {
  useInternetConnection();
  const {navigate} = useNavigation();

  const onGoBack = useCallback(async () => {
    const screenName = await AsyncStorage.getItem('currentScreen');
    switch (screenName) {
      case 'FIRSTNAME':
        navigate(NavigationKey.SignInEmail);
        AsyncStorage.setItem('currentScreen', 'EMAIL');
        break;
      case 'BIRTHDAY':
        navigate(NavigationKey.SignInName);
        AsyncStorage.setItem('currentScreen', 'FIRSTNAME');
        break;
      case 'WHAT_GENDER':
        navigate(NavigationKey.SignInBirthday);
        AsyncStorage.setItem('currentScreen', 'BIRTHDAY');
        break;
      case 'WOULD_LIKE':
        navigate(NavigationKey.WhatGender);
        AsyncStorage.setItem('currentScreen', 'WHAT_GENDER');
        break;
    }
  }, [navigate]);

  const returnHeaderLeft = useCallback(
    () => <HeaderLeft onPress={onGoBack} />,
    [onGoBack],
  );
  const HeaderTitle = useMemo(
    () => (
      <FastImageComponent
        resizeMode="contain"
        style={{
          height: 32,
          width: 100,
        }}
        uri={FfwdLogo}
      />
    ),
    [],
  );

  useEffect(() => {
    (async () => {
      const currentScreen = await AsyncStorage.getItem('currentScreen');
      if (currentScreen)
        switch (currentScreen) {
          case 'EMAIL':
            navigate(NavigationKey.SignInEmail);
            break;
          case 'FIRSTNAME':
            navigate(NavigationKey.SignInName);
            break;
          case 'BIRTHDAY':
            navigate(NavigationKey.SignInBirthday);
            break;
          case 'WHAT_GENDER':
            navigate(NavigationKey.WhatGender);
            break;
          case 'WOULD_LIKE':
            navigate(NavigationKey.WouldLike);
            break;
        }
    })();
  }, [navigate]);

  return (
    <DataStack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardOverlayEnabled: false,
        cardShadowEnabled: false,
        cardStyle: {
          backgroundColor: COLORS.blackPearl85,
          elevation: 0,
          opacity: 1,
        },
        gestureEnabled: false,
        headerLeft: returnHeaderLeft,
        headerStyle: {
          backgroundColor: COLORS.sand,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      {/* <DataStack.Screen
        name={NavigationKey.EmptyScreen}
        component={EmptyScreen}
      /> */}
      <DataStack.Screen
        name={NavigationKey.SignInEmail}
        component={OnBoardingEmail}
        options={{
          gestureEnabled: false,
          headerLeft: undefined,
          headerTitle: () => HeaderTitle,
        }}
      />
      <DataStack.Screen
        name={NavigationKey.SignInName}
        component={OnBoardingName}
        options={{headerTitle: () => HeaderTitle}}
      />
      <DataStack.Screen
        name={NavigationKey.SignInBirthday}
        component={OnBoardingBirthday}
        options={{headerTitle: () => HeaderTitle}}
      />
      <DataStack.Screen
        name={NavigationKey.WhatGender}
        component={WhatGenderScreen}
        options={{headerTitle: () => HeaderTitle}}
      />
      <DataStack.Screen
        name={NavigationKey.OtherGender}
        component={OtherGenderScreen}
        options={{headerTitle: () => HeaderTitle}}
      />
      <DataStack.Screen
        name={NavigationKey.WouldLike}
        component={WouldLikeScreen}
        options={{headerTitle: () => HeaderTitle}}
      />
      <DataStack.Screen
        name={NavigationKey.AgeConfirmError}
        component={AgeConfirmError}
        options={{headerShown: false}}
      />
      <DataStack.Screen
        name={NavigationKey.VideoRecordIntro}
        component={VideoRecordIntroScreen}
        options={{headerShown: false}}
      />
      <DataStack.Screen
        name={NavigationKey.MainNavigator}
        component={MainNavigator}
      />
    </DataStack.Navigator>
  );
};

export default React.memo(DataNavigator);
