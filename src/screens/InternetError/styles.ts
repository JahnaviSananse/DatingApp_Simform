import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.sand};
  align-items: center;
  padding-top: 50px;
`;
export const BtnCheck = styled.TouchableOpacity`
  background-color: ${COLORS.raspberry};
  padding: 15px;
  border-radius: 30px;
  margin-top: 44px;
  width: 54%;
`;

