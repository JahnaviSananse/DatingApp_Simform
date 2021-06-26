import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import colors from '../configs/styles/colors';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore

interface Props {
  imageUrl: string;
  onImageLoaded: () => void;
}

const FFImageLoader: React.FunctionComponent<Props> = ({
  imageUrl,
  onImageLoaded,
}) => {
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
      <FastImage
        style={{
          bottom: 0,
          height: '100%',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
        }}
        source={{
          priority: FastImage.priority.high,
          uri: imageUrl,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onLoad={onImageLoaded}
      />
    </View>
  );
};

export default React.memo(FFImageLoader);
