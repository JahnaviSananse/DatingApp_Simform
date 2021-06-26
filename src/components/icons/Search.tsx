import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const Search: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M11.204 19c4.473 0 8.099-3.582 8.099-8s-3.626-8-8.1-8C6.73 3 3.104 6.582 3.104 11s3.626 8 8.1 8zM21.328 21l-4.404-4.35"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(Search);
