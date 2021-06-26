import React, {useCallback, useState} from 'react';
import {
  Appearance,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../configs';
import {getHeightWithScaleFactor} from '../../utils/dimensions';
import {Poppins} from '../index';
import styles from './styles';

interface QuestionsListProps {
  value: string;
  onValueChanged: (value: string) => void;
  about: string;
  placeholder: string;
  name: string;
}

const InputComponent: React.FunctionComponent<QuestionsListProps> = ({
  value,
  onValueChanged,
  about,
  placeholder,
  name,
}) => {
  const [textValue, setTextValue] = useState(
    typeof value !== 'string' ? '' : value,
  );

  const onChangeTextLocal = useCallback(
    (valueString = '') => {
      if (typeof valueString !== 'string') {
        setTextValue('');
        onValueChanged('');
        Keyboard.dismiss();
      } else {
        const trimSpaceBetween =
          valueString.length > 0 &&
          (valueString[0] === ' ' || valueString[1] === ' ')
            ? valueString.substr(1, valueString.length - 1)
            : valueString;
        const deleteEmoji = trimSpaceBetween.replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          '',
        );
        if (
          deleteEmoji === ' ' ||
          deleteEmoji === '  ' ||
          deleteEmoji === '   '
        ) {
          onValueChanged(deleteEmoji.trim());
          setTextValue(deleteEmoji.trim());
        } else {
          onValueChanged(deleteEmoji);
          setTextValue(deleteEmoji);
        }
      }
    },
    [onValueChanged],
  );

  const trimStr = useCallback(() => {
    setTextValue(textValue.trim());
    onValueChanged(textValue.trim());
  }, [textValue, onValueChanged]);

  return (
    <>
      <Poppins
        color={COLORS.jumbo}
        lineHeight={24}
        fontSize={14}
        fontWeight="600"
        textAlign="left"
        style={styles.profileInputMargin}>
        {name}
      </Poppins>
      {!!about.length && (
        <Poppins
          color={COLORS.bombay}
          lineHeight={16}
          fontSize={12}
          font="regular"
          textAlign="left"
          style={{marginBottom: getHeightWithScaleFactor(5)}}>
          {about}
        </Poppins>
      )}
      <View style={styles.textInputWrapper}>
        <TextInput
          value={textValue}
          placeholder={placeholder}
          onChangeText={onChangeTextLocal}
          style={styles.textInput}
          placeholderTextColor={COLORS.bombay}
          returnKeyType="done"
          onBlur={trimStr}
          selectionColor={COLORS.textInputCursor}
          keyboardAppearance={Appearance.getColorScheme() || 'default'}
        />
        {textValue.length > 0 && (
          <TouchableOpacity
            onPress={onChangeTextLocal}
            style={styles.closeIcon}>
            <Icon name="ios-close" size={30} color={COLORS.bombay} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default React.memo(InputComponent);
