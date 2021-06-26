import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import {Isidora} from '../index';
import {QuestionCardType} from './VideoComponentTypes';

type CardType = Pick<QuestionCardType, 'borderColor' | 'question'>;

interface QuestionCardProps {
  card: CardType;
}

const QuestionCard: React.FunctionComponent<QuestionCardProps> = ({card}) => {
  return (
    <Wrapper borderColor={card.borderColor}>
      <Isidora
        fontWeight="600"
        fontSize={16}
        lineHeight={18}
        color={constants.QUESTION_CARD.textColor}>
        {card.question}
      </Isidora>
    </Wrapper>
  );
};

interface WrapperProps {
  borderColor: string;
}

const Wrapper = styled(View)<WrapperProps>`
  background-color: ${COLORS.sand};
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-width: 0.5px;
  border-color: ${COLORS.bombay}
  height: ${constants.QUESTION_CARD.height}px;
  padding-left: 15px;
  padding-right: 15px;
  width: ${constants.QUESTION_CARD.width}px;
  align-items: center;
  justify-content: center;
`;

export default React.memo(QuestionCard);
