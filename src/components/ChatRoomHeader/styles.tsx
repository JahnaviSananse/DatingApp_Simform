/* REACT */
import {Platform, StyleSheet} from 'react-native';

import {getHeightWithScaleFactor} from '../../utils/dimensions';

export default StyleSheet.create({
  background: {
    height: getHeightWithScaleFactor(Platform.OS === 'ios' ? 291 : 322),
    marginTop: getHeightWithScaleFactor(Platform.OS === 'ios' ? 0 : -30),
    paddingTop: getHeightWithScaleFactor(Platform.OS === 'ios' ? 0 : 30),
    position: 'absolute',
    width: '100%',
  },
  boldText: {
    fontWeight: '800',
  },
});
