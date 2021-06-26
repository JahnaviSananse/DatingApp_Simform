import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={49} height={48} viewBox="0 0 49 48" fill="none" {...props}>
      <Circle
        cx={24.029}
        cy={24}
        r={23.429}
        fill={props.fill ?? '#fff'}
        stroke="#59CBE8"
        strokeWidth={1.143}
      />
      <Path
        d="M24.372 11.923l3.708 7.899 8.292 1.274-6 6.145 1.416 8.682-7.416-4.101-7.416 4.1 1.416-8.68-6-6.146 8.292-1.274 3.708-7.9z"
        fill={props.color ?? '#59CBE8'}
        stroke={props.color ?? '#59CBE8'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const BtnSuperLike = React.memo(SvgComponent);
export default BtnSuperLike;
