import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from "../../configs";

type Props = SvgProps;

const MoreQuestionsIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill={COLORS.raspberry}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11a1 1 0 00-1 1v7h-7a1 1 0 100 2h7v7a1 1 0 102 0v-7h7a1 1 0 100-2h-7v-7a1 1 0 00-1-1z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11a1 1 0 00-1 1v7h-7a1 1 0 100 2h7v7a1 1 0 102 0v-7h7a1 1 0 100-2h-7v-7a1 1 0 00-1-1z"
      fill="#fff"
    />
  </Svg>
);

export default React.memo(MoreQuestionsIcon);
