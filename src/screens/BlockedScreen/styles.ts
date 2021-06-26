import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.sand};
  align-items: center;
  padding-top: 47px;
  padding-bottom: 33px;
`;
type BtnProps = {
  color: string;
  isBottom?: boolean;
};
export const BtnWrapper = styled.TouchableOpacity<BtnProps>`
  border-radius: 30px;
  height: 48px;
  width: ${dimensions.WIDTH * 0.421};
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  margin-top: ${({isBottom}) => (isBottom ? 'auto' : 0)};
`;
export const MessageBlock = styled.View`
  background-color: ${COLORS.blazeDarker};
  border-radius: 20px;
  border-bottom-left-radius: 0;
  margin-left: 20px;
  padding: 12px 18px 12px 15px;
  width: ${dimensions.WIDTH * 0.776};
  align-self: flex-start;
  margin-top: 20px;
`;
