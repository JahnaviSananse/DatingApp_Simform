import React, {useCallback, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {COLORS, STRINGS} from '../../../configs';
import {Isidora} from '../..';

interface Props {
  changeVisibleModal: (value: boolean) => void;
  visibleModal: boolean;
  blockReport: (value: boolean) => void;
  hideUnmatch?: boolean;
  setType?: (value: 'unmatch' | 'report') => void;
  onPressCancel?: () => void;
}

const ModalHeaderMore: React.FunctionComponent<Props> = ({
  changeVisibleModal,
  visibleModal,
  blockReport,
  hideUnmatch = false,
  setType,
  onPressCancel,
}) => {
  const isPressReport = useRef(false);

  const HideModal = useCallback(() => {
    if (onPressCancel) {
      onPressCancel();
    }
    changeVisibleModal(false);
  }, [changeVisibleModal, onPressCancel]);

  const openBlockReport = useCallback(() => {
    if (setType) {
      setType('report');
    }
    changeVisibleModal(false);
    isPressReport.current = true;
  }, [changeVisibleModal, setType]);

  const onCloseModal = useCallback(() => {
    if (isPressReport.current) {
      blockReport(true);
      isPressReport.current = false;
    }
  }, [blockReport]);

  const onPressUnmatch = useCallback(() => {
    if (setType) {
      setType('unmatch');
    }
    changeVisibleModal(false);
    isPressReport.current = true;
  }, [changeVisibleModal, setType]);

  return (
    <Modal
      onModalHide={onCloseModal}
      backdropColor={COLORS.blackPearl}
      backdropTransitionOutTiming={600}
      backdropTransitionInTiming={600}
      animationOutTiming={600}
      animationInTiming={600}
      isVisible={visibleModal}
      animationIn="slideInUp"
      style={{
        justifyContent: 'flex-end',
        marginBottom: 50,
      }}
      onBackdropPress={HideModal}>
      <View
        style={{
          backgroundColor: COLORS.sand,
          borderRadius: 15,
        }}>
        <TouchableOpacity
          onPress={openBlockReport}
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.borderInputGray,
            justifyContent: 'center',
            paddingVertical: 15,
          }}>
          <Isidora
            lineHeight={24}
            fontSize={22}
            textAlign="center"
            fontWeight="900"
            color={COLORS.raspberry}>
            {STRINGS.chatRoom.alertDots.firstButton}
          </Isidora>
        </TouchableOpacity>
        {!hideUnmatch && (
          <TouchableOpacity
            onPress={onPressUnmatch}
            style={{
              borderBottomWidth: 1,
              borderColor: COLORS.borderInputGray,
              justifyContent: 'center',
              paddingVertical: 15,
            }}>
            <Isidora
              lineHeight={24}
              fontSize={22}
              textAlign="center"
              fontWeight="900"
              color={COLORS.raspberry}>
              {STRINGS.chatRoom.alertDots.secondButton}
            </Isidora>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={HideModal}
          style={{
            justifyContent: 'center',
            paddingVertical: 15,
          }}>
          <Isidora
            lineHeight={24}
            fontSize={22}
            textAlign="center"
            fontWeight="900"
            color={COLORS.blazeBlue}>
            {STRINGS.chatRoom.alertDots.thirdButtonCancel}
          </Isidora>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default React.memo(ModalHeaderMore);
