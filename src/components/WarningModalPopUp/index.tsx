import React from 'react';
import Modal from 'react-native-modal';

import dimensions from '../../utils/dimensions';
import WarningModalContent from '../WarningModalContent';

type IndestsStyle = {
  paddingTopWrapper?: number;
  titleMarginBottom?: number;
  message2MarginTop?: number;
  buttonsMarginTop?: number;
};
interface Props {
  title: string;
  message: string;
  positiveText: string;
  onPressPositive: () => void;
  negativeText: string;
  onPressNegative?: () => void;
  hideCloseButton?: boolean;
  oneBtn?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  message2?: string;
  styles?: IndestsStyle;
}

const WarningModalPopUp: React.FunctionComponent<Props> = (props) => {
  return (
    <Modal
      isVisible
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}
      backdropColor="#000022"
      style={{
        justifyContent: 'flex-start',
        marginTop: dimensions.HEIGHT * 0.227,
      }}>
      <WarningModalContent {...props} />
    </Modal>
  );
};
export default React.memo(WarningModalPopUp);
