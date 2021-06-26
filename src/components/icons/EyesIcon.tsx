import * as React from 'react';
import Svg, {Defs, Image, Path, Pattern, SvgProps, Use} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h24v24H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00833)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={120}
          height={120}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

const EyesIcon = React.memo(SvgComponent);
export default EyesIcon;
