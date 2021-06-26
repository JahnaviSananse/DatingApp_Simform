import {ifIphoneX} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import {getWidthWithScaleFactor} from '../../utils/dimensions';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${() => COLORS.sand};
  padding: 0 ${() => getWidthWithScaleFactor(24)}px;
`;

export const WrapperLoader = styled.View`
  flex: 1;
  background-color: ${() => COLORS.sand};
`;

export const SelectedItemsWrapper = styled.View`
  padding-bottom: ${ifIphoneX(35, 5)}px;
`;
