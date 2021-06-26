import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  gridOff: boolean;
}

const GridIcon: React.FunctionComponent<Props> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect
      x={6.5}
      y={2.9}
      width={1}
      height={19}
      rx={0.5}
      fill="#FDFAF0"
      stroke="#303AB2"
    />
    <Rect x={16} y={2.4} width={2} height={20} rx={1} fill="#303AB2" />
    <Rect x={2} y={6.4} width={20} height={2} rx={1} fill="#303AB2" />
    {props.gridOff && (
      <Rect
        x={3.636}
        y={2.622}
        width={26}
        height={2}
        rx={1}
        transform="rotate(45 3.636 2.622)"
        fill="#303AB2"
      />
    )}
    <Rect x={2} y={16.4} width={20} height={2} rx={1} fill="#303AB2" />
  </Svg>
);

export default React.memo(GridIcon);
