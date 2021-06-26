import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={10} height={18} viewBox="0 0 10 18" fill="none" {...props}>
      <Path
        d="M9 1L1 9l8 8"
        stroke={props.color || "#183059"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default React.memo(SvgComponent);
