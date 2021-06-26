import React from 'react';
import {View} from 'react-native';

import colors from '../../configs/styles/colors';
import Icon, {IconName} from '../Icon';
import Poppins from '../texts/Poppins';

interface Props {
  icon: IconName;
  label: string;
}

const IconLabel: React.FunctionComponent<Props> = ({icon, label}) => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'flex-start',
          height: 20,
          justifyContent: 'center',
          width: 20,
        }}>
        <Icon name={icon} />
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Poppins
          style={{marginStart: 15}}
          color={colors.solitude}
          lineHeight={20}
          fontSize={14}
          textAlign="left">
          {label}
        </Poppins>
      </View>
    </View>
  );
};

export default React.memo(IconLabel);
