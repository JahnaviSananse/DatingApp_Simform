/* REACT */
import {StyleSheet} from 'react-native';

import Dimensions, {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  avatarSmall: {
    borderRadius: getHeightWithScaleFactor(12),
    height: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.3,
    width: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.3,
  },
  closeIcon: {
    borderRadius: getHeightWithScaleFactor(15),
    height: 0,
    marginRight: 0,
    position: 'absolute',
    right: 0,
    top: -8,
    width: 12,
  },
  infoIcon: {
    borderRadius: getHeightWithScaleFactor(15),
    height: getHeightWithScaleFactor(20),
    marginRight: getHeightWithScaleFactor(1),
    position: 'absolute',
    right: 0,
    top: -8,
    width: 12,
  },
  smallImg: {
    alignItems: 'center',
    borderRadius: getHeightWithScaleFactor(12),
    height: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.31,
    justifyContent: 'center',
    width: (Dimensions.WIDTH - getWidthWithScaleFactor(48)) * 0.31,
  },
});
