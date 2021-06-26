import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const HeartIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M17.367 3.841a4.583 4.583 0 00-6.484 0L10 4.725l-.883-.884a4.584 4.584 0 10-6.484 6.484l.884.883L10 17.69l6.483-6.483.884-.883a4.585 4.585 0 000-6.484v0z"
      stroke={colors.pineGreen}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(HeartIcon);
