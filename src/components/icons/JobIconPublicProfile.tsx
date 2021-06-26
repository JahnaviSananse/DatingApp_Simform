import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.4 7.37h-2.6v-1A2.27 2.27 0 0012.6 4H11a2.27 2.27 0 00-2.2 2.33v1H6.2a2.15 2.15 0 00-1.55.68A2.4 2.4 0 004 9.69v7.58a2.27 2.27 0 002.2 2.33h11.2a2.27 2.27 0 002.2-2.33V9.69a2.27 2.27 0 00-2.2-2.32zM10 6.33a1 1 0 011-1h1.6a1 1 0 011 1.05v1H10V6.33zm8.4 10.94a.998.998 0 01-1 1.05H6.2a1 1 0 01-1-1.05v-4.93l.28.12c.77.32 1.562.58 2.37.78H8v.65a.62.62 0 00.6.64.62.62 0 00.6-.64v-.37h.23c.786.111 1.578.168 2.37.17a17.178 17.178 0 002.37-.17h.23v.41a.6.6 0 101.2 0v-.65h.15a16.84 16.84 0 002.37-.78l.28-.12v4.89zm0-6.34l-.12.07a14.88 14.88 0 01-2.43.85l-.25.07v-.54a.6.6 0 00-1.2 0v.79h-.17c-.803.128-1.615.191-2.43.19a15.304 15.304 0 01-2.43-.16H9.2v-.82a.62.62 0 00-.6-.64.62.62 0 00-.6.64v.54l-.25-.07A15.885 15.885 0 015.32 11l-.12-.06V9.69a1 1 0 011-1h11.2a1 1 0 011 1v1.24z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const JobIconPublicProfile = React.memo(SvgComponent);
export default JobIconPublicProfile;
