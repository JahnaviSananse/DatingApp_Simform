import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {COLORS} from '../../configs';
import strings from '../../configs/styles/strings';
import AlcoholPublicProfile from '../icons/AlcoholIconPublicProfile';
import EducationIconPublicProfile from '../icons/EducationIconPublicProfile';
import GenderIconPublicProfile from '../icons/GenderIconPublicProfile';
import GymIconPublicProfile from '../icons/GymIconPublicProfile';
import HeightIconPublicProfile from '../icons/HeightIconPublicProfile';
import JobIconPublicProfile from '../icons/JobIconPublicProfile';
import KidsIconPublicProfile from '../icons/KidsIconPublicProfile';
import LanguageIconProfileUser from '../icons/LanguageIconProfileUser';
import MarijuanaIconPublicProfile from '../icons/MarijuanaIconPublicProfile';
import PetsIconPublicProfile from '../icons/PetsIconPublicProfile';
import PlaceOfBirthIcon from '../icons/PlaceOfBirthIcon';
import PoliticalIconPublicProfile from '../icons/PoliticalIconPublicProfile';
import ReligionIconPublicProfile from '../icons/ReligionIconPublicProfile';
import SearchIconPublicProfile from '../icons/SearchIconPublicProfile';
import SmokeIconPublicProfile from '../icons/SmokeIconPublicProfile';
import StatusPublicProfile from '../icons/StatusPublicProfile';
import ZodiacIconPublicProfile from '../icons/ZodiacIconPublicProfile';
import {ItemWrapper, Line, Wrapper} from './styles';
import {Isidora} from '..';

const arr = new Map([
  ['gender', GenderIconPublicProfile],
  ['job', JobIconPublicProfile],
  ['relationshipGoal', SearchIconPublicProfile],
  ['relationshipStatus', StatusPublicProfile],
  ['height', HeightIconPublicProfile],
  ['religion', ReligionIconPublicProfile],
  ['attitudeToKid', KidsIconPublicProfile],
  ['educationLevel', EducationIconPublicProfile],
  ['zodiac', ZodiacIconPublicProfile],
  ['attitudeToPet', PetsIconPublicProfile],
  ['attitudeToAlcohol', AlcoholPublicProfile],
  ['physicalActivity', GymIconPublicProfile],
  ['politicalIdeology', PoliticalIconPublicProfile],
  ['attitudeToSmoking', SmokeIconPublicProfile],
  ['nativeLanguage', LanguageIconProfileUser],
  ['attitudeToMarijuana', MarijuanaIconPublicProfile],
  ['placeOfBirth', PlaceOfBirthIcon],
]);

interface Props {
  userData: {
    gender: string | null | undefined;
    job: string | null | undefined;
    relationshipGoal: string | null | undefined;
    relationshipStatus: string | null | undefined;
    height: string | null | undefined;
    religion: string | null | undefined;
    attitudeToKid: string | null | undefined;
    educationLevel: string | null | undefined;
    placeOfBirth: string | null | undefined;
    zodiac: string | null | undefined;
    attitudeToPet: string | null | undefined;
    attitudeToAlcohol: string | null | undefined;
    physicalActivity: string | null | undefined;
    politicalIdeology: string | null | undefined;
    attitudeToSmoking: string | null | undefined;
    nativeLanguage: string | null | undefined;
    attitudeToMarijuana: string | null | undefined;
  };
  currentLocation: string | null | undefined;
}

const FirstBlockUserInfo: React.FunctionComponent<Props> = ({
  userData,
  currentLocation,
}) => {
  const keyExtractor = useCallback((item) => item[0], []);

  const renderItem = useCallback(({item}) => {
    const Component = arr.get(item[0]);

    return (
      <ItemWrapper>
        <Component color={COLORS.raspberry} />
        <Isidora
          lineHeight={14}
          fontSize={14}
          textAlign="left"
          fontWeight="600"
          numberOfLines={1}
          color={COLORS.blazeBlue}
          style={{marginLeft: 5, marginTop: -1, width: 110}}>
          {item[1]}
        </Isidora>
      </ItemWrapper>
    );
  }, []);

  const getList = useCallback(
    (part: number) => {
      const tempList = Object.entries(userData).filter((el) => el[1]);
      if (tempList.length) {
        if (part === 1) {
          return tempList.slice(0, Math.ceil(tempList.length / 2));
        } else if (part === 2) {
          return tempList.slice(Math.ceil(tempList.length / 2));
        }
      }
      return [];
    },
    [userData],
  );

  const checkUserData = useCallback(() => {
    return Object.values(userData).filter((el) => el).length > 0;
  }, [userData]);

  return (
    <Wrapper>
      <Isidora
        lineHeight={20}
        fontSize={14}
        textAlign="left"
        fontWeight="600"
        color={COLORS.raspberry}
        style={{marginLeft: 15}}>
        {strings.publicProfile.currentLocation}
      </Isidora>
      <Isidora
        lineHeight={21}
        fontSize={18}
        textAlign="left"
        fontWeight="900"
        numberOfLines={1}
        color={COLORS.blazeBlue}
        style={{marginBottom: 15, marginLeft: 15, minHeight: 22}}>
        {currentLocation}
      </Isidora>

      {checkUserData() && (
        <>
          <Line />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{flexDirection: 'column'}}
            style={{maxHeight: 70, paddingHorizontal: 5}}>
            <FlatList
              alwaysBounceVertical={false}
              alwaysBounceHorizontal={false}
              scrollEnabled={false}
              data={getList(1)}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              numColumns={8}
              style={{marginTop: 10}}
              showsHorizontalScrollIndicator={false}
            />
            <FlatList
              alwaysBounceVertical={false}
              alwaysBounceHorizontal={false}
              scrollEnabled={false}
              data={getList(2)}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              numColumns={8}
              style={{marginTop: 5}}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(FirstBlockUserInfo);
