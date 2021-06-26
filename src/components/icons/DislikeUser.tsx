import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const DislikeUser: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
    <Circle cx={34} cy={34} r={34} fill="#fff" />
    <Path
      d="M42 26L26 42M26 26l16 16"
      stroke="#FC0707"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(DislikeUser);
