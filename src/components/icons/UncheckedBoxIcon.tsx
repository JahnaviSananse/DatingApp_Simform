import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';
import {COLORS} from "../../configs";

interface Props extends SvgProps {
  color?: string;
}

const UncheckedBoxIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
    <Rect y={6} x={3} width={17} height={17.002} rx={3} fill={COLORS.white} />
  </Svg>
);

export default React.memo(UncheckedBoxIcon);
