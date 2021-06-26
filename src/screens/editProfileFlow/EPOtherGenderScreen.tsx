import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

import {Isidora, Row} from '../../components';
import FFTextInput from '../../components/FFTextInput';
import BackArrowIcon from '../../components/icons/BackArrowIcon';
import {COLORS, STRINGS} from '../../configs';
import colors from '../../configs/styles/colors';
import {NavigationParams} from '../../navigation/NavigationParams';
import {Gender} from '../../store/generated/graphql';

interface Props {
  value: Gender;
  selected: boolean;
  onValueSelected: (value: Gender) => void;
  setLocalValue: (value: Gender) => void;
}

const ValueStateButton: React.FunctionComponent<Props> = ({
  value,
  selected,
  onValueSelected,
  setLocalValue,
}) => {
  const onPress = useCallback(() => {
    onValueSelected(value);
    setLocalValue(value);
  }, [onValueSelected, setLocalValue, value]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: selected ? colors.blazeBlue : colors.blazeBlue20,
        borderRadius: 30,
        height: 48,
        justifyContent: 'center',
        marginBottom: 16,
        width: '100%',
      }}>
      <Isidora
        fontSize={16}
        lineHeight={16}
        fontWeight="600"
        color={selected ? colors.white : colors.blazeBlue}>
        {value.name}
      </Isidora>
    </TouchableOpacity>
  );
};

type ScreenRouteProp = RouteProp<NavigationParams, 'EPOtherGenderScreen'>;
const EPOtherGenderScreen: React.FunctionComponent = () => {
  const {
    params: {values, onSelectValue, localValue},
  } = useRoute<ScreenRouteProp>();

  const [localSelectedValue, setLocalSelectedValue] = useState<
    Gender | undefined
  >(localValue);

  const [genders, setGenders] = useState(values);
  const flatList = useRef<FlatList>();

  const {goBack} = useNavigation();

  const [searchText, setSearchText] = useState('');

  const keyExtractor = useCallback(
    (item: Gender) => `${item.name} + ${item.id}`,
    [],
  );
  useEffect(() => {
    if (searchText) {
      setGenders((prev) =>
        prev.filter((el) => el.shortName.startsWith(searchText)),
      );
    } else {
      setGenders(values);
    }
    flatList.current?.scrollToOffset({animated: true, offset: 0});
  }, [searchText, values]);

  const renderItem = useCallback<
    ({item}: {item: Gender}) => React.ReactElement
  >(
    ({item}) => {
      return (
        <ValueStateButton
          value={item}
          selected={item.id === localSelectedValue?.id}
          onValueSelected={onSelectValue}
          setLocalValue={setLocalSelectedValue}
        />
      );
    },
    [localSelectedValue, onSelectValue],
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
      }}>
      <Row style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{marginBottom: -3}} onPress={goBack}>
          <BackArrowIcon color={COLORS.blazeBlue} />
        </TouchableOpacity>
        <Isidora fontSize={24} lineHeight={25} color={COLORS.blazeBlue}>
          More options
        </Isidora>
        <View style={{width: 24}} />
      </Row>

      <Isidora
        fontSize={14}
        fontWeight="600"
        lineHeight={17}
        color={COLORS.blazeBlue}
        textAlign="left"
        style={{marginBottom: 11, marginTop: 70}}>
        {STRINGS.editProfile.gender.otherGender.message}
      </Isidora>
      <FFTextInput
        placeholder={STRINGS.editProfile.gender.otherGender.placeholder}
        wrapperStyle={{borderColor: COLORS.blazeBlue}}
        clearVisible={false}
        value={searchText}
        onChangeText={setSearchText}
      />
      <View
        style={{
          backgroundColor: COLORS.blazeBlue20,
          height: 1,
          marginBottom: 29,
          marginTop: 35,
          width: '100%',
        }}
      />

      <FlatList
        ref={flatList}
        data={genders}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
    </View>
  );
};
export default React.memo(EPOtherGenderScreen);
