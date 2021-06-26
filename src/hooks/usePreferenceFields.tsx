import {useCallback, useEffect, useState} from 'react';

import {
  DefaultBlock,
  Preference,
  Value,
  useMyPreferencesQuery,
} from '../store/generated/graphql';
import {STRINGS} from "../configs";

type ProfileFieldsReturnType = {
  blocksList: undefined | DefaultBlock[];
};

const usePreferenceFields = (): ProfileFieldsReturnType => {
  const {data} = useMyPreferencesQuery();
  const [blocksList, setBlocksList] = useState<DefaultBlock[]>();

  const getValueByName = useCallback((name?: string, values?: Value[]):
    | Value
    | undefined => {
    if (name && values) {
      const value = values.find((it) => it.name === name);
      if (value) {
        return {
          __typename: value.__typename,
          conditions: undefined,
          id: value.id,
          name: name,
          shortName: '',
        };
      }
    }
    return undefined;
  }, []);

  const generateBlocksList = useCallback(
    (preference: Preference) => {
      const localBlocksList: DefaultBlock[] = [];

      // Religion
      const religion: undefined | string = preference.religion ?? undefined;
      const religionList = preference.religionsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: 'Looking to pray together to stay together?',
        list: religionList as Value[],
        title: 'Religion',
        value: getValueByName(religion, religionList),
        visibility: false,
      });

      // Education level
      const education: undefined | string =
        preference.educationLevel ?? undefined;
      const educationList = preference.educationLevelsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.religion,
        list: educationList as Value[],
        title: 'Education',
        value: getValueByName(education, educationList),
        visibility: false,
      });

      // Relationship Goals
      const relGoals: undefined | string =
        preference.relationshipGoals ?? undefined;
      const relGoalsList = preference.relationshipGoalsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.relationshipGoal,
        list: relGoalsList as Value[],
        title: 'Relationship Goals',
        value: getValueByName(relGoals, relGoalsList),
        visibility: false,
      });

      // Relationship Status
      const relStatus: undefined | string =
        preference.relationshipStatus ?? undefined;
      const relStatusList = preference.relationshipStatusList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.relationshipStatus,
        list: relStatusList as Value[],
        title: 'Relationship Status',
        value: getValueByName(relStatus, relStatusList),
        visibility: false,
      });

      // Kids
      const kids: undefined | string = preference.attitudeToKids ?? undefined;
      const kidsList = preference.attitudeToKidsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.kids,
        list: kidsList as Value[],
        title: 'Kids',
        value: getValueByName(kids, kidsList),
        visibility: false,
      });

      // Physical Activity
      const physActive: undefined | string =
        preference.physicalActivity ?? undefined;
      const physActiveList = preference.physicalActivitiesList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.physicalActivity,
        list: physActiveList as Value[],
        title: 'Physical Activity',
        value: getValueByName(physActive, physActiveList),
        visibility: false,
      });

      // Pets
      const pets: undefined | string = preference.attitudeToPet ?? undefined;
      const petsList = preference.attitudeToPetsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.pets,
        list: petsList as Value[],
        title: 'Pets',
        value: getValueByName(pets, petsList),
        visibility: false,
      });

      // Alcohol
      const alcohol: undefined | string =
        preference.attitudeToAlcohol ?? undefined;
      const alcoholList = preference.attitudeToAlcoholsList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.alcohol,
        list: alcoholList as Value[],
        title: 'Alcohol',
        value: getValueByName(alcohol, alcoholList),
        visibility: false,
      });

      // Smoking
      const smoking: undefined | string =
        preference.attitudeToSmoking ?? undefined;
      const smokingList = preference.attitudeToSmokingList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.smoking,
        list: smokingList as Value[],
        title: 'Smoking (Tobacco)',
        value: getValueByName(smoking, smokingList),
        visibility: false,
      });

      // Marijuana Use
      const marijuana: undefined | string =
        preference.attitudeToMarijuana ?? undefined;
      const marijuanaList = preference.attitudeToMarijuanaList ?? undefined;
      localBlocksList.push({
        __typename: 'DefaultBlock',
        description: STRINGS.matchPreferenceSettings.messages.marijuana,
        list: marijuanaList as Value[],
        title: 'Marijuana Use',
        value: getValueByName(marijuana, marijuanaList),
        visibility: false,
      });

      // Update the global blocks list
      setBlocksList(localBlocksList);
    },
    [getValueByName],
  );

  useEffect(() => {
    if (data && data.myPreferences) {
      generateBlocksList(data.myPreferences as Preference);
    }
  }, [data, generateBlocksList]);

  return {
    blocksList: blocksList,
  };
};

export default usePreferenceFields;
