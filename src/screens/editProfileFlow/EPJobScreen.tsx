import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import FFTextInput from '../../components/FFTextInput';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import {NavigationParams} from '../../navigation/NavigationParams';
import {Job} from '../../store/generated/graphql';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPJobScreen'>;

const EPJobScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();

  // Get the params from navigation
  const {
    params: {title, description, selectedValue, onUpdateValue, ImageIcon},
  } = useRoute<ScreenRouteProp>();

  // Selected value
  const [localSelectedValue, setLocalSelectedValue] = useState<Job | undefined>(
    selectedValue,
  );

  // Place of work
  const [placeOfWork, setPlaceOfWork] = useState(selectedValue?.placeOfWork);

  // Job description
  const [jobDescription, setJobDescription] = useState(
    selectedValue?.jobDescription,
  );

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
      __typename: 'Job',
      jobDescription: jobDescription,
      placeOfWork: placeOfWork,
    });
  }, [jobDescription, placeOfWork]);

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
          marginTop: -25,
          paddingHorizontal: constants.PROFILE.paddingHorizontal,
        }}>
        <Isidora
          color={colors.blazeBlue}
          fontSize={16}
          fontWeight="600"
          textAlign="left"
          style={{paddingBottom: 6}}>
          {strings.editProfile.job.jobDescription.label}
        </Isidora>
        <FFTextInput
          value={jobDescription ?? ''}
          clearVisible={false}
          contextMenuHidden
          placeholder={strings.editProfile.job.jobDescription.placeholder}
          keyboardType="ascii-capable"
          returnKeyType="done"
          onChangeText={setJobDescription}
          wrapperStyle={{borderColor: colors.blazeBlue}}
        />
        <Isidora
          color={colors.blazeBlue}
          fontSize={16}
          fontWeight="600"
          textAlign="left"
          style={{
            paddingBottom: 6,
            paddingTop: 40,
          }}>
          {strings.editProfile.job.placeOfWork.label}
        </Isidora>
        <FFTextInput
          value={placeOfWork ?? ''}
          clearVisible={false}
          contextMenuHidden
          placeholder={strings.editProfile.job.placeOfWork.placeholder}
          keyboardType="ascii-capable"
          returnKeyType="done"
          onChangeText={setPlaceOfWork}
          wrapperStyle={{borderColor: colors.blazeBlue}}
        />
      </View>
    </>
  );
};

export default React.memo(EPJobScreen);
