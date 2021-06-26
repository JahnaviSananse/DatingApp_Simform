/* REACT */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

export default StyleSheet.create({
  itemPhoto: {
    height: 56,
    overflow: 'hidden',
    position: 'absolute',
    width: 56,
  },
  messages: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    marginRight: 15,
  },
  mySuperLike: {
    alignItems: 'center',
    backgroundColor: COLORS.blazeLightBlue,
    borderColor: COLORS.blazeLightBlue,
    borderRadius: 12,
    borderWidth: 1,
    height: 24,
    justifyContent: 'center',
    left: 60,
    position: 'absolute',
    top: 1,
    width: 24,
  },
  photo: {
    borderRadius: 28,
    height: 56,
    width: 56,
  },
  photoWrapper: {
    alignItems: 'center',
    height: getHeightWithScaleFactor(70),
    justifyContent: 'center',
  },
  progressBar: {
    height: 71,
    width: 70,
  },
  rowWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.sand,
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  timeWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.darkSand50,
    borderColor: COLORS.raspberry,
    borderRadius: 16,
    borderWidth: 0.5,
    height: 25,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    right: -15,
    top: getHeightWithScaleFactor(54),
    width: 25,
  },
  turn: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.darkSand50,
    borderRadius: 20,
    marginRight: 20,
    // marginTop: 15,
    padding: 3,
  },
  wrapperTextBlock: {
    alignSelf: 'flex-start',
    flexGrow: 1,
    justifyContent: 'center',
    maxWidth: '70%',
    paddingLeft: getWidthWithScaleFactor(20),
  },
});
