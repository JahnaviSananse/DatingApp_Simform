import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const ClearIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={10} height={10} viewBox="0 0 12 12" fill="none" {...props}>
    <Path
      d="M11 1L1 11M1 1l10 10"
      stroke={props.color || '#ADAEB0'}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(ClearIcon);
