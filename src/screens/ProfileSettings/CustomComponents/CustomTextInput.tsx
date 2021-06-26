import React, {useCallback} from 'react';
import {Appearance, TextInput} from 'react-native';
import {COLORS} from "../../../configs";

type GroupItem = {
  item: {
    value: string;
  };
};

type CustomTextInputProps = {
  item: GroupItem;
  onChangeText: (item: GroupItem, text: string) => void;
  onBlur: (item: string) => void;
  value: string;
  placeholder: string;
  editable: boolean;
};

const CustomTextInput: React.FunctionComponent<CustomTextInputProps> = ({
  item,
  onChangeText,
  value,
  placeholder,
  editable,
  onBlur,
}) => {
  const onCompareValueChange = useCallback(
    (text: string) => {
      onChangeText(item, text);
    },
    [onChangeText, item],
  );

  const onBlurChange = useCallback(() => {
    onBlur(item?.item?.value);
  }, [onBlur, item]);

  return (
    <TextInput
      value={value}
      onChangeText={onCompareValueChange}
      placeholder={placeholder}
      editable={editable}
      onBlur={onBlurChange}
      selectionColor={COLORS.textInputCursor}
      keyboardAppearance={Appearance.getColorScheme() || 'default'}
    />
  );
};

export {CustomTextInput};
