import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const NoPhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.499 6.445C8.499 4.554 10.054 3 11.998 3c1.943 0 3.498 1.554 3.498 3.445 0 1.891-1.555 3.445-3.498 3.445-1.944 0-3.5-1.554-3.5-3.445zM11.998 1c-3.026 0-5.5 2.426-5.5 5.445 0 3.018 2.474 5.445 5.5 5.445 3.025 0 5.498-2.427 5.498-5.445C17.496 3.426 15.023 1 11.998 1zm-4.5 13.335c-1.454 0-2.851.57-3.883 1.59A5.418 5.418 0 002 19.78v2.222a1 1 0 102 0V19.78c0-.91.366-1.785 1.02-2.432A3.527 3.527 0 017.5 16.335h8.997c.932 0 1.824.366 2.479 1.013a3.418 3.418 0 011.02 2.432v2.222a1 1 0 102 0V19.78a5.418 5.418 0 00-1.615-3.855 5.526 5.526 0 00-3.884-1.59H7.5z"
      fill={props.color || colors.jumbo}
    />
  </Svg>
);

export default React.memo(NoPhotoIcon);
