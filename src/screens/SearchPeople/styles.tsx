import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';

export const Wrapper = styled.ScrollView`
  background-color: ${COLORS.sand};
`;

export const WrapperSwiper = styled.View`
  height: ${dimensions.HEIGHT * 0.676 + 235};
  background-color: ${COLORS.sand};
  justify-content: center;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 48px 20px 14px;
  background-color: ${COLORS.sand};
`;
export const LoaderWrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.sand};
  align-items: center;
  justify-content: center;
`;
export const Loader = styled.ActivityIndicator.attrs(() => ({
  color: COLORS.blazeBlue,
  size: 'large',
}))``;
export const BackBtnWrapper = styled.View`
  height: 36px;
  width: 36px;
`;
export const CardWrapper = styled.View`
  height: ${dimensions.HEIGHT * 0.676 + 235}px;
  margin-top: -9px;
`;
