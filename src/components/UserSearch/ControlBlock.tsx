import React from 'react';
import {View} from 'react-native';

import colors from '../../configs/styles/colors';
import DislikeUser from '../icons/DislikeUser';
import LastUser from '../icons/LastUser';
import LikeUser from '../icons/LikeUser';
import SuperLikeUser from '../icons/SuperLikeUser';

interface Props {
  height: number;
}

const ControlBlock: React.FunctionComponent<Props> = ({height}) => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.blackPearl,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          bottom: 0,
          flexDirection: 'row',
          height: height,
          justifyContent: 'space-between',
          left: 0,
          paddingHorizontal: 40,
          position: 'absolute',
          right: 0,
        }}>
        <LastUser />
        <DislikeUser />
        <LikeUser />
        <SuperLikeUser />
      </View>
    </>
  );
};

export default React.memo(ControlBlock);
