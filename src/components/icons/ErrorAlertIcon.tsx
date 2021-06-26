import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const ErrorAlertIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={11.5} fill="#F5F5F6" stroke="#FC0707" />
    <Path
      d="M10.914 6.719h2.164l-.18 7.554h-1.804l-.18-7.554zm-.21 10.242c0-.38.116-.682.35-.906.235-.23.55-.344.946-.344.396 0 .71.114.945.344.235.224.352.526.352.906 0 .375-.117.677-.352.906-.234.224-.55.336-.945.336-.396 0-.71-.112-.945-.336-.235-.229-.352-.531-.352-.906z"
      fill="#FC0707"
    />
  </Svg>
);

export default React.memo(ErrorAlertIcon);
