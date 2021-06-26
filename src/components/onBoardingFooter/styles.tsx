/* REACT */
import {Dimensions, StyleSheet} from 'react-native';

// import {
//   getHeightWithScaleFactor,
//   getWidthWithScaleFactor,
// } from '../../utils/dimensions';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  imageBGStyles: {
    alignItems: 'flex-end',
    height: 180,
    paddingHorizontal: 24,
    paddingTop: 70,
    width: deviceWidth,
  },
});
