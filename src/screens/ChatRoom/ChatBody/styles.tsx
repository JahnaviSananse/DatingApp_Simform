import styled from 'styled-components/native';

import {COLORS} from '../../../configs';

export const BtnRestore = styled.TouchableOpacity`
  align-self: center;
  border-radius: 30px;
  padding: 15px;
  background-color: ${COLORS.blazeLightBlue};
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ResendWrapper = styled.View`
  bottom: 0;
  justify-content: center;
  left: -30px;
  position: absolute;
  top: 15px;
`;
export const ResendBtn = styled.TouchableOpacity``;
