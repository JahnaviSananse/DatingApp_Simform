/* REACT */
import {StyleSheet} from 'react-native';

import {getHeightWithScaleFactor} from '../../utils/dimensions';
import {COLORS} from "../../configs";

export default StyleSheet.create({
  flatListItem: {
    height: 48,
    justifyContent: 'space-between',
    alignItems:'center',
    borderBottomWidth: 0.5,
    borderColor:COLORS.blazeDarker,
  },
});
