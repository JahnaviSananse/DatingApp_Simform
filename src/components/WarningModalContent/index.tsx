import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../configs';
import CloseIcon from '../icons/CloseIcon';
import {FFColorButton, Isidora, Row} from '..';

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
  onClose?: () => void;
  message2?: string;
  styles?: IndestsStyle;
}

const WarningModalContent: React.FunctionComponent<Props> = ({
  title,
  message,
  message2,
  positiveText,
  negativeText,
  onPressPositive,
  onPressNegative,
  hideCloseButton = false,
  oneBtn = false,
  textAlign = 'center',
  onClose,
  styles,
}) => {
  const onPositive = useCallback(async () => {
    onPressPositive();
  }, [onPressPositive]);

  const onNegative = useCallback(async () => {
    if (onPressNegative) {
      onPressNegative();
    }
  }, [onPressNegative]);

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingBottom: 20,
        paddingHorizontal: 23,
        paddingTop: styles?.paddingTopWrapper ?? 16,
        width: '100%',
      }}>
      <Isidora
        color={COLORS.blazeBlue}
        fontWeight="900"
        lineHeight={20}
        fontSize={18}
        textAlign={textAlign}
        style={{marginBottom: styles?.titleMarginBottom ?? 8}}>
        {title}
      </Isidora>
      <Isidora
        color={COLORS.blazeBlue}
        lineHeight={20}
        fontSize={14}
        fontWeight="600"
        textAlign={textAlign}>
        {message}
      </Isidora>
      {message2 && (
        <Isidora
          color={COLORS.blazeBlue}
          lineHeight={20}
          fontSize={14}
          fontWeight="600"
          textAlign={textAlign}
          style={{marginTop: styles?.message2MarginTop ?? 8}}>
          {message2}
        </Isidora>
      )}
      <Row
        style={{
          justifyContent: oneBtn ? 'center' : 'space-between',
          marginTop: styles?.buttonsMarginTop ?? 17,
        }}>
        {!oneBtn && (
          <FFColorButton
            title={negativeText}
            buttonStyle={{
              color: COLORS.blazeLightBlue60,
              width: 138,
            }}
            onPress={onNegative}
            fontStyle={{color: COLORS.sand, fontSize: 18, fontWeight: '900'}}
          />
        )}
        <FFColorButton
          title={positiveText}
          buttonStyle={{
            color: COLORS.raspberry,
            width: 138,
          }}
          onPress={onPositive}
          fontStyle={{color: COLORS.sand, fontSize: 18, fontWeight: '900'}}
        />
      </Row>
      {!hideCloseButton && (
        <View style={{position: 'absolute', right: 3, top: 3}}>
          <TouchableOpacity onPress={onClose}>
            <CloseIcon color={COLORS.bombay} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(WarningModalContent);
