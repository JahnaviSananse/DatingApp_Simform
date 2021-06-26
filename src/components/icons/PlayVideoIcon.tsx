import * as React from 'react';
import Svg, {Circle, Defs, G, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const PlayVideoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" {...props}>
    <G opacity={0.5} filter="url(#prefix__filter0_b)">
      <Circle cx={40} cy={40} r={40} fill="#04132E" />
    </G>
    <Path
      d="M36 53.856c-2.667 1.54-6-.384-6-3.464V29.608c0-3.08 3.333-5.004 6-3.464l18 10.392c2.666 1.54 2.666 5.389 0 6.928L36 53.856z"
      fill="#fff"
    />
    <Defs />
  </Svg>
);

export default React.memo(PlayVideoIcon);
