import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {isValidPhoneNumber} from 'react-phone-number-input';
import {getCountryCallingCode} from 'react-phone-number-input/input';
import styled from 'styled-components';

import {
  CountryListModalWindow,
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
  Row,
} from '../../components';
import FFTextInput from '../../components/FFPhoneTextInput';
import DropDownIcon from '../../components/icons/DropDownIcon';
import WarningModalPopUp from '../../components/WarningModalPopUp';
import {COLORS, STRINGS} from '../../configs';
import strings from '../../configs/styles/strings';
import NavigationKey from '../../navigation/NavigationKey';
import {useUserSignByPhoneMutation} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';

const SignInPhone: React.FunctionComponent = () => {
  const {navigate} = useNavigation();

  // SET DEFAULT COUNTRY CODE
  const [countryName, setCountryName] = useState('US');
  // SEARCH AND PHONE NUMBER INPUTS
  const [textInput, setTextInput] = useState('');
  // VISIBLE || DISABLED GO TO NEXT PAGE BUTTON
  const [activeButton, setActiveButton] = useState(false);
  // PHONE INPUT ERROR
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const [isShowWarningModal, setIsShowWarningModal] = useState(false);

  const [setMobilePhone] = useUserSignByPhoneMutation();

  // GET COUNTRY CODE FROM COUNTRY KEY
  const countryCallCode = useCallback((field: string) => {
    return getCountryCallingCode(field);
  }, []);

  // Navigate to the code screen
  const onEnterCode = useCallback(() => {
    navigate(NavigationKey.SignInCode, {
      phone: `+${countryCallCode(countryName)}${textInput}`,
    });
  }, [countryCallCode, countryName, navigate, textInput]);

  const goToNextPage = useCallback(() => {
    Keyboard.dismiss();
    setIsShowWarningModal(true);
  }, []);

  const warningModalPositive = useCallback(() => {
    setMobilePhone({
      variables: {
        input: {
          phone: `+${countryCallCode(countryName)}${textInput}`,
        },
      },
    });
    onEnterCode();
    setIsShowWarningModal(false);
  }, [countryCallCode, countryName, onEnterCode, setMobilePhone, textInput]);

  const hideWarningModal = useCallback(() => setIsShowWarningModal(false), []);

  const openModal = useCallback(() => {
    setVisible(true);
    Keyboard.dismiss();
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const checkValidNumber = useCallback(
    (value: string) => {
      setTextInput(value);

      const valid = isValidPhoneNumber(
        `+${countryCallCode(countryName)}${value}`,
      );
      setActiveButton(valid);
      setError(!valid && value.length ? STRINGS.onBoardingCode.error : '');
    },
    [countryCallCode, countryName],
  );

  return (
    <>
      {isShowWarningModal && (
        <WarningModalPopUp
          hideCloseButton
          message={strings.onBoardingPhone.messageText}
          message2={strings.onBoardingPhone.messageModal(
            countryCallCode(countryName) + textInput,
          )}
          negativeText={strings.onBoardingPhone.edit}
          onPressPositive={warningModalPositive}
          positiveText={strings.onBoardingPhone.confirm}
          title={strings.onBoardingPhone.titleModal}
          onPressNegative={hideWarningModal}
        />
      )}
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View
          style={{
            backgroundColor: COLORS.sand,
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{paddingHorizontal: 24}}>
            <PageHeaderTitle groupName="onBoardingPhone" />
            <Isidora
              lineHeight={16}
              fontSize={12}
              textAlign="left"
              fontWeight="600"
              color={COLORS.blazeHotPink}
              style={{
                fontStyle: 'normal',
                marginBottom: 2,
                marginTop: 9,
                minHeight: 20,
              }}>
              {error}
            </Isidora>
            <Row>
              <SelectCountryCode
                countryName={countryName}
                openCountryModal={openModal}
              />
              <FFTextInput
                placeholder="Cell"
                placeholderTextColor={COLORS.blazeBlue}
                autoCompleteType="tel"
                keyboardType="number-pad"
                maxLength={20}
                fontSize={14}
                color={COLORS.blazeBlue}
                width={dimensions.WIDTH - 24 - 28 - 106}
                onChangeText={checkValidNumber}
                clearVisible
              />
            </Row>
            <Isidora
              lineHeight={20}
              fontSize={14}
              textAlign="left"
              fontWeight="600"
              color={COLORS.blazeBlue}
              style={{marginTop: 17}}>
              {STRINGS.onBoardingPhone.about}
            </Isidora>
          </View>

          <OnBoardingFooter
            showButtonProgress={false}
            value={0}
            onPress={goToNextPage}
            activeButton={activeButton}
          />
          <CountryListModalWindow
            visible={visible}
            onClose={closeModal}
            onSelect={setCountryName}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

interface SelectCountryCodeProps {
  countryName: string;
  openCountryModal: () => void;
}

const SelectCountryCode: React.FunctionComponent<SelectCountryCodeProps> = ({
  countryName,
  openCountryModal,
}) => {
  return (
    <TouchableOpacity
      onPress={openCountryModal}
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 14,
        borderColor: COLORS.blazeDarker,
        borderWidth: 0.5,
        height: 48,
        justifyContent: 'center',
        width: 102,
      }}>
      <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <InputWrapper>
          <SvgUri
            width={24}
            height={14}
            uri={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryName}.svg`}
          />
        </InputWrapper>
        <InputWrapper>
          <Text
            style={{
              color: COLORS.blazeBlue,
              fontFamily: 'IsidoraSansAlt-SemiBold',
              fontSize: 14,
              fontWeight: '600',
              lineHeight: 14,
              paddingLeft: 10,
              paddingRight: 10,
            }}>{`+${getCountryCallingCode(countryName)}`}</Text>
        </InputWrapper>
        <InputWrapper>
          <DropDownIcon />
        </InputWrapper>
      </Row>
    </TouchableOpacity>
  );
};

const InputWrapper = styled(View)`
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 47px;
`;

export default React.memo(SignInPhone);
