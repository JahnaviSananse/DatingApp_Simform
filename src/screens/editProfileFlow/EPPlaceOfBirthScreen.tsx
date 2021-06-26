import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import {GoogleAutoCompleteInput, Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import {NavigationParams} from '../../navigation/NavigationParams';
import {PlaceOfBirth} from '../../store/generated/graphql';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPPlaceOfBirthScreen'>;

const EPPlaceOfBirthScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();

  // Get the params from navigation
  const {
    params: {title, description, selectedValue, onUpdateValue, ImageIcon},
  } = useRoute<ScreenRouteProp>();

  // Selected value
  const [localSelectedValue, setLocalSelectedValue] = useState<
    PlaceOfBirth | undefined
  >(selectedValue);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  const onChangeText = useCallback((text: string) => {
    setLocalSelectedValue({
      __typename: 'PlaceOfBirth',
      placeOfBirth: text.trim(),
    });
  }, []);

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
          marginTop: -26,
          paddingHorizontal: constants.PROFILE.paddingHorizontal,
        }}>
        <Isidora
          color={colors.blazeBlue}
          fontWeight="600"
          fontSize={16}
          textAlign="left"
          style={{paddingBottom: 8}}>
          {strings.editProfile.placeOfBirth.label}
        </Isidora>
        <GoogleAutoCompleteInput
          place={selectedValue?.placeOfBirth ?? ''}
          onChangePlace={onChangeText}
        />
      </View>
    </>
  );
};

export default React.memo(EPPlaceOfBirthScreen);
