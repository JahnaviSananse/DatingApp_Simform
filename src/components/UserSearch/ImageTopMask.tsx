import React from 'react';
import Svg, {Path} from 'react-native-svg';

import dimensions from '../../utils/dimensions';

const ImageTopMask: React.FunctionComponent = () => {
  const WINDOW_WIDTH = dimensions.WIDTH;
  const IMAGE_MASK_HEIGHT = 490;
  const IMAGE_MASK_PADDING = 30;

  return (
    <Svg height="100%" width="100%">
      <Path
        d={`
                M 
                ${IMAGE_MASK_HEIGHT},${IMAGE_MASK_HEIGHT} 
                ${WINDOW_WIDTH},${IMAGE_MASK_PADDING}
                
                C 
                ${WINDOW_WIDTH / 2},80 
                ${WINDOW_WIDTH / 4},-20 
                0,${IMAGE_MASK_PADDING}
                
                M
                ${IMAGE_MASK_HEIGHT},${IMAGE_MASK_HEIGHT}
                0,${IMAGE_MASK_PADDING}
                
                L 0 ${IMAGE_MASK_HEIGHT}
                `}
        fill="#fff"
      />
    </Svg>
  );
};

export default React.memo(ImageTopMask);
