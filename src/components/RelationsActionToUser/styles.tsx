import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const InlineBlock = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto 0;
  padding: 0;
  width: 80%;
  background-color: ${COLORS.sand};
`;
export const BtnWrapper = styled.TouchableOpacity``;
