/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import Dimensions, {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  bigImg: {
    alignItems: 'center',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(12),
    height: (Dimensions.WIDTH - getWidthWithScaleFactor(70)) * 0.69,
    justifyContent: 'center',
    marginLeft: getWidthWithScaleFactor(12),
    maxHeight: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.685,
    position: 'absolute',
    width: (Dimensions.WIDTH - getWidthWithScaleFactor(72)) * 0.69,
  },
  countPrimaryImg: {
    alignItems: 'center',
    backgroundColor: COLORS.mercury,
    borderColor: COLORS.white,
    borderRadius: getHeightWithScaleFactor(10),
    borderWidth: getHeightWithScaleFactor(2),
    height: getHeightWithScaleFactor(16),
    justifyContent: 'center',
    left: getWidthWithScaleFactor(-8),
    position: 'absolute',
    top: getHeightWithScaleFactor(-8),
    width: getHeightWithScaleFactor(16),
  },
  item: {
    alignItems: 'center',
    height: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.31,
    justifyContent: 'center',
    width: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.31,
  },
});
