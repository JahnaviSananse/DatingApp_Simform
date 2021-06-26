import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {RNCamera, RecordOptions} from 'react-native-camera';
import Sound from 'react-native-sound';

import {QuestionCardType} from '../components/VideoRecord/VideoComponentTypes';

type State =
  | {status: 'suspense'}
  | {status: 'preparation'}
  | {status: 'ready'}
  | {status: 'recording'; canStopVideo: boolean; voicePlayed: boolean}
  | {status: 'success'}
  | {status: 'error'; message: string};

type Action =
  | {type: 'suspense'}
  | {type: 'preparation'}
  | {type: 'ready'}
  | {type: 'recording'; canStopVideo: boolean; voicePlayed: boolean}
  | {type: 'success'}
  | {type: 'error'; message: string};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'suspense':
      return {
        ...state,
        status: 'suspense',
      };
    case 'preparation':
      return {
        ...state,
        status: 'preparation',
      };
    case 'ready':
      return {
        ...state,
        status: 'ready',
      };
    case 'success':
      return {
        ...state,
        status: 'success',
      };
    case 'error':
      return {
        ...state,
        message: action.message,
        status: 'error',
      };
    case 'recording':
      return {
        ...state,
        canStopVideo: action.canStopVideo,
        status: 'recording',
        voicePlayed: action.voicePlayed,
      };
  }
}

export type CameraType = 'front' | 'back';
export type CameraRefType = React.RefObject<RNCamera>;

// Control camera types
type UpdateCurrentQuestion = (
  stepNumber: number,
  question: QuestionCardType,
) => void;
type ChangeCameraType = () => void;
type ResetStateType = () => void;
type StartRecordType = () => void;
type StopRecordType = () => void;
type RecordingStartedType = () => void;

export type CameraControlType = {
  updateCurrentQuestion: UpdateCurrentQuestion;
  changeCamera: ChangeCameraType;
  resetState: ResetStateType;
  startRecord: StartRecordType;
  stopRecord: StopRecordType;
  recordingStarted: RecordingStartedType;
};

export type RecordResultType = {
  preparation: boolean;
  recording: boolean;
  success: boolean;
  recordedVideo: RecordedVideo | undefined;
  canStopVideo: boolean;
  voicePlayed: boolean;
  error: string | undefined;
};

type SoundType = {
  questionId: number;
  sound: Sound;
};

export type RecordedVideo = {
  questionId: number;
  videoPath: string;
};

type VideoRecordType = {
  recordedVideo: RecordedVideo | undefined;
  updateRecordedVideo: (video: RecordedVideo | undefined) => void;
  updateRecordingState: (recording: boolean) => void;
};

const useVideoRecord = ({
  recordedVideo,
  updateRecordedVideo,
  updateRecordingState,
}: VideoRecordType): [
  CameraRefType,
  CameraType,
  CameraControlType,
  RecordResultType,
] => {
  // Enable playback in silence mode and setup record and playing settings on IOS
  Sound.setCategory('MultiRoute', true);
  Sound.setMode('VideoRecording');
  Sound.setActive(true);

  // Record state
  const [state, dispatch] = useReducer(reducer, {status: 'suspense'});

  // Init success state when recorded video is not null or undefined
  useEffect(() => {
    if (recordedVideo) {
      dispatch({type: 'success'});
    }
  }, [recordedVideo]);

  // Listen recording state
  useEffect(() => {
    updateRecordingState(state.status === 'recording');
  }, [state.status, updateRecordingState]);

  // Record duration
  const [currentQuestion, setCurrentQuestion] = useState<
    undefined | QuestionCardType
  >(undefined);

  // Sound list
  const [soundList, setSoundList] = useState<SoundType[]>([]);

  // Current sound
  const [currentSound, setCurrentSound] = useState<SoundType | undefined>(
    undefined,
  );

  // Camera properties
  const camera = useRef<RNCamera>(null);
  const [cameraType, setCameraType] = useState<CameraType>('front');

  // Reset record state
  const resetState = useCallback<ResetStateType>(() => {
    dispatch({type: 'suspense'});
    setCurrentSound(undefined);
    setSoundList([]);
    setCurrentQuestion(undefined);
  }, []);

  // Change camera
  const changeCamera = useCallback<ChangeCameraType>(() => {
    setCameraType(cameraType === 'front' ? 'back' : 'front');
  }, [cameraType]);

  // Error callback
  const onRecordError = useCallback((error: string) => {
    // console.log('Record error: ', error);
    dispatch({message: error, type: 'error'});
  }, []);

  // Add video to recorded videos list
  const addRecordedVideo = useCallback(
    async (questionId: number, videoPath: string) =>
      new Promise<void>((resolve) => {
        const recordedVideo: RecordedVideo = {
          questionId: Number(questionId),
          videoPath: videoPath,
        };
        updateRecordedVideo(recordedVideo);
        resolve();
      }),
    [updateRecordedVideo],
  );

  // Load sound and update current question
  const loadCurrentSound = useCallback(
    (question: QuestionCardType) => {
      // console.log(`Loading sound for: ${question.id}`);

      // Check if the question already loaded
      const loadedSound = soundList.find(
        (item) => item.questionId === question.id,
      );

      if (loadedSound) {
        setCurrentSound(loadedSound);
        dispatch({type: 'ready'});
      } else {
        dispatch({type: 'preparation'});
        const audio = new Sound(question?.audio.url, '', (error) => {
          if (error) {
            onRecordError('failed to load the audio!');
          } else {
            // Create new sound
            const sound: SoundType = {
              questionId: question.id,
              sound: audio,
            };

            // Add new loaded sound to the list
            setSoundList((prevState) => [...prevState, sound]);

            // Set current sound
            setCurrentSound(loadedSound);
            dispatch({type: 'ready'});
          }
        });
      }
    },
    [onRecordError, soundList],
  );

  // Update current duration
  const updateCurrentQuestion = useCallback<UpdateCurrentQuestion>(
    (stepNumber, question) => {
      if (state.status !== 'recording') {
        setCurrentQuestion(question);
        loadCurrentSound(question);
      }
    },
    [loadCurrentSound, state.status],
  );

  // Start record callback
  const startRecord = useCallback<StartRecordType>(() => {
    if (!currentSound) return;

    dispatch({canStopVideo: false, type: 'recording', voicePlayed: false});
    if (camera.current && currentQuestion) {
      const options: RecordOptions = {
        maxDuration: currentQuestion?.duration.full,
        mute: false,
        orientation: 'portrait',
        quality: '1080p',
      };
      camera.current
        .recordAsync(options)
        .then((promise) => {
          addRecordedVideo(currentQuestion.id, promise.uri);
        })
        .catch((reason) => {
          onRecordError(reason);
        });
    }
  }, [addRecordedVideo, currentQuestion, currentSound, onRecordError]);

  // Stop record
  const stopRecord = useCallback<StopRecordType>(() => {
    if (camera.current) {
      camera.current.stopRecording();
    }
  }, []);

  // Recording started
  const recordingStarted = useCallback<RecordingStartedType>(() => {
    // Play current audio
    currentSound?.sound?.play((success) => {
      if (success) {
        // console.log('successfully finished playing');
        dispatch({canStopVideo: false, type: 'recording', voicePlayed: true});
      } else {
        onRecordError('playback failed due to audio decoding errors');
      }
    });

    // Can stop when min recording time has passed
    if (currentQuestion) {
      setTimeout(() => {
        dispatch({canStopVideo: true, type: 'recording', voicePlayed: true});
      }, currentQuestion.duration.min * 1000);
    }
  }, [currentQuestion, currentSound, onRecordError]);

  return [
    camera,
    cameraType,
    {
      changeCamera,
      recordingStarted,
      resetState,
      startRecord,
      stopRecord,
      updateCurrentQuestion,
    },
    {
      canStopVideo: state.status === 'recording' ? state.canStopVideo : false,
      error: state.status === 'error' ? state.message : undefined,
      preparation: state.status === 'preparation',
      recordedVideo: recordedVideo,
      recording: state.status === 'recording',
      success: state.status === 'success',
      voicePlayed: state.status === 'recording' ? state.voicePlayed : false,
    },
  ];
};

export default useVideoRecord;
