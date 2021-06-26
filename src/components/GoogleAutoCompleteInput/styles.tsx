/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';
import {getPoppinsFontByWeight} from '../texts/PoppinsTypes';

export default StyleSheet.create({
  element: {
    borderRadius: 30,
    height: 48,
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
  },
  resultList: {
    borderRadius: getHeightWithScaleFactor(12),
    paddingHorizontal: 20,
    paddingVertical: getHeightWithScaleFactor(10),
  },
  textInput: {
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(12),
    color: COLORS.primary,
    fontFamily: getPoppinsFontByWeight('normal', '500'),
    fontSize: getFontWithScaleFactor(14),
    height: getHeightWithScaleFactor(48),
    lineHeight: getHeightWithScaleFactor(20),
    marginBottom: getHeightWithScaleFactor(25),
    paddingEnd: getWidthWithScaleFactor(30),
    paddingStart: getWidthWithScaleFactor(20),
  },
  title: {
    marginBottom: getHeightWithScaleFactor(8),
    textTransform: 'uppercase',
  },
});
