import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

import colors from '../configs/styles/colors';
import strings from '../configs/styles/strings';
import dimensions from '../utils/dimensions';
import {Isidora} from './index';

type PromptPositionProps = {
  right?: number;
  left?: number;
  bottom?: number;
};

interface Props {
  message: string;
  position: PromptPositionProps;
  onPressGo: () => void;
  title: string;
}

const FFPromptCard: React.FunctionComponent<Props> = ({
  message,
  position,
  onPressGo,
  title,
}) => {
  return (
    <PromptWrapper {...position}>
      <CardWrapper>
        <Isidora
          fontSize={18}
          lineHeight={20}
          fontWeight="900"
          textAlign="center"
          color={colors.blazeBlue}>
          {title}
        </Isidora>
        <Isidora
          style={{paddingHorizontal: 12, paddingVertical: 8}}
          textAlign="center"
          fontWeight="600"
          color={colors.blazeBlue}>
          {message}
        </Isidora>
        <TouchableOpacity onPress={onPressGo}>
          <GoItButton />
        </TouchableOpacity>
      </CardWrapper>
    </PromptWrapper>
  );
};

const GoItButton: React.FunctionComponent = () => {
  return (
    <View
      style={{
        backgroundColor: colors.raspberry,
        borderRadius: 30,
        height: 48,
        justifyContent: 'center',
        marginTop: 5,
        width: 138,
      }}>
      <Isidora
        textAlign="center"
        fontSize={18}
        lineHeight={18}
        fontWeight="900"
        color={colors.sand}>
        {strings.videoRecord.tutorialPrompt.goText}
      </Isidora>
    </View>
  );
};

const CardWrapper = styled(View)`
  background-color: ${colors.sand};
  align-items: center;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  justify-content: center;
  padding: 15px 0;
  width: ${dimensions.WIDTH - 40};
`;

const PromptWrapper = styled(View)<PromptPositionProps>(
  ({left, right, bottom}) => [
    {
      alignItems: 'center',
      position: 'absolute',
      zIndex: 3,
    },
    left ? {left: left} : {},
    right ? {right: right} : {},
    bottom ? {bottom: bottom} : {},
  ],
);

export default React.memo(FFPromptCard);
