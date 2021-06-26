/* REACT */
import {Dimensions, Platform, StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import colors from '../../configs/styles/colors';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
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
  dateRow: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderColor: colors.black15,
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    justifyContent: 'space-between',
    marginTop: 4,
    paddingHorizontal: 15,
  },
  dateTitle: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontSize: getFontWithScaleFactor(14),
    lineHeight: 48,
  },
  iconWrapper: {
    alignContent: 'center',
    alignSelf: 'center',
    height: getHeightWithScaleFactor(47),
    justifyContent: 'center',
  },
  input: {
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
    paddingHorizontal: getWidthWithScaleFactor(20),
  },
  marginBottomSubTitle: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    marginBottom: getHeightWithScaleFactor(62),
  },
  marginBottomTitle: {
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontStyle: 'normal',
    marginBottom: getHeightWithScaleFactor(4),
  },
  modalWrapper: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: getHeightWithScaleFactor(
      deviceHeight / 2.5 + (Platform.OS === 'ios' ? 35 : 20),
    ),
    justifyContent: 'center',
    overflow: 'hidden',
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
