import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const SaveChangesIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={23} height={22} viewBox="0 0 128 128" {...props}>
    <Path
      d="M64 6C32 6 6 32 6 64s26 58 58 58 58-26 58-58S96 6 64 6zm0 6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zm21.037 36.95a3.192 3.192 0 00-2.137.95L62 71.6 51.1 59.9c-1.1-1.2-3-1.3-4.2-.2-1.2 1.1-1.3 3-.2 4.2L59.8 78c.6.6 1.3 1 2.2 1 .8 0 1.6-.3 2.2-.9l23-24.1c1.1-1.2 1.1-3.1-.1-4.2-.55-.6-1.3-.876-2.063-.85z"
      stroke="#C4C4C4"
      fill="#C4C4C4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </Svg>
);

export default React.memo(SaveChangesIcon);
