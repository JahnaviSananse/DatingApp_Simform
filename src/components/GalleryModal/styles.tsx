import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.sand};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Line = styled.View`
  width: 12%;
  height: 5px;
  margin-top: -15px;
  background-color: ${COLORS.white};
  border-radius: 3px;
  margin-bottom: 10px;
`;
export const BtnHeader = styled.TouchableOpacity`
  padding: 12px;
`;
export const BtnSend = styled.TouchableOpacity`
  width: 90%;
  padding: 7px;
  background-color: ${COLORS.blazeHotPink};
  border-radius: 12px;
  position: absolute;
  bottom: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
export const CountWrapper = styled.View`
  background-color: ${COLORS.white};
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;
