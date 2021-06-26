import {useCallback, useEffect, useState} from 'react';
import {Keyboard, Platform, StatusBar} from 'react-native';

interface KeyboardEventImproved extends KeyboardEvent {
  endCoordinates: {
    height: number;
  };
}

const useKeyboardHeight = (startingHeight = 0) => {
  const [keyboardHeight, setKeyboardHeight] = useState(startingHeight);
  const onOpenKeyboard = useCallback((event: KeyboardEventImproved) => {
    setKeyboardHeight(
      (event ? event.endCoordinates.height : 0) +
        (StatusBar.currentHeight || 0),
    );
  }, []);
  const onCloseKeyboard = useCallback(() => {
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      onOpenKeyboard,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      onCloseKeyboard,
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  });

  return keyboardHeight;
};

export default useKeyboardHeight;
