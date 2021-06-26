import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  Keyboard,
  TextInputProps,
  TouchableOpacity,
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

// import {CurrentScreenType} from 'react-native-neomorph-shadows';

// import {CurrentScreenType} from 'react-native-neomorph-shadows';

interface FFTextInputProps extends TextInputProps {
  infoText?: string;
  clearVisible?: boolean;
  width?: number;
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
          fontSize={11}
          textAlign="left"
          color={colors.blackPearl}
          font="bold"
          style={{marginBottom: 4}}
          lineHeight={16}>
          {props.infoText}
        </Isidora>
      )}
      {/* <Shadow
        inner
        useArt
        style={{
          alignItems: 'center',
          backgroundColor: colors.catskillWhite,
          borderRadius: 12,
          flexDirection: 'row',
          height: 48,
          paddingLeft: 16,
          shadowColor: COLORS.black,
          shadowOffset: {height: 4, width: 0},
          shadowOpacity: 0.4,
          shadowRadius: 4,
          width: props?.width ?? dimensions.WIDTH - 24 * 2,
        }}> */}

      <TouchableOpacity
        activeOpacity={1}
        style={{
          alignItems: 'center',
          backgroundColor: COLORS.white,
          borderColor: COLORS.blazeDarker,
          borderTopRightRadius: 14,
          borderWidth: 0.5,
          flexDirection: 'row',
          height: 48,
          justifyContent: 'center',
          marginLeft: 6,
          paddingLeft: 10,
          width: props.width,
        }}>
        <TextInput
          {...props}
          value={fieldText}
          placeholder={props.placeholder ?? strings.gender.add}
          autoCorrect={false}
          onChangeText={onChangeTextLocal}
          maxLength={props.maxLength ?? 50}
          allowFontScaling={false}
          placeholderTextColor={COLORS.blazeBlue50}
          multiline={false}
          numberOfLines={1}
          keyboardAppearance={Appearance.getColorScheme() || 'default'}
          selectionColor={COLORS.textInputCursor}
          style={{
            color: COLORS.blazeBlue,
            flex: 1,
            fontFamily: 'IsidoraSansAlt-SemiBold',
            fontSize: 14,
            fontWeight: '600',
            height: 48,
            lineHeight: 15,
          }}
          returnKeyType={props.returnKeyType ?? 'search'}
        />
        {showClearButton && props.clearVisible && (
          <TouchableWithoutFeedback
            onPress={onClearText}
            style={{
              backgroundColor: COLORS.blazeBlue10,
              borderRadius: 15,
              marginLeft: 5,
              marginRight: 15,
              padding: 7,
            }}>
            <ClearIcon color={COLORS.blazeBlue} />
          </TouchableWithoutFeedback>
        )}
        {/* </Shadow> */}
      </TouchableOpacity>
    </>
  );
};

export default React.memo(FFTextInput);
