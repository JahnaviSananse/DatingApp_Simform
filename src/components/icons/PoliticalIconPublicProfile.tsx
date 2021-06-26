import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.535 18.207h.775V21H3v-2.793h.776v-1.998h1.668V9.614H4.028V6.22L12.155 3l8.127 3.22v3.394h-1.416v6.595h1.669v1.998zm-4.248-1.998h1.803V9.614h-1.803v6.595zm-5.897 0V9.614H8.606v6.595h1.784zm2.56-6.595h-1.784v6.595h1.784V9.614zm2.56 0h-1.784v6.595h1.785V9.614zm-3.355-5.78l-7.351 2.91v2.094h14.703V6.744l-7.352-2.91zM7.83 9.614H6.22v6.595h1.61V9.614zm11.929 8.593v-1.222H4.552v1.222h15.207zm-15.983.776v1.241h16.758v-1.241H3.777zm7.571-13.798c.24-.16.52-.245.808-.245a1.474 1.474 0 011.455 1.454 1.455 1.455 0 11-2.263-1.21zm.431 1.774a.679.679 0 10.755-1.129.679.679 0 00-.755 1.129z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const PoliticalIconPublicProfile = React.memo(SvgComponent);
export default PoliticalIconPublicProfile;
