import {useCallback} from 'react';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import FFQuestionButton from './FFQuestionButton';
import {QuestionCardType} from './VideoRecord/VideoComponentTypes';

interface QuestionsListProps {
  questions: QuestionCardType[];
  onQuestionSelected: (id: number) => void;
}

const QuestionsList: React.FunctionComponent<QuestionsListProps> = ({
  questions,
  onQuestionSelected,
}) => {
  const renderItem = useCallback<
    ({
      item,
      index,
    }: {
      item: QuestionCardType;
      index: number;
    }) => React.ReactElement
  >(
    ({item, index}) => (
      <FFQuestionButton
        id={item.id}
        title={item.question}
        selected={item.selected}
        style={{
          marginBottom: 21,
          // transform: [
          //   {rotate: item.selected ? '0deg' : index % 2 ? '0.6deg' : '-0.6deg'},
          // ],
        }}
        onButtonSelected={onQuestionSelected}
      />
    ),
    [onQuestionSelected],
  );

  const keyExtractor = useCallback(
    (item: QuestionCardType) => item.question,
    [],
  );

  return (
    <FlatList
      data={questions}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={{paddingBottom: ifIphoneX(30, 10)}}
    />
  );
};

export default React.memo(QuestionsList);
