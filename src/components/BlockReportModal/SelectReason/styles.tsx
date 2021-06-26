import styled from 'styled-components/native';

import {COLORS} from '../../../configs';

export const InfoBlock = styled.View`
  margin-top: 15px;
  padding: 15px 20px 10px;
  border-color: ${() => COLORS.blazeBlue25};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`;
export const BtnClose = styled.TouchableOpacity`
  position: absolute;
  padding: 20px 10px 10px 20px;
  z-index: 2;
`;
export const LineSwipe = styled.View`
  height: 5px;
  width: 15%;
  border-radius: 2px;
  margin-top: -35px;
  margin-bottom: 30px;
  background-color: ${COLORS.white};
`;
export const ReasonItem = styled.TouchableOpacity`
  padding: 15px 20px;
  border-color: ${() => COLORS.blazeBlue25};
  border-bottom-width: 0.5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
