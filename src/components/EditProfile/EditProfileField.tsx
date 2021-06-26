import React, {useCallback} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useParamsNavigation from '../../hooks/useParamsNavigation';
import {ProfileBlockType} from '../../hooks/useProfileEditFields';
import useUpdateProfileField, {
  Education,
} from '../../hooks/useUpdateProfileField';
import NavigationKey from '../../navigation/NavigationKey';
import {
  EPDefaultScreenType,
  EPEducationScreenType,
  EPJobScreenType,
  EPKidsScreenType,
  EPNHeightScreenType,
  EPNeighbourhoodScreenType,
  EPPlaceOfBirthScreenType,
} from '../../navigation/NavigationParamsTypes';
import {
  AttitudeToKid,
  EducationLevel,
  Gender,
  Height,
  Job,
  Neighborhood,
  PlaceOfBirth,
  Value,
} from '../../store/generated/graphql';
import {EyeCloseIcon, EyeOpenIcon, Isidora} from '../index';

interface Props {
  block: ProfileBlockType;
}
const EditProfileField: React.FunctionComponent<Props> = ({block}) => {
  const {navigate} = useParamsNavigation();

  // Profile edit hook
  const {
    fieldName,
    visibility,
    selectedValue,
    updateValue,
    updateVisibility,
  } = useUpdateProfileField(block);

  // Navigate to the block settings
  const onBlockSettings = useCallback(() => {
    switch (block.__typename) {
      case 'DefaultBlock':
        navigate<EPDefaultScreenType>(NavigationKey.EPDefault, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(
            `${block?.list[0]?.__typename}`,
          ),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Value | undefined,
          title: block.title,
          values: block.list,
        });
        break;
      case 'NeighborhoodBlock':
        navigate<EPNeighbourhoodScreenType>(NavigationKey.EPNeighbourhood, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Neighborhood | undefined,
          title: block.title,
        });
        break;
      case 'HeightBlock':
        navigate<EPNHeightScreenType>(NavigationKey.EPHeight, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Height | undefined,
          title: block.title,
        });
        break;
      case 'JobBlock':
        navigate<EPJobScreenType>(NavigationKey.EPJob, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Job | undefined,
          title: block.title,
        });
        break;
      case 'EducationBlock':
        navigate<EPEducationScreenType>(NavigationKey.EPEducation, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Education | undefined,
          title: block.title,
          values: block.list as EducationLevel[],
        });
        break;
      case 'PlaceOfBirthBlock':
        navigate<EPPlaceOfBirthScreenType>(NavigationKey.EPPlaceOfBirth, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as PlaceOfBirth | undefined,
          title: block.title,
        });
        break;
      case 'KidsBlock':
        navigate<EPKidsScreenType>(NavigationKey.EPKids, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as AttitudeToKid | undefined,
          title: block.title,
          values: block.list as AttitudeToKid[],
        });
        break;
      case 'Gender':
        navigate<EPDefaultScreenType>(NavigationKey.EPGenderScreen, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(`${block.__typename}`),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Gender,
          title: block.title,
          values: block.list,
        });
        break;
    }
  }, [block, navigate, selectedValue, updateValue]);

  return (
    <View>
      <FieldTitle
        title={block.title}
        visibility={visibility}
        onUpdateVisibility={updateVisibility}
      />
      <TouchableOpacity onPress={onBlockSettings}>
        <FieldValue fieldName={fieldName} visibility={visibility} />
      </TouchableOpacity>
    </View>
  );
};

interface FieldTitleProps {
  title: string;
  visibility: boolean;
  onUpdateVisibility: (newVisibility: boolean) => void;
}

const FieldTitle: React.FunctionComponent<FieldTitleProps> = React.memo(
  ({title, visibility, onUpdateVisibility}) => {
    const onPress = useCallback(() => {
      onUpdateVisibility(!visibility);
    }, [onUpdateVisibility, visibility]);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Isidora
          textAlign="left"
          fontWeight="900"
          color={visibility ? colors.blazeBlue : colors.blazeBlue50}
          fontSize={16}
          lineHeight={18}>
          {title}
        </Isidora>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            height: 20,
            justifyContent: 'center',
            width: 22,
          }}
          onPress={onPress}>
          {visibility ? (
            <EyeOpenIcon color={colors.blazeBlue} />
          ) : (
            <EyeCloseIcon color={colors.blazeBlue50} />
          )}
        </TouchableOpacity>
      </View>
    );
  },
);

interface FieldValueProps {
  fieldName: string | undefined;
  visibility: boolean;
}

const FieldValue: React.FunctionComponent<FieldValueProps> = React.memo(
  ({fieldName, visibility}) => {
    // Default field value
    const defaultValue = strings.editProfile.fields.add;
    return (
      <View style={{marginBottom: 20, marginTop: 7}}>
        <View
          style={{
            backgroundColor: visibility ? colors.white : colors.lightSand,
            borderBottomLeftRadius: 20,
            borderColor: colors.borderInputGray,
            borderTopRightRadius: 20,
            borderWidth: 1,
            height: 48,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Isidora
            textAlign="left"
            fontWeight="600"
            fontSize={14}
            lineHeight={14}
            color={
              visibility
                ? fieldName
                  ? colors.blazeBlue
                  : colors.blazeBlue50
                : colors.blazeBlue50
            }>
            {fieldName || defaultValue}
          </Isidora>
        </View>
      </View>
    );
  },
);

export default React.memo(EditProfileField);
