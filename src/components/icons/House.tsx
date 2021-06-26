import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const House: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={18} height={17} viewBox="0 0 18 17" fill="none" {...props}>
    <Path
      d="M3.033 6.78V16H7.23v-4.197h3.148V16h4.198V6.78M3.558 6.33V1.833h2.098V4.53"
      stroke={colors.pineGreen}
      strokeWidth={1.667}
      strokeMiterlimit={10}
    />
    <Path
      d="M1.459 8.13l7.344-6.297 7.347 6.296"
      stroke={colors.pineGreen}
      strokeWidth={1.667}
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
    <Path
      d="M10.379 6.556H7.23v2.623h3.149V6.556z"
      stroke={colors.pineGreen}
      strokeWidth={1.667}
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
  </Svg>
);

export default React.memo(House);
