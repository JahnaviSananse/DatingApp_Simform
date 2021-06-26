import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const AlcoholIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M9.166 15.833v-4.259L2.5 4.167V2.5h15v1.667l-6.667 7.407v4.26h4.166V17.5H5v-1.667h4.167zm-2.925-10h7.517l1.5-1.666H4.74l1.5 1.666zm1.5 1.667L10 10.008 12.258 7.5H7.74z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(AlcoholIcon);
