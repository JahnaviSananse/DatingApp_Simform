import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const SuperLikeStarIcon: React.FunctionComponent<SvgProps> = ({...props}) => (
  <Svg width={52} height={52} viewBox="0 0 52 52" fill="none" {...props}>
    <Circle cx={26} cy={26} r={26} fill="#FFC0C0" />
    <Path
      d="M26.096 16.46l3.115 6.17 6.965.995-5.04 4.8 1.19 6.78-6.23-3.203-6.23 3.203 1.19-6.78-5.04-4.8 6.965-.995 3.115-6.17z"
      stroke="#183059"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(SuperLikeStarIcon);
