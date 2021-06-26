export interface TutorialComponentProps {
  showPrompt: boolean;
  showTutorial?: boolean;
  onPressPrompt: () => void;
}

export type QuestionCardAudio = {
  duration: number;
  url: string;
};

export type QuestionCardDuration = {
  full: number;
  min: number;
};

export type QuestionCardType = {
  id: number;
  question: string;
  borderColor: string;
  selected: boolean;
  audio: QuestionCardAudio;
  duration: QuestionCardDuration;
};
