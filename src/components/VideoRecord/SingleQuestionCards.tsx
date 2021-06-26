import React, {useCallback} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import strings from '../../configs/styles/strings';
import FFPromptCard from '../FFPromptCard';
import MoreQuestionsIcon from '../icons/MoreQuestionsIcon';
import QuestionCard from './QuestionCard';
import {QuestionCardType, TutorialComponentProps} from './VideoComponentTypes';
import dimensions from "../../utils/dimensions";

interface Props extends TutorialComponentProps {
  showCards: boolean;
  canClick: boolean;
  currentQuestion: QuestionCardType;
  onShowMore: () => void;
}

const SingleQuestionCards: React.FunctionComponent<Props> = ({
  showCards,
  canClick,
  showPrompt,
  showTutorial,
  currentQuestion,
  onShowMore,
  onPressPrompt,
}) => {
  const onPress = useCallback(() => {
    if (showTutorial) return;
    onShowMore();
  }, [onShowMore, showTutorial]);

  return (
    <View style={{bottom: dimensions.HEIGHT * 0.205}}>
      {showPrompt && showCards && (
        <FFPromptCard
          title={strings.videoRecord.tutorialPrompt.showMore.title}
          message={strings.videoRecord.tutorialPrompt.showMore.content}
          position={{bottom: 95, right: 20}}
          onPressGo={onPressPrompt}
        />
      )}
      {showCards && (
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <ShowMoreButton />
            <View style={{alignItems: 'center'}}>
              <BackStackItem id={3} topPadding={-9} />
              <BackStackItem id={2} topPadding={-6} />
              <BackStackItem id={1} topPadding={-3} />
              <QuestionCard card={currentQuestion} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      {!canClick && <ClickBlocker />}
    </View>
  );
};

const ShowMoreButton: React.FunctionComponent = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        right: 22,
        top: -27,
        zIndex: 100,
      }}>
      <MoreQuestionsIcon />
    </View>
  );
};

interface BackStackItemProps {
  id: number;
  topPadding: number;
}

const BackStackItem = styled(View)<BackStackItemProps>`
  border-width: 0.5px;
  border-color: ${COLORS.bombay}
  background-color: ${COLORS.sand};
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: ${constants.QUESTION_CARD.height}px;
  position: absolute;
  top: ${(props) => props.topPadding}px;
  width: ${(props) => constants.QUESTION_CARD.width - props.id * 5}px;
`;

const ClickBlocker = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: transparent;
`;

export default React.memo(SingleQuestionCards);
