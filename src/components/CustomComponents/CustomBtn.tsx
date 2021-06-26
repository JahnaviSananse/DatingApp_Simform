import React, {ReactElement, useCallback} from 'react';

import {LikeToMeet, Preference} from '../../store/generated/graphql';

type ItemType = LikeToMeet | Preference;

type CustomBtnProps<T> = {
  onPress: (item: T) => void;
  select: boolean;
  item: T;
  children: React.ReactNode;
  Btn: React.ReactType;
};

const CustomBtn: <T extends ItemType>(
  props: CustomBtnProps<T>,
) => ReactElement<CustomBtnProps<T>> = ({
  onPress,
  select,
  item,
  children,
  Btn,
}) => {
  const onCompareValuePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

  return (
    <Btn select={select} onPress={onCompareValuePress}>
      {children}
    </Btn>
  );
};

export {CustomBtn};
