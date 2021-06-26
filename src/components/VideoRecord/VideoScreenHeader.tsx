import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components';

import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import NavigationKey from '../../navigation/NavigationKey';
import GridIcon from '../icons/GridIcon';
import {Isidora, Row} from '../index';

interface ControlBlockProps {
  step: number;
  totalSteps: number;
  showMotivation: boolean;
  showQuestionsModal: boolean;
  onGridDisable: () => void;
  onCloseModal: () => void;
  showGrid: boolean;
}

const VideoScreenHeader: React.FunctionComponent<ControlBlockProps> = ({
  step,
  totalSteps,
  showMotivation,
  showQuestionsModal,
  onGridDisable,
  onCloseModal,
  showGrid,
}) => {
  const {navigate} = useNavigation();

  const onSave = useCallback(() => {
    navigate(NavigationKey.MainNavigator);
  }, [navigate]);

  const onClose = useCallback(async () => {
    if (showQuestionsModal) {
      onCloseModal();
    } else {
      const goToEditProfile = await AsyncStorage.getItem(
        constants.SKIP_CHECK_FLICK_STATE,
      );
      if (goToEditProfile) {
        navigate(NavigationKey.MainNavigator);
      } else {
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: strings.videoRecord.modal.message,
          negativeText: strings.videoRecord.modal.negative,
          onPressNegative: onSave,
          positiveText: strings.videoRecord.modal.positive,
          title: strings.videoRecord.modal.title,
        });
      }
    }
  }, [showQuestionsModal, onCloseModal, navigate, onSave]);

  return (
    <>
      <Wrapper>
        <CloseButton onClose={onClose} />
        <Row
          style={{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <StepCircle>
            <Isidora fontSize={14} color={colors.blazeBlue} fontWeight="900">
              {strings.questionsModal.getStepsText(step, totalSteps)}
            </Isidora>
          </StepCircle>
          {/*<TouchableOpacity>*/}
          {/*  <FlashIcon />*/}
          {/*</TouchableOpacity>*/}
          <GridControlButton
            showGrid={!showQuestionsModal}
            onGridDisable={onGridDisable}
            isShowGrid={showGrid}
          />
        </Row>
      </Wrapper>
      {/*{showMotivation && (*/}
      {/*  <Isidora*/}
      {/*    fontWeight="600"*/}
      {/*    fontSize={16}*/}
      {/*    lineHeight={20}*/}
      {/*    color={colors.blazeBlue}>*/}
      {/*    {step === 5*/}
      {/*      ? strings.videoRecord.titles.fewMoreQuestions*/}
      {/*      : step === 6*/}
      {/*      ? strings.videoRecord.titles.doingAwesome*/}
      {/*      : strings.videoRecord.titles.lastQuestion}*/}
      {/*  </Isidora>*/}
      {/*)}*/}
    </>
  );
};

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({onClose}) => {
  return (
    <View style={{width: '50%'}}>
      {/*<TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={onClose}>*/}
      {/*  <CloseIcon color={COLORS.blazeBlue} />*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};

interface GridControlButtonProps {
  showGrid: boolean;
  onGridDisable: () => void;
  isShowGrid: boolean;
}

const GridControlButton: React.FunctionComponent<GridControlButtonProps> = ({
  showGrid,
  onGridDisable,
  isShowGrid,
}) => {
  return (
    <View>
      {showGrid && (
        <TouchableOpacity onPress={onGridDisable}>
          <GridIcon gridOff={isShowGrid} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const StepCircle = styled(View)`
  height: 32px;
  width: 32px;
  background-color: ${colors.pink20};
  border-radius: 16px;
  margin-left: -15px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(View)`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: ${getStatusBarHeight()}px;
  height: 75px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export default React.memo(VideoScreenHeader);
