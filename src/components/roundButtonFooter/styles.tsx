/* REACT */
import {StyleSheet} from 'react-native';

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  iconRowWrapper: {
    alignItems: 'center',
    borderRadius: getHeightWithScaleFactor(30),
    height: getHeightWithScaleFactor(56),
    justifyContent: 'center',
    paddingLeft: getWidthWithScaleFactor(4),
    width: getHeightWithScaleFactor(56),
  },
  progressBar: {
    height: getHeightWithScaleFactor(74),
    marginLeft: -getHeightWithScaleFactor(9),
    marginTop: -getHeightWithScaleFactor(9),
    position: 'absolute',
    width: getHeightWithScaleFactor(74),
  },
});
