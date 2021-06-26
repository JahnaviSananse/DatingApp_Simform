import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const Block: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={14} height={19} viewBox="0 0 14 19" fill="none" {...props}>
    <Path
      d="M3.667 4.65V2.983a1.667 1.667 0 011.666-1.667h3.333a1.667 1.667 0 011.667 1.667V4.65m2.5 0v11.666a1.666 1.666 0 01-1.667 1.667H2.833a1.667 1.667 0 01-1.667-1.667V4.65h11.667z"
      stroke={props.color || '#F08380'}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(Block);
