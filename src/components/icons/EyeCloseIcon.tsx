import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const EyeCloseIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.71 2.54a.996.996 0 010-1.41c.39-.39 1.03-.39 1.42 0l16.31 16.33a.996.996 0 11-1.41 1.41l-2.72-2.72c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5C.77 7.5 2.06 5.8 3.68 4.51L1.71 2.54zM16 9.47c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L7.36 2.54c1.15-.37 2.37-.57 3.64-.57 5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14L8.06 8.9c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07l1.57 1.57c-.65.32-1.37.5-2.14.5zm2.97-5.33a2.97 2.97 0 00-2.64-2.64l2.64 2.64z"
      fill={props.color || "#ADAEB0"}
    />
  </Svg>
);

export default React.memo(EyeCloseIcon);
