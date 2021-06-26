// import AsyncStorage from '@react-native-community/async-storage';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import CakeIcon from '../../components/icons/CakeIcon';
import LikeIcon from '../../components/icons/LikeIcon';
import {
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
  Row,
} from '../../components/index';
import WarningModalPopUp from '../../components/WarningModalPopUp';
import {COLORS, STRINGS} from '../../configs';
import strings from '../../configs/styles/strings';
import useSignUpNavigation from '../../hooks/useSignUpNavigation';
import {
  useMyProfileQuery,
  useUserProfileUpdateMutation,
} from '../../store/generated/graphql';
import DatePickerModal from '../DatePickerModal';
import styles from './styles';

const OnBoardingBirthday: React.FunctionComponent = () => {
  const [navigateNext, navigateAgeError] = useSignUpNavigation({
    currentScreen: 'BIRTHDAY',
  });

  // Navigation
  const {navigate} = useNavigation();

  // Get the user data
  const {data} = useMyProfileQuery();
  const [updateUseProfile] = useUserProfileUpdateMutation();

  const [activeButton, setActiveButton] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDataPicker, setIsShowDataPicker] = useState(false);

  const [date, setDate] = useState<undefined | Date>(undefined);

  // useEffect(() => {
  //   AsyncStorage.setItem('currentScreen', 'BIRTHDAY');
  // }, []);

  const getAge = useCallback(() => {
    const age = moment(new Date()).diff(date, 'years');

    return date ? `${STRINGS.onBoardingBirthday.yourAre} ${age}.` : '';
  }, [date]);

  const getBornString = useCallback(() => {
    const age = moment(new Date()).diff(date, 'years');

    const addComma = strings.ageConfirm.yearsOld(
      age,
      new Date(date).toDateString(),
    );
    const arr = addComma.split(' ');
    arr[4] = arr[4] + ',';
    return arr.join(' ');
  }, [date]);

  const onShowAgeConfirm = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  const onPressPositive = useCallback(() => {
    setIsShowModal(false);
    if (date) {
      updateUseProfile({
        variables: {
          input: {
            birthDate: `${
              date.getMonth() + 1 > 9
                ? date.getMonth() + 1
                : '0' + (date.getMonth() + 1)
            }.${
              date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
            }.${date.getFullYear()}`,
          },
        },
      });
      const age = moment(new Date()).diff(date, 'years');

      if (age < 18) {
        navigateAgeError();
      } else {
        navigateNext();
      }
    }
  }, [date, navigateAgeError, navigateNext, updateUseProfile]);

  const onShowDatePicker = useCallback(() => {
    if (Platform.OS === 'ios') {
      setIsShowDataPicker(true);
    } else {
      setIsShowCalendar(true);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const birthdate = data.myProfile?.birthDate;

      if (birthdate) {
        setDate(new Date(birthdate));
      }
    }
  }, [data]);

  useEffect(() => {
    setActiveButton(date !== undefined);
  }, [date]);

  const getDateString = useCallback(() => {
    if (date) {
      const DateObject = new Date(date);
      return `${
        DateObject.getMonth() + 1 > 9
          ? DateObject.getMonth() + 1
          : '0' + (DateObject.getMonth() + 1)
      }/${
        DateObject.getDate() > 9
          ? DateObject.getDate()
          : '0' + DateObject.getDate()
      }/${DateObject.getFullYear()}`;
    }
  }, [date]);

  const onDateChange = useCallback((event, date) => {
    setIsShowCalendar(false);
    if (date) {
      setDate(date);
    }
  }, []);

  const selectDate = useCallback((newDate) => {
    setDate(newDate);
    setIsShowDataPicker(false);
  }, []);

  return (
    <>
      {isShowModal && (
        <WarningModalPopUp
          hideCloseButton
          message={getBornString()}
          negativeText={strings.ageConfirm.edit}
          onPressPositive={onPressPositive}
          positiveText={strings.ageConfirm.confirm}
          title={strings.ageConfirm.title}
          onPressNegative={hideModal}
          message2={STRINGS.ageConfirm.message2}
          styles={{
            buttonsMarginTop: 17,
            message2MarginTop: 2,
            paddingTopWrapper: 21,
            titleMarginBottom: 12,
          }}
        />
      )}
      {isShowDataPicker && (
        <DatePickerModal
          date={date ?? new Date(1009882800000)}
          onNewDate={selectDate}
        />
      )}
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.container}>
          <View style={{paddingHorizontal: 24}}>
            <PageHeaderTitle
              groupName="onBoardingBirthday"
              propStyles={{marginTop: 2}}
            />
            <TouchableOpacity onPress={onShowDatePicker}>
              <Row style={styles.dateRow}>
                <Row style={{alignItems: 'center'}}>
                  <CakeIcon style={{marginRight: 10}} />
                  {date ? (
                    <Text style={[styles.dateTitle, {color: COLORS.blazeBlue}]}>
                      {getDateString()}
                    </Text>
                  ) : (
                    <Isidora
                      fontSize={14}
                      textAlign="left"
                      color={COLORS.blazeBlue30}
                      style={styles.dateTitle}>
                      {STRINGS.onBoardingBirthday.dateFormat}
                    </Isidora>
                  )}
                </Row>
              </Row>
            </TouchableOpacity>
            <Row
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginTop: 4,
              }}>
              {date && <LikeIcon style={{marginRight: 10}} />}
              <Isidora
                lineHeight={20}
                fontSize={15}
                textAlign="center"
                fontWeight="800"
                color={COLORS.blazeBlue}>
                {getAge()}
              </Isidora>
            </Row>
          </View>
          {isShowCalendar && (
            <RNDateTimePicker
              display="default"
              style={{flex: 1}}
              value={date || new Date()}
              locale="US"
              onChange={onDateChange}
              mode="date"
              maximumDate={new Date()}
              timeZoneOffsetInMinutes={-420}
            />
          )}

          <OnBoardingFooter
            value={0.5}
            onPress={onShowAgeConfirm}
            activeButton={activeButton}
            keyboardValue={0}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default React.memo(OnBoardingBirthday);
