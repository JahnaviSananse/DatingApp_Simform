import React from 'react';
import {TouchableWithoutFeedbackProps, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import styled from 'styled-components';

import colors from '../../configs/styles/colors';
import {ArrowRight} from '../index';
import {TutorialComponentProps} from './VideoComponentTypes';

interface NextStepButtonProps extends TutorialComponentProps {
  canGoNext: boolean;
  uploading: boolean;
  onNextStep: () => void;
  disabled: boolean;
}

const NextStepButton: React.FunctionComponent<NextStepButtonProps> = ({
  canGoNext,
  showPrompt,
  uploading,
  onNextStep,
  onPressPrompt,
  disabled,
}) => {
  return (
    <>
      {/*{showPrompt && (*/}
      {/*  <FFPromptCard*/}
      {/*    message={strings.videoRecord.tutorialPrompt.next}*/}
      {/*    position={{bottom: 70, right: 20}}*/}
      {/*    onPressGo={onPressPrompt}*/}
      {/*  />*/}
      {/*)}*/}
      <ButtonWrapper showPrompt={showPrompt} disabled={disabled}>
        <TouchableWrapper
          onPress={onNextStep}
          disabled={disabled}
          style={{
            alignItems: 'center',
            backgroundColor:
              canGoNext || disabled ? colors.blazeBlue : colors.blazeBlue20,
            borderRadius: 30,
            height: 50,
            justifyContent: 'center',
            width: 50,
          }}>
          {uploading ? (
            <Progress.Circle
              style={{alignSelf: 'center'}}
              color={colors.white}
              borderWidth={2}
              size={26}
              indeterminate
            />
          ) : (
            <ArrowRight
              color={colors.sand}
              style={{marginLeft: 3}}
              width={12}
              height={22}
            />
          )}
        </TouchableWrapper>
      </ButtonWrapper>
    </>
  );
};

const TouchableWrapper = styled(TouchableWithoutFeedback)<
  TouchableWithoutFeedbackProps
>`
  align-items: center;
  height: 72px;
  width: 72px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

interface ButtonWrapperProps {
  showPrompt: boolean;
  disabled: boolean;
}

const ButtonWrapper = styled(View)<ButtonWrapperProps>`
  z-index: ${(props) => (props.disabled ? 1 : 0)};
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 86px;
`;

export default React.memo(NextStepButton);
