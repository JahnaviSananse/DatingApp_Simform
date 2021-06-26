import React, {useCallback, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {COLORS} from '../../configs';
import FFImageLoader from '../FFImageLoader';
import MapPin from '../icons/MapPin';
import PlayVideoIcon from '../icons/PlayVideoIcon';
import {Isidora, Row} from '..';

type AdditionalUserDataType = {
  age: string;
  name: string;
  userId: string;
  userProfileId: string;
  distance?: string | null;
};

interface ImagePreviewItemProps {
  imageUrl?: string;
  onNextVideo: () => void;
  additionalUserData?: AdditionalUserDataType;
  openUserModal?: (value: string) => void;
  showUserData?: boolean;
  autoplay: boolean;
  hideIconPlay: boolean;
  onPressPlayVideo?: () => void;
  isShowImage: boolean;
  onUploadedImage?: () => void;
  isImageStep?: boolean;
}

const ImagePreviewItem: React.FunctionComponent<ImagePreviewItemProps> = ({
  imageUrl,
  onNextVideo,
  additionalUserData,
  openUserModal,
  showUserData,
  autoplay,
  hideIconPlay,
  onPressPlayVideo,
  isShowImage,
  onUploadedImage,
  isImageStep,
}) => {
  // const [visible, setVisible] = useState(true);
  const isUploadImage = useRef(false);
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  const onPlayVideo = useCallback(() => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    if (onPressPlayVideo) {
      onPressPlayVideo();
    } else {
      onNextVideo();
    }
  }, [onNextVideo, onPressPlayVideo]);

  const selectUser = useCallback(() => {
    if (openUserModal && additionalUserData?.userProfileId) {
      openUserModal(additionalUserData?.userProfileId);
    }
  }, [additionalUserData, openUserModal]);

  const timerStarted = useRef(false);
  const autoplayTriggered = useRef(false);
  const onAutoplayNext = useCallback(() => {
    if (timerStarted.current && !autoplayTriggered.current) {
      autoplayTriggered.current = true;
      timerStarted.current = false;
      onNextVideo();
    } else {
      autoplayTriggered.current = false;
    }
  }, [onNextVideo]);

  useEffect(() => {
    if (!autoplay && timeOut.current) {
      clearTimeout(timeOut.current);
      timeOut.current = null;
      timerStarted.current = false;
      autoplayTriggered.current = false;
    } else if (
      autoplay &&
      isUploadImage.current &&
      !timerStarted.current &&
      isImageStep
    ) {
      timerStarted.current = true;
      timeOut.current = setTimeout(() => {
        onAutoplayNext();
      }, 2000);
    }
  }, [autoplay, isImageStep, onAutoplayNext]);

  const onFinishLoadedImage = useCallback(() => {
    if (onUploadedImage) {
      onUploadedImage();
    }
    isUploadImage.current = true;
    if (autoplay && !timerStarted.current) {
      timerStarted.current = true;
      timeOut.current = setTimeout(() => {
        onAutoplayNext();
      }, 2000);
    }
  }, [autoplay, onAutoplayNext, onUploadedImage]);

  return (
    <View style={{flex: 1}}>
      {imageUrl && isShowImage && (
        <FFImageLoader
          imageUrl={imageUrl}
          onImageLoaded={onFinishLoadedImage}
        />
      )}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
        onPress={onPlayVideo}>
        {!hideIconPlay && <PlayVideoIcon />}
      </TouchableOpacity>
      {showUserData && (
        <View
          style={{
            bottom: 26,
            height: 43,
            paddingHorizontal: 15,
            position: 'absolute',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={selectUser}
            disabled={!openUserModal}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 4,
            }}>
            <Isidora
              lineHeight={24}
              fontSize={24}
              textAlign="left"
              fontWeight="900"
              color={COLORS.sand}>
              {additionalUserData?.name}, {additionalUserData?.age}
            </Isidora>
          </TouchableOpacity>

          <Row style={{alignItems: 'center'}}>
            {additionalUserData?.distance?.length > 0 && (
              <>
                <MapPin
                  color={COLORS.white}
                  style={{marginRight: 5}}
                  height={17}
                  width={16}
                />
                <Isidora
                  fontSize={16}
                  textAlign="left"
                  fontWeight="900"
                  color={COLORS.sand}>
                  {Math.round(additionalUserData?.distance.split(' ')[0])} mi
                </Isidora>
              </>
            )}
          </Row>
        </View>
      )}
    </View>
  );
};

export default React.memo(ImagePreviewItem);
