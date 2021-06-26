import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import R from 'ramda';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StatusBar, View} from 'react-native';
import styled from 'styled-components';

import FFTextInput from '../components/FFTextInput';
import GenderList, {LocalGenderType} from '../components/GenderList';
import {HeaderLeftButton, Isidora, PageHeaderTitle} from '../components/index';
import {COLORS, STRINGS} from '../configs';
import colors from '../configs/styles/colors';
import {NavigationParams} from '../navigation/NavigationParams';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../utils/dimensions';

type ScreenRouteProp = RouteProp<NavigationParams, 'OtherGenderScreen'>;

const OtherGenderScreen: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const {goBack} = useNavigation();

  const genderListRef = useRef(null);

  // Selected gender
  const [selectedGender, setSelectedGender] = useState<
    LocalGenderType | undefined
  >();

  // Navigation params
  const {
    params: {currentGender, genders, onGenderChanged},
  } = useRoute<ScreenRouteProp>();

  // Filtered gender list
  const [filteredGenders, setFilteredGenders] = useState<LocalGenderType[]>(
    genders,
  );

  const goBackWithSave = useCallback(() => {
    onGenderChanged(selectedGender);
    goBack();
  }, [goBack, onGenderChanged, selectedGender]);

  const returnHeaderLeft = useCallback(
    () => <HeaderLeftButton isChange onPress={goBackWithSave} />,
    [goBackWithSave],
  );

  navigation.setOptions({
    headerLeft: returnHeaderLeft,
  });

  const onGenderSelected = useCallback(
    (gender: LocalGenderType) => {
      const update = R.map(
        R.ifElse(
          R.propEq('name', gender.name),
          R.assoc('selected', gender.id !== selectedGender?.id),
          R.assoc('selected', false),
        ),
      );
      setFilteredGenders(update(filteredGenders));
      if (gender.id !== selectedGender?.id) {
        setSelectedGender(gender);
      } else {
        setSelectedGender(undefined);
      }
    },
    [filteredGenders, selectedGender],
  );

  const [dataFilled, setDataFilled] = useState(false);
  useEffect(() => {
    if (currentGender && !dataFilled) {
      setDataFilled(true);
      onGenderSelected(currentGender);
    }
  }, [currentGender, dataFilled, onGenderSelected]);

  const onChangeText = useCallback(
    (text: string) => {
      genderListRef.current?.scrollToOffset({animated: true, offset: 0});
      const filtered = R.filter(
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        R.pipe(R.values, R.any(R.includes(text))),
        genders,
      );
      const update = R.map(
        R.ifElse(
          R.propEq('name', currentGender?.name),
          R.assoc('selected', true),
          R.assoc('selected', false),
        ),
      );
      setFilteredGenders(update(filtered));
    },
    [currentGender, genders],
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          marginBottom: getHeightWithScaleFactor(-30),
          paddingHorizontal: getWidthWithScaleFactor(24),
        }}>
        <PageHeaderTitle groupName="otherGender" isOnlyTitle />

        <Isidora
          fontSize={14}
          textAlign="left"
          color={colors.blazeBlue}
          font="bold"
          style={{marginBottom: 9, marginTop: -13}}
          lineHeight={18}>
          {STRINGS.gender.enter}
        </Isidora>
        <FFTextInput
          clearVisible
          onChangeText={onChangeText}
          placeholder={STRINGS.gender.placeholder}
        />
        <Line />
        {filteredGenders.length > 0 ? (
          <GenderList
            genderListRef={genderListRef}
            genders={filteredGenders}
            bottomSpace={50}
            onGenderSelected={onGenderSelected}
            paddingHorizontal={16}
          />
        ) : (
          <Isidora
            lineHeight={16}
            fontSize={12}
            textAlign="left"
            fontWeight="600"
            color={COLORS.raspberry}>
            {STRINGS.otherGender.emptyList}
          </Isidora>
        )}
      </View>
    </View>
  );
};

const Line = styled(View)`
  background-color: ${COLORS.blazeBlue};
  height: 0.5px;
  margin-top: 32px;
  margin-bottom: 30px;
  opacity: 0.3;
`;

export default React.memo(OtherGenderScreen);
