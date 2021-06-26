/* REACT */
import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  about: {
    marginTop: getHeightWithScaleFactor(15),
  },
  code: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontSize: getFontWithScaleFactor(14),
    lineHeight: getFontWithScaleFactor(22),
    paddingTop: getHeightWithScaleFactor(2),
  },
  codeWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    height: getHeightWithScaleFactor(47),
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.sand,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    color: COLORS.blazeBlue,
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontSize: getFontWithScaleFactor(14),
    height: getHeightWithScaleFactor(47),
  },
  inputWrapper: {
    alignContent: 'center',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(80),
    height: getHeightWithScaleFactor(47),
    justifyContent: 'space-between',
    // paddingHorizontal: getWidthWithScaleFactor(20),
  },
  marginBottomSubTitle: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    marginBottom: getHeightWithScaleFactor(62),
  },
  marginBottomTitle: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontStyle: 'normal',
    // fontWeight: '600',
    marginBottom: getHeightWithScaleFactor(4),
  },
  modalWrapper: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: getHeightWithScaleFactor(30),
    height: getHeightWithScaleFactor(deviceHeight / 3),
    justifyContent: 'center',
    paddingHorizontal: getWidthWithScaleFactor(30),
  },
  pickerInput: {
    color: COLORS.RAVEN_LIGHT,
    fontSize: getFontWithScaleFactor(16),
    fontWeight: '500',
    height: getHeightWithScaleFactor(30),
    justifyContent: 'center',
    lineHeight: getHeightWithScaleFactor(22),
    marginRight: getWidthWithScaleFactor(20),
    maxWidth: getWidthWithScaleFactor(150),
    minWidth: getWidthWithScaleFactor(150),
    padding: getHeightWithScaleFactor(5),
    width: '100%',
  },
  rowPhoneCode: {
    justifyContent: 'space-between',
  },
  selectedInputWrapper: {
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(80),
    height: getHeightWithScaleFactor(47),
    marginRight: getWidthWithScaleFactor(16),
    paddingLeft: getWidthWithScaleFactor(10),
    paddingRight: getWidthWithScaleFactor(15),
    width: getWidthWithScaleFactor(120),
  },
  svgWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    height: getHeightWithScaleFactor(47),
    justifyContent: 'center',
  },
});
