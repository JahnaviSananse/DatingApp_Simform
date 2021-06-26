import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

type Props = SvgProps;

const AudioRoundMutedIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
    <Circle cx={18} cy={18} r={18} fill="#FDFAF0" fillOpacity={0.7} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.647 10.349V8C24.86 9.038 28 13.12 28 18s-3.141 8.962-7.353 10v-2.349c3.036-.98 5.252-4.036 5.252-7.651s-2.216-6.67-5.252-7.651zM9.094 21.42V14.58h4.201l5.252-5.702v18.244l-5.252-5.701H9.094zm7.352.194v-7.23l-2.28 2.475h-2.972v2.28h2.973l2.279 2.475zM23.273 18c0-2.019-1.071-3.752-2.626-4.596v9.18c1.555-.833 2.626-2.566 2.626-4.585z"
      fill="#303AB2"
    />
    <Path
      transform="matrix(.72192 .69197 -.59476 .8039 8 8.669)"
      stroke="#303AB2"
      strokeWidth={props.strokeWidth ?? 2}
      d="M0-1h27.643"
    />
  </Svg>
);

export default React.memo(AudioRoundMutedIcon);
