import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {COLORS} from '../../configs';
import colors from '../../configs/styles/colors';
import {useVideoPrompt} from '../../hooks/useVideoPrompt';
import {CameraControlType, RecordResultType} from '../../hooks/useVideoRecord';
import dimensions from '../../utils/dimensions';
import VideoTutorial from '../VideoTutorial';
import ChangeCameraButton from './ChangeCameraButton';
import MultiQuestionCards from './MultiQuestionCards';
import NextStepButton from './NextStepButton';
import RecordButton from './RecordButton';
import SingleQuestionCards from './SingleQuestionCards';
import {QuestionCardType} from './VideoComponentTypes';

interface RecordControlBlockProps {
  // Record result
  recordResult: RecordResultType;
  // Progress
  uploading: boolean;
  // Showing values
  showMoreButton: boolean;
  showQuestionCards: boolean;
  showQuestionsModal: boolean;
  // Data
  currentQuestion: QuestionCardType | undefined;
  questionCards: QuestionCardType[] | undefined;
  // Buttons
  onShowMore: () => void;
  onChooseQuestion: (card: QuestionCardType) => void;
  onNextStep: () => void;
  // Control
  cameraControl: CameraControlType;
  // Step number
  stepNumber: number;
  isShowTutorial: boolean;
}

const RecordControlBlock: React.FunctionComponent<RecordControlBlockProps> = ({
  // Record result
  recordResult,
  // Progress
  uploading,
  // Showing values
  showMoreButton,
  showQuestionCards,
  showQuestionsModal,
  // Data
  currentQuestion,
  questionCards,
  // Buttons
  onShowMore,
  onChooseQuestion,
  onNextStep,
  // Control
  cameraControl,
  // Step number
  stepNumber,
  isShowTutorial,
}) => {
  // Vide prompt control
  const {showPrompt, currentPrompt, showNextPrompt} = useVideoPrompt();
  const [showTutorial, setShowTutorial] = useState(isShowTutorial ? 1 : 0);
  const [isCardChanging, setIsCardChanging] = useState(false);

  useEffect(() => {
    if (stepNumber === 5 && isShowTutorial) {
      setShowTutorial(3);
    }
  }, [isShowTutorial, stepNumber]);

  useEffect(() => {
    // Show tutorial when 5 step
    if (
      stepNumber === 5 &&
      !recordResult.recording &&
      currentPrompt === 'FIRST_STEP'
    ) {
      showNextPrompt();
    }
  }, [
    currentPrompt,
    recordResult.recording,
    recordResult.success,
    showNextPrompt,
    stepNumber,
    uploading,
  ]);

  const onPressNext = useCallback(() => {
    if (!showPrompt) {
      onNextStep();
    }
  }, [onNextStep, showPrompt]);

  return (
    <View
      style={{
        backgroundColor: showTutorial > 0 ? COLORS.backdrop : 'transparent',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: showTutorial > 0 ? 0 : dimensions.HEIGHT * 0.75,
      }}>
      {!!showTutorial && (
        <VideoTutorial setShowTutorial={setShowTutorial} step={showTutorial} />
      )}
      <View
        style={{
          backgroundColor: showPrompt ? colors.blackPearl70 : 'transparent',
          height: '100%',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View
          style={{
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
          }}>
          {questionCards && (
            <MultiQuestionCards
              showCards={
                currentPrompt !== 'REC' &&
                // currentPrompt !== 'NEXT' &&
                !showMoreButton &&
                showQuestionCards &&
                !uploading
              }
              canSwipe={!recordResult.recording}
              onChoose={onChooseQuestion}
              cards={questionCards}
              setIsCardChanging={setIsCardChanging}
            />
          )}
          {showMoreButton && currentQuestion && showTutorial !== 4 && (
            <SingleQuestionCards
              canClick={!recordResult.recording}
              showCards={
                showMoreButton &&
                !uploading &&
                !showQuestionsModal &&
                showQuestionCards
              }
              showPrompt={currentPrompt === 'MORE'}
              showTutorial={showPrompt}
              onShowMore={onShowMore}
              currentQuestion={currentQuestion}
              onPressPrompt={showNextPrompt}
            />
          )}
          <View
            style={{
              alignItems: 'flex-end',
              width: dimensions.WIDTH,
            }}>
            <View
              style={{
                backgroundColor: colors.blackPearl,
                width: '100%',
              }}
            />
            <View
              style={{
                alignItems: 'flex-end',
                backgroundColor: COLORS.sand,
                bottom: ifIphoneX(25, 20),
                flexDirection: 'row',
                left: 0,
                position: 'absolute',
                right: 0,
              }}>
              {!!showTutorial && (
                <View
                  style={{
                    backgroundColor: COLORS.backdrop,
                    bottom: 0,
                    left: 0,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    zIndex: 1,
                  }}
                />
              )}
              {!showQuestionsModal && currentQuestion && (
                <>
                  <ChangeCameraButton
                    showButton={!recordResult.recording && !uploading}
                    onChangeCamera={cameraControl.changeCamera}
                  />
                  <RecordButton
                    recordResult={recordResult}
                    duration={currentQuestion?.duration}
                    uploading={uploading}
                    showPrompt={
                      currentPrompt === 'REC' // || currentPrompt === 'RE-REC'
                    }
                    highlightButton={currentPrompt === 'REC'}
                    cameraControl={cameraControl}
                    onPressPrompt={showNextPrompt}
                    disabled={showTutorial === 2 || showTutorial === 4}
                    isCardChanging={isCardChanging}
                  />
                  <NextStepButton
                    canGoNext={
                      recordResult.recordedVideo !== undefined &&
                      !recordResult.recording
                    }
                    showPrompt={false}
                    showTutorial={showPrompt}
                    uploading={uploading}
                    onNextStep={onPressNext}
                    onPressPrompt={showNextPrompt}
                    disabled={showTutorial === 2 || showTutorial === 4}
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RecordControlBlock);
