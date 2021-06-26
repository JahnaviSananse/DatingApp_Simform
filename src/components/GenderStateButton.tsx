import React, {useCallback} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../configs/styles/colors';
import {LocalGenderType} from './GenderList';
import {Isidora} from './index';

interface Props {
  gender: LocalGenderType;
  style?: StyleProp<ViewStyle>;
  showShortName?: boolean;
  onButtonSelected: (gender: LocalGenderType) => void;
}

const GenderStateButton: React.FunctionComponent<Props> = ({
  gender,
  style,
  showShortName,
  onButtonSelected,
}) => {
  const onPress = useCallback(() => {
    onButtonSelected(gender);
  }, [gender, onButtonSelected]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          alignItems: 'center',
          backgroundColor: gender.selected
            ? colors.blazeBlue
            : colors.blazeBlue30,
          borderRadius: 30,
          height: 48,
          justifyContent: 'center',
          width: '100%',
        },
        style,
      ]}>
      <Isidora
        lineHeight={14}
        fontSize={16}
        fontWeight="600"
        color={gender.selected ? colors.sand : colors.blazeBlue}>
        {/* color={gender.selected ? colors.white : colors.blackPearl}> */}
        {showShortName ? gender.shortName : gender.name}
      </Isidora>
    </TouchableOpacity>
  );
};

export default React.memo(GenderStateButton);
