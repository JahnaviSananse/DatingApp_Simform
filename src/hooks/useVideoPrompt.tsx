import AsyncStorage from '@react-native-community/async-storage';
import {useCallback, useEffect, useRef, useState} from 'react';
import {singletonHook} from 'react-singleton-hook';

import constants from '../configs/constants';

export type PromptStateType =
  | 'SUSPENSE' // Default state
  | 'CARDS' // Tutorial is showing that the question cards can be swiped
  | 'REC' // Tutorial is showing that the big red button is needed to record video
  | 'FIRST_STEP' // First tutorials completed
  // | 'RE-REC' // Tutorial  is showing that the user can re-record the video and change the question
  // | 'NEXT' // Tutorial is showing that the button with arrows is needed to save the recorded video and go next
  // | 'SECOND_STEP' // Second tutorials completed
  | 'MORE' // Tutorial is showing that the user can open the list of the question by tapping on the "More Questions" button or the cards stack
  | 'ALL'; // All of the tutorials are completed

type VideoPromptReturnType = {
  showPrompt: boolean;
  currentPrompt: PromptStateType;
  updateCurrentStep: (number: number) => void;
  showNextPrompt: () => void;
  skipWholePrompt: () => void;
};

const init: VideoPromptReturnType = {
  currentPrompt: 'SUSPENSE',
  showNextPrompt: () => void 0,
  showPrompt: false,
  skipWholePrompt: () => void 0,
  updateCurrentStep: () => void 0,
};

const useVideoPromptImpl = (): VideoPromptReturnType => {
  // AsyncStorage.setItem(constants.LAST_PROMPT_STATE, 'SUSPENSE')

  // Last saved prompt state
  const [lastPromptState, setLastPromptState] = useState<PromptStateType>(
    'SUSPENSE',
  );

  // Show prompt state
  const [showPrompt, setShowPrompt] = useState<boolean>(false);

  // Current prompt state
  const [currentPrompt, setCurrentPrompt] = useState<PromptStateType>(
    'SUSPENSE',
  );

  // useEffect(() => {
  //   console.log(currentPrompt);
  // }, [currentPrompt]);

  // Current step number
  const [currentStep, setCurrentStep] = useState<number | undefined>();

  // Set value for the last prompt state
  const mounted = useRef(true);
  useEffect(() => {
    if (mounted) {
      AsyncStorage.getItem(constants.LAST_PROMPT_STATE)
        .then((value) => {
          if (value) {
            setLastPromptState(value as PromptStateType);
          } else {
            setLastPromptState('CARDS');
          }
        })
        .catch(() => {
          setLastPromptState('CARDS');
        });
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    // console.log('CURRENT PROMPT: ', currentPrompt);
    // console.log('CURRENT STEP: ', currentStep);

    if (currentPrompt && currentStep) {
      // Step numbers check
      const firstStep = currentStep === 1;
      const fifthStep = currentStep === 5;

      // Hide the prompt when it is not necessary
      setShowPrompt(
        currentPrompt !== 'SUSPENSE' &&
          currentPrompt !== 'FIRST_STEP' &&
          // currentPrompt !== 'SECOND_STEP' &&
          currentPrompt !== 'ALL' &&
          (firstStep || fifthStep),
      );
    }
  }, [currentPrompt, currentStep]);

  // Update current prompt
  const updateCurrentPrompt = useCallback(
    (stepNumber: number, lastPrompt: PromptStateType) => {
      // Check the first step prompts
      const firstStep = stepNumber === 1;
      const showOnFirstStep =
        firstStep && (lastPrompt === 'CARDS' || lastPrompt === 'REC');
      // lastPrompt === 'FIRST_STEP' ||
      // lastPrompt === 'RE-REC' ||
      // lastPrompt === 'NEXT');
      if (showOnFirstStep) {
        setCurrentPrompt(lastPrompt);
      }

      // Check the fifth screen prompts
      const fifthStep = stepNumber === 5;
      const showOnFifthStep =
        fifthStep &&
        (lastPrompt === 'FIRST_STEP' ||
          lastPrompt === 'MORE' ||
          lastPrompt === 'ALL');
      if (showOnFifthStep) {
        setCurrentPrompt(lastPrompt);
      }
    },
    [],
  );

  // Check the current step and show the prompt
  useEffect(() => {
    if (currentStep && lastPromptState) {
      updateCurrentPrompt(currentStep, lastPromptState);
    }
  }, [currentStep, lastPromptState, updateCurrentPrompt]);

  // Save and update prompt state
  const updatePromptState = useCallback((state: PromptStateType) => {
    AsyncStorage.setItem(constants.LAST_PROMPT_STATE, state).then(() => {
      setCurrentPrompt(state);
      setLastPromptState(state);
    });
  }, []);

  // Show and save the next prompts
  const showNextPrompt = useCallback(() => {
    const firstScreen = currentStep === 1;
    if (firstScreen) {
      switch (currentPrompt) {
        case 'CARDS':
          updatePromptState('REC');
          break;
        case 'REC':
          updatePromptState('FIRST_STEP');
          break;
        // case 'FIRST_STEP':
        //   updatePromptState('RE-REC');
        //   break;
        // case 'RE-REC':
        //   updatePromptState('NEXT');
        //   break;
        // case 'NEXT':
        //   updatePromptState('SECOND_STEP');
        //   break;
      }
    }

    const fifthScreen = currentStep === 5;
    if (fifthScreen) {
      switch (currentPrompt) {
        case 'FIRST_STEP':
          updatePromptState('MORE');
          break;
        case 'MORE':
          updatePromptState('ALL');
          break;
      }
    }
  }, [currentPrompt, currentStep, updatePromptState]);

  // Skip the prompt when videos more than 5
  const skipWholePrompt = useCallback(() => {
    AsyncStorage.setItem(constants.LAST_PROMPT_STATE, 'ALL').then(() => {
      setLastPromptState('ALL');
      setCurrentPrompt('ALL');
    });
  }, []);

  // Update current step
  const updateCurrentStep = useCallback((step: number) => {
    // console.log('STEP: ', step);
    setCurrentStep(step);
  }, []);

  // Return the results
  return {
    currentPrompt: currentPrompt,
    showNextPrompt: showNextPrompt,
    showPrompt: showPrompt,
    skipWholePrompt: skipWholePrompt,
    updateCurrentStep: updateCurrentStep,
  };
};

// export const useVideoPrompt = singletonHook<VideoPromptReturnType>(
//   init,
//   useVideoPromptImpl,
// );
export const useVideoPrompt = useVideoPromptImpl;
