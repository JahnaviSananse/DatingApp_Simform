import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={49} height={48} viewBox="0 0 49 48" fill="none" {...props}>
      <Circle cx={24.5} cy={24} r={23.5} fill="#59CBE8" stroke="#59CBE8" />
      <Path
        d="M24.5 12l3.707 7.9 8.292 1.274-6 6.145L31.917 36 24.5 31.9 17.084 36l1.416-8.681-6-6.145 8.291-1.275L24.5 12z"
        fill="#FDFAF0"
      />
    </Svg>
  );
}

const SuperLikeIcon = React.memo(SvgComponent);
export default SuperLikeIcon;
