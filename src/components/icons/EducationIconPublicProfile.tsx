import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.533 1.963C8.023 1.963 5 4.443 5 7.708c0 2.009 1.144 3.72 2.842 4.74a.697.697 0 00-.159.347L6.675 19.36a.7.7 0 001.014.728l3.845-1.995 3.844 1.995a.7.7 0 001.014-.728l-1.008-6.572a.697.697 0 00-.155-.343c1.695-1.02 2.838-2.73 2.838-4.737 0-3.265-3.024-5.745-6.534-5.745zm2.471 11.063a7.306 7.306 0 01-2.47.427c-.866 0-1.702-.15-2.47-.427l-.796 5.184 2.943-1.527a.7.7 0 01.645 0L14.8 18.21l-.795-5.184zM6.4 7.708c0-2.307 2.2-4.345 5.133-4.345 2.934 0 5.134 2.038 5.134 4.345 0 2.308-2.2 4.345-5.134 4.345S6.4 10.016 6.4 7.708z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const EducationIconPublicProfile = React.memo(SvgComponent);
export default EducationIconPublicProfile;
