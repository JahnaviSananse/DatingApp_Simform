import styled from 'styled-components/native';

import {COLORS} from '../../../../configs';

export const Wrapper = styled.View`
  padding-top: 17px;
`;

export const SliderLine = styled.View`
  width: 10px;
  height: 4px;
  background-color: ${COLORS.blazeBlue50};
  z-index: -1;
`;
