import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import {Isidora} from '../index';

interface SmallQuestionCardProps {
  question: string;
}

const SmallQuestionCard: React.FunctionComponent<SmallQuestionCardProps> = ({
  question,
}) => {
  return (
    <Wrapper>
      <Isidora
        fontWeight="600"
        fontSize={16}
        lineHeight={18}
        color={colors.blazeBlue}>
        {question}
      </Isidora>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  background-color: ${colors.sand};
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-width: 0.5px;
  border-color: ${colors.blazeBlue};
  height: ${constants.QUESTION_CARD.height}px;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default React.memo(SmallQuestionCard);
