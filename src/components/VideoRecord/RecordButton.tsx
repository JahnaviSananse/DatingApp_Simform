import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components';

import colors from '../../configs/styles/colors';
import {CameraControlType, RecordResultType} from '../../hooks/useVideoRecord';
import {
  QuestionCardDuration,
  TutorialComponentProps,
} from './VideoComponentTypes';

interface RecordButtonProps extends TutorialComponentProps {
  // Record result
  recordResult: RecordResultType;
  // Progress
  uploading: boolean;
  // Showing
  highlightButton: boolean;
  // Control
  cameraControl: CameraControlType;
  // Duration
  duration: QuestionCardDuration;
  disabled: boolean;
  isCardChanging: boolean;
}

const BUTTON_FULL_SIZE = 64;
const RECORD_BUTTON_SIZE = BUTTON_FULL_SIZE - 19;
const STOP_BUTTON_SIZE = RECORD_BUTTON_SIZE - 23;
const ANIMATION_DURATION = 500;

const RecordButton: React.FunctionComponent<RecordButtonProps> = ({
  // Record result
  recordResult,
  // Progress
  uploading,
  // Showing
  highlightButton,
  showPrompt,
  // Control
  cameraControl,
  // Duration
  duration,
  // Callbacks
  onPressPrompt,
  disabled,
  isCardChanging,
}) => {
  // Ref for control circular progress bar
  const circularProgress = useRef<AnimatedCircularProgress>(null);

  // Recording state listener
  useEffect(() => {
    if (circularProgress.current) {
      if (recordResult.recording) {
        circularProgress.current.animate(
          100,
          duration.full * 1000,
          Easing.quad,
        );
      }

      if (recordResult.success) {
        circularProgress.current.animate(0, ANIMATION_DURATION, Easing.quad);
      }
    }
  }, [duration.full, recordResult.recording, recordResult.success]);

  // Record button handler
  const onPress = useCallback(() => {
    if (showPrompt || uploading) return;

    if (recordResult.canStopVideo) {
      cameraControl.stopRecord();
    }

    if (!recordResult.recording && !recordResult.preparation) {
      cameraControl.startRecord();
    }
  }, [
    cameraControl,
    recordResult.canStopVideo,
    recordResult.preparation,
    recordResult.recording,
    showPrompt,
    uploading,
  ]);

  // Animation of changing the record button size
  const [sizeAnimation] = useState(new Animated.Value(RECORD_BUTTON_SIZE));
  Animated.timing(sizeAnimation, {
    duration: ANIMATION_DURATION,
    toValue: recordResult.canStopVideo
      ? 28
      : recordResult.recording || recordResult.preparation
      ? 0
      : RECORD_BUTTON_SIZE,
    useNativeDriver: false,
  }).start();

  // Animation of making a square out of a circle
  const [borderAnimation] = useState(new Animated.Value(STOP_BUTTON_SIZE));
  Animated.timing(borderAnimation, {
    duration: ANIMATION_DURATION,
    toValue: recordResult.canStopVideo
      ? 5
      : recordResult.recording
      ? 0
      : STOP_BUTTON_SIZE,
    useNativeDriver: false,
  }).start();

  // Record button
  const recordButtonItem = useCallback<() => React.ReactElement>(
    () => (
      <Animated.View
        style={{
          backgroundColor: colors.raspberry,
          borderRadius: borderAnimation,
          height: sizeAnimation,
          width: sizeAnimation,
        }}
      />
    ),
    [borderAnimation, sizeAnimation],
  );

  return (
    <>
      {/*{showPrompt && highlightButton && (*/}
      {/*  <FFPromptCard*/}
      {/*    title={strings.videoRecord.tutorialPrompt.record.title}*/}
      {/*    message={strings.videoRecord.tutorialPrompt.record.content}*/}
      {/*    position={{bottom: 90, left: 0, right: 0}}*/}
      {/*    onPressGo={onPressPrompt}*/}
      {/*  />*/}
      {/*)}*/}
      <ButtonWrapper showPrompt={showPrompt} disabled={disabled}>
        {!uploading && (
          <TouchableWithoutFeedback
            onPress={onPress}
            disabled={disabled || isCardChanging}>
            <View style={{height: BUTTON_FULL_SIZE, width: BUTTON_FULL_SIZE}}>
              <AnimatedCircularProgress
                ref={circularProgress}
                size={BUTTON_FULL_SIZE - 4}
                width={3}
                fill={0}
                rotation={0}
                tintColor={colors.sand}
                backgroundColor={colors.raspberry}>
                {recordButtonItem}
              </AnimatedCircularProgress>
            </View>
          </TouchableWithoutFeedback>
        )}
      </ButtonWrapper>
    </>
  );
};

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

export default React.memo(RecordButton);
