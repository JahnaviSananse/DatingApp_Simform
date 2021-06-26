import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import FastImage from 'react-native-fast-image';

import dimensions from '../../utils/dimensions';
import BottomImageMask from './ImageBottomMask';
import ImageTopMask from './ImageTopMask';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const wavesBackground = require('../../../assets/images/search-bottom-waves.png');

interface Props {
  showWaves?: boolean;
  firstImage: string;
  secondImage?: string;
}

const ImageGalleryBlock: React.FunctionComponent<Props> = ({
  showWaves = false,
  firstImage,
  secondImage,
}) => {
  const IMAGE_MASK_HEIGHT = 490;

  return (
    <View
      style={{
        marginBottom: showWaves ? -20 : 0,
        marginTop: 15,
      }}>
      <MaskedView
        style={{
          height: IMAGE_MASK_HEIGHT,
          width: '100%',
        }}
        maskElement={<BottomImageMask />}>
        <FastImage
          style={{
            height: 500,
            width: '100%',
          }}
          source={{
            priority: FastImage.priority.high,
            uri: firstImage,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </MaskedView>
      {secondImage && (
        <MaskedView
          style={{
            height: IMAGE_MASK_HEIGHT,
            marginTop: -60,
            width: '100%',
          }}
          maskElement={<BottomImageMask />}>
          <MaskedView
            style={{
              height: IMAGE_MASK_HEIGHT,
              marginTop: -0,
              width: '100%',
            }}
            maskElement={<ImageTopMask />}>
            <FastImage
              style={{
                height: 500,
                width: '100%',
              }}
              source={{
                priority: FastImage.priority.high,
                uri: secondImage,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </MaskedView>
        </MaskedView>
      )}
      {showWaves && (
        <AutoHeightImage
          style={{bottom: 10, position: 'absolute'}}
          width={dimensions.WIDTH}
          source={wavesBackground}
        />
      )}
    </View>
  );
};

export default React.memo(ImageGalleryBlock);
