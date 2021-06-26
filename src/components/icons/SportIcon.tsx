import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const SportIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18.57 12.86l.72-.72a.996.996 0 000-1.41l-.02-.02a.996.996 0 00-1.41 0L15 13.57 6.43 5l2.86-2.86a.996.996 0 000-1.41L9.27.71a.996.996 0 00-1.41 0l-.72.72-.72-.72C6.03.32 5.39.32 5 .71L3.57 2.14l-.72-.72a1.02 1.02 0 00-1.43 0 1.02 1.02 0 000 1.43l.72.72L.71 5a.996.996 0 000 1.41l.72.72-.72.73a.996.996 0 000 1.41l.02.02c.39.39 1.02.39 1.41 0L5 6.43 13.57 15l-2.86 2.86a.996.996 0 000 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72L19.29 15a.996.996 0 000-1.41l-.72-.73z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(SportIcon);
