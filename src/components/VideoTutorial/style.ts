import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';

export const InfoBlock = styled.View`
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${COLORS.sand};
  align-items: center;
  width: ${dimensions.WIDTH - 40};
  align-self: center;
`;
export const Tutorial1 = styled.View`
  position: absolute;
  align-self: center;
  bottom: ${dimensions.HEIGHT * 0.31};
  z-index: 1;
`;
export const Tutorial2 = styled.View`
  position: absolute;
  align-self: center;
  bottom: ${dimensions.HEIGHT * 0.17};
  z-index: 1;
`;

export const Tutorial3 = styled.View`
  position: absolute;
  align-self: center;
  bottom: ${dimensions.HEIGHT * 0.32};
  z-index: 1;
`;

export const Tutorial4 = styled.View`
  position: absolute;
  align-self: center;
  bottom: ${dimensions.HEIGHT * 0.295};
  z-index: 1;
`;

export const VerticalLine = styled.View`
  height: ${dimensions.WIDTH * 0.5};
  width: 2px;
  background-color: ${COLORS.sand};
  align-self: center;
  margin-top: 5px;
`;
export const Point = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 3px;
  align-self: center;
  background-color: ${COLORS.sand};
`;

export const BTN = styled.TouchableOpacity`
  width: 138px;
  height: 48px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.raspberry};
`;
