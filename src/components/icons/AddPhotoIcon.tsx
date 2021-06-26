import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

interface Props extends SvgProps {
  active: boolean;
}

const AddPhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 3.515v16.97M3.515 12h16.97"
      stroke={props.active ? colors.biscay : colors.silver}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(AddPhotoIcon);
