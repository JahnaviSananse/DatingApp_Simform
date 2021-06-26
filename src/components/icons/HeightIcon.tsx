import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const HeightIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={6} height={19} viewBox="0 0 6 19" fill="none" {...props}>
    <Path
      d="M5.5 0h-5C.224 0 0 .266 0 .594v17.812c0 .328.224.594.5.594h5c.276 0 .5-.266.5-.594V.594C6 .266 5.776 0 5.5 0zM5 17.813H1V16.03h2.5v-1.187H1v-1.781h1.5v-1.188H1v-1.781h2.5V8.906H1V7.125h1.5V5.937H1v-1.78h2.5V2.968H1V1.188h4v16.625z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(HeightIcon);
