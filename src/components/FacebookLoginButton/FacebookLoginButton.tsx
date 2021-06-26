import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useContext, useEffect} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../configs/styles/colors';
import {useUserSignByFbMutation} from '../../store/generated/graphql';
import {checkLocationPermission} from '../../utils/checkLocationPermission';
import {AuthContext} from '../../utils/login-context';

const FacebookLoginButton: React.FunctionComponent = () => {
  const [userSignUp, resultSignIn] = useUserSignByFbMutation();
  const {signIn} = useContext(AuthContext);

  useEffect(() => {
    const token = resultSignIn?.data?.userSignByFb?.access;
    const refreshToken = resultSignIn?.data?.userSignByFb?.refresh;
    if (token && refreshToken && signIn) {
      signIn(token, refreshToken);
    }
  }, [resultSignIn, signIn]);

  useEffect(() => {
    if (resultSignIn.error) {
      Alert.alert('Sign in fb failed', resultSignIn.error.message);
    }
  }, [resultSignIn]);

  const customFacebookLogout = useCallback(() => {
    let currentAccessToken = '';
    AccessToken.getCurrentAccessToken()
      .then(async (data) => {
        currentAccessToken =
          data.accessToken.toString() ||
          (await AsyncStorage.getItem('fbtoken'));
      })
      .then(() => {
        const logout = new GraphRequest(
          'me/permissions/',
          {
            accessToken: currentAccessToken,
            httpMethod: 'DELETE',
          },
          (error, result) => {
            if (error) {
              // console.log('Error fetching data: ' + error.toString());
            } else {
              LoginManager.logOut();
            }
          },
        );
        new GraphRequestManager().addRequest(logout).start();
      });
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  const getFBToken = useCallback(async () => {
    try {
      const data = await AccessToken.getCurrentAccessToken();
      await AsyncStorage.setItem('fbtoken', data.accessToken);
      //console.log(data);
      if (data || data.accessToken) {
        userSignUp({
          variables: {
            input: {
              facebookAccessToken:
                data.accessToken || (await AsyncStorage.getItem('fbtoken')),
            },
          },
        });
      }
    } catch (error) {
      // alert('Error login with fb');
      customFacebookLogout();
    }
  }, [userSignUp, customFacebookLogout]);

  const loginFunction = useCallback(async () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        // console.log(result);
        if (result.isCancelled) {
          customFacebookLogout();
          // console.log('Login cancelled');
        } else {
          // console.log(
          //   'Login success with permissions: ' +
          //     result.grantedPermissions.toString(),
          // );
          getFBToken();
        }
      },
      function (error) {
        // console.log('Login fail with error: ' + error);
      },
    );
  }, [customFacebookLogout, getFBToken]);

  const onPressLogin = useCallback(() => {
    checkLocationPermission().then(loginFunction);
  }, [loginFunction]);

  return (
    <TouchableOpacity
      onPress={onPressLogin}
      style={{
        alignItems: 'center',
        backgroundColor: colors.facebookBlue,
        borderRadius: 30,
        height: 48,
        justifyContent: 'center',
        width: 96,
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 12,
          height: 24,
          justifyContent: 'flex-end',
          width: 24,
        }}>
        <Icon
          name="facebook"
          size={21}
          color={colors.facebookBlue}
          style={{marginBottom: -2}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(FacebookLoginButton);
