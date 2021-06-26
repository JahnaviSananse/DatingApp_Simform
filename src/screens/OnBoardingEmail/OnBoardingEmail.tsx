// MODULES

// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';

import FFTextInput from '../../components/FFTextInput';
import {
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
} from '../../components/index';
import {COLORS, STRINGS} from '../../configs';
import {useSendMyGeoPosition} from '../../hooks/useSendMyGeoPosition';
import useSignUpNavigation from '../../hooks/useSignUpNavigation';
import NavigationKey from '../../navigation/NavigationKey';
import {
  useMyProfileQuery,
  useUserAccountUpdateMutation,
} from '../../store/generated/graphql';
import {getEmailValidationError} from '../../utils/validate';
import styles from './styles';

const OnBoardingEmail: React.FunctionComponent = () => {
  const {navigate} = useNavigation();
  const [navigateNext] = useSignUpNavigation({currentScreen: 'EMAIL'});
  const [activeButton, setActiveButton] = useState(true);

  // Email and error message
  const [email, setEmail] = useState('');
  const [errorMessage, setError] = useState('');

  // Network requests
  const [
    updateUserAccount,
    updateUserEmailResult,
  ] = useUserAccountUpdateMutation();
  const {data} = useMyProfileQuery();

  useSendMyGeoPosition();

  // Go the next page callback
  const goToNextPage = useCallback(() => {
    updateUserAccount({
      variables: {
        input: {
          email: email,
        },
      },
    });
  }, [updateUserAccount, email]);

  // Load the email from the endpoint
  useEffect(() => {
    if (data && data.myProfile?.userAccount.email) {
      setEmail(data.myProfile?.userAccount.email);
    }
  }, [data]);

  // Show the endpoint error when updating email
  useEffect(() => {
    if (updateUserEmailResult.error) {
      navigate(NavigationKey.WarningModal, {
        hideCloseButton: true,
        oneBtn: true,
        positiveText: 'Edit',
        title:
          updateUserEmailResult.error.message ===
          'GraphQL error: User account updating error: , Validation failed: Email has already been taken'
            ? STRINGS.emailScreen.emailUsed
            : STRINGS.emailScreen.addValidEmail,
      });
    }
  }, [navigate, updateUserEmailResult.error]);

  // Navigation next when the request is sent
  useEffect(() => {
    if (updateUserEmailResult.data) {
      Keyboard.dismiss();
      navigateNext();
    }
  }, [navigateNext, updateUserEmailResult]);

  // Validate the email
  const checkValidEmail = useCallback(
    (email?) => {
      if (email === undefined) {
        setActiveButton(true);
        return;
      }

      const formattedEmail = email.trim();
      setEmail(formattedEmail);

      const error = getEmailValidationError(formattedEmail);

      setActiveButton(error.length === 0);
      setError(error);
    },
    [setEmail, setActiveButton],
  );

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={Keyboard.dismiss}
      accessible={false}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 24}}>
          <PageHeaderTitle
            groupName="emailScreen"
            propStyles={{marginTop: 2}}
          />
          <Isidora
            lineHeight={16}
            fontSize={12}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeHotPink}
            style={{
              fontStyle: 'normal',
              marginBottom: 2,
              marginTop: 8,
              minHeight: 20,
            }}>
            {errorMessage}
          </Isidora>
          <FFTextInput
            clearVisible={false}
            placeholder={STRINGS.emailScreen.placeholder}
            keyboardType="email-address"
            returnKeyType="done"
            onChangeText={checkValidEmail}
            value={email}
          />
          <Isidora
            lineHeight={20}
            fontSize={15}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={styles.about}>
            {STRINGS.emailScreen.subTitle}
          </Isidora>
          <Isidora
            lineHeight={20}
            fontSize={15}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginTop: 8}}>
            {STRINGS.emailScreen.subTitle2}
          </Isidora>
        </View>
        <OnBoardingFooter
          value={0}
          onPress={goToNextPage}
          activeButton={activeButton && !!email}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(OnBoardingEmail);
