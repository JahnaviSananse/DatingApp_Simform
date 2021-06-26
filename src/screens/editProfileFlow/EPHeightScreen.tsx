import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import {Isidora} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import {NavigationParams} from '../../navigation/NavigationParams';
import {Height} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';

type ScreenRouteProp = RouteProp<NavigationParams, 'EPHeightScreen'>;

const EPHeightScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();

  // Get the params from navigation
  const {
    params: {title, description, selectedValue, onUpdateValue, ImageIcon},
  } = useRoute<ScreenRouteProp>();

  // Height value
  const [height, setHeight] = useState(
    selectedValue?.heightM ? Number(selectedValue?.heightM) : 0,
  );

  // Selected value
  const [localSelectedValue, setLocalSelectedValue] = useState<
    Height | undefined
  >(selectedValue);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (localSelectedValue && localSelectedValue !== selectedValue) {
      onUpdateValue(localSelectedValue);
    }
    goBack();
  }, [goBack, localSelectedValue, onUpdateValue, selectedValue]);

  const onValueChange = useCallback(([value]: number[]) => {
    setHeight(value);
  }, []);

  const onSlidingComplete = useCallback(([value]) => {
    // Calculate feet
    // const feet = Math.round((value / 30.48) * 10) / 10;
    const feet = value * 0.032808;
    const formattedFeet = feet.toFixed(1);

    // Set height
    setLocalSelectedValue({
      __typename: 'Height',
      heightCm: value,
      heightFt: formattedFeet,
      heightIn: 'ft',
      heightM: value,
      // heightM: (value / 100).toString(),
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
          marginTop: -31,
          paddingHorizontal: constants.PROFILE.paddingHorizontal,
        }}>
        <Isidora
          color={colors.blazeBlue}
          fontWeight="600"
          fontSize={12}
          textAlign="right"
          style={{marginBottom: -10}}>
          {strings.editProfile.height.getHeight(height)}
        </Isidora>
        <MultiSlider
          values={[height]}
          sliderLength={dimensions.WIDTH - 40}
          min={122}
          max={213}
          onValuesChange={onValueChange}
          onValuesChangeFinish={onSlidingComplete}
          markerStyle={{
            backgroundColor: colors.raspberry,
            borderWidth: 0,
            height: 24,
            width: 24,
          }}
          selectedStyle={{
            backgroundColor: colors.blazeBlue40,
            borderRadius: 0,
            height: 4,
          }}
          unselectedStyle={{
            backgroundColor: colors.blazeBlue40,
            borderRadius: 0,
            height: 4,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -10,
          }}>
          <Isidora
            lineHeight={16}
            fontSize={14}
            fontWeight="600"
            color={COLORS.blazeBlue}>
            {strings.editProfile.height.minHeight}
          </Isidora>
          <Isidora
            lineHeight={16}
            fontSize={14}
            fontWeight="600"
            color={COLORS.blazeBlue}>
            {strings.editProfile.height.maxHeight}
          </Isidora>
        </View>
      </View>
    </>
  );
};

export default React.memo(EPHeightScreen);
