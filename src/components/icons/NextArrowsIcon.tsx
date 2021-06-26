import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from "../../configs";

type Props = SvgProps;

const NextArrowsIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={24} height={24} viewBox="0 0 26 26" fill="none" {...props}>
    <Path
      d="M3.942 1.616a1.5 1.5 0 00-2.157 0l-.778.805a1.5 1.5 0 00-.002 2.083l7.29 7.559a1.5 1.5 0 010 2.083l-7.29 7.558a1.5 1.5 0 00.002 2.084l.778.805a1.5 1.5 0 002.157 0l10.097-10.446a1.5 1.5 0 000-2.085L3.942 1.616z"
      fill={COLORS.sand}
    />
    <Path
      d="M14.833 1.616a1.5 1.5 0 00-2.157 0l-.778.805a1.5 1.5 0 000 2.083l7.29 7.559a1.5 1.5 0 010 2.083l-7.29 7.558a1.5 1.5 0 000 2.084l.778.805a1.5 1.5 0 002.157 0l10.098-10.446a1.5 1.5 0 000-2.085L14.833 1.616z"
      fill={COLORS.sand}
    />
  </Svg>
);

export default React.memo(NextArrowsIcon);
