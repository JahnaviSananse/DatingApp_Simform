import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const EyeOpenIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M1.02 10.02s3.124-6.09 8.59-6.09c5.468 0 8.591 6.09 8.591 6.09s-3.123 6.09-8.59 6.09-8.591-6.09-8.591-6.09z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.611 12.303c1.294 0 2.343-1.022 2.343-2.284 0-1.261-1.05-2.284-2.343-2.284-1.294 0-2.343 1.023-2.343 2.284 0 1.262 1.049 2.284 2.343 2.284z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(EyeOpenIcon);
