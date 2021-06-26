import moment from 'moment';
import React, {useCallback} from 'react';
import {Image} from 'react-native';

import {COLORS} from '../../../configs';
import {Isidora} from '../../';
import VideoIcon from '../..//icons/VideoIcon';
import CameraIcon from '../../icons/CameraIcon';
import {
  CameraWrapper,
  SelectedCircle,
  VideoIconWrapper,
  VideoLengthWrapper,
  Wrapper,
} from './styles';

type ImageItemType = {
  node: {
    type: string;
    image: {
      uri: string;
      playableDuration: number;
    };
  };
  isCamera?: boolean;
};

interface Props {
  item: ImageItemType;
  selectedImages: number[];
  setSelectedImages: (prev: (prev: number[]) => number[]) => void;
  index: number;
  onPressCamera: () => void;
}

const ImageItem: React.FunctionComponent<Props> = ({
  item,
  selectedImages,
  setSelectedImages,
  index,
  onPressCamera,
}) => {
  // console.log(selectedImages);

  const checkIsSelectet = useCallback(() => {
    return selectedImages.includes(index);
  }, [index, selectedImages]);

  const onImagePress = useCallback(() => {
    if (checkIsSelectet()) {
      setSelectedImages((prev: number[]) =>
        prev.filter((el: number) => el !== index),
      );
    } else {
      if (selectedImages.length < 3) {
        setSelectedImages((prev: number[]) => [...prev, index]);
      }
    }
  }, [checkIsSelectet, index, selectedImages.length, setSelectedImages]);

  return item.isCamera ? (
    <CameraWrapper onPress={onPressCamera}>
      <CameraIcon width={50} height={50} color={COLORS.black} />
    </CameraWrapper>
  ) : (
    <Wrapper onPress={onImagePress} activeOpacity={0.7}>
      <Image
        source={{uri: item.node.image.uri}}
        style={{height: '100%', width: '100%'}}
      />
      <SelectedCircle isSelected={checkIsSelectet()}>
        {checkIsSelectet() && (
          <Isidora
            lineHeight={21}
            fontSize={14}
            fontWeight="600"
            color={COLORS.sand}>
            {selectedImages.indexOf(index) + 1}
          </Isidora>
        )}
      </SelectedCircle>
      {item.node.type === 'video' && (
        <>
          <VideoIconWrapper>
            <VideoIcon />
          </VideoIconWrapper>
          <VideoLengthWrapper>
            <Isidora
              lineHeight={21}
              fontSize={14}
              fontWeight="600"
              color={COLORS.white}>
              {moment
                .utc(
                  moment
                    .duration(
                      Math.round(item.node.image.playableDuration),
                      'seconds',
                    )
                    .as('milliseconds'),
                )
                .format('mm:ss')}
            </Isidora>
          </VideoLengthWrapper>
        </>
      )}
    </Wrapper>
  );
};
export default React.memo(ImageItem);
