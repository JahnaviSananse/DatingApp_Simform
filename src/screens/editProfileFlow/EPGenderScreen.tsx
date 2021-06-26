import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import NavigationKey from '../../navigation/NavigationKey';
import {NavigationParams} from '../../navigation/NavigationParams';
import {Gender} from '../../store/generated/graphql';

const baseGender = [
  {__typename: 'Gender', id: '2', name: 'Woman', shortName: 'Woman'},
  {__typename: 'Gender', id: '1', name: 'Man', shortName: 'Man'},
  {id: '0', name: 'More options', shortName: 'More options'},
];

type ScreenRouteProp = RouteProp<NavigationParams, 'EPDefaultScreen'>;

const EPGenderScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();

  // Get the params from navigation
  const {
    params: {
      title,
      description,
      selectedValue,
      values,
      onUpdateValue,
      ImageIcon,
    },
  } = useRoute<ScreenRouteProp>();

  // Selected value
  const [localSelectedValue, setLocalSelectedValue] = useState<
    Gender | undefined
  >(selectedValue);

  const [genders, setGenders] = useState(baseGender);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  useEffect(() => {
    if (
      localSelectedValue?.id !== '1' &&
      localSelectedValue?.id !== '2' &&
      localSelectedValue
    ) {
      setGenders((prev) => [...prev.slice(0, 2), localSelectedValue]);
    } else if (
      localSelectedValue?.id === '1' ||
      localSelectedValue?.id === '2'
    ) {
      setGenders(baseGender);
    }
  }, [localSelectedValue, selectedValue]);

  const renderItem = useCallback<
    ({item}: {item: Gender}) => React.ReactElement
  >(
    ({item}) => {
      return (
        <ValueStateButton
          value={item}
          selected={item.id === localSelectedValue?.id}
          onValueSelected={setLocalSelectedValue}
          allValues={values}
          localValue={localSelectedValue}
        />
      );
    },
    [localSelectedValue, values],
  );

  const keyExtractor = useCallback(
    (item: Gender) => `${item.name} + ${item.id}`,
    [],
  );

  return (
    <>
      <EPBlockHeader
        title={title}
        description={description}
        onGoBack={onGoBack}
        ImageIcon={ImageIcon}
      />
      <View
        style={{
          backgroundColor: colors.sand,
          flex: 1,
          paddingHorizontal: constants.PROFILE.paddingHorizontal,
        }}>
        <FlatList
          data={genders}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={{paddingHorizontal: 20}}
        />
      </View>
    </>
  );
};

interface Props {
  value: Gender;
  selected: boolean;
  onValueSelected: (value: Gender) => void;
  allValues: Gender[];
  localValue: Gender;
}

const ValueStateButton: React.FunctionComponent<Props> = ({
  value,
  selected,
  onValueSelected,
  allValues,
  localValue,
}) => {
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    if (value.id === '1' || value.id === '2') {
      onValueSelected(value);
    } else {
      navigate(NavigationKey.EPOtherGenderScreen, {
        localValue: localValue,
        onSelectValue: onValueSelected,
        values: allValues.slice(2),
      });
    }
  }, [allValues, localValue, navigate, onValueSelected, value]);

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

export default React.memo(EPGenderScreen);
