import React, {useCallback} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import colors from '../configs/styles/colors';
import dimensions from '../utils/dimensions';
import {Isidora} from "./index";

interface Props {
  id: number;
  title: string;
  selected: boolean;
  style?: StyleProp<ViewStyle>;
  onButtonSelected: (id: number) => void;
}

const FFQuestionButton: React.FunctionComponent<Props> = ({
  id,
  title,
  selected = false,
  style,
  onButtonSelected,
}) => {
  const onPress = useCallback(() => {
    onButtonSelected(id);
  }, [id, onButtonSelected]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          alignSelf: 'center',
          backgroundColor: selected ? colors.raspberry : colors.sand,
          borderBottomLeftRadius: 14,
          borderTopRightRadius: 14,
          height: 63,
          justifyContent: 'center',
          paddingHorizontal: 50,
          width: dimensions.WIDTH * 0.85,
        },
        style,
      ]}>
      <Isidora
        lineHeight={18}
        fontWeight="600"
        fontSize={16}
        color={selected ? colors.sand : colors.blazeBlue}>
        {title}
      </Isidora>
    </TouchableOpacity>
  );
};

export default React.memo(FFQuestionButton);
