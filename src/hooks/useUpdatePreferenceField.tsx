import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';

import {
  DefaultBlock,
  PreferenceInput,
  Value,
  useUserPreferenceUpdateMutation,
} from '../store/generated/graphql';
import {useIsNeedUpdateLookBook} from './useIsNeedUpdateLookBook';

type UpdatePreferenceFieldReturnType = {
  fieldName: string | undefined;
  selectedValue: Value | undefined;
  updateValue: (value: Value) => void;
};

const useUpdatePreferenceField = (
  block: DefaultBlock,
): UpdatePreferenceFieldReturnType => {
  const [fieldName, setFieldName] = useState<undefined | string>();
  const {isUpdateLookBook, setIsUpdateLook} = useIsNeedUpdateLookBook();

  const [selectedValue, setSelectedValue] = useState<Value | undefined>();

  // Preference update mutation
  const [
    updatePreference,
    updatePreferenceResult,
  ] = useUserPreferenceUpdateMutation();

  // Check the updating result
  useEffect(() => {
    if (updatePreferenceResult.error) {
      Alert.alert(
        'Connection error',
        'An error occurred while updating the data, please try again later.',
      );
    }
  }, [updatePreferenceResult.error]);

  // Update field value and send to the endpoint
  const updateValue = useCallback(
    (value: Value) => {
      setSelectedValue(value);

      // Parse input value and send
      let inputValue: PreferenceInput = {};
      switch (value.__typename) {
        case 'Religion':
          setFieldName(value.name);
          inputValue = {religionId: value.id};
          break;
        case 'EducationLevel':
          setFieldName(value.name);
          inputValue = {educationLevelId: value.id};
          break;
        case 'RelationshipGoal':
          setFieldName(value.name);
          inputValue = {relationshipGoalId: value.id};
          break;
        case 'RelationshipStatus':
          setFieldName(value.name);
          inputValue = {relationshipStatusesId: value.id};
          break;
        case 'AttitudeToKid': {
          setFieldName(value.name);
          inputValue = {attitudeToKidsId: value.id};
          break;
        }
        case 'PhysicalActivity':
          setFieldName(value.name);
          inputValue = {physicalActivityId: value.id};
          break;
        case 'AttitudeToPet':
          setFieldName(value.name);
          inputValue = {attitudeToPetId: value.id};
          break;
        case 'AttitudeToAlcohol':
          setFieldName(value.name);
          inputValue = {attitudeToAlcoholId: value.id};
          break;
        case 'AttitudeToSmoking':
          setFieldName(value.name);
          inputValue = {attitudeToSmokingId: value.id};
          break;
        case 'AttitudeToMarijuana':
          setFieldName(value.name);
          inputValue = {attitudeToMarijuanaId: value.id};
          break;
      }

      updatePreference({variables: {input: inputValue}}).then(() => {
        // console.log(`Value ${value.__typename} updated`);
        if (!isUpdateLookBook) {
          setIsUpdateLook(true);
        }
      });
    },
    [isUpdateLookBook, setIsUpdateLook, updatePreference],
  );

  const fieldSavedData = useCallback(() => {
    switch (block.__typename) {
      case 'DefaultBlock': {
        const localFieldName =
          block?.value?.__typename === 'Gender'
            ? block.value.shortName
            : block.value?.name;

        setFieldName(localFieldName);
        setSelectedValue(block?.value ?? undefined);
        break;
      }
    }
  }, [block]);

  const mounted = useRef(true);
  useEffect(() => {
    if (mounted.current) {
      fieldSavedData();
    }
    return () => {
      mounted.current = false;
    };
  }, [fieldSavedData]);

  return {
    fieldName: fieldName,
    selectedValue: selectedValue,
    updateValue: updateValue,
  };
};

export default useUpdatePreferenceField;
