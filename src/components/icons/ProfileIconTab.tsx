import * as React from 'react';
import Svg, {Circle, G, Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  redPoint: boolean;
  circleColor: string;
}

const ChatIconTab: React.FunctionComponent<Props> = (props) => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
    <G opacity={1}>
      <Path
        d="M12.017 2a11.969 11.969 0 00-8.473 3.515 12.008 12.008 0 00-3.51 8.484c-.01 2.771.947 5.458 2.708 7.596l-2.397 2.4a1.2 1.2 0 00-.251 1.308 1.2 1.2 0 001.138.696h10.785c3.178 0 6.226-1.264 8.473-3.515a12.008 12.008 0 000-16.97A11.975 11.975 0 0012.017 2zm0 21.599H4.12l1.114-1.116a1.2 1.2 0 000-1.692A9.605 9.605 0 019.221 4.815a9.574 9.574 0 016.451.313 9.591 9.591 0 014.789 4.34 9.611 9.611 0 01-2.364 11.947 9.578 9.578 0 01-6.08 2.184z"
        fill={props.color || '#303AB2'}
      />
      {props.redPoint && <Circle cx={20} cy={6} r={6} fill={props.circleColor} />}
    </G>
  </Svg>
);

export default React.memo(ChatIconTab);
