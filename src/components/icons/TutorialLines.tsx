import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={142} height={145} viewBox="0 0 142 145" fill="none" {...props}>
      <Path stroke="#FDFAF0" strokeWidth={1.5} d="M2.25 141.639V0" />
      <Circle
        cx={2.5}
        cy={141.5}
        r={1.75}
        transform="rotate(-180 2.5 141.5)"
        fill="#FDFAF0"
        stroke="#FDFAF0"
        strokeWidth={1.5}
      />
      <Path stroke="#FDFAF0" d="M2 81.5h138" />
      <Path stroke="#FDFAF0" strokeWidth={1.5} d="M139.55 140.985v-60" />
      <Circle
        cx={139.5}
        cy={141.737}
        r={1.75}
        transform="rotate(-180 139.5 141.737)"
        fill="#FDFAF0"
        stroke="#FDFAF0"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

const TutorialLines = React.memo(SvgComponent);
export default TutorialLines;
