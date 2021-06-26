import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const LikesMeEmptySecond: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <Rect
      x={1}
      y={1}
      width={62}
      height={62}
      rx={9}
      fill="#fff"
      stroke="#72DCE2"
      strokeWidth={2}
      strokeDasharray="2 2"
    />
  </Svg>
);

export default React.memo(LikesMeEmptySecond);
