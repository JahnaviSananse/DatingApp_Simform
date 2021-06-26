import styled from 'styled-components/native';

import {COLORS} from '../../../../configs';

export const Wrapper = styled.View`
  padding: 15px 0 0;
`;
export const Switcher = styled.View`
  width: 54px;
  height: 33px;
  border: 5px solid #ffbfbf;
  border-radius: 15px;
  shadow-color: ${COLORS.jumbo};
  shadow-offset: {
      width: 0px,
      height: 2px,
      };
  shadow-opacity: 0.1;
  shadow-radius: 4.65;
  elevation: 3;
  flex-direction: ${({value}: {value: boolean}) =>
    !value ? 'row-reverse' : 'row'} ;
  justify-content: space-between;
  align-items: center;
  marginLeft:3px;
`;
export const CircleBtn = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
  border: 1px solid ${COLORS.black004};
  border-radius: 14px;
  margin-right: -1px;
  background-color: ${COLORS.white};
`;
