import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const RemovePhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
    <Path
      d="M9 1L1 9M1 1l8 8"
      stroke="#83828D"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(RemovePhotoIcon);
