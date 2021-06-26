import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const PoliticIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M19.6 4.286V5a.375.375 0 01-.096.253.313.313 0 01-.23.104h-.98v.536c0 .296-.22.536-.49.536H1.796c-.27 0-.49-.24-.49-.536v-.536h-.98a.313.313 0 01-.231-.104A.375.375 0 010 5v-.714c0-.07.02-.14.055-.199a.335.335 0 01.147-.131L9.675.027a.3.3 0 01.25 0l9.473 3.929c.06.027.111.073.147.131a.381.381 0 01.055.199zm-.98 13.571H.98c-.541 0-.98.48-.98 1.072v.714c0 .095.034.185.096.252a.313.313 0 00.23.105h18.947c.087 0 .17-.038.231-.105a.375.375 0 00.096-.252v-.714c0-.592-.439-1.072-.98-1.072zM3.267 7.143v8.571h-1.47c-.27 0-.49.24-.49.536v.893h16.986v-.893c0-.296-.22-.536-.49-.536h-1.47V7.143H13.72v8.571h-2.613V7.143H8.493v8.571H5.88V7.143H3.267z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(PoliticIcon);
