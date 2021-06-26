/* REACT */
import {StyleSheet} from 'react-native';

import dimensions, {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  backAlertMarker: {
    // height: getHeightWithScaleFactor(50),
    marginLeft: getWidthWithScaleFactor(25),
    // width: getWidthWithScaleFactor(177),
    maxWidth: getWidthWithScaleFactor(230),
  },
  mapViewStyle: {
    height: dimensions.HEIGHT - getHeightWithScaleFactor(300),
    width: '100%',
  },
  titleWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    maxWidth: getWidthWithScaleFactor(230),
    paddingLeft: getWidthWithScaleFactor(35),
    position: 'absolute',
  },
});
