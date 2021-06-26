import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={10} height={6} viewBox="0 0 10 6" fill="none" {...props}>
      <Path
        d="M4.293 5.293L.707 1.707C.077 1.077.523 0 1.414 0h7.172c.89 0 1.337 1.077.707 1.707L5.707 5.293a1 1 0 01-1.414 0z"
        fill="#303AB2"
      />
    </Svg>
  );
}

const DropDownIcon = React.memo(SvgComponent);
export default DropDownIcon;
