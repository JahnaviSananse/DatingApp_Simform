import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const EyeOpenIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={22} height={16} viewBox="0 0 22 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 .5C6 .5 1.73 3.61 0 8c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 3.61 16 .5 11 .5zM11 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM8 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"
      fill={props.color ?? '#ADAEB0'}
    />
  </Svg>
);

export default React.memo(EyeOpenIcon);
