import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const ArrowRight: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
    <Path
      d="M1 13l6-6-6-6"
      stroke={props.color || '#183059'}
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(ArrowRight);
