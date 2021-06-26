import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const AlertForUnreadMessage: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M10.514 31.669l.072.07-.072-.07c-.464.483-1.285.157-1.285-.496v-6.326a.344.344 0 00-.347-.341H6.016C2.746 24.506.1 21.91.1 18.714V5.891C.1 2.695 2.747.1 6.016.1h19.968c3.27 0 5.916 2.595 5.916 5.791v12.823c0 3.197-2.647 5.792-5.916 5.792h-8.44a.35.35 0 00-.252.106l-6.778 7.057z"
      fill="#E4E1D8"
      fillOpacity={0.5}
      stroke="#E63888"
      strokeWidth={0.2}
    />
  </Svg>
);

export default React.memo(AlertForUnreadMessage);
