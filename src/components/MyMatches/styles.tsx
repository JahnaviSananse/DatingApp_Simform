// @flow

/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {getWidthWithScaleFactor} from '../../utils/dimensions';

export default StyleSheet.create({
  matchPhoto: {
    borderColor: COLORS.sand,
    borderRadius: 33,
    borderWidth: 5,
    height: 65,
    padding: 20,
    width: 65,
  },
  matchesTimer: {
    backgroundColor: COLORS.darkSand50,
    alignItems: 'center',
    borderRadius: 13,
    borderWidth: 0.5,
    bottom: -4,
    height: 25,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    right: -4,
    width: 25,
  },
  matchesTitle: {
    paddingLeft: getWidthWithScaleFactor(55),
    textTransform: 'uppercase',
  },
  progressBar: {
    height: 66,
    position: 'absolute',
    width: 67,
  },
  superLike: {
    alignItems: 'center',
    backgroundColor: COLORS.aquamarineBlue,
    borderColor: COLORS.aquamarineBlue,
    borderRadius: 40,
    borderWidth: 1,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    right: -4,
    top: -4,
    width: 25,
  },
  wrapperMatches: {
    alignItems: 'center',
    height: 82,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 82,
  },
});
