/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';
import {getPoppinsFontByWeight} from '../texts/PoppinsTypes';

export default StyleSheet.create({
  closeIcon: {
    alignContent: 'center',
    alignSelf: 'flex-end',
    height: getWidthWithScaleFactor(48),
    justifyContent: 'center',
    position: 'absolute',
    right: getWidthWithScaleFactor(15),
  },
  container: {
    marginLeft: getWidthWithScaleFactor(24),
  },
  profileInputMargin: {
    marginBottom: getHeightWithScaleFactor(5),
    textTransform: 'uppercase',
  },
  textInput: {
    color: COLORS.biscay,
    fontFamily: getPoppinsFontByWeight('normal', '500'),
    fontSize: 14,
    height: getHeightWithScaleFactor(48),
    lineHeight: getHeightWithScaleFactor(18),
    paddingEnd: getWidthWithScaleFactor(30),
    paddingStart: getWidthWithScaleFactor(20),
  },
  textInputWrapper: {
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(12),
    height: getHeightWithScaleFactor(48),
    marginBottom: getHeightWithScaleFactor(25),
  },
});
