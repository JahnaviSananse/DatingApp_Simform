/* REACT */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {COLORS, CONSTANT} from '../../../configs';
import BackIcon from '../../icons/BackArrowIcon';
import CloseIcon from '../../icons/CloseIcon';
// import SaveChangesIcon from '../../icons/SaveChangesIcon';
import styles from './styles';

export interface Props {
  onPress: () => void;
  isChange?: boolean;
  isWhite?: boolean;
  color?: string;
  isCross?: boolean;
  strokeWidth?: number;
}
const HeaderLeftButton: React.FC<Props> = ({
  onPress,
  isWhite = false,
  color,
  isCross,
  strokeWidth,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} hitSlop={CONSTANT.HIT_SLOP_15}>
        {isCross ? (
          <CloseIcon
            color={isWhite ? COLORS.white : color ? color : COLORS.blazeBlue}
          />
        ) : (
          <BackIcon
            color={isWhite ? COLORS.white : color ? color : COLORS.blazeBlue}
            strokeWidth={strokeWidth ?? 2}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(HeaderLeftButton);
