import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  Keyboard,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import {COLORS} from '../configs';
import colors from '../configs/styles/colors';
import strings from '../configs/styles/strings';
import ClearIcon from './icons/ClearIcon';
import Isidora from './texts/Isidora';

interface FFTextInputProps extends TextInputProps {
  infoText?: string;
  clearVisible?: boolean;
  width?: number;
  backgroundColor?: string;
  wrapperStyle?: ViewStyle;
}

const FFTextInput: React.FunctionComponent<FFTextInputProps> = (props) => {
  const [fieldText, setFieldText] = useState<undefined | string>(undefined);
  const [showClearButton, setShowClearButton] = useState(false);
  const onChangeTextLocal = useCallback(
    (text: string) => {
      setFieldText(text);
      setShowClearButton(text.length > 0);
      if (props?.onChangeText) {
        props?.onChangeText(text);
      }
    },
    [props],
  );

  const onBlurInput = useCallback(
    (e) => {
      if (props?.onBlur) {
        props.onBlur(e);
      }
    },
    [props],
  );

  const onClearText = useCallback(() => {
    setFieldText(undefined);
    setShowClearButton(false);
    if (props?.onChangeText) {
      props?.onChangeText('');
    }
    Keyboard.dismiss();
  }, [props]);

  useEffect(() => {
    if (props.value && !fieldText) {
      setFieldText(props.value);
      setShowClearButton(props.value.length > 0);
    }
  }, [fieldText, props.value]);

  return (
    <>
      {props.infoText && (
        <Isidora
          fontSize={14}
          textAlign="left"
          color={colors.blazeBlue}
          font="bold"
          style={{marginBottom: 4}}
          lineHeight={16}>
          {props.infoText}
        </Isidora>
      )}
      <View
        style={[
          {
            alignItems: 'center',
            backgroundColor: props.backgroundColor ?? colors.white,
            borderBottomLeftRadius: 14,
            borderColor: colors.black15,
            borderTopRightRadius: 14,
            borderWidth: 0.5,
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            width: props.width || '100%',
          },
          props.wrapperStyle,
        ]}>
        <TextInput
          {...props}
          value={fieldText}
          placeholder={props.placeholder ?? strings.gender.add}
          autoCorrect={false}
          onBlur={onBlurInput}
          onChangeText={onChangeTextLocal}
          maxLength={props.maxLength ?? 50}
          allowFontScaling={false}
          placeholderTextColor={COLORS.blazeBlue30}
          selectionColor={COLORS.textInputCursor}
          multiline={false}
          numberOfLines={1}
          keyboardAppearance={Appearance.getColorScheme() || 'default'}
          style={{
            color: colors.blazeBlue,
            fontFamily: 'IsidoraSansAlt-SemiBold',
            fontSize: 14,
            // height: 48,
            // lineHeight: 14,
            width: '92%',
          }}
          returnKeyType={props.returnKeyType ?? 'search'}
        />
        {showClearButton && props.clearVisible && (
          <TouchableWithoutFeedback
            onPress={onClearText}
            style={{
              backgroundColor: COLORS.blazeBlue20,
              borderRadius: 20,
              padding: 7,
            }}>
            <ClearIcon color={COLORS.blazeBlue} />
          </TouchableWithoutFeedback>
        )}
      </View>
    </>
  );
};

export default React.memo(FFTextInput);
