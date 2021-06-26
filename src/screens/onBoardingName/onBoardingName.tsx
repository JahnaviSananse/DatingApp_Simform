// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, Platform, TouchableWithoutFeedback, View} from 'react-native';

// import FooterArrowsWithBorderIcon from '../../components/'
import FFTextInput from '../../components/FFTextInput';
import {
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
} from '../../components/index';
import {COLORS, STRINGS} from '../../configs';
import useSignUpNavigation from '../../hooks/useSignUpNavigation';
import {
  useMyProfileQuery,
  useUserAccountUpdateMutation,
} from '../../store/generated/graphql';
import {getWidthWithScaleFactor} from '../../utils/dimensions';
import styles from './styles';

const OnBoardingName: React.FunctionComponent = () => {
  const {navigate} = useNavigation();
  const [navigateNext] = useSignUpNavigation({currentScreen: 'FIRSTNAME'});

  const [name, setName] = useState('');
  const [errorMessage, setError] = useState('');

  const [activeButton, setActiveButton] = useState(false);
  const [updateUserAccount, resUpdateUserName] = useUserAccountUpdateMutation();
  const {data} = useMyProfileQuery();

  // useEffect(() => {
  //   AsyncStorage.setItem('currentScreen', 'FIRSTNAME');
  // }, []);

  useEffect(() => {
    if (resUpdateUserName.data) {
      Keyboard.dismiss();
      navigateNext();
    }
  }, [navigateNext, resUpdateUserName]);

  const goToNextPage = useCallback(() => {
    updateUserAccount({
      variables: {
        input: {
          firstName: name,
        },
      },
    });
  }, [updateUserAccount, name]);

  const checkValidName = useCallback(
    (name: string) => {
      setName(name);
      setActiveButton(name.length > 1);
      setError(name.length > 1 ? '' : 'Enter at least 2 characters');
    },
    [setName, setActiveButton],
  );

  useEffect(() => {
    if (data) {
      const newName = data.myProfile?.userAccount.firstName;
      if (newName) {
        setName(newName);
        checkValidName(newName);
      }
    }
  }, [checkValidName, data]);

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={Keyboard.dismiss}
      accessible={false}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: getWidthWithScaleFactor(24)}}>
          <PageHeaderTitle
            groupName="onBoardingName"
          />
          {/* <View style={styles.inputWrapper}> */}
          <Isidora
            lineHeight={16}
            fontSize={12}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeHotPink}
            style={{
              marginBottom: 2,
              marginTop: -17,
              minHeight: 20,
            }}>
            {errorMessage}
          </Isidora>
          <FFTextInput
            value={name}
            clearVisible={false}
            contextMenuHidden
            allowFontScaling={false}
            placeholder={STRINGS.onBoardingName.placeholder}
            onChangeText={checkValidName}
            keyboardType={
              Platform.OS === 'android' ? 'email-address' : 'ascii-capable'
            }
            returnKeyType="done"
          />
          <Isidora
            lineHeight={20}
            fontSize={15}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={styles.about}>
            {STRINGS.onBoardingName.subTitle}
          </Isidora>
          {/* </View> */}
        </View>
        {/* <FooterArrowsWithBorderIcon */}
        <OnBoardingFooter
          value={0.18}
          onPress={goToNextPage}
          activeButton={activeButton}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(OnBoardingName);
