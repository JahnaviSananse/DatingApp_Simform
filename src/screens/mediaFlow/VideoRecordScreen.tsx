import AsyncStorage from '@react-native-community/async-storage';
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, AppState, AppStateStatus, StatusBar, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

import FFVideoGrid from '../../components/FFVideoGrid';
import RecordControlBlock from '../../components/VideoRecord/RecordControlBlock';
import {QuestionCardType} from '../../components/VideoRecord/VideoComponentTypes';
import VideoScreenHeader from '../../components/VideoRecord/VideoScreenHeader';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import {setIsVideoChecking} from '../../hooks/usePhotoVideoModeration';
import useRecordQuestions from '../../hooks/useRecordQuestions';
import useVideoRecord, {RecordedVideo} from '../../hooks/useVideoRecord';
import useVideoRequest from '../../hooks/useVideoRequest';
import NavigationKey from '../../navigation/NavigationKey';
import {NavigationParams} from '../../navigation/NavigationParams';
import QuestionsModal from '../QuestionsModal';

type ScreenRouteProp = RouteProp<NavigationParams, 'VideoRecordScreen'>;

const VideoRecordScreen: React.FunctionComponent = () => {
  // Navigation props
  const {params} = useRoute<ScreenRouteProp>();
  const {editStepNumber, questionId, singleEdit, isCheckYourFlick} = params || {
    editStepNumber: 1,
    isCheckYourFlick: false,
    questionId: undefined,
    singleEdit: false,
  };

  // Check the current app state
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // Last question and step
  const [lastQuestionId, setLastQuestionId] = useState(questionId);
  const [lastStepNumber, setLastStepNumber] = useState(editStepNumber);
  const [lastRecordedVideo, setLastRecordedVideo] = useState<
    RecordedVideo | undefined
  >();

  // Camera states
  const [recording, setRecording] = useState(false);

  // Reset recorded video when change step number
  const updateStepNumber = useCallback(
    (step: number) => {
      if (lastStepNumber !== step) {
        setLastRecordedVideo(undefined);
        setLastStepNumber(step);
      }
    },
    [lastStepNumber],
  );

  // Listen the current app state
  const _handleAppStateChange = useCallback((nextAppState: AppStateStatus) => {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [_handleAppStateChange]);

  return appStateVisible === 'background' && recording ? (
    <View style={{backgroundColor: colors.blackPearl, flex: 1}} />
  ) : (
    <VideoRecord
      singleEdit={singleEdit}
      questionId={lastQuestionId}
      updateQuestionId={setLastQuestionId}
      stepNumber={lastStepNumber}
      updateStepNumber={updateStepNumber}
      showTutorial={params?.showTutorial ?? false}
      isCheckYourFlick={isCheckYourFlick}
      recordedVideo={lastRecordedVideo}
      updateRecordedVideo={setLastRecordedVideo}
      updateRecordingState={setRecording}
    />
  );
};

interface VideoRecordProps {
  stepNumber: number;
  updateStepNumber: (step: number) => void;
  questionId: number;
  updateQuestionId: (id: number) => void;
  singleEdit: boolean;
  showTutorial: boolean;
  isCheckYourFlick: boolean;
  recordedVideo: RecordedVideo | undefined;
  updateRecordedVideo: (video: RecordedVideo | undefined) => void;
  updateRecordingState: (recording: boolean) => void;
}

const VideoRecord: React.FunctionComponent<VideoRecordProps> = ({
  stepNumber,
  updateStepNumber,
  questionId,
  updateQuestionId,
  singleEdit,
  showTutorial,
  isCheckYourFlick,
  recordedVideo,
  updateRecordedVideo,
  updateRecordingState,
}) => {
  const {navigate, dispatch, goBack} = useNavigation();

  // Camera
  const [camera, cameraType, cameraControl, recordResult] = useVideoRecord({
    recordedVideo: recordedVideo,
    updateRecordedVideo: updateRecordedVideo,
    updateRecordingState: updateRecordingState,
  });

  // Networking
  const [uploadVideo, resetUploadState, uploadResult] = useVideoRequest();

  // Get cards for the screen
  const [
    chooseScreen,
    updateCurrentQuestion,
    questionsResult,
  ] = useRecordQuestions({initialStep: stepNumber, questionId: questionId});

  // Show the grid or not
  const [showGrid, setShowGrid] = useState(false);

  // Show cards few seconds or not
  const [showCards, setShowCards] = useState(true);

  // Background dimming or not
  const [showDimming, setShowDimming] = useState(true);

  // Questions modal
  const [showModal, setShowModal] = useState(false);

  // Errors from recording, uploading video and fetching audio
  useEffect(() => {
    if (questionsResult.error) {
      Alert.alert(
        'Fetching audio/questions error!',
        'There was an error: ' + questionsResult.error,
      );
    }
    if (uploadResult.error) {
      Alert.alert(
        'Uploading video error!',
        'There was an error: ' + uploadResult.error,
      );
    }
    if (recordResult.error) {
      Alert.alert(
        'Recording video error!',
        'There was an error: ' + recordResult.error,
      );
    }
  }, [questionsResult.error, recordResult.error, uploadResult.error]);

  // Check changing the current step to update the current question
  useEffect(() => {
    if (questionsResult.stepNumber && questionsResult.currentQuestion) {
      cameraControl.updateCurrentQuestion(
        questionsResult.stepNumber,
        questionsResult.currentQuestion,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    questionsResult.currentQuestion,
    questionsResult.stepNumber,
    cameraControl.updateCurrentQuestion,
  ]);

  // Navigate to prev screen
  const navigateToPrevScreen = useCallback(async () => {
    const skipCheckFlick = await AsyncStorage.getItem(
      constants.SKIP_CHECK_FLICK_STATE,
    );
    setIsVideoChecking(true);

    if (skipCheckFlick && !isCheckYourFlick) {
      navigate(NavigationKey.EditProfile);
    } else if (isCheckYourFlick) {
      goBack();
    } else {
      dispatch(StackActions.replace(NavigationKey.UploadPhoto));
    }
  }, [dispatch, goBack, isCheckYourFlick, navigate]);

  useEffect(() => {
    if (recordResult.recording) {
      setShowDimming(false);
    }

    if (recordResult.voicePlayed) {
      setShowCards(false);
    }

    if (uploadResult.success) {
      // Reset upload and record states
      resetUploadState();
      cameraControl.resetState();

      // Go to next question
      if (questionsResult.stepNumber + 1 == 8 || singleEdit) {
        navigateToPrevScreen();
      } else {
        chooseScreen(questionsResult.stepNumber + 1);
        updateStepNumber(questionsResult.stepNumber + 1);
      }
    }

    if (uploadResult.success || !recordResult.recording) {
      setShowCards(true);
      setShowDimming(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cameraControl.resetState,
    chooseScreen,
    questionsResult.stepNumber,
    recordResult.recording,
    recordResult.voicePlayed,
    resetUploadState,
    singleEdit,
    uploadResult.success,
    navigateToPrevScreen,
  ]);

  const onNextStep = useCallback(() => {
    if (
      !uploadResult.uploading &&
      recordResult.recordedVideo &&
      questionsResult.currentQuestion?.id &&
      !recordResult.recording
    ) {
      uploadVideo(
        recordResult.recordedVideo.videoPath,
        recordResult.recordedVideo.questionId,
      );
    }
  }, [
    questionsResult.currentQuestion,
    recordResult.recordedVideo,
    recordResult.recording,
    uploadResult.uploading,
    uploadVideo,
  ]);

  const onShowMore = useCallback(() => {
    setShowModal(true);
  }, []);

  const onPressNext = useCallback(
    (card: QuestionCardType) => {
      setShowModal(false);
      updateCurrentQuestion(card);
      updateQuestionId(card.id);
    },
    [updateCurrentQuestion, updateQuestionId],
  );

  const onCloseModal = useCallback(() => {
    setShowModal(false);
    //navigate(NavigationKey.MainNavigator);
  }, []);

  const onGridDisable = useCallback(() => {
    setShowGrid(!showGrid);
  }, [showGrid]);

  return (
    <>
      <View
        style={{
          backgroundColor: colors.sand,
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
        }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <VideoScreenHeader
          step={questionsResult.stepNumber}
          totalSteps={7}
          showMotivation={
            questionsResult.showMore && !recordResult.recording && !showModal
          }
          showQuestionsModal={showModal}
          onCloseModal={onCloseModal}
          onGridDisable={onGridDisable}
          showGrid={showGrid}
        />
        <View
          style={{
            borderRadius: 14,
            flex: 0.78,
            overflow: 'hidden',
          }}>
          <RNCamera
            ref={camera}
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}
            type={cameraType}
            keepAudioSession
            defaultVideoQuality={RNCamera.Constants.VideoQuality['1080p']}
            pictureSize="1920x1080"
            videoStabilizationMode="off"
            onRecordingStart={cameraControl.recordingStarted}
            flashMode={RNCamera.Constants.FlashMode.off}
          />
          {!showModal && showGrid && (
            <View
              style={{
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
              }}>
              <FFVideoGrid />
            </View>
          )}
        </View>
      </View>
      <RecordControlBlock
        // Record result
        recordResult={recordResult}
        // Progress
        uploading={uploadResult.uploading}
        // Showing values
        showMoreButton={questionsResult.showMore}
        showQuestionCards={showCards}
        showQuestionsModal={showModal}
        // Data
        currentQuestion={questionsResult.currentQuestion}
        questionCards={questionsResult.cards}
        // Buttons
        onShowMore={onShowMore}
        onChooseQuestion={onPressNext}
        onNextStep={onNextStep}
        // Control
        cameraControl={cameraControl}
        // Step number
        stepNumber={questionsResult.stepNumber}
        isShowTutorial={showTutorial}
      />
      {showModal && questionsResult.cards && questionsResult.currentQuestion && (
        <View
          style={{
            alignItems: 'center',
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}>
          <QuestionsModal
            cards={questionsResult.cards}
            currentQuestion={questionsResult.currentQuestion}
            onPressNext={onPressNext}
          />
        </View>
      )}
    </>
  );
};

export default React.memo(VideoRecordScreen);
