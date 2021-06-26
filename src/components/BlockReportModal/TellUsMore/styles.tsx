import styled from 'styled-components/native';

import {COLORS} from '../../../configs';
import dimensions from '../../../utils/dimensions';

export const Btn = styled.TouchableOpacity``;

export const InputBlock = styled.TextInput`
  width: 100%;
  height: ${({message}: {message?: boolean}) =>
    message ? dimensions.HEIGHT * 0.255 : '48px'};
  background-color: ${COLORS.white};
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  padding: 15px;
  margin-bottom: 15px;
  margin-top: ${({message}: {message?: boolean}) => (message ? '27px' : '6px')};
  color: ${COLORS.blazeBlue};
  font-size: 16px;
  border-width: 0.5px;
  border-color: ${COLORS.blazeDarker};
  font-family: IsidoraSansAlt-SemiBold;
  line-height: ${({message}: {message?: boolean}) =>
    message ? '20px' : '16px'};
`;
export const UploadBtn = styled.TouchableOpacity`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${COLORS.white};
  margin: 5px 0;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-width: 0.5px;
  border-color: ${COLORS.blazeDarker};
`;
