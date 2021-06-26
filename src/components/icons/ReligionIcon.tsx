import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

import colors from '../../configs/styles/colors';

type Props = SvgProps;

const ReligionIcon: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M16.972 11.926V7.039c0-.75-.24-1.468-.697-2.075L13.16.825l-.014-.018C12.412-.106 11.05-.269 10.11.444a2.183 2.183 0 00-.109.09A2.195 2.195 0 008.295.017a2.164 2.164 0 00-1.441.79L3.725 4.965a3.427 3.427 0 00-.697 2.075v4.887L0 14.866 5.284 20l3.06-2.973-.006-.005 1.13-.941c.2-.166.377-.35.532-.55.155.2.333.384.532.55l1.13.94-.006.006L14.716 20 20 14.867l-3.028-2.941zM5.284 18.018L2.04 14.867l1.02-.991 3.244 3.151-1.02.991zm3.995-4.584c0 .61-.273 1.186-.75 1.583l-1.214 1.01-2.845-2.763V7.039c0-.451.145-.883.42-1.248l3.106-4.128a.722.722 0 01.475-.256.73.73 0 01.532.142.69.69 0 01.125.983L6.394 6.198v5.34h1.442V8.176c0-.386.324-.7.721-.7.398 0 .722.314.722.7v5.259zM10 6.61a2.19 2.19 0 00-1.748-.515L10 3.75l1.748 2.345A2.191 2.191 0 0010 6.61zm1.47 8.407a2.058 2.058 0 01-.749-1.583V8.175c0-.386.324-.7.722-.7.397 0 .72.314.72.7v3.364h1.443v-5.34l-2.718-3.646-.015-.02a.688.688 0 01.124-.984.737.737 0 011.007.114L15.11 5.79c.275.365.42.796.42 1.248v6.225l-2.845 2.764-1.214-1.011zm2.226 2.01l3.244-3.151 1.02.99-3.244 3.152-1.02-.99z"
      fill={colors.pineGreen}
    />
  </Svg>
);

export default React.memo(ReligionIcon);
