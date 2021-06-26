import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const DeletePhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Circle cx={9} cy={9} r={9} fill="#F5F5F6" />
    <Path
      d="M13 5l-8 8M5 5l8 8"
      stroke="#83828D"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(DeletePhotoIcon);
