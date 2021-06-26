import {useIsFocused} from '@react-navigation/native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import InView from 'react-native-component-inview';
import Carousel, {CarouselStatic} from 'react-native-snap-carousel';

import {AccountPhoto, UserAccountVideo} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import CheckFlickHeader from '../CheckYourFlick/CheckFlickHeader';
import EVPreviewItem from './EVPreviewItem';
import VideoPoster from './VideoPoster';

type PhotoVideoType = AccountPhoto | UserAccountVideo;

type RenderItemType = {
  index: number;
  item: PhotoVideoType;
};

type OptionsControlType = {
  showEditButton?: boolean;
  showHeaderTitle?: boolean;
  problemVideoIndexes?: number[];
  autoplay: boolean;
  showUserData?: boolean;
  width?: number;
  hideIconPlay?: boolean;
};

type AdditionalUserDataType = {
  age: string;
  name: string;
  userId: string;
  userProfileId?: string;
  distance?: string | null;
};

type NoPhoto = {
  __typename: 'AccountPhoto';
  urls: {
    middle: null;
  };
};

interface Props {
  profileImage: AccountPhoto | NoPhoto;
  videos: UserAccountVideo[];
  options?: OptionsControlType;
  additionalUserData?: AdditionalUserDataType;
  openUserModal?: (value: string) => void;
  muted: boolean;
  setMuted: (value: boolean) => void;
  isShowImage?: boolean;
  onUploadedImage?: () => void;
  isRenderAllVideo?: boolean;
  isCheckYourFlick?: boolean;
  resetIfFocusMissed?: boolean;
  isShowHeaderGradient?: boolean;
  resetVideo?: (index: number) => void;
}

const EmbeddedVideo: React.FunctionComponent<Props> = forwardRef(
  (
    {
      profileImage,
      videos,
      options,
      additionalUserData,
      openUserModal,
      muted,
      setMuted,
      isShowImage,
      onUploadedImage,
      isRenderAllVideo,
      isCheckYourFlick,
      resetIfFocusMissed = false,
      isShowHeaderGradient = true,
      resetVideo,
    },
    ref,
  ) => {
    const carousel = useRef<CarouselStatic<PhotoVideoType[]>>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [navigated, setNavigated] = useState(false);
    const [visible, setVisible] = useState(false);
    const [itemsList, setItemsList] = useState<PhotoVideoType[] | undefined>();
    const isAutoplayPlayAgain = useRef(false);
    const isFocused = useIsFocused();

    const playAgainVideo = useCallback(() => {
      setTimeout(() => {
        if (isAutoplayPlayAgain.current) {
          carousel.current?.snapToNext();
        }
      }, 2000);
    }, []);

    useEffect(() => {
      if (profileImage && videos) {
        const localItemsList: PhotoVideoType[] = [];

        localItemsList.push(profileImage);
        videos.forEach((video) => {
          localItemsList.push(video);
        });

        setItemsList(localItemsList);
      }
    }, [profileImage, videos]);

    useImperativeHandle(
      ref,
      () => ({
        snapToItem(value: number) {
          isAutoplayPlayAgain.current = false;
          carousel?.current?.snapToItem(value);
        },
      }),
      [],
    );

    // Control mute state
    // const [muted, setMuted] = useState(true);
    // const muted = useVideoMute();

    const onChangeMute = useCallback(() => {
      setMuted(!muted);
    }, [muted, setMuted]);

    // Navigate to the next video
    const onNextVideo = useCallback(() => {
      if (carousel.current) {
        if (currentIndex < videos?.length) {
          isAutoplayPlayAgain.current = false;
          carousel.current.snapToNext();
        } else {
          carousel.current.snapToItem(0);
          if (options?.autoplay) {
            isAutoplayPlayAgain.current = true;
            playAgainVideo();
          }
        }
      }
    }, [currentIndex, options, playAgainVideo, videos]);

    const onPrevVideo = useCallback(() => {
      if (carousel.current) {
        carousel.current.snapToPrev();
        if (currentIndex === 1) {
          if (options?.autoplay) {
            isAutoplayPlayAgain.current = true;
            playAgainVideo();
          }
        }
      }
    }, [currentIndex, options, playAgainVideo]);

    // Snap to the item by index
    const onSnapToItem = useCallback((slideIndex) => {
      setNavigated(false);
      setCurrentIndex(slideIndex);
    }, []);

    // Navigate to the video
    const onVideoNavigate = useCallback(
      (index) => {
        if (carousel.current && currentIndex !== 0) {
          setNavigated(true);
          carousel.current.snapToItem(index);
        }
      },
      [currentIndex],
    );

    useEffect(() => {
      if (!isFocused && !resetIfFocusMissed) {
        carousel?.current?.snapToItem(0);
      }
    }, [isFocused, resetIfFocusMissed]);

    // Video item callback
    const renderItem = useCallback<
      ({index, item}: RenderItemType) => React.ReactElement
    >(
      ({index, item}) => {
        if (
          (isRenderAllVideo &&
            index <= currentIndex + 3 &&
            index >= currentIndex - 2) ||
          (!isRenderAllVideo &&
            (index === currentIndex - 1 ||
              index === currentIndex ||
              index === currentIndex + 1)) ||
          item.__typename === 'AccountPhoto'
        ) {
          return (
            <EVPreviewItem
              item={item}
              itemIndex={index}
              currentVideoVisible={currentIndex === index}
              muted={muted}
              visible={visible}
              showEditButton={options?.showEditButton ?? false}
              autoplay={options?.autoplay ?? true}
              navigated={navigated}
              onNextVideo={onNextVideo}
              onPrevVideo={onPrevVideo}
              additionalUserData={additionalUserData}
              openUserModal={openUserModal}
              showUserData={options?.showUserData ?? false}
              hideIconPlay={options?.hideIconPlay ?? false}
              isShowImage={isShowImage ?? true}
              onUploadedImage={onUploadedImage}
              isCheckYourFlick={isCheckYourFlick}
              resetVideo={resetVideo}
            />
          );
        }
        return <VideoPoster uri={item?.screenUrl ?? ''} />;
      },
      [
        isRenderAllVideo,
        currentIndex,
        muted,
        visible,
        options,
        navigated,
        onNextVideo,
        onPrevVideo,
        additionalUserData,
        openUserModal,
        isShowImage,
        onUploadedImage,
        isCheckYourFlick,
        resetVideo,
      ],
    );

    return (
      <View
        style={{
          borderRadius: 12,
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
        }}>
        {itemsList && (
          <Carousel
            /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
            // @ts-ignore
            ref={carousel}
            data={itemsList}
            renderItem={renderItem}
            scrollEnabled={false}
            layout="default"
            onSnapToItem={onSnapToItem}
            sliderWidth={options?.width ?? dimensions.WIDTH}
            itemWidth={options?.width ?? dimensions.WIDTH}
            useScrollView
          />
        )}
        <CheckFlickHeader
          activeDots={currentIndex + 1}
          onMute={onChangeMute}
          height={66}
          muted={muted}
          showTitle={options?.showHeaderTitle ?? false}
          problemVideoIndexes={options?.problemVideoIndexes ?? ([] as number[])}
          onDotPress={onVideoNavigate}
          isShowHeaderGradient={isShowHeaderGradient}
        />
        <InView
          style={{
            left: 0,
            position: 'absolute',
            right: 0,
            top: dimensions.HEIGHT / 3,
          }}
          onChange={setVisible}>
          <View
            style={{
              height: 5,
              width: '100%',
            }}
          />
        </InView>
      </View>
    );
  },
);

export default React.memo(EmbeddedVideo);
