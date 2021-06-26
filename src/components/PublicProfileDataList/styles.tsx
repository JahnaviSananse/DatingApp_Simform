import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';

export const Wrapper = styled.View`
  border-radius: 20px;
  padding: 10px 20px 0;
  background-color: ${COLORS.sand};
`;
export const BottomBlock = styled.View`
  background-color: ${COLORS.sand};
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const BlockReportBTN = styled.TouchableOpacity`
  padding: 5px;
  margin: 0 auto 10px;
`;
export const EmbeddedVideoWrapper = styled.View`
  width: ${dimensions.WIDTH - 40};
  height: ${dimensions.HEIGHT * 0.676};
  background-color: ${COLORS.sand};
`;
export const BtnRestore = styled.TouchableOpacity`
  align-self: center;
  border-radius: 30px;
  padding: 15px 10px;
  background-color: ${COLORS.blazeLightBlue};
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;