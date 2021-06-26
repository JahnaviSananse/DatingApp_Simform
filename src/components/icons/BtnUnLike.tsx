import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={49} height={48} viewBox="0 0 49 48" fill="none" {...props}>
      <Circle cx={24.5} cy={24} r={24} fill="#9193B7" />
      <Path
        d="M26.262 23.999l7.87-7.858a1.254 1.254 0 10-1.774-1.774l-7.857 7.87-7.858-7.87a1.254 1.254 0 10-1.774 1.774L22.739 24l-7.87 7.858a1.248 1.248 0 000 1.773 1.249 1.249 0 001.774 0l7.858-7.87 7.857 7.87a1.25 1.25 0 001.774 0 1.251 1.251 0 000-1.773l-7.87-7.858z"
        fill="#FDFAF0"
      />
    </Svg>
  );
}

const BtnUnLike = React.memo(SvgComponent);
export default BtnUnLike;
