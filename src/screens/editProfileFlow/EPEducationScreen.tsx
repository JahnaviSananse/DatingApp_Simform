import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import FFTextInput from '../../components/FFTextInput';
import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import {Education} from '../../hooks/useUpdateProfileField';
import {NavigationParams} from '../../navigation/NavigationParams';
import {EducationLevel, Value} from '../../store/generated/graphql';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPEducationScreen'>;

const EPEducationScreen: React.FunctionComponent = () => {
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
    Education | undefined
  >(selectedValue);

  const [nameOfSchool, setNameOfSchool] = useState<string | undefined>(
    selectedValue?.nameOfSchool,
  );

  const [educationLevel, setEducationLevel] = useState<
    EducationLevel | undefined
  >(selectedValue?.educationLevel);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  // Create local select value
  useEffect(() => {
    setLocalSelectedValue({
      __typename: 'Education',
      educationLevel: educationLevel,
      nameOfSchool: nameOfSchool,
    });
  }, [educationLevel, nameOfSchool]);

  const renderItem = useCallback<
    ({item}: {item: EducationLevel}) => React.ReactElement
  >(
    ({item}) => {
      return (
        <ValueStateButton
          value={item}
          selected={item.id === educationLevel?.id}
          onValueSelected={setEducationLevel}
        />
      );
    },
    [educationLevel],
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
      <KeyboardAvoidingView
        behavior="padding"
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
          style={{flexGrow: 0}}
          contentContainerStyle={{paddingHorizontal: 20}}
        />
        <Isidora
          color={colors.blazeBlue}
          fontWeight="600"
          fontSize={16}
          textAlign="left"
          style={{paddingBottom: 8, paddingTop: 21}}>
          {strings.editProfile.education.nameOfSchool.label}
        </Isidora>
        <FFTextInput
          value={nameOfSchool ?? ''}
          clearVisible
          contextMenuHidden
          placeholder={strings.editProfile.education.nameOfSchool.placeholder}
          keyboardType="ascii-capable"
          returnKeyType="done"
          onChangeText={setNameOfSchool}
          wrapperStyle={{borderColor: COLORS.blazeBlue, borderWidth: 0.5}}
        />
      </KeyboardAvoidingView>
    </>
  );
};

interface Props {
  value: EducationLevel;
  selected: boolean;
  onValueSelected: (value: EducationLevel) => void;
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
        height: 48,
        justifyContent: 'center',
        marginBottom: 16,
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
  );
};

export default React.memo(EPEducationScreen);
