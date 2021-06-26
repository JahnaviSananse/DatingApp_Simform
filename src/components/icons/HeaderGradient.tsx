import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

type Props = SvgProps;

const HeaderGradient: React.FunctionComponent<Props> = ({...props}) => {
  return (
    <Svg
      width={props.width ?? 300}
      height={props.height ?? 150}
      viewBox={`0 0 ${props.width ?? 300} ${props.height ?? 150}`}
      fill="none">
      <Path fill="url(#prefix__paint0_linear)" />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={167.5}
          y1={props.height ?? 150}
          x2={167.5}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#112448" stopOpacity={0} />
          <Stop offset={1} stopColor="#04132E" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default React.memo(HeaderGradient);
