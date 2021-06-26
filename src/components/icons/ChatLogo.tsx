import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const Block: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
    <Path
      d="M17.367 2.842a4.583 4.583 0 00-6.484 0L10 3.725l-.883-.883a4.584 4.584 0 10-6.484 6.483l.884.883L10 16.692l6.483-6.484.884-.883a4.584 4.584 0 000-6.483v0z"
      stroke="#183059"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(Block);
