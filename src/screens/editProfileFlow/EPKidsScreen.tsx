import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import CheckedBoxIcon from '../../components/icons/CheckedBoxIcon';
import UncheckedBoxIcon from '../../components/icons/UncheckedBoxIcon';
import {getIsidoraFontByWeight} from '../../components/texts/IsidoraTypes';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import {NavigationParams} from '../../navigation/NavigationParams';
import {AttitudeToKid, KidsCondition} from '../../store/generated/graphql';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPKidsScreen'>;

const EPKidsScreen: React.FunctionComponent = () => {
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

  // Values
  const [localSelectedValue, setLocalSelectedValue] = useState<
    AttitudeToKid | undefined
  >(selectedValue);

  // Values
  const [localValues, setLocalValues] = useState<AttitudeToKid[] | undefined>();

  // Update selected item on the values list
  useEffect(() => {
    if (values) {
      const updatedValuesList = values.map((it) => {
        if (it.id === selectedValue?.id) {
          return selectedValue;
        } else {
          return it;
        }
      });
      setLocalValues(updatedValuesList);
    }
  }, [selectedValue, values]);

  // Select the value and change on the list
  const onValueSelected = useCallback(
    (value: AttitudeToKid) => {
      // Update the list
      const updatedList = localValues?.map((it) => {
        if (it.id === value.id) {
          return value;
        } else {
          return it;
        }
      });
      setLocalValues(updatedList);

      // Update selected value
      setLocalSelectedValue(value);
    },
    [localValues],
  );

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  const renderItem = useCallback<
    ({item}: {item: AttitudeToKid}) => React.ReactElement
  >(
    ({item}) => {
      return (
        <ValueStateButton
          value={item}
          selected={item.id === localSelectedValue?.id}
          onValueSelected={onValueSelected}
        />
      );
    },
    [localSelectedValue, onValueSelected],
  );

  const keyExtractor = useCallback(
    (item: AttitudeToKid) => `${item.name} + ${item.id}`,
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
          data={localValues}
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
  value: AttitudeToKid;
  selected: boolean;
  onValueSelected: (value: AttitudeToKid) => void;
}

const ValueStateButton: React.FunctionComponent<Props> = ({
  value,
  selected,
  onValueSelected,
}) => {
  const onPress = useCallback(() => {
    onValueSelected(value);
  }, [onValueSelected, value]);

  const onCheckCondition = useCallback(
    (condition: KidsCondition) => {
      const localCondition = value.conditions?.find(
        (it) => it.conditionId === condition.conditionId,
      );
      if (localCondition) {
        const changedConditions: KidsCondition[] | undefined =
          value.conditions?.map((it) => {
            return {
              ...it,
              checked: it.conditionId === condition.conditionId,
            };
          }) ?? undefined;

        onValueSelected({
          ...value,
          conditions: changedConditions,
        });
      }
    },
    [onValueSelected, value],
  );

  return (
    <View
      style={{
        marginBottom: 16,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: selected ? colors.blazeBlue : colors.blazeBlue20,
          borderRadius: 30,
          height: 48,
          justifyContent: 'center',
          width: '100%',
        }}>
        <Isidora
          lineHeight={16}
          fontWeight="600"
          fontSize={16}
          color={selected ? colors.sand : colors.blazeBlue}>
          {value.name}
        </Isidora>
      </TouchableOpacity>
      {value?.conditions && selected && (
        <ConditionsBlock
          conditions={value?.conditions}
          onCheckCondition={onCheckCondition}
        />
      )}
    </View>
  );
};

interface ConditionsBlockProps {
  conditions: KidsCondition[];
  onCheckCondition: (condition: KidsCondition) => void;
}

const ConditionsBlock: React.FunctionComponent<ConditionsBlockProps> = ({
  conditions,
  onCheckCondition,
}) => {
  const renderItem = useCallback<
    ({item}: {item: KidsCondition}) => React.ReactElement
  >(
    ({item}) => {
      return <ConditionItem item={item} onCheckCondition={onCheckCondition} />;
    },
    [onCheckCondition],
  );

  const keyExtractor = useCallback(
    (item: KidsCondition) => `${item.name} + ${item.conditionId}`,
    [],
  );

  const conditionList = useMemo(() => conditions.filter((el) => el.visible), [
    conditions,
  ]);

  return (
    <FlatList
      data={conditionList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={{
        marginBottom: conditionList.length > 0 ? -3 : 0,
        paddingTop: conditionList.length > 0 ? 10 : 0,
      }}
    />
  );
};

interface ConditionItemProps {
  item: KidsCondition;
  onCheckCondition: (condition: KidsCondition) => void;
}

const ConditionItem: React.FunctionComponent<ConditionItemProps> = ({
  item,
  onCheckCondition,
}) => {
  const itemColor = item.visible ? colors.blazeBlue : colors.blazeBlue30;

  const onPress = useCallback(() => {
    if (item.visible) {
      onCheckCondition(item);
    }
  }, [item, onCheckCondition]);

  return (
    <CheckBox
      title={item.name}
      checked={item.checked}
      onPress={onPress}
      checkedIcon={<CheckedBoxIcon />}
      uncheckedIcon={<UncheckedBoxIcon />}
      titleProps={{
        style: {
          color: itemColor,
          fontFamily: getIsidoraFontByWeight('normal', '600'),
          paddingStart: 5,
        },
      }}
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginTop: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
      }}
    />
  );
};

export default React.memo(EPKidsScreen);
