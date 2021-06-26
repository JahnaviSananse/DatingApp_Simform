// @flow

/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {getHeightWithScaleFactor} from '../../utils/dimensions';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  emptyBorders: {
    height: 64,
    marginRight: -62,
    width: 64,
  },
  likeCounter: {
    backgroundColor: COLORS.darkSand50,
    borderColor: COLORS.aquamarineBlue,
    borderRadius: 13,
    borderWidth: 0.5,
    height: 26,
    overflow: 'hidden',
    position: 'absolute',
    right: 18,
    top: getHeightWithScaleFactor(28),
    width: 26,
  },
  likeItem: {
    borderRadius: 50,
    borderWidth: 2,
    height: 64,
    marginRight: -62,
    width: 64,
  },
  likesList: {
    height: 128,
    width: 100,
  },
});
