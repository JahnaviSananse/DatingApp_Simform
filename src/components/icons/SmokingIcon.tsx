import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const SmokingIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill={colors.pineGreen}
      d="M2.5 12.5h11.667v1.667H2.5zM15.834 12.5h1.667v1.667h-1.667z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.875 5.465c-.333.243-.542.604-.542 1.201 0 .705.176 1.08.381 1.286.205.205.581.381 1.286.381.943 0 1.714.236 2.152.892.353.53.35 1.18.348 1.542v.066h-1.667c0-.22-.001-.371-.018-.502a.452.452 0 00-.05-.182s-.013-.027-.104-.063c-.105-.04-.306-.086-.661-.086-.962 0-1.836-.241-2.464-.87-.628-.627-.87-1.502-.87-2.464 0-1.069.417-1.958 1.23-2.549.77-.56 1.804-.784 2.937-.784V5c-.95 0-1.583.193-1.958.465z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(SmokingIcon);
