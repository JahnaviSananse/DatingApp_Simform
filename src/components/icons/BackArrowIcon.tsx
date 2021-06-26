import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
}

const BackArrowIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 12H5M12 19l-7-7 7-7"
      stroke={props.color || '#303AB2'}
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(BackArrowIcon);
