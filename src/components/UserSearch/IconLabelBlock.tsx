import React, {FunctionComponent, ReactNode} from 'react';
import {View} from 'react-native';

interface Props {
  firstLabel: ReactNode;
  secondLabel: ReactNode;
}

const IconLabelBlock: FunctionComponent<Props> = ({
  firstLabel,
  secondLabel,
}) => {
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginTop: 22,
      }}>
      <View style={{flex: 0.42}}>{firstLabel}</View>
      <View style={{flex: 0.45}}>{secondLabel}</View>
    </View>
  );
};

export default React.memo(IconLabelBlock);
