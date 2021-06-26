import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const ChildrenIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8V0c4.42 0 8 3.58 8 8h-8zm2-5.66V6h3.66a6.032 6.032 0 00-3.66-3.66zM4.94 9l-.95-2H.5v2h2.22s1.89 4.07 2.12 4.42C3.74 14.01 3 15.17 3 16.5 3 18.43 4.57 20 6.5 20c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61A7.948 7.948 0 0019.5 9H4.94zM5 16.5c0 .83.67 1.5 1.5 1.5S8 17.33 8 16.5 7.33 15 6.5 15 5 15.67 5 16.5zM15.5 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm.45-4.97l.29-.37c.4-.51.71-1.07.92-1.66H5.87c.125.254.237.486.333.686.159.328.275.568.337.674l.44.67c1.18.17 2.18.93 2.68 1.97h2.68a3.505 3.505 0 013.61-1.97z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(ChildrenIcon);
