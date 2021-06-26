import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import PopcornIcon from '../icons/PopcornIcon';
import {Isidora} from '../index';

const VideoProcessingError: React.FunctionComponent = () => {
  const videoError = strings.checkYourFlick.getVideoError('MODERATION');

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.darkSand50,
        flex: 1,
        paddingTop: 60,
        width: '100%',
      }}>
      <ActivityIndicator size="large" color={colors.blazeBlue} />
      <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 32}}>
        <Isidora
          color={colors.blazeBlue}
          fontSize={18}
          lineHeight={22}
          fontWeight="600">
          {videoError.title}
        </Isidora>
        <PopcornIcon />
      </View>
    </View>
  );
};

export default React.memo(VideoProcessingError);
