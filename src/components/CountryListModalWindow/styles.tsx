/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import dimensions, {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.sand,
    paddingLeft: getWidthWithScaleFactor(5),
    paddingVertical: getHeightWithScaleFactor(5),
  },
  inputSearch: {
    color: COLORS.blazeBlue,
    fontFamily: 'IsidoraSansAlt-SemiBold',
    fontSize: 14,
    height: '100%',
    width: '90%',
  },
  inputWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderColor: COLORS.blazeDarker,
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    flexDirection: 'row',
    height: 48,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  modalWrapper: {
    alignContent: 'center',
    backgroundColor: COLORS.sand,
    borderRadius: 15,
    height: dimensions.HEIGHT - 100,
    justifyContent: 'center',
    paddingBottom: getWidthWithScaleFactor(24),
    paddingHorizontal: getWidthWithScaleFactor(24),
    paddingTop: getHeightWithScaleFactor(15),
  },
});
