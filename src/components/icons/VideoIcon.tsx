import * as React from 'react';
import Svg, {Mask, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21.012 7.145a1.719 1.719 0 00-1.851.306l-2.161 2V8c0-1.654-1.345-3-3-3H5C3.346 5 2 6.345 2 8v8c0 1.655 1.346 3 3 3h9c1.655 0 3-1.345 3-3v-1.45l2.16 1.998a1.723 1.723 0 001.851.307c.61-.266.989-.835.989-1.484V8.63c0-.65-.38-1.219-.988-1.485z"
        fill="#fff"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={4}
        width={21}
        height={15}>
        <Path
          d="M21.012 7.145a1.719 1.719 0 00-1.851.306l-2.161 2V8c0-1.654-1.345-3-3-3H5C3.346 5 2 6.345 2 8v8c0 1.655 1.346 3 3 3h9c1.655 0 3-1.345 3-3v-1.45l2.16 1.998a1.723 1.723 0 001.851.307c.61-.266.989-.835.989-1.484V8.63c0-.65-.38-1.219-.988-1.485z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  );
}

const VideoIcon = React.memo(SvgComponent);
export default VideoIcon;
