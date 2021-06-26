import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const EditPhotoIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg height={14} viewBox="0 0 24 24" width={14} {...props}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      fill="#83828D"
    />
  </Svg>
);

export default React.memo(EditPhotoIcon);
