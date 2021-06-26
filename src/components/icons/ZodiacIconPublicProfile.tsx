import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.833 9.015l.06-.08.37-.56v-.06c1.3-2 1.62-3.39 1-4-.62-.61-2.13-.38-4.26 1.1l-.11.06-.1-.06a7.47 7.47 0 00-11.36 6.42 7.43 7.43 0 001.05 3.83l.07.11-.07.16c-1.48 2.13-1.83 3.58-1.15 4.27.68.69 2 .33 4.05-1l.62-.38.09-.06h.09a7.48 7.48 0 009.69-9.69l-.04-.06zm-11 9.4a6.26 6.26 0 01-2.51 1.11H5.023v-.16a5 5 0 01.98-2.43l.14-.22.18.19c.419.466.896.876 1.42 1.22l.26.17-.17.12zm1.29-.89l-.12.07-.11-.06a6.47 6.47 0 118.76-8.74l.06.11-.08.1a39.302 39.302 0 01-4 4.55 40.995 40.995 0 01-4.56 3.97h.05zm2.83.78a6.12 6.12 0 01-1.42-.16l-.42-.09.34-.26a44.208 44.208 0 007.41-7.46l.26-.33.09.41a6.47 6.47 0 01-6.31 7.89h.05zm6.36-10.37l-.17-.26a7.262 7.262 0 00-1.22-1.42l-.2-.18.28-.14c1.63-1 2.29-1 2.46-1h.16v.15a5.52 5.52 0 01-1.11 2.6l-.2.25z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const ZodiacIconPublicProfile = React.memo(SvgComponent);
export default ZodiacIconPublicProfile;