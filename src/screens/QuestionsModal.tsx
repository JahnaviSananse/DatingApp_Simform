import R from 'ramda';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Isidora, Row} from '../components';
import BackArrowIcon from '../components/icons/BackArrowIcon';
import QuestionsList from '../components/QuestionsList';
import {QuestionCardType} from '../components/VideoRecord/VideoComponentTypes';
import colors from '../configs/styles/colors';
import strings from '../configs/styles/strings';
import dimensions from '../utils/dimensions';

interface Props {
  cards: QuestionCardType[];
  currentQuestion: QuestionCardType;
  onPressNext: (card: QuestionCardType) => void;
}

const QuestionsModal: React.FunctionComponent<Props> = ({
  cards,
  currentQuestion,
  onPressNext,
}) => {
  // Default value is changed or not
  const [defaultSelected, setDefaultSelected] = useState(false);

  // Selected id and local questions list
  const [selectedId, setSelectedId] = useState();
  const [questions, setQuestions] = useState(cards);

  const onQuestionSelected = useCallback(
    (id) => {
      const update = R.map(
        R.ifElse(
          R.propEq('id', id),
          R.assoc('selected', true),
          R.assoc('selected', false),
        ),
      );
      setQuestions(update(questions));
      setSelectedId(id);
    },
    [questions],
  );

  // Set chose default value
  useEffect(() => {
    if (!defaultSelected) {
      setDefaultSelected(true);
      if (currentQuestion.id !== cards[0].id) {
        onQuestionSelected(currentQuestion.id);
      } else {
        onQuestionSelected(cards[0].id);
      }
    }
  }, [
    cards,
    currentQuestion.id,
    defaultSelected,
    onQuestionSelected,
    selectedId,
  ]);

  const onPress = useCallback(() => {
    const card = cards.find((card) => card.id == selectedId);
    if (card) {
      onPressNext(card);
    }
  }, [cards, onPressNext, selectedId]);

  return (
    <View
      style={{
        backgroundColor: colors.backdrop,
        flex: 1,
        paddingTop: 40,
        width: dimensions.WIDTH,
      }}>
      <Row
        style={{
          alignItems: 'center',
          paddingBottom: 29,
          paddingHorizontal: 24,
          paddingTop: 15,
        }}>
        <TouchableOpacity onPress={onPress}>
          <BackArrowIcon color={colors.sand} />
        </TouchableOpacity>
        <Isidora
          textAlign="center"
          fontSize={24}
          color={colors.sand}
          lineHeight={24}
          fontWeight="900"
          style={{flexGrow: 1}}>
          {strings.questionsModal.chooseQuestion}
        </Isidora>
      </Row>

      <QuestionsList
        questions={questions}
        onQuestionSelected={onQuestionSelected}
      />
    </View>
  );
};

export default React.memo(QuestionsModal);
