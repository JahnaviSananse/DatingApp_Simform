import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={49} height={48} viewBox="0 0 49 48" fill="none" {...props}>
      <Circle
        cx={24.058}
        cy={24}
        r={23.429}
        fill="#E63888"
        stroke="#E63888"
        strokeWidth={1.143}
      />
      <Path
        d="M34.273 16.48a6.342 6.342 0 00-2.049-1.309 6.573 6.573 0 00-4.834 0 6.341 6.341 0 00-2.05 1.31l-1.216 1.162-1.218-1.163a6.469 6.469 0 00-4.466-1.768 6.469 6.469 0 00-4.466 1.768c-1.185 1.132-1.85 2.667-1.85 4.267 0 1.6.665 3.136 1.85 4.268l1.217 1.162 8.932 8.535 8.933-8.535 1.217-1.162a6.023 6.023 0 001.37-1.958 5.8 5.8 0 00.48-2.31c0-.792-.163-1.577-.48-2.31a6.021 6.021 0 00-1.37-1.957z"
        fill="#FDFAF0"
      />
    </Svg>
  );
}

const BtnLike = React.memo(SvgComponent);
export default BtnLike;
