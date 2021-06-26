import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const LikeUser: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
    <Circle cx={34} cy={34} r={34} fill="#F08380" />
    <Path
      d="M42.84 26.61a5.499 5.499 0 00-7.78 0L34 27.67l-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06L34 43.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(LikeUser);
