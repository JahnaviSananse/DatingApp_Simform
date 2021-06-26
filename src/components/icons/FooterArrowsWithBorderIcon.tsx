import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const FooterArrowsWithBorderIcon: React.FunctionComponent = () => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
    <G filter="url(#prefix__filter0_i)" fill="#04132E" stroke="#FFC0C0">
      <Path d="M3.942 1.116a1.5 1.5 0 00-2.157 0l-.778.805a1.5 1.5 0 00-.002 2.083l7.29 7.559a1.5 1.5 0 010 2.083l-7.29 7.558a1.5 1.5 0 00.002 2.084l.778.805a1.5 1.5 0 002.157 0l10.097-10.446a1.5 1.5 0 000-2.085L3.942 1.116z" />
      <Path d="M14.834 1.116a1.5 1.5 0 00-2.157 0l-.778.805a1.5 1.5 0 00-.001 2.083l7.29 7.559a1.5 1.5 0 010 2.083l-7.29 7.558a1.5 1.5 0 000 2.084l.779.805a1.5 1.5 0 002.157 0L24.93 13.647a1.5 1.5 0 000-2.085L14.834 1.116z" />
    </G>
    <Defs />
  </Svg>
);

export default React.memo(FooterArrowsWithBorderIcon);
