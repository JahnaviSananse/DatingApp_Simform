import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const SelectInputFull: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={17} height={17} viewBox="0 0 17 17" fill="none" {...props}>
    <Path fill="#fff" stroke="#12082E" d="M.5.5h16v16H.5z" />
    <Path stroke="#000" d="M.354.646l16 16M.35 16.643l16.3-16" />
  </Svg>
);

export default React.memo(SelectInputFull);
