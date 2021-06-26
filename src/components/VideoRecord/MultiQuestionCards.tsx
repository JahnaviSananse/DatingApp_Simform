import React, {useEffect, useState} from 'react';
import {useCallback} from 'react';
import {View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Swiper from 'react-native-deck-swiper';
import styled from 'styled-components';

import constants from '../../configs/constants';
import dimensions from '../../utils/dimensions';
import QuestionCard from './QuestionCard';
import {QuestionCardType} from './VideoComponentTypes';

interface Props {
  cards: QuestionCardType[];
  showCards: boolean;
  canSwipe: boolean;
  onChoose: (card: QuestionCardType) => void;
  setIsCardChanging: (value: boolean) => void;
}

const MultiQuestionCards: React.FunctionComponent<Props> = ({
  showCards,
  canSwipe,
  cards,
  onChoose,
  setIsCardChanging,
}) => {
  const [localCards, setLocalCards] = useState(cards);

  useEffect(() => {
    if (cards) {
      const sameCards = localCards.find((it) => it.id === cards[0].id);
      if (sameCards === undefined) {
        setLocalCards(cards);
      }
    }
  }, [cards, localCards]);

  return (
    <View
      style={{
        height: constants.QUESTION_CARD.height + 60,
        marginBottom: dimensions.HEIGHT * 0.205,
        marginStart: 10,
        opacity: showCards ? 1 : 0,
      }}>
      <SwipeBlock
        cards={localCards}
        onChoose={onChoose}
        setIsCardChanging={setIsCardChanging}
      />
      {!canSwipe && <SwipeBlocker />}
    </View>
  );
};

interface SwipeBlockProps {
  cards: QuestionCardType[];
  onChoose: (card: QuestionCardType) => void;
  setIsCardChanging: (value: boolean) => void;
}

const SwipeBlock: React.FunctionComponent<SwipeBlockProps> = React.memo(
  ({cards, onChoose, setIsCardChanging}) => {
    const [disableSwipe, setDisableSwipe] = useState(false);
    const renderCard = useCallback<
      (card: QuestionCardType) => React.ReactElement
    >((card) => <QuestionCard card={card} />, []);

    const onSwiped = useCallback(
      (index: number) => {
        const cardIndex = index < cards.length - 1 ? index + 1 : 0;
        onChoose(cards[cardIndex]);
        setIsCardChanging(false);
      },
      [cards, onChoose, setIsCardChanging],
    );
    const dragEnd = useCallback(() => {
      setDisableSwipe(true);
      setTimeout(() => setDisableSwipe(false), 550);
    }, []);
    const dragStart = useCallback(() => {
      setIsCardChanging(true);
    }, [setIsCardChanging]);

    const onSwipedAborted = useCallback(() => {
      setIsCardChanging(false);
    }, [setIsCardChanging]);

    return (
      <>
        <Swiper
          cards={cards}
          backgroundColor="transparent"
          renderCard={renderCard}
          stackSeparation={-6}
          stackScale={1}
          cardIndex={0}
          infinite
          stackSize={4}
          onSwiped={onSwiped}
          swipeAnimationDuration={400}
          disableTopSwipe={disableSwipe}
          disableBottomSwipe={disableSwipe}
          disableLeftSwipe={disableSwipe}
          disableRightSwipe={disableSwipe}
          onSwipedAborted={onSwipedAborted}
          dragEnd={dragEnd}
          dragStart={dragStart}
        />
        {disableSwipe && <SwipeBlocker />}
      </>
    );
  },
);

const SwipeBlocker = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: transparent;
  z-index: 3;
`;

export default React.memo(MultiQuestionCards);
