import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M20.481 12.557a.377.377 0 00-.307-.251l-4.03-.567-1.802-3.534A.382.382 0 0014 8a.382.382 0 00-.341.205l-1.803 3.534-4.03.567a.378.378 0 00-.307.25.36.36 0 00.096.379l2.916 2.75-.688 3.884a.363.363 0 00.151.36.389.389 0 00.401.029L14 18.124l3.605 1.834a.391.391 0 00.4-.028.363.363 0 00.152-.36l-.688-3.885 2.916-2.75a.36.36 0 00.096-.378z"
        fill={props.color || '#0DB4B9'}
      />
    </Svg>
  );
}

const IconStarSuperLike = React.memo(SvgComponent);
export default IconStarSuperLike;
