import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.861 3.217l-4.42 4.42a.625.625 0 000 .883l13.26 13.258c.243.244.639.244.883 0l4.42-4.42a.625.625 0 000-.883L7.744 3.217a.625.625 0 00-.884 0zm12.817 13.7l-3.536 3.535-1.326-1.325 2.21-2.21-.884-.884-2.21 2.21-1.325-1.326 1.325-1.326-.883-.884-1.326 1.326-1.326-1.326 2.21-2.21-.884-.883-2.21 2.21-1.326-1.326 1.326-1.326-.884-.884-1.326 1.326-1.326-1.326 2.21-2.21-.884-.884-2.21 2.21-1.325-1.326 3.535-3.535 12.375 12.374z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const HeightIconPublicProfile = React.memo(SvgComponent);
export default HeightIconPublicProfile;
