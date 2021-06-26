import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const LastUser: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#46597A" />
    <Path
      d="M17.5 21.666L13.334 17.5l4.166-4.167"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.667 26.667v-5.834a3.333 3.333 0 00-3.334-3.333h-10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(LastUser);
