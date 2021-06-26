import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.998 14.912a.528.528 0 00-.203-.374l-3.25-2.506a.527.527 0 00-.698.048l-.271.275-.784-.634-.924-7.248-.001-.008A1.714 1.714 0 0012.178 3 1.7 1.7 0 0011 3.474 1.699 1.699 0 009.822 3a1.714 1.714 0 00-1.69 1.473l-.924 7.248-.783.634-.272-.275a.527.527 0 00-.697-.048l-3.25 2.506a.527.527 0 00-.065.777l3.725 4.008a.527.527 0 00.378.168h.008c.141 0 .276-.056.375-.156l2.977-3.009a.527.527 0 000-.74l-.171-.175L11 13.844l1.567 1.567-.172.175a.527.527 0 00.001.74l2.977 3.009c.099.1.234.156.375.156h.008a.527.527 0 00.378-.168l3.725-4.008a.527.527 0 00.14-.403zm-13.734 3.29L3.307 15.02l2.423-1.867 2.758 2.802-2.224 2.247zm4.032-5.146L8.693 14.66 7.168 13.11l.868-.702a.527.527 0 00.191-.344l.951-7.454a.651.651 0 011.295.095v7.924a.6.6 0 01-.177.427zm1.408 0a.6.6 0 01-.177-.427V4.705a.651.651 0 011.295-.095l.95 7.454a.527.527 0 00.192.344l.868.702-1.525 1.55-1.603-1.604zm4.032 5.146l-2.224-2.247 2.758-2.803 2.423 1.868-2.957 3.182z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const ReligionIconPublicProfile = React.memo(SvgComponent);
export default ReligionIconPublicProfile;
