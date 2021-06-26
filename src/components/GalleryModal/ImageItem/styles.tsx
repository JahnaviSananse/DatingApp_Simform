import styled from 'styled-components/native';

import {COLORS} from '../../../configs';
import dimensions from '../../../utils/dimensions';

export const Wrapper = styled.TouchableOpacity`
  width: ${dimensions.WIDTH * 0.33}px;
  height: ${dimensions.WIDTH * 0.33}px;
  margin-bottom: ${dimensions.WIDTH * 0.005}px;
`;

export const SelectedCircle = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${COLORS.sand};
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: ${({isSelected}) =>
    isSelected ? COLORS.raspberry : COLORS.black01};
  border-width: ${({isSelected}) => (isSelected ? 0 : 1)}px;
`;
export const CameraWrapper = styled.TouchableOpacity`
  width: ${dimensions.WIDTH * 0.33}px;
  height: ${dimensions.WIDTH * 0.33}px;
  background-color: ${COLORS.jumbo03};
  justify-content: center;
  align-items: center;
`;
export const VideoIconWrapper = styled.View`
  position: absolute;
  left: 5px;
  bottom: 5px;
`;
export const VideoLengthWrapper = styled.View`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
