// @flow

/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  buttonsRow: {
    alignItems: 'center',
    height: getHeightWithScaleFactor(48),
    justifyContent: 'space-between',
    paddingRight: getWidthWithScaleFactor(20),
  },
  likeCounter: {
    backgroundColor: COLORS.aquamarineBlue,
    borderColor: COLORS.biscay,
    borderRadius: getHeightWithScaleFactor(13),
    borderWidth: getHeightWithScaleFactor(2),
    height: getHeightWithScaleFactor(26),
    overflow: 'hidden',
    position: 'absolute',
    right: getWidthWithScaleFactor(30),
    top: getHeightWithScaleFactor(26),
    width: getHeightWithScaleFactor(26),
  },
  likeItem: {
    borderRadius: getHeightWithScaleFactor(10),
    borderWidth: getWidthWithScaleFactor(2),
    height: getHeightWithScaleFactor(64),
    marginRight: getHeightWithScaleFactor(-62),
    width: getHeightWithScaleFactor(64),
  },
  likesList: {
    height: getHeightWithScaleFactor(120),
    width: getWidthWithScaleFactor(110),
  },
  listsRow: {
    backgroundColor: COLORS.sand,
    justifyContent: 'space-between',
    paddingLeft: getWidthWithScaleFactor(20),
    width:'100%'
  },
  logo: {
    height: getHeightWithScaleFactor(25),
    width: getWidthWithScaleFactor(40),
  },
  matchPhoto: {
    borderColor: COLORS.blackPearl,
    borderRadius: 33,
    borderWidth: 5,
    height: 65,
    marginRight: getWidthWithScaleFactor(11),
    padding: 20,
    width: 65,
  },
  matchesTimer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.biscay,
    borderRadius: getHeightWithScaleFactor(14),
    borderWidth: getWidthWithScaleFactor(2),
    bottom: getHeightWithScaleFactor(0),
    height: getHeightWithScaleFactor(28),
    left: getWidthWithScaleFactor(0),
    overflow: 'hidden',
    position: 'absolute',
    textTransform: 'uppercase',
    width: getHeightWithScaleFactor(28),
  },
  matchesTitle: {
    opacity: 0.64,
    paddingLeft: getWidthWithScaleFactor(15),
    textTransform: 'uppercase',
  },
  progressBar: {
    height: 65,
    position: 'absolute',
    width: 65,
  },
  separator: {
    alignSelf: 'center',
    backgroundColor: COLORS.blazeBlue,
    height: 80,
    width: getHeightWithScaleFactor(1),
  },
  superLike: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 1000,
  },
  wrapperMatches: {
    height: getHeightWithScaleFactor(82),
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: getHeightWithScaleFactor(82),
  },
});
