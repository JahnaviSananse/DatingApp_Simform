import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const EducationIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
    <G
      clipPath="url(#prefix__clip0)"
      stroke={colors.pineGreen}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M10 11.606c3.222 0 5.833-2.384 5.833-5.324S13.222.96 10 .96 4.167 3.342 4.167 6.282c0 2.94 2.611 5.324 5.833 5.324z" />
      <Path d="M6.842 10.761L5.834 17.69 10 15.408l4.167 2.281-1.008-6.935" />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" transform="translate(0 .2)" d="M0 0h20v18.251H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default React.memo(EducationIcon);
