import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import R from 'ramda';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StatusBar, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import GenderList, {LocalGenderType} from '../components/GenderList';
import GenderStateButton from '../components/GenderStateButton';
import {
  EyeCloseIcon,
  EyeOpenIcon,
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
} from '../components/index';
import {COLORS, STRINGS} from '../configs';
import strings from '../configs/styles/strings';
import useSignUpNavigation from '../hooks/useSignUpNavigation';
import NavigationKey from '../navigation/NavigationKey';
import {
  Gender,
  useUserGendersQuery,
  useUserProfileUpdateMutation,
} from '../store/generated/graphql';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../utils/dimensions';

const OTHER_GENDER: LocalGenderType = {
  id: 999,
  name: strings.gender.other,
  selected: false,
  shortName: strings.gender.other,
};

type ConvertAndUpdateGendersType = {
  selectedGender?: Gender;
  baseNetworkGenders: Gender[];
  otherNetworkGenders: Gender[];
};

const WhatGenderScreen: React.FunctionComponent = () => {
  const {navigate} = useNavigation();
  const [navigateNext] = useSignUpNavigation({currentScreen: 'WHAT_GENDER'});

  const [activeButton, setActiveButton] = useState(false);
  const [updateProfile] = useUserProfileUpdateMutation();

  const {data, error} = useUserGendersQuery({fetchPolicy: 'network-only'});

  const [genderVisibility, setGenderVisibility] = useState(false);

  // Current gender
  const [currentGender, setCurrentGender] = useState<
    LocalGenderType | undefined
  >();

  // Base genders list
  const [baseGenders, setBaseGenders] = useState<LocalGenderType[]>([]);

  // Other genders list
  const [otherGenders, setOtherGenders] = useState<LocalGenderType[]>([]);

  // Convert the gender to local gender type
  const convertToLocalGender = useCallback(
    (gender: Gender, selected: boolean) => {
      return {
        id: Number(gender.id),
        name: gender.name,
        selected: selected,
        shortName: gender.shortName,
      };
    },
    [],
  );

  const convertAndUpdateGenders = useCallback(
    ({
      selectedGender,
      baseNetworkGenders,
      otherNetworkGenders,
    }: ConvertAndUpdateGendersType) => {
      // Set the current user gender
      const userCurrentGender = selectedGender
        ? convertToLocalGender(selectedGender, false)
        : undefined;
      setCurrentGender(userCurrentGender);

      // Set base genders list
      const baseGenderList = baseNetworkGenders.map((gender) => {
        const selected = gender.name === userCurrentGender?.name;
        return convertToLocalGender(gender, selected);
      });
      setBaseGenders(baseGenderList);

      // Set other genders list
      const otherGenderList = otherNetworkGenders.map((gender) => {
        const selected = gender.name === userCurrentGender?.name;
        return convertToLocalGender(gender, selected);
      });
      setOtherGenders(otherGenderList);
    },
    [convertToLocalGender],
  );

  useEffect(() => {
    if (data) {
      const {current} = data?.userGenders;
      const selectedGender = current.selected ?? undefined;
      const baseNetworkGenders = current.base;
      const otherNetworkGenders = current.other;

      // Set gender visibility
      setGenderVisibility(current.visibility);

      // Convert and update current lists
      convertAndUpdateGenders({
        baseNetworkGenders,
        otherNetworkGenders,
        selectedGender,
      });
    }
  }, [convertAndUpdateGenders, data]);

  useEffect(() => {
    if (error) {
      Alert.alert('Something was wrong, try again', error.message);
    }
  }, [error]);

  const updateCurrentAndLists = useCallback(
    (selectedGender?: LocalGenderType) => {
      const currentIsBase =
        baseGenders.find((it) => it.id == selectedGender?.id) === undefined;

      const currentIsOther =
        otherGenders.find((it) => it.id == selectedGender?.id) === undefined;

      if (!selectedGender && (!currentIsBase || currentIsOther)) {
        setCurrentGender(undefined);
      } else if (selectedGender) {
        const update = R.map(
          R.ifElse(
            R.propEq('id', selectedGender?.id),
            R.assoc('selected', true),
            R.assoc('selected', false),
          ),
        );

        // Set current gender
        setCurrentGender(selectedGender);

        // Update the selected state on the lists
        setBaseGenders(update(baseGenders));
        setOtherGenders(update(otherGenders));
      }
    },
    [baseGenders, otherGenders],
  );

  const onGenderSelected = useCallback(
    (selectedGender: LocalGenderType) => {
      // Check the selected gender is other
      const otherGender =
        baseGenders.find((it) => it.id == selectedGender.id) === undefined;

      // Update the current gender and selected in the lists
      updateCurrentAndLists(selectedGender);

      // Navigate to the other genders screen when click on "Other"
      if (otherGender) {
        navigate(NavigationKey.OtherGender, {
          currentGender: currentGender,
          genders: otherGenders,
          onGenderChanged: updateCurrentAndLists,
        });
      }
    },
    [baseGenders, currentGender, navigate, otherGenders, updateCurrentAndLists],
  );

  const onVisibilityPress = useCallback(() => {
    setGenderVisibility(!genderVisibility);
  }, [genderVisibility]);

  useEffect(() => {
    setActiveButton(currentGender !== undefined);
  }, [currentGender]);

  const goToNextPage = useCallback(() => {
    AsyncStorage.setItem('isFirstLogin', 'true');

    updateProfile({
      variables: {
        input: {
          genderId: currentGender?.id.toString(),
          showGender: genderVisibility,
        },
      },
    });
    navigateNext();
  }, [currentGender, genderVisibility, navigateNext, updateProfile]);

  return (
    <View style={{backgroundColor: COLORS.blazeCream, flex: 1}}>
      <View
        style={{
          backgroundColor: COLORS.sand,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <View
          style={{
            marginTop: 2,
            paddingHorizontal: getWidthWithScaleFactor(24),
          }}>
          <PageHeaderTitle groupName="whatsGender" />
          {otherGenders.length > 0 && (
            <View style={{paddingHorizontal: 16}}>
              <GenderList
                genders={baseGenders}
                onGenderSelected={onGenderSelected}
                scrollEnabled={false}
              />
              <GenderStateButton
                gender={
                  otherGenders.find((it) => it.id == currentGender?.id) ??
                  OTHER_GENDER
                }
                style={{marginBottom: 16}}
                showShortName
                onButtonSelected={onGenderSelected}
              />
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Isidora
              textAlign="left"
              color={COLORS.blazeBlue}
              fontSize={16}
              fontWeight="600"
              lineHeight={20} style={{marginLeft:15}}>
              {STRINGS.gender.visibility}
            </Isidora>
            <TouchableOpacity
              style={{marginTop: getHeightWithScaleFactor(8)}}
              onPress={onVisibilityPress}>
              {genderVisibility ? (
                <EyeOpenIcon
                  style={{marginTop: getHeightWithScaleFactor(2)}}
                  color={COLORS.blazeBlue}
                />
              ) : (
                <EyeCloseIcon color={COLORS.inActiveBtn} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <OnBoardingFooter
          value={0.75}
          onPress={goToNextPage}
          activeButton={activeButton}
        />
      </View>
    </View>
  );
};

export default React.memo(WhatGenderScreen);
