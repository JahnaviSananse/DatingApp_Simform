import * as React from 'react';
import Svg, {Defs, Ellipse, G, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const NavigationEye: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={35} height={34} viewBox="0 0 35 34" fill="none" {...props}>
    <G filter="url(#prefix__filter0_i)">
      <Ellipse cx={17.61} cy={17.019} rx={17.181} ry={16.749} fill="#F08380" />
    </G>
    <Path
      d="M34.292 17.02c0 8.961-7.457 16.248-16.682 16.248-9.224 0-16.68-7.287-16.68-16.249S8.385.771 17.61.771c9.226 0 16.682 7.286 16.682 16.248z"
      stroke="#fff"
    />
    <Path
      d="M9.02 17.02s3.124-6.09 8.59-6.09c5.468 0 8.591 6.09 8.591 6.09s-3.123 6.09-8.59 6.09-8.591-6.09-8.591-6.09z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.611 19.303c1.294 0 2.343-1.022 2.343-2.284 0-1.261-1.05-2.284-2.343-2.284-1.294 0-2.343 1.023-2.343 2.284 0 1.262 1.049 2.284 2.343 2.284z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs />
  </Svg>
);

export default React.memo(NavigationEye);
