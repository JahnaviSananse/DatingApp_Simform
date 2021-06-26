import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const CurrentLocationIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 5.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm0 3.2a.8.8 0 110-1.6.8.8 0 010 1.6zm7.2-1.6h-.856A6.4 6.4 0 008.8 1.656V.8a.8.8 0 10-1.6 0v.856A6.4 6.4 0 001.656 7.2H.8a.8.8 0 100 1.6h.856A6.4 6.4 0 007.2 14.344v.856a.8.8 0 001.6 0v-.856A6.4 6.4 0 0014.344 8.8h.856a.8.8 0 000-1.6zM8 12.8a4.8 4.8 0 110-9.6 4.8 4.8 0 010 9.6z"
      fill="#F08380"
    />
  </Svg>
);

export default React.memo(CurrentLocationIcon);
