import styled from 'styled-components/native';

import {COLORS} from '../../../../configs';

export const Wrapper = styled.View`
  padding-top: 14px;
`;

export const BtnSex = styled.TouchableOpacity`
  flex-basis: 31%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({select}: {select: boolean}) =>
    select ? COLORS.blazeBlue : COLORS.blazeBlue20};
`;
