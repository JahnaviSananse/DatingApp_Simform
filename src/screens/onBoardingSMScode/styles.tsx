/* REACT */
import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import dimensions, {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  about: {
    marginTop: getHeightWithScaleFactor(15),
  },
  alertResend: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: getHeightWithScaleFactor(50),
    justifyContent: 'center',
    width: '100%',
  },
  alertResendWrapper: {
    borderRadius: getHeightWithScaleFactor(25),
    bottom: 0,
    height: getHeightWithScaleFactor(200),
    paddingHorizontal: 0,
    paddingVertical: getHeightWithScaleFactor(20),
    position: 'absolute',
    width: '100%',
  },
  cellWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(12),
    height: getHeightWithScaleFactor(48),
    justifyContent: 'center',
    width: getHeightWithScaleFactor(48),
  },
  code: {
    fontFamily: 'Poppins',
    fontSize: getFontWithScaleFactor(14),
    lineHeight: getFontWithScaleFactor(22),
    paddingTop: getHeightWithScaleFactor(2),
  },
  codeCell: {
    color: COLORS.primary,
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getFontWithScaleFactor(28),
  },
  codeFiledRoot: {
    width: dimensions.WIDTH - 40,
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
    paddingTop: 1,
  },
  inputWrapper: {
    alignContent: 'center',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: getHeightWithScaleFactor(80),
    height: getHeightWithScaleFactor(47),
    justifyContent: 'space-between',
    paddingHorizontal: getWidthWithScaleFactor(10),
  },
  marginBottomSubTitle: {
    fontFamily: 'Poppins',
    marginBottom: getHeightWithScaleFactor(62),
  },
  marginBottomTitle: {
    fontFamily: 'Poppins',
    marginBottom: getHeightWithScaleFactor(4),
  },
  modalWrapper: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: deviceHeight / 3,
    justifyContent: 'center',
    paddingHorizontal: 30,
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
