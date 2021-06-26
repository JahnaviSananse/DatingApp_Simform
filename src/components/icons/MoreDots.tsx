import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const MoreDots: React.FunctionComponent<SvgProps> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 14a2 2 0 100-4 2 2 0 000 4zM19 14a2 2 0 100-4 2 2 0 000 4zM5 14a2 2 0 100-4 2 2 0 000 4z"
      fill={props.color || '#ADAEB0'}
    />
  </Svg>
);

export default React.memo(MoreDots);
