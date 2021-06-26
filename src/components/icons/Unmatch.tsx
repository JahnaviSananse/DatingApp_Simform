import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={23} height={20} viewBox="0 0 23 20" fill="none" {...props}>
      <Path
        d="M17.076 3.842a4.584 4.584 0 00-6.483 0l-.884.883-.883-.883a4.584 4.584 0 00-6.483 6.483l.883.883 6.483 6.484 6.484-6.484.883-.883a4.584 4.584 0 000-6.483v0z"
        stroke={props.color || '#183059'}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={17}
        cy={13}
        r={5.167}
        fill="#F5F7FA"
        stroke={props.color || '#183059'}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 11l-4 4M15 11l4 4"
        stroke={props.color || '#183059'}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const Block = React.memo(SvgComponent);
export default Block;
