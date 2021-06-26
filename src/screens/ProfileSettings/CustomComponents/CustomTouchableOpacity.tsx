import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import {GroupItem} from '../ProfileSettings';

type CustomTouchableOpacityProps = {
  onPress: (item: GroupItem) => void;
  style: {
    borderBottomColor: string;
    borderBottomWidth: number;
    justifyContent: string;
    minHeight: number;
  };
  item: GroupItem;
  children: React.ReactNode;
};

const CustomTouchableOpacity: React.FunctionComponent<CustomTouchableOpacityProps> = ({
  onPress,
  style,
  item,
  children,
}) => {
  const onComparePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

  return (
    <TouchableOpacity onPress={onComparePress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export {CustomTouchableOpacity};
