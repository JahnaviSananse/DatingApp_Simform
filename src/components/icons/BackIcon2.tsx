import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const BackIcon2: React.FunctionComponent = ({...props}) => (
  <Svg width="36" height="36" fill="none" viewBox="0 0 36 36">
    <Circle cx="18" cy="18" r="18" fill="#59CBE8" />
    <Path
      fill="#FDFAF0"
      d="M18 9a9 9 0 00-6.192 2.493V9.9a.9.9 0 10-1.8 0v4.05a.9.9 0 00.9.9h4.05a.9.9 0 100-1.8h-2.16A7.2 7.2 0 1110.8 18 .9.9 0 109 18a9 9 0 109-9z"
    />
  </Svg>
);

export default React.memo(BackIcon2);
