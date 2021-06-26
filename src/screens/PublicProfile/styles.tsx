import styled from 'styled-components/native';

import {COLORS} from '../../configs';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.sand};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 24px 0;
  background-color: ${COLORS.sand};
`;
export const BtnWrapper = styled.TouchableOpacity``;
export const BtnWrapperMoreDots = styled.TouchableOpacity`
  padding: 3px;
  background-color: ${COLORS.darkSand50};
  border-radius: 20px;
`;
