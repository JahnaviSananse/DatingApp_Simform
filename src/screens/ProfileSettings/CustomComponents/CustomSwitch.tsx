import React, {useCallback} from 'react';
import {Switch} from 'react-native-switch';

import {COLORS} from '../../../configs';

type CustomSwitchProps = {
  item: {
    name: string;
    type: number;
  };
  onValueChange: (item: {name: string; type: number}) => void;
  value: boolean;
};

const CustomSwitch: React.FunctionComponent<CustomSwitchProps> = ({
  item,
  onValueChange,
  value,
}) => {
  const onCompareValueChange = useCallback(() => {
    onValueChange(item);
  }, [onValueChange, item]);

  return (
    <Switch
      value={value}
      onValueChange={onCompareValueChange}
      renderActiveText={false}
      renderInActiveText={false}
      backgroundActive={COLORS.raspberry}
      backgroundInactive={COLORS.raspberry50}
      innerCircleStyle={{
        borderWidth: 0,
        elevation: 5,
        height: 25,
        shadowColor: COLORS.silver,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        width: 25,
      }}
      circleSize={25}
      switchLeftPx={2}
      containerStyle={{
        elevation: 8,
        marginRight: 7,
        shadowColor: COLORS.jumbo,
        shadowOffset: {
          height: 4,
          width: 0,
        },


        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      }}
    />
  );
};

export {CustomSwitch};
