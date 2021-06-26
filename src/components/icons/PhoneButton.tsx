import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const PhoneButton: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M22.2 16.92v3c.001.279-.054.554-.162.81a2 2 0 01-.466.672 1.93 1.93 0 01-.69.42c-.256.09-.528.123-.797.098a18.83 18.83 0 01-8.37-3.07 19.217 19.217 0 01-5.82-6 20.188 20.188 0 01-2.979-8.67 2.058 2.058 0 01.094-.818c.086-.263.224-.505.406-.71.181-.205.402-.37.649-.481A1.89 1.89 0 014.847 2h2.91c.47-.006.927.166 1.284.483.357.316.59.756.656 1.236.123.96.35 1.903.679 2.81.13.358.158.747.081 1.121a2.02 2.02 0 01-.518.99L8.707 9.91a15.769 15.769 0 005.82 6l1.232-1.27c.264-.27.597-.455.96-.535.362-.08.74-.05 1.087.084.88.339 1.794.574 2.726.7.47.069.901.313 1.209.688.307.374.47.852.459 1.342z"
      stroke="#FDFAF0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(PhoneButton);
