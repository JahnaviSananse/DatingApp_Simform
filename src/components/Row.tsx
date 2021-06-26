import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

export interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}

const Row: React.FunctionComponent<Props> = ({style, children}) => {
  return <View style={[{flexDirection: 'row'}, style]}>{children}</View>;
};

export default React.memo(Row);
