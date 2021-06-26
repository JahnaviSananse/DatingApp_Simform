/* REACT */
import {Dimensions, PixelRatio} from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
  ifIphoneX,
} from 'react-native-iphone-x-helper';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('window');

export default {
  HEIGHT,
  WIDTH,
};

const MOCKUP_WIDTH = 380;
const MOCKUP_HEIGHT = 801;
const _height = HEIGHT - ifIphoneX(getStatusBarHeight(), 0) - getBottomSpace();

/**
 * Get size with scale factor
 *
 * @param {number} size - original size
 */
export function getWidthWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (WIDTH / MOCKUP_WIDTH));
}
/**
 * Get size with scale factor
 *
 * @param {number} size - original size
 */
export function getHeightWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (_height / MOCKUP_HEIGHT));
}

/**
 * Get font with scale factor
 *
 * @param {number} size - original size
 */
export function getFontWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (_height / MOCKUP_HEIGHT));
}
