import React, {useCallback, useState} from 'react';

import {COLORS} from '../../configs';
import strings from '../../configs/styles/strings';
import TutorialLines from '../icons/TutorialLines';
import {Isidora} from '../index';
import {
  BTN,
  InfoBlock,
  Point,
  Tutorial1,
  Tutorial2,
  Tutorial3,
  Tutorial4,
  VerticalLine,
} from './style';

interface Props {
  setShowTutorial: (value: number) => void;
  step: number;
}
const VideoTutorial: React.FunctionComponent<Props> = ({
  setShowTutorial,
  step,
}) => {
  const setStep = useCallback(
    (value: number) => {
      setShowTutorial(value);
    },
    [setShowTutorial],
  );
  const closeTutorial = useCallback(() => setShowTutorial(0), [
    setShowTutorial,
  ]);

  return (
    <>
      {step === 1 && (
        <Tutorial1>
          <InfoBlock>
            <Isidora fontSize={18} style={{marginBottom: 10}}>
              {strings.videoRecord.tutorialPrompt.swipe.title}
            </Isidora>
            <Isidora fontSize={14} fontWeight="600" style={{marginBottom: 15}}>
              {strings.videoRecord.tutorialPrompt.swipe.content}
            </Isidora>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <BTN onPress={() => setStep(2)}>
              <Isidora fontSize={18} color={COLORS.sand} lineHeight={18}>
                {strings.videoRecord.tutorialPrompt.goText}
              </Isidora>
            </BTN>
          </InfoBlock>
        </Tutorial1>
      )}
      {step === 2 && (
        <Tutorial2>
          <InfoBlock>
            <Isidora fontSize={18} style={{marginBottom: 10}}>
              {strings.videoRecord.tutorialPrompt.record.title}
            </Isidora>
            <Isidora fontSize={14} fontWeight="600" style={{marginBottom: 15}}>
              {strings.videoRecord.tutorialPrompt.record.content}
            </Isidora>
            <BTN onPress={closeTutorial}>
              <Isidora fontSize={18} color={COLORS.sand} lineHeight={18}>
                {strings.videoRecord.tutorialPrompt.goText}
              </Isidora>
            </BTN>
          </InfoBlock>
        </Tutorial2>
      )}
      {step === 3 && (
        <Tutorial3>
          <InfoBlock>
            <Isidora fontSize={18} style={{marginBottom: 10}}>
              {strings.videoRecord.tutorialPrompt.swipe.title}
            </Isidora>
            <Isidora fontSize={14} fontWeight="600" style={{marginBottom: 15}}>
              {strings.videoRecord.tutorialPrompt.swipe.content}
            </Isidora>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <BTN onPress={() => setStep(4)}>
              <Isidora fontSize={18} color={COLORS.sand} lineHeight={18}>
                {strings.videoRecord.tutorialPrompt.goText}
              </Isidora>
            </BTN>
          </InfoBlock>
          <VerticalLine />
          <Point />
        </Tutorial3>
      )}
      {step === 4 && (
        <Tutorial4>
          <InfoBlock>
            <Isidora fontSize={18} style={{marginBottom: 10}}>
              {strings.videoRecord.tutorialPrompt.record.title}
            </Isidora>
            <Isidora fontSize={14} fontWeight="600" style={{marginBottom: 15}}>
              {strings.videoRecord.tutorialPrompt.record.content}
            </Isidora>
            <BTN onPress={closeTutorial}>
              <Isidora fontSize={18} color={COLORS.sand} lineHeight={18}>
                {strings.videoRecord.tutorialPrompt.goText}
              </Isidora>
            </BTN>
          </InfoBlock>
          <TutorialLines style={{marginLeft: '50%', marginTop: 15}} />
        </Tutorial4>
      )}
    </>
  );
};
export default React.memo(VideoTutorial);
