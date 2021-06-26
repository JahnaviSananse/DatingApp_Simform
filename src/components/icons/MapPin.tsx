import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const MapPin: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={13} height={14} viewBox="0 0 13 14" fill="none" {...props}>
    <Path
      d="M11.375 5.917c0 3.792-4.875 7.042-4.875 7.042s-4.875-3.25-4.875-7.042a4.875 4.875 0 119.75 0z"
      stroke={props.color || colors.pineGreen}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.5 7.541a1.625 1.625 0 100-3.25 1.625 1.625 0 000 3.25z"
      stroke={props.color || colors.pineGreen}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(MapPin);
