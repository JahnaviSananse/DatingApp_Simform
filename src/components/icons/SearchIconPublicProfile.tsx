import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={16} viewBox="0 0 17 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.805 14.796l-2.911-2.911a.243.243 0 010-.32 7.19 7.19 0 10-1.33 1.329.243.243 0 01.321 0l2.91 2.91a.728.728 0 001.03-1.028l-.02.02zM7.2 13.15a6 6 0 100-12 6 6 0 000 12z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const SearchIconPublicProfile = React.memo(SvgComponent);
export default SearchIconPublicProfile;
