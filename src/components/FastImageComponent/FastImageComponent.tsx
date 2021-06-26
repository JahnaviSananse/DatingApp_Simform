/* REACT */
import React from 'react';
import {ViewStyle} from 'react-native';
/* MODULES */
import FastImage from 'react-native-fast-image';

interface Props {
  width?: number;
  height?: number;
  uri: string | {uri: string};
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  borderRadius?: number;
  style: ViewStyle;
}

const FastImageComponent: React.FunctionComponent<Props> = ({
  width,
  height,
  borderRadius,
  uri,
  resizeMode,
  style,
}) => {
  const source = typeof uri === 'string' ? {uri} : uri;

  return (
    <FastImage
      style={[
        {
          borderRadius,
          height,
          width,
        },
        style,
      ]}
      source={source}
      borderRadius={borderRadius || 0}
      blurRadius={1}
      cacheControl="immutable"
      resizeMode={resizeMode || FastImage.resizeMode.cover}
    />
  );
};

export default React.memo(FastImageComponent);
