import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const RefreshIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={26} height={24} viewBox="0 0 26 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.07 4c2.52 0 4.682 1.079 6.114 3h-4.008v2h7.37V2H20.44v3.27C18.624 3.183 16.023 2 13.07 2 7.257 2 2.544 6.477 2.544 12h2.106c0-4.418 3.77-8 8.422-8zm0 16c-2.52 0-4.68-1.079-6.113-3h4.008v-2h-7.37v7h2.106v-3.27c1.816 2.087 4.417 3.27 7.37 3.27 5.814 0 10.528-4.477 10.528-10h-2.106c0 4.418-3.77 8-8.422 8z"
      fill="#fff"
    />
  </Svg>
);

export default React.memo(RefreshIcon);
