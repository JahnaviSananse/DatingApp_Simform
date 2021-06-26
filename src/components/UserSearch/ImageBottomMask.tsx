import React from 'react';
import Svg, {Path} from 'react-native-svg';

import dimensions from '../../utils/dimensions';

const BottomImageMask: React.FunctionComponent = () => {
  const windowWidth = dimensions.WIDTH;

  const imageAspectWidth = 375;
  const imageAspectHeight = 490;

  const curveAdjustment = 130;
  const maskHeight = (imageAspectHeight / imageAspectWidth) * windowWidth;

  const scaleFactor = imageAspectWidth / imageAspectHeight;
  const scaledHeight = scaleFactor * maskHeight;

  const controlPointX = windowWidth / 2;
  const controlPointY = scaledHeight + curveAdjustment;

  return (
    <Svg height="100%" width="100%">
      <Path
        d={`M0 0 L${windowWidth} 0 L${windowWidth} ${maskHeight} Q${controlPointX} ${controlPointY} 0 ${maskHeight} Z`}
        fill="#fff"
      />
    </Svg>
  );
};

export default React.memo(BottomImageMask);
