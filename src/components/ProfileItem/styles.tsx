/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  rowWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getHeightWithScaleFactor(2),
  },
  value: {
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(24),
    height: getHeightWithScaleFactor(48),
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: getWidthWithScaleFactor(15),
  },
  viewWrapperRenderElement: {
    height: getHeightWithScaleFactor(70),
    marginBottom: getHeightWithScaleFactor(22),
    paddingHorizontal: getWidthWithScaleFactor(24),
  },
});
