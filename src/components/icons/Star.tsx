import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={13} height={12} viewBox="0 0 13 12" fill="none" {...props}>
      <Path
        d="M12.981 4.557a.378.378 0 00-.307-.251l-4.03-.567L6.842.205A.382.382 0 006.5 0a.382.382 0 00-.342.205L4.356 3.74l-4.03.567a.378.378 0 00-.307.25.36.36 0 00.096.378l2.916 2.751-.688 3.884a.363.363 0 00.151.36.389.389 0 00.401.029L6.5 10.124l3.604 1.834a.391.391 0 00.402-.028.363.363 0 00.151-.36L9.97 7.684l2.916-2.75a.36.36 0 00.096-.378z"
        fill={props.color || '#0DB4B9'}
      />
    </Svg>
  );
}

const AddNewPhotoIcon = React.memo(SvgComponent);
export default AddNewPhotoIcon;
