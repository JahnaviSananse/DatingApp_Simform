import React from 'react';
import {View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components';

import {COLORS} from '../../configs';
import RefreshIcon from '../icons/RefreshIcon';

interface ChangeCameraButtonProps {
  showButton: boolean;
  onChangeCamera: () => void;
}

const ChangeCameraButton: React.FunctionComponent<ChangeCameraButtonProps> = ({
  showButton,
  onChangeCamera,
}) => {
  return (
    <ButtonWrapper>
      {showButton && (
        <TouchableWithoutFeedback
          style={{
            backgroundColor: COLORS.blazeBlue,
            borderRadius: 40,
            padding: 12,
          }}
          onPress={onChangeCamera}>
          <RefreshIcon />
        </TouchableWithoutFeedback>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 86px;
`;

export default React.memo(ChangeCameraButton);
