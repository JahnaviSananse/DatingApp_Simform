// import AsyncStorage from '@react-native-community/async-storage';
import R from 'ramda';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StatusBar, View} from 'react-native';

import GenderList, {LocalGenderType} from '../components/GenderList';
import {Isidora, OnBoardingFooter, PageHeaderTitle} from '../components/index';
import {COLORS, STRINGS} from '../configs';
import useSignUpNavigation from '../hooks/useSignUpNavigation';
import {
  LikeToMeet,
  useUserGendersQuery,
  useUserProfileUpdateMutation,
} from '../store/generated/graphql';
import {getWidthWithScaleFactor} from '../utils/dimensions';

type ConvertAndUpdateGendersType = {
  selectedGender?: LikeToMeet;
  networkGenders: LikeToMeet[];
};

const WouldLikeScreen: React.FunctionComponent = () => {
  const [navigateNext] = useSignUpNavigation({currentScreen: 'WOULD_LIKE'});

  const [genders, setGenders] = useState<LocalGenderType[]>([]);

  // Selected like gender
  const [likeToMeet, setLikeToMeet] = useState<LocalGenderType | undefined>();

  const [activeButton, setActiveButton] = useState(false);
  const {data, error} = useUserGendersQuery();
  const [updateLikeToMeet] = useUserProfileUpdateMutation();

  // useEffect(() => {
  //   AsyncStorage.setItem('currentScreen', 'WOULD_LIKE');
  // }, []);

  // Convert the like to meet to local gender type
  const convertToLocalGender = useCallback(
    (gender: LikeToMeet, selected: boolean) => {
      return {
        id: Number(gender.id),
        name: gender.name,
        selected: selected,
        shortName: gender.name,
      };
    },
    [],
  );

  const convertAndUpdateGenders = useCallback(
    ({selectedGender, networkGenders}: ConvertAndUpdateGendersType) => {
      // Set the user like gender
      const userLikeGender = selectedGender
        ? convertToLocalGender(selectedGender, false)
        : undefined;
      setLikeToMeet(userLikeGender);

      // Set genders list
      const gendersList = networkGenders.map((gender) => {
        const selected = gender.name === userLikeGender?.name;
        return convertToLocalGender(gender, selected);
      });
      setGenders(gendersList);
    },
    [convertToLocalGender],
  );

  useEffect(() => {
    if (data) {
      const {likeToMeet} = data?.userGenders;
      const selectedGender = likeToMeet.selected ?? undefined;
      const networkGenders = likeToMeet.list;

      // Convert and update the like gender and genders list
      convertAndUpdateGenders({networkGenders, selectedGender});
    }
  }, [convertAndUpdateGenders, data]);

  useEffect(() => {
    if (error) {
      Alert.alert('Something was wrong, try again', error.message);
    }
  }, [error]);

  const onLikeToMeetSelected = useCallback(
    (likeToMeet: LocalGenderType) => {
      const update = R.map(
        R.ifElse(
          R.propEq('id', likeToMeet.id),
          R.assoc('selected', true),
          R.assoc('selected', false),
        ),
      );

      // Set like to meet
      setLikeToMeet(likeToMeet);

      // Update the selected state on the lists
      setGenders(update(genders));
    },
    [genders],
  );

  const onPress = useCallback(() => {
    updateLikeToMeet({
      variables: {
        input: {
          likeToMeetId: likeToMeet?.id.toString(),
        },
      },
    });
    navigateNext();
  }, [navigateNext, likeToMeet, updateLikeToMeet]);

  useEffect(() => {
    setActiveButton(likeToMeet !== undefined);
  }, [likeToMeet]);

  return (
    <View style={{backgroundColor: COLORS.sand, flex: 1}}>
      <View
        style={{
          backgroundColor: COLORS.sand,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <View style={{paddingHorizontal: getWidthWithScaleFactor(24)}}>
          <PageHeaderTitle
            propStyles={{
              marginBottom: 22,
            }}
            groupName="gender"
          />
          <GenderList
            scrollEnabled={false}
            genders={genders}
            onGenderSelected={onLikeToMeetSelected}
            paddingHorizontal={16}
          />
          <Isidora
            lineHeight={20}
            fontSize={15}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginLeft: 15, marginTop: -4}}>
            {STRINGS.wouldLikeMeet.message}
          </Isidora>
        </View>
        <OnBoardingFooter
          value={0.85}
          onPress={onPress}
          activeButton={activeButton}
        />
      </View>
    </View>
  );
};

export default React.memo(WouldLikeScreen);
