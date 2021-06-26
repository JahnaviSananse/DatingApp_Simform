import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const VideoWarningWhite: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={203} height={150} viewBox="0 0 203 150" fill="none" {...props}>
    <Path
      d="M90.867 92.609l18.865 11.873-18.865 11.873V92.609z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path stroke="#fff" strokeWidth={4} d="M2 63h191v85H2z" />
    <Path stroke="#fff" strokeWidth={4} d="M23 77h149v57H23z" />
    <Path
      fill="#04132E"
      stroke="#fff"
      strokeWidth={4}
      d="M7.671 3.273l187.22 37.809-3.563 17.644-187.22-37.81z"
    />
    <Path
      stroke="#fff"
      strokeWidth={4}
      d="M5.524 17.587L24.959 7.23M178.23 56.546l15.885-8.466M78.288 36.159l24.71-13.169M25.356 25.469L50.066 12.3M51.822 30.814l24.71-13.169M104.753 41.503l24.71-13.169M128.278 46.254l24.71-13.169M154.744 51.599l24.71-13.169"
    />
    <Circle
      cx={193}
      cy={63}
      r={8}
      fill="#fff"
      stroke="#04132E"
      strokeWidth={4}
    />
  </Svg>
);

export default React.memo(VideoWarningWhite);
