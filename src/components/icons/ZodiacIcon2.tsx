import * as React from 'react';
import Svg, {Defs, Image, Path, Pattern, SvgProps, Use} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h26v26H0z" />
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

const ZodiacIcon2: React.FunctionComponent<SvgProps> = React.memo(SvgComponent);
export default ZodiacIcon2;