import React from 'react';
import {View} from 'react-native';

import colors from '../../configs/styles/colors';
import Poppins from '../texts/Poppins';

interface Props {
  position: number;
}

const PhotoPositionNumber: React.FunctionComponent<Props> = ({position}) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 25,
        left: 4,
        position: 'absolute',
        top: 4,
        zIndex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.silver50,
          borderColor: colors.white,
          borderRadius: 25,
          borderWidth: 2,
          height: 16,
          justifyContent: 'center',
          width: 16,
        }}>
        <Poppins
          color={colors.silverChalice}
          fontSize={10}
          fontWeight="600"
          lineHeight={13}>
          {position}
        </Poppins>
      </View>
    </View>
  );
};

export default React.memo(PhotoPositionNumber);
