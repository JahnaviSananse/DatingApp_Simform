import {useCallback, useEffect, useRef, useState} from 'react';

import strings from '../configs/styles/strings';
import {
  AttitudeToKid,
  EducationLevel,
  Height,
  Job,
  Neighborhood,
  PlaceOfBirth,
  UserProfileInput,
  Value,
  useUserProfileUpdateMutation,
} from '../store/generated/graphql';
import {ProfileBlockType} from './useProfileEditFields';

export type Education = {
  __typename: 'Education';
  nameOfSchool?: string;
  educationLevel?: EducationLevel;
};

export type FieldValue =
  | Neighborhood
  | Height
  | PlaceOfBirth
  | Job
  | Education
  | Value;

type UpdateProfileFieldReturnType = {
  fieldName: string | undefined;
  visibility: boolean;
  selectedValue: FieldValue | undefined;
  updateValue: (fieldValue: FieldValue) => void;
  updateVisibility: (newVisibility: boolean) => void;
};

const useUpdateProfileField = (
  block: ProfileBlockType,
): UpdateProfileFieldReturnType => {
  const [fieldName, setFieldName] = useState<undefined | string>();
  const [visibility, setVisibility] = useState(block.visibility);

  const [selectedFieldValue, setSelectedFieldValue] = useState<
    FieldValue | undefined
  >();

  // Profile update mutation
  const [updateProfile, updateProfileResult] = useUserProfileUpdateMutation();

  // Check the updating result
  // useEffect(() => {
  //   if (updateProfileResult.error) {
  //     Alert.alert(
  //       'Connection error',
  //       'An error occurred while updating the data, please try again later.',
  //     );
  //   }
  // }, [updateProfileResult.error]);

  // Update field value and send to the endpoint
  const updateValue = useCallback(
    (fieldValue: FieldValue) => {
      setSelectedFieldValue(fieldValue);

      // Parse input value and send
      let inputValue: UserProfileInput = {};
      switch (fieldValue.__typename) {
        case 'Education':
          setFieldName(
            strings.editProfile.education.getFormatEducation(fieldValue) ??
              undefined,
          );
          inputValue = {
            educationLevelId: fieldValue.educationLevel?.id,
            nameOfSchool: fieldValue.nameOfSchool,
          };
          break;
        case 'PlaceOfBirth':
          setFieldName(fieldValue.placeOfBirth ?? undefined);
          inputValue = {placeOfBirth: fieldValue.placeOfBirth};
          break;
        case 'Job': {
          setFieldName(strings.editProfile.job.getFormatJob(fieldValue));
          inputValue = {
            jobDescription: fieldValue.jobDescription,
            placeOfWork: fieldValue.placeOfWork,
          };
          break;
        }
        case 'AttitudeToKid': {
          setFieldName(fieldValue.name);

          // Create conditions list
          const kidsConditionIds: string[] = [];
          fieldValue.conditions?.forEach((it) => {
            if (it.checked) {
              kidsConditionIds.push(it.conditionId);
            }
          });

          // Add condition to the field value
          const chosenCondition = fieldValue.conditions?.find(
            (it) => it.checked,
          );
          const formattedValue = `${fieldValue.name} ${
            chosenCondition?.name ? `\n(${chosenCondition?.name})` : ''
          }`;
          setFieldName(fieldValue?.name ? formattedValue : undefined);

          inputValue = {
            attitudeToKidId: fieldValue.id,
            kidsConditionIds: kidsConditionIds,
          };
          break;
        }
        case 'AttitudeToAlcohol':
          setFieldName(fieldValue.name);
          inputValue = {attitudeToAlcoholId: fieldValue.id};
          break;
        case 'AttitudeToMarijuana':
          setFieldName(fieldValue.name);
          inputValue = {attitudeToMarijuanaId: fieldValue.id};
          break;
        case 'AttitudeToPet':
          setFieldName(fieldValue.name);
          inputValue = {attitudeToPetId: fieldValue.id};
          break;
        case 'AttitudeToSmoking':
          setFieldName(fieldValue.name);
          inputValue = {attitudeToSmokingId: fieldValue.id};
          break;
        case 'EducationLevel':
          break;
        case 'Gender':
          setFieldName(fieldValue.shortName);
          inputValue = {genderId: fieldValue.id};
          break;
        case 'NativeLanguage':
          setFieldName(fieldValue.name);
          inputValue = {nativeLanguageId: fieldValue.id};
          break;
        case 'PhysicalActivity':
          setFieldName(fieldValue.name);
          inputValue = {physicalActivityId: fieldValue.id};
          break;
        case 'PoliticalIdeology':
          setFieldName(fieldValue.name);
          inputValue = {politicalIdeologyId: fieldValue.id};
          break;
        case 'RelationshipGoal':
          setFieldName(fieldValue.name);
          inputValue = {relationshipGoalId: fieldValue.id};
          break;
        case 'RelationshipStatus':
          setFieldName(fieldValue.name);
          inputValue = {relationshipStatusId: fieldValue.id};
          break;
        case 'Religion':
          setFieldName(fieldValue.name);
          inputValue = {religionId: fieldValue.id};
          break;
        case 'Zodiac':
          setFieldName(fieldValue.name);
          inputValue = {zodiacId: fieldValue.id};
          break;
        case 'Neighborhood':
          setFieldName(fieldValue.neighborhood ?? undefined);
          inputValue = {
            lat: fieldValue.lat,
            lon: fieldValue.lon,
            neighborhood: fieldValue.neighborhood,
          };
          break;
        case 'Height': {
          const height = fieldValue.heightCm ? fieldValue.heightCm : undefined;
          const formattedHeight =
            fieldValue.heightCm && fieldValue.heightFt
              ? `${fieldValue.heightFt.replace('.', '’')} (${
                  fieldValue.heightCm
                }cm)`
              : undefined;
          setFieldName(formattedHeight ?? undefined);
          inputValue = {
            height: fieldValue.heightFt,
            heightCm: height ? height.toString() : '',
          };
          break;
        }
      }

      updateProfile({variables: {input: inputValue}}).then(() => {
        // console.log(`Value ${fieldValue.__typename} updated`);
      });
    },
    [updateProfile],
  );

  // Update the field visibility in matching
  const updateVisibility = useCallback(
    (newVisibilityValue: boolean) => {
      setVisibility(newVisibilityValue);

      // Parse input value and send
      let inputValue: UserProfileInput = {};
      switch (selectedFieldValue?.__typename) {
        case 'AttitudeToKid':
          inputValue = {showAttitudeToKid: newVisibilityValue};
          break;
        case 'AttitudeToAlcohol':
          inputValue = {showAttitudeToAlcohol: newVisibilityValue};
          break;
        case 'AttitudeToMarijuana':
          inputValue = {showAttitudeToMarijuana: newVisibilityValue};
          break;
        case 'AttitudeToPet':
          inputValue = {showAttitudeToPet: newVisibilityValue};
          break;
        case 'AttitudeToSmoking':
          inputValue = {showAttitudeToSmoking: newVisibilityValue};
          break;
        case 'EducationLevel':
          inputValue = {showEducation: newVisibilityValue};
          break;
        case 'Gender':
          inputValue = {showGender: newVisibilityValue};
          break;
        case 'NativeLanguage':
          inputValue = {showNativeLanguage: newVisibilityValue};
          break;
        case 'PhysicalActivity':
          inputValue = {showPhysicalActivity: newVisibilityValue};
          break;
        case 'PoliticalIdeology':
          inputValue = {showPoliticalIdeology: newVisibilityValue};
          break;
        case 'RelationshipGoal':
          inputValue = {showRelationshipGoal: newVisibilityValue};
          break;
        case 'RelationshipStatus':
          inputValue = {showRelationshipStatus: newVisibilityValue};
          break;
        case 'Religion':
          inputValue = {showReligion: newVisibilityValue};
          break;
        case 'Zodiac':
          inputValue = {showZodiac: newVisibilityValue};
          break;
        case 'Neighborhood':
          inputValue = {showNeighborhood: newVisibilityValue};
          break;
        case 'Height':
          inputValue = {showHeight: newVisibilityValue};
          break;
        case 'PlaceOfBirth':
          inputValue = {showPlaceOfBirth: newVisibilityValue};
          break;
        case 'Job':
          inputValue = {showJob: newVisibilityValue};
          break;
        case 'Education':
          inputValue = {showEducation: newVisibilityValue};
          break;
      }

      updateProfile({variables: {input: inputValue}}).then(() => {
        // console.log(`Visibility ${selectedFieldValue?.__typename} updated`);
      });
    },
    [selectedFieldValue, updateProfile],
  );

  const fieldSavedData = useCallback(() => {
    switch (block.__typename) {
      case 'DefaultBlock': {
        const localFieldName =
          block?.value?.__typename === 'Gender'
            ? block.value.shortName
            : block.value?.name;

        setFieldName(localFieldName);
        setSelectedFieldValue(
          block?.value ?? {
            __typename: block?.list[0]?.__typename,
            id: '',
            name: '',
          },
        );
        break;
      }
      case 'Gender': {
        const localFieldName = block?.value?.shortName;
        setFieldName(localFieldName);
        setSelectedFieldValue(block?.value ?? undefined);
        break;
      }
      case 'HeightBlock': {
        const formattedHeight =
          block?.value?.heightM && block?.value?.heightFt
            ? `${block.value.heightFt?.replace('.', '’')} (${
                block.value.heightM
              }cm)`
            : undefined;

        setFieldName(formattedHeight ?? undefined);
        setSelectedFieldValue(block?.value ?? undefined);
        break;
      }
      case 'JobBlock': {
        setFieldName(strings.editProfile.job.getFormatJob(block.value));
        setSelectedFieldValue(block?.value ?? undefined);
        break;
      }
      case 'EducationBlock': {
        const education: Education = {
          __typename: 'Education',
          educationLevel: (block.value as EducationLevel) ?? undefined,
          nameOfSchool: block.nameOfSchool ?? undefined,
        };
        setFieldName(
          strings.editProfile.education.getFormatEducation(education) ??
            undefined,
        );
        setSelectedFieldValue(education ?? undefined);
        break;
      }
      case 'PlaceOfBirthBlock':
        setFieldName(block.value?.placeOfBirth ?? undefined);
        setSelectedFieldValue(block.value ?? undefined);
        break;
      case 'NeighborhoodBlock':
        setFieldName(block.value.neighborhood ?? undefined);
        setSelectedFieldValue(block.value);
        break;
      case 'KidsBlock': {
        // Find selected value
        const localSelectedValue =
          block.list.find((it) => it.id === block?.value?.id) ??
          ({__typename: block.list[0].__typename, id: '', name: ''} as
            | AttitudeToKid
            | undefined);

        // Add condition to the field value
        const chosenCondition = localSelectedValue?.conditions?.find((it) =>
          block.chosenConditionIds.includes(it.conditionId),
        );
        const formattedValue = `${block.value?.name} ${
          chosenCondition?.name ? `\n(${chosenCondition?.name})` : ''
        }`;
        setFieldName(block.value?.name ? formattedValue : undefined);

        // Check conditions
        if (localSelectedValue?.conditions) {
          const updatedConditions = localSelectedValue.conditions?.map(
            (condition) => {
              if (block.chosenConditionIds.includes(condition.conditionId)) {
                return {
                  ...condition,
                  checked: true,
                };
              } else {
                return condition;
              }
            },
          );

          setSelectedFieldValue({
            ...localSelectedValue,
            conditions: updatedConditions,
          });
        } else {
          setSelectedFieldValue(localSelectedValue);
        }
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
    selectedValue: selectedFieldValue,
    updateValue: updateValue,
    updateVisibility: updateVisibility,
    // visibility: block.visibility,
    visibility: visibility,
  };
};

export default useUpdateProfileField;
