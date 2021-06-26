// @flow

/* REACT */
import {StyleSheet} from 'react-native';

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  appleButton: {
    borderRadius: getHeightWithScaleFactor(20),
    fontSize: 40,
    height: 48,
    width: '100%',
  },
  marginTop: {
    marginTop: getHeightWithScaleFactor(15),
  },
  partWidth: {
    marginBottom: getHeightWithScaleFactor(10),
    width: getWidthWithScaleFactor(160),
  },
  wrapper: {
    borderRadius: 12,
    borderWidth: getWidthWithScaleFactor(1),
    height: 48,
    marginTop: 20,
    overflow: 'hidden',
    width: getWidthWithScaleFactor(263),
  },
});
