import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Circle cx={8} cy={8} r={7.5} stroke="#E63888" />
      <Path
        stroke="#E63888"
        d="M0 8h16M10.5 7.75c0 2.094-.33 3.968-.845 5.3-.258.667-.554 1.173-.856 1.503-.302.33-.573.447-.799.447-.226 0-.497-.116-.799-.447-.302-.33-.598-.836-.856-1.503-.515-1.332-.845-3.206-.845-5.3s.33-3.968.845-5.3c.258-.667.554-1.173.856-1.503C7.503.617 7.774.5 8 .5c.226 0 .497.116.799.447.302.33.598.836.856 1.503.516 1.332.845 3.206.845 5.3z"
      />
      <Path
        d="M13.5 13c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2M2.5 3c0 1.105 2.462 2 5.5 2s5.5-.895 5.5-2"
        stroke="#E63888"
      />
    </Svg>
  );
}

const PlaceOfBirthIcon = React.memo(SvgComponent);
export default PlaceOfBirthIcon;
