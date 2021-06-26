import React, {useCallback} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../configs/styles/colors';
import Poppins from './texts/Poppins';

interface Props {
  title: string;
  selected: boolean;
  style?: StyleProp<ViewStyle>;
  onButtonSelected: (title?: string, id?: number) => void;
  id?: number;
}

const FFStateButton: React.FunctionComponent<Props> = ({
  title,
  selected,
  style,
  onButtonSelected,
  id,
}) => {
  const onPress = useCallback(() => {
    onButtonSelected(title, id);
  }, [onButtonSelected, title, id]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: selected ? colors.haiti : colors.catskillWhite,
          borderRadius: 12,
          paddingVertical: 12,
          width: '100%',
        },
        style,
      ]}>
      <Poppins
        lineHeight={24}
        fontWeight="500"
        color={selected ? colors.white : colors.blackPearl}>
        {title}
      </Poppins>
    </TouchableOpacity>
  );
};

export default React.memo(FFStateButton);
