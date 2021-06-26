import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const Wrapper = styled.View`
  padding: 20px;
  background-color: ${COLORS.sand};
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const BtnWrapper = styled.TouchableOpacity`
  background-color: ${({color}: {color: string}) => color};
  height: 48px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  flex-basis: 47%;
`;
export const PhotoBlock = styled.View`
  align-self: center;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const PhotoWrapper = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.raspberry};
  border-radius: 50px;
  padding: 2px;
  background-color: ${COLORS.sand};
`;
