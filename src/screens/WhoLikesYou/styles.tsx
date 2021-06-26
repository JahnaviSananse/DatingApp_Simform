import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.sand};
  padding: 15px 20px 0;
`;

export const ItemWrapper = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 30px;
`;
export const EmptyListWrapper = styled.View`
  margin-top: ${dimensions.HEIGHT * 0.103}px;
  flex-direction: row;
  padding-left: 30px;
`;
export const EmbeddedVideoWrapper = styled.View`
  height: ${dimensions.HEIGHT * 0.504};
`;
export const BottomGradientWrapper = styled.View`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  bottom: 0;
  opacity: 0.8;
  overflow: hidden;
  position: absolute;
  transform: rotate(180deg);
`;
