import * as React from 'react';
import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const NewFooterArrows: React.FunctionComponent<SvgProps> = (props) => (
  <Svg width="51" height="50" viewBox="0 0 49 48" fill="none" {...props}>
    <Circle cx="24.5" cy="24" r="24" fill="#FDFAF0" />
    <Rect
      opacity="1"
      x="0.5"
      width="48"
      height="48"
      rx="24"
      fill={props.color || '#303AB2'}
    />
    <Path
      d="M18.6142 16.7943C17.8332 16.0133 17.8332 14.747 18.6142 13.9659C19.3953 13.1849 20.6616 13.1849 21.4426 13.9659L31.3421 23.8654L28.5137 26.6938L18.6142 16.7943Z"
      fill="#FDFAF0"
    />
    <Path
      d="M22.1343 34.3257C21.3688 35.122 20.1028 35.147 19.3064 34.3816C18.5101 33.6161 18.4851 32.35 19.2506 31.5537L28.9526 21.4606L31.8364 24.2326L22.1343 34.3257Z"
      fill="#FDFAF0"
    />
  </Svg>
);

export default React.memo(NewFooterArrows);
