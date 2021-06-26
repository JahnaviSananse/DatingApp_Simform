import * as React from 'react';
import Svg, {Circle, G, Mask, Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={133} height={132} viewBox="0 0 133 132" fill="none" {...props}>
      <Circle cx={66} cy={66} r={66} fill="#E5E5E5" />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={133}
        height={132}>
        <Circle cx={66.5} cy={66} r={66} fill="#E5E5E5" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M94.87 69.046a30.482 30.482 0 01-10.293 15.366A50.325 50.325 0 01106 100.805 51.058 51.058 0 01116 126l-50.075 18L16 125.949a51.066 51.066 0 019.95-25.136 50.336 50.336 0 0121.322-16.4 30.482 30.482 0 01-10.293-15.367 30.756 30.756 0 01.44-18.547 30.441 30.441 0 0111.009-14.85A29.963 29.963 0 0165.925 30a29.963 29.963 0 0117.496 5.648A30.441 30.441 0 0194.431 50.5a30.757 30.757 0 01.439 18.547z"
          fill="#B1B1CA"
        />
      </G>
    </Svg>
  );
}

const UploadPhotoIcon = React.memo(SvgComponent);
export default UploadPhotoIcon;
