import appleAuth, {
  AppleAuthError,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import React, {useCallback, useContext, useEffect} from 'react';
import {Alert} from 'react-native';

import colors from '../../configs/styles/colors';
import {useUserSignByIosMutation} from '../../store/generated/graphql';
import {checkLocationPermission} from '../../utils/checkLocationPermission';
import {AuthContext} from '../../utils/login-context';
import FFColorButton from '../FFColorButton';

const AppleSignInButton: React.FunctionComponent = () => {
  const {signIn} = useContext(AuthContext);

  const [signInUser, resultSignIn] = useUserSignByIosMutation();

  useEffect(() => {
    const token = resultSignIn?.data?.userSignByIos?.access;
    const refreshToken = resultSignIn?.data?.userSignByIos?.refresh;
    if (token && refreshToken && signIn) {
      signIn(token, refreshToken);
    }
  }, [resultSignIn, signIn]);

  useEffect(() => {
    if (resultSignIn.error) {
      Alert.alert(resultSignIn.error.message);
    }
  }, [resultSignIn]);

  const onAppleButtonPress = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });
      const {user, identityToken} = appleAuthRequestResponse;
      if (user && identityToken) {
        await signInUser({
          variables: {
            input: {
              appleCredentials: user,
              appleJwt: identityToken,
              name: `${appleAuthRequestResponse.fullName?.givenName || ''}`,
            },
          },
        });
      }
    } catch (error) {
      if (
        error.code !== AppleAuthError.CANCELED &&
        error.code !== AppleAuthError.UNKNOWN
      ) {
        if (error.code === AppleAuthError.INVALID_RESPONSE) {
          Alert.alert('apple_sign_in_errors:1002');
        } else if (error.code === AppleAuthError.NOT_HANDLED) {
          Alert.alert('apple_sign_in_errors:1002');
        } else {
          Alert.alert('apple_sign_in_errors:1002');
        }
      }
    }
  }, [signInUser]);

  const onAppleLogin = useCallback(() => {
    checkLocationPermission().then(onAppleButtonPress);
  }, [onAppleButtonPress]);

  return !appleAuth || !appleAuth.isSupported ? null : (
    <FFColorButton
      // title={strings.intro.apple}
      icon="Apple"
      // style={{marginTop: 20}}
      // fontStyle={{color: colors.blackPearl}}
      buttonStyle={{color: colors.black, height: 48, width: 96}}
      onPress={onAppleLogin}
    />
  );
};

export default React.memo(AppleSignInButton);
