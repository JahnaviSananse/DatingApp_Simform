import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const EditPink: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
    <Path fill="#E63888" d="M.102.965h24.256V24.61H.102z" />
    <Path
      d="M11.22 4.906H4.143c-.536 0-1.05.208-1.429.577-.379.37-.592.871-.592 1.394V20.67c0 .522.213 1.024.592 1.393.38.37.893.577 1.43.577h14.149c.536 0 1.05-.207 1.429-.577.38-.37.592-.87.592-1.393v-6.897"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.799 3.429a2.172 2.172 0 011.516-.613c.569 0 1.114.22 1.516.613.402.391.628.923.628 1.477 0 .555-.226 1.086-.628 1.478l-9.601 9.36-4.043.985 1.01-3.94 9.602-9.36z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(EditPink);
