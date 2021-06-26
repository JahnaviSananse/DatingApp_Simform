import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const Wrapper = styled.View`
  background-color: #efeae1;
  padding: 7px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: 21px;
`;

export const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  margin-bottom: 7px;
`;
export const Line = styled.View`
  height: 0.5px;
  background-color: ${COLORS.blazeBlue25};
`;
