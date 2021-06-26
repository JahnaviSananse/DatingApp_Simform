import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from "../../configs";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={14} height={16} viewBox="0 0 14 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.445 8.468L7.41 13.509a3.465 3.465 0 01-4.75-.14 3.46 3.46 0 01-.14-4.746l6.52-6.516a2.095 2.095 0 012.885 0c.789.8.789 2.084 0 2.883L6.3 10.602a.623.623 0 01-.913-.847l4.18-4.17a.817.817 0 10-1.157-1.156l-4.18 4.186a2.23 2.23 0 000 3.168 2.3 2.3 0 003.17 0l5.615-5.62a3.663 3.663 0 00-.09-5.09 3.67 3.67 0 00-5.093-.09L1.313 7.5a5.088 5.088 0 00.203 7.035 5.096 5.096 0 007.042.107l5.044-5.033a.817.817 0 10-1.157-1.156v.016z"
        fill={COLORS.blazeBlue}
      />
    </Svg>
  );
}

export default SvgComponent;
