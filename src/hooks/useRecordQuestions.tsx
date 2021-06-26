import {useEffect, useState} from 'react';

import {QuestionCardType} from '../components/VideoRecord/VideoComponentTypes';
import constants from '../configs/constants';
import {Question, useMyQuestionsQuery} from '../store/generated/graphql';
import {useVideoPrompt} from './useVideoPrompt';

type RecordQuestionsType = {
  questionId: number | undefined;
  initialStep: number;
};

type RecordQuestionsReturnType = {
  cards: QuestionCardType[] | undefined;
  stepNumber: number;
  showMore: boolean;
  currentQuestion: QuestionCardType | undefined;
  error: string | undefined;
};

const useRecordQuestions = ({
  questionId,
  initialStep,
}: RecordQuestionsType): [
  (step: number) => void,
  (question: QuestionCardType) => void,
  RecordQuestionsReturnType,
] => {
  // Vide prompt control
  const {updateCurrentStep} = useVideoPrompt();

  // Fetch error state
  const [fetchError, setFetchError] = useState<string | undefined>(undefined);

  // Show more button for 5-7 questions
  const [showMore, setShowMore] = useState(false);

  // Cards list
  const [cards, setCards] = useState<QuestionCardType[] | undefined>();

  // Steps
  const [stepNumber, setStepNumber] = useState(initialStep);

  // Current question
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionCardType | undefined
  >();

  // Network
  const {data, error} = useMyQuestionsQuery({fetchPolicy: 'network-only'});

  useEffect(() => {
    if (error) {
      setFetchError(error.message);
    }
  }, [currentQuestion, error]);

  useEffect(() => {
    if (stepNumber) {
      // Change the current step on the video prompt hook
      updateCurrentStep(stepNumber);
    }
  }, [stepNumber, updateCurrentStep]);

  useEffect(() => {
    if (data && stepNumber) {
      let questions: Question[] = [];
      switch (stepNumber) {
        case 1:
          questions = data.myQuestions?.screen1?.questions as Question[];
          break;

        case 2:
          questions = data.myQuestions?.screen2?.questions as Question[];
          break;

        case 3:
          questions = data.myQuestions?.screen3?.questions as Question[];
          break;

        case 4:
          questions = data.myQuestions?.screen4?.questions as Question[];
          break;

        case 5:
          questions = data.myQuestions?.screen5?.questions as Question[];
          break;

        case 6:
          questions = data.myQuestions?.screen6?.questions as Question[];
          break;

        case 7:
          questions = data.myQuestions?.screen7?.questions as Question[];
          break;
      }

      // Show for 5-7 screens
      setShowMore(stepNumber >= 5);

      // Map endpoint questions to local cards
      const localCards: QuestionCardType[] = [];
      questions?.forEach(
        (
          {name, id, audio: {duration, url}, answerDurations: {min, full}},
          index,
        ) => {
          const borderColorIndex = stepNumber < 5 ? index : 0;

          const localQuestion: QuestionCardType = {
            audio: {
              duration: Number(duration),
              url: url,
            },
            borderColor: constants.QUESTION_CARD.borderColors[borderColorIndex],
            duration: {
              full: Number(full),
              min: Number(min),
            },
            id: Number(id),
            question: name,
            selected: false,
          };
          if (questionId && questionId === Number(id)) {
            localCards.unshift(localQuestion);
          } else {
            localCards.push(localQuestion);
          }
        },
      );

      // Set cards list
      setCards(localCards);

      // Set first question as current
      setCurrentQuestion(localCards[0]);
    }
  }, [data, questionId, stepNumber]);

  return [
    setStepNumber,
    setCurrentQuestion,
    {
      cards: cards,
      currentQuestion: currentQuestion,
      error: fetchError,
      showMore: showMore,
      stepNumber: stepNumber,
    },
  ];
};

export default useRecordQuestions;
