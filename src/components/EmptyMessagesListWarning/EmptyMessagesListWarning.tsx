import React from 'react';
import {View} from 'react-native';

import {COLORS, STRINGS} from '../../configs';
import {Isidora, Row} from '../';
import HiIcon from '../icons/HiIcon';
import RocketIcon from '../icons/RocketIcon';

const EmptyMessagesListWarning: React.FunctionComponent = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: '36%',

        transform: [{scaleY: -1}],
      }}>
      <Row
        style={{
          alignItems: 'center',
        }}>
        <RocketIcon style={{marginRight: 10}} />
        <Isidora
          lineHeight={36}
          fontSize={26}
          textAlign="center"
          fontWeight="900"
          color={COLORS.blazeBlue}>
          {STRINGS.chatRoom.startTitle}
        </Isidora>
        <HiIcon style={{marginLeft: 10}} />
      </Row>
      <Isidora
        lineHeight={24}
        fontSize={16}
        textAlign="center"
        fontWeight="600"
        color={COLORS.blazeBlue}
        style={{marginTop: 10}}>
        {STRINGS.chatRoom.startAbout}
      </Isidora>
    </View>
  );
};
export default React.memo(EmptyMessagesListWarning);
