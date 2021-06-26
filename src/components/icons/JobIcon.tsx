import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const JobIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 4h-4V2l-2-2H8L6 2v2H2C.9 4 0 4.9 0 6v5c0 .75.4 1.38 1 1.73V16c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V6c0-1.1-.9-2-2-2zM8 2h4v2H8V2zm10 4H2v5h5V8h6v3h5V6zm-7 6H9v-2h2v2zm-8 4h14v-3h-4v1H7v-1H3v3z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(JobIcon);
