import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20.306 7.862a4.91 4.91 0 00-1-1.51 4.87 4.87 0 00-1.52-1 4.7 4.7 0 00-3.57 0 4.87 4.87 0 00-1.52 1l-.38.39-.38-.39a4.64 4.64 0 00-3.23-1.29 4.67 4.67 0 00-3.38 7.93l6.59 6.58a.58.58 0 00.4.16.573.573 0 00.22 0 .621.621 0 00.19-.12l6.58-6.62a4.68 4.68 0 001-1.51 4.63 4.63 0 000-3.58v-.04zm-1.05 3.13a3.66 3.66 0 01-.76 1.15l-6.18 6.18-.07-.07-6.11-6.1a3.51 3.51 0 01-1-1.81 3.55 3.55 0 011.53-3.62 3.59 3.59 0 012-.6 3.45 3.45 0 011.37.27c.43.18.82.441 1.15.77l.74.83a.59.59 0 00.8 0l.78-.79a3.52 3.52 0 013.84-.77c.428.18.818.437 1.15.76.322.334.58.723.76 1.15.18.428.272.887.27 1.35a3.5 3.5 0 01-.27 1.3z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const StatusPublicProfile = React.memo(SvgComponent);
export default StatusPublicProfile;
