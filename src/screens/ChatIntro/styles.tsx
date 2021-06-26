/* REACT */
import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../../configs';
import dimensions, {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  listHeaderIcon: {
    justifyContent: 'center',
    marginRight: getWidthWithScaleFactor(10),
  },
  listHeaderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeightWithScaleFactor(10),
  },

  poppinsTabHeader: {
    marginBottom: getHeightWithScaleFactor(0),
    textTransform: 'uppercase',
  },

  progressBar: {
    height: getHeightWithScaleFactor(70),
    width: getHeightWithScaleFactor(70),
  },
  rowBack: {
    backgroundColor: COLORS.sand,
    borderRadius: 12,
    height: getHeightWithScaleFactor(80),
    justifyContent: 'flex-end',
  },

  scene: {
    flex: 1,
  },

  separateLine: {
    backgroundColor: COLORS.jumbo,
    height: getHeightWithScaleFactor(60),
    marginTop: getHeightWithScaleFactor(10),
    opacity: 0.5,
    width: getWidthWithScaleFactor(0.5),
  },

  tabBar: {
    flexDirection: 'row',
    height: getHeightWithScaleFactor(46),
    justifyContent: 'space-between',
    paddingHorizontal:24
  },
  touchableOpacityButton: {
    alignItems: 'center',
    backgroundColor: COLORS.darkSand50,
    paddingTop: 15,
    width: dimensions.WIDTH * 0.213,
  },
  wrapper: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.sand,
    flex: 1,
    height: '100%',
    paddingTop: 50,
    width: '100%',
  },
  wrapperStyles: {
    height: '100%',
    width: '100%',
  },
});
