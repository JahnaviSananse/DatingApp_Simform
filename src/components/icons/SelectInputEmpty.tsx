import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const SelectInputEmpty: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={17} height={18} viewBox="0 0 17 18" fill="none" {...props}>
    <Path fill="#fff" stroke="#12082E" d="M.5 1.492h16v16H.5z" />
  </Svg>
);

export default React.memo(SelectInputEmpty);
