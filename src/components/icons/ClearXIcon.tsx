import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ClearXIcon: React.FunctionComponent = () => (
  <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
    <Path
      d="M11 1L1 11M1 1l10 10"
      stroke="#ADAEB0"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(ClearXIcon);
