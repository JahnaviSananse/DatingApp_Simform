import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const ErrorPhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={4} height={13} viewBox="0 0 4 13" fill="none" {...props}>
    <Path
      d="M.914.719h2.164l-.18 7.554H1.094L.914.72zM.704 10.96c0-.38.116-.682.35-.906.235-.23.55-.344.946-.344.396 0 .71.115.945.344.235.224.352.526.352.906 0 .375-.117.677-.352.906-.234.224-.55.336-.945.336-.396 0-.71-.112-.945-.336-.235-.229-.352-.531-.352-.906z"
      fill={colors.redReport}
    />
  </Svg>
);

export default React.memo(ErrorPhotoIcon);
