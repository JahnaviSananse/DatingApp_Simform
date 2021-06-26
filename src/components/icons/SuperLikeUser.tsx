import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const SuperLikeUser: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#FFC0C0" />
    <Path
      d="M20 11.667l2.575 5.217 5.758.841-4.166 4.059.983 5.733L20 24.809l-5.15 2.708.983-5.733-4.167-4.059 5.759-.841L20 11.667z"
      stroke="#F24949"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(SuperLikeUser);
