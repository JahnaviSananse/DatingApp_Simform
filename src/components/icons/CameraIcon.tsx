import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M11.095 3.75L9.441 7.059H3.816A2.311 2.311 0 001.5 9.375v14.559a2.311 2.311 0 002.316 2.316h22.5a2.311 2.311 0 002.316-2.316V9.375a2.311 2.311 0 00-2.316-2.316H20.69L19.036 3.75h-7.94zm3.97 5.956c3.827 0 6.95 3.123 6.95 6.948 0 3.826-3.123 6.949-6.95 6.949-3.825 0-6.948-3.123-6.948-6.949 0-3.825 3.123-6.948 6.949-6.948zm0 1.985a4.948 4.948 0 00-4.963 4.963 4.948 4.948 0 004.964 4.964 4.948 4.948 0 004.963-4.964 4.948 4.948 0 00-4.963-4.963z"
        fill={props.color || '#F08380'}
      />
    </Svg>
  );
}

const CameraIcon = React.memo(SvgComponent);
export default CameraIcon;
