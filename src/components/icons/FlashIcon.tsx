import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={14} height={20} viewBox="0 0 14 20" fill="none" {...props}>
      <Path
        d="M13.866 9.718a.77.77 0 00-.712-.461H9.457l1.478-8.05a.737.737 0 00-.4-.789.79.79 0 00-.898.13L.306 9.471a.725.725 0 00-.171.812.77.77 0 00.711.46h3.698l-1.478 8.05a.737.737 0 00.4.789.782.782 0 00.898-.13l9.331-8.923a.725.725 0 00.17-.811zm-8.862 7.03l1.216-6.619a.725.725 0 00-.168-.607.783.783 0 00-.59-.265H2.718l6.279-6.004L7.78 9.87a.725.725 0 00.168.607.784.784 0 00.59.266h2.744l-6.279 6.003z"
        fill="#303AB2"
      />
    </Svg>
  );
}

const FlashIcon = React.memo(SvgComponent);
export default FlashIcon;
