import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useMemo} from 'react';

import {FfwdLogo} from '../../assets/images';
import {FastImageComponent} from '../components';
import HeaderLeft from '../components/header/headerLeftButton/headerLeftButton';
import {COLORS} from '../configs';
import useInternetConnection from '../hooks/useInternetConnection';
import SignInPhone from '../screens/loginFlow/SignInPhone';
import SignInScreen from '../screens/loginFlow/SignInScreen';
import SignInCodeScreen from '../screens/onBoardingSMScode/onBoardingSMScode';
import NavigationKey from './NavigationKey';

const AuthStack = createStackNavigator();

const AuthNavigator: React.FunctionComponent = () => {
  useInternetConnection();
  const {goBack} = useNavigation();
  const returnHeaderLeft = useCallback(() => <HeaderLeft onPress={goBack} />, [
    goBack,
  ]);

  const HeaderTitle = useMemo(
    () => (
      <FastImageComponent
        resizeMode="contain"
        style={{
          height: 33,
          width: 100,
        }}
        uri={FfwdLogo}
      />
    ),
    [],
  );

  return (
    <AuthStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerLeft: returnHeaderLeft,
        headerStyle: {
          backgroundColor: COLORS.sand,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <AuthStack.Screen
        name={NavigationKey.SignIn}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKey.SignInPhone}
        component={SignInPhone}
        options={{headerTitle: () => HeaderTitle}}
      />
      <AuthStack.Screen
        name={NavigationKey.SignInCode}
        component={SignInCodeScreen}
        options={{headerTitle: () => HeaderTitle}}
      />
    </AuthStack.Navigator>
  );
};

export default React.memo(AuthNavigator);
