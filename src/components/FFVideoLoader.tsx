import React, {forwardRef} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Video, {VideoProperties} from 'react-native-video';

import colors from '../configs/styles/colors';

const FFVideoLoader = forwardRef<Video, VideoProperties>((props, ref) => {
  return (
    <View
      style={{
        backgroundColor: colors.darkSand50,
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      <ActivityIndicator
        style={{flex: 1}}
        color={colors.blazeBlue}
        size="large"
      />
      <Video
        ref={ref}
        {...props}
        ignoreSilentSwitch="ignore"
        resizeMode="cover"
        progressUpdateInterval={1000}
        style={{
          bottom: 0,
          height: '100%',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
        }}
      />
    </View>
  );
});

export default React.memo(FFVideoLoader);
