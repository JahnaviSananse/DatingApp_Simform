import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const VideoWarning: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={203} height={150} viewBox="0 0 203 150" fill="none" {...props}>
    <Path
      opacity={0.7}
      d="M90.867 92.61l18.865 11.872-18.865 11.873V92.609z"
      fill="#fff"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path stroke="#50555C" strokeWidth={4} d="M2 63h191v85H2z" />
    <Path stroke="#50555C" strokeWidth={4} d="M23 77h149v57H23z" />
    <Path
      fill="#fff"
      stroke="#50555C"
      strokeWidth={4}
      d="M7.671 3.273l187.22 37.809-3.563 17.644-187.22-37.81z"
    />
    <Path
      stroke="#50555C"
      strokeWidth={4}
      d="M5.524 17.587L24.959 7.23M178.23 56.547l15.885-8.466M78.288 36.159l24.71-13.169M25.356 25.469L50.066 12.3M51.822 30.814l24.71-13.169M104.753 41.504l24.71-13.17M128.279 46.255l24.709-13.169M154.744 51.599l24.71-13.169"
    />
    <Circle
      cx={193}
      cy={63}
      r={8}
      fill="#fff"
      stroke="#50555C"
      strokeWidth={4}
    />
  </Svg>
);

export default React.memo(VideoWarning);
