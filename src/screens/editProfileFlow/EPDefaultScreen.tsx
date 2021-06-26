import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import {NavigationParams} from '../../navigation/NavigationParams';
import {Value} from '../../store/generated/graphql';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPDefaultScreen'>;

const EPDefaultScreen: React.FunctionComponent = () => {
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
    Value | undefined
  >(selectedValue);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  const renderItem = useCallback<({item}: {item: Value}) => React.ReactElement>(
    ({item}) => {
      return (
        <ValueStateButton
          value={item}
          selected={item.id === localSelectedValue?.id}
          onValueSelected={setLocalSelectedValue}
        />
      );
    },
    [localSelectedValue],
  );

  const keyExtractor = useCallback(
    (item: Value) => `${item.name} + ${item.id}`,
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
          data={values}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 20, paddingHorizontal:20}}
        />
      </View>
    </>
  );
};

interface Props {
  value: Value;
  selected: boolean;
  onValueSelected: (value: Value) => void;
}

const ValueStateButton: React.FunctionComponent<Props> = ({
  value,
  selected,
  onValueSelected,
}) => {
  const onPress = useCallback(() => {
    onValueSelected(value);
  }, [onValueSelected, value]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: selected ? colors.blazeBlue : colors.blazeBlue20,
        borderRadius: 30,
        marginBottom: 16,
        justifyContent:'center',
        width: '100%',
          height:48,
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

export default React.memo(EPDefaultScreen);
