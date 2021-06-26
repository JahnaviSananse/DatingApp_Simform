import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import InView from 'react-native-component-inview';
import Carousel, {CarouselStatic} from 'react-native-snap-carousel';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import useCheckVideos from '../../hooks/useCheckVideos';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import NavigationKey from '../../navigation/NavigationKey';
import {AccountPhoto, UserAccountVideo} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import {MuteContext} from '../../utils/mute-context';
import CheckFlickHeader from '../CheckYourFlick/CheckFlickHeader';
import EditIcon from '../icons/EditIcon';
import EPVideoErrorBlock from './EPVideoErrorBlock';
import EPVideoPreviewItem from './EPVideoPreviewItem';

const EDIT_PROFILE_VIDEO_WIDTH =
  dimensions.WIDTH - constants.PROFILE.paddingHorizontal * 2;
export const EDIT_PROFILE_VIDEO_HEIGHT = dimensions.HEIGHT * 0.675;

type PhotoVideoType = AccountPhoto | UserAccountVideo;

type RenderItemType = {
  index: number;
  item: PhotoVideoType;
};
type PreLoader = {
  __typename: string;
  urls: {middle: string | null | undefined};
};

const EditProfileVideo: React.FunctionComponent = () => {
  const carousel = useRef<CarouselStatic<PhotoVideoType[]>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const [visible, setVisible] = useState(false);
  const {navigate} = useNavigation();
  const [paused, setPaused] = useState(false);
  const {photoUrl} = usePhotoVideoModeration();
  const [itemsList, setItemsList] = useState<
    PhotoVideoType[] | undefined | PreLoader[]
  >(photoUrl ? [{__typename: 'AccountPhoto', urls: {middle: photoUrl}}] : []);
  const {
    error,
    profileImage,
    videos,
    lastVideoIndex,
    problemVideoIndexes,
    resetVideo,
  } = useCheckVideos();

  const isFocused = useIsFocused();

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

  // Control mute state
  const {profileMuted, switchProfileMuted} = useContext(MuteContext);

  // Navigate to the next video
  const onNextVideo = useCallback(() => {
    if (carousel.current && videos) {
      if (currentIndex < videos?.length) {
        carousel.current.snapToNext();
      } else {
        carousel.current.snapToItem(0);
      }
    }
  }, [currentIndex, videos]);

  const snapToFirst = useCallback(() => {
    carousel?.current?.snapToItem(0);
  }, []);

  // Navigate to the prev video
  const onPrevVideo = useCallback(() => {
    if (carousel.current && videos) {
      carousel.current.snapToPrev();
    }
  }, [videos]);

  const onPressPlayVideo = useCallback(async () => {
    const popUpTweaking = await AsyncStorage.getItem('skipSceneTweaking');
    if (
      (error || (!error && problemVideoIndexes.length > 0)) &&
      !popUpTweaking
    ) {
      navigate(NavigationKey.WarningModal, {
        hideCloseButton: true,
        message: strings.checkYourFlick.editWrongFlickModal.message,
        onPressPositive: onNextVideo,
        oneBtn: true,
        positiveText: strings.checkYourFlick.editWrongFlickModal.positive,
        title: strings.checkYourFlick.editWrongFlickModal.title,
      });
      AsyncStorage.setItem('skipSceneTweaking', 'true');
    } else {
      onNextVideo();
    }
  }, [error, navigate, onNextVideo, problemVideoIndexes.length]);

  // Video item callback
  const renderItem = useCallback<
    ({index, item}: RenderItemType) => React.ReactElement
  >(
    ({index, item}) => {
      return (
        <EPVideoPreviewItem
          item={item}
          itemIndex={index}
          currentVideoVisible={currentIndex === index}
          muted={profileMuted}
          visible={visible}
          navigated={navigated}
          onNextVideo={onNextVideo}
          onPrevVideo={onPrevVideo}
          onPressPlayVideo={onPressPlayVideo}
          snapToFirst={snapToFirst}
          paused={paused || !isFocused}
          resetVideo={resetVideo}
        />
      );
    },
    [
      currentIndex,
      profileMuted,
      visible,
      navigated,
      onNextVideo,
      onPrevVideo,
      onPressPlayVideo,
      snapToFirst,
      paused,
      isFocused,
      resetVideo,
    ],
  );

  const onSnapToItem = useCallback((slideIndex) => {
    setNavigated(false);
    setCurrentIndex(slideIndex);
  }, []);

  const onVideoNavigate = useCallback(
    (index) => {
      if (carousel.current && currentIndex !== 0) {
        setNavigated(true);
        carousel.current.snapToItem(index);
      }
    },
    [currentIndex],
  );

  // Check the camera permissions granted and navigate to the record screen
  const onNavigateRecord = useCallback(() => {
    setPaused(false);
    navigate(NavigationKey.VideoRecord);
    snapToFirst();
  }, [navigate, snapToFirst]);
  const {checkPermissions} = useCameraPermissions();

  // Navigate to the check flick screen
  const onEditVideo = useCallback(() => {
    navigate(NavigationKey.WarningModal, {
      hideCloseButton: true,
      message: strings.checkYourFlick.editFlickModal.message,
      negativeText: strings.checkYourFlick.editFlickModal.negative,
      onPressNegative: () => {
        checkPermissions().then(onNavigateRecord);
      },
      onPressPositive: () => {
        setPaused(false);
      },
      positiveText: strings.checkYourFlick.editFlickModal.positive,
      title: strings.checkYourFlick.editFlickModal.title,
    });
  }, [navigate, checkPermissions, onNavigateRecord]);

  // Warning for problem video
  const onEditWrongVideo = useCallback(() => {
    AsyncStorage.getItem('skipSceneTweaking').then((value) => {
      if (currentIndex) {
        setPaused(true);
      }
      if (value || (!error && problemVideoIndexes.length === 0)) {
        // checkPermissions().then(onNavigateRecord);
        onEditVideo();
      } else {
        AsyncStorage.setItem('skipSceneTweaking', 'true');
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: strings.checkYourFlick.editWrongFlickModal.message,
          onPressPositive: () => {
            onEditVideo();
          },
          oneBtn: true,
          positiveText: strings.checkYourFlick.editWrongFlickModal.positive,
          title: strings.checkYourFlick.editWrongFlickModal.title,
        });
      }
    });
  }, [currentIndex, error, navigate, onEditVideo, problemVideoIndexes.length]);

  return (
    <View
      style={{
        backgroundColor: colors.sand,
        flex: 1,
        paddingHorizontal: constants.PROFILE.paddingHorizontal,
      }}>
      <View
        style={{
          backgroundColor: COLORS.sand,
          borderRadius: 12,
          height: error ? '100%' : EDIT_PROFILE_VIDEO_HEIGHT,
          overflow: 'hidden',
        }}>
        {itemsList && !error && (
          <Carousel
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={carousel}
            data={itemsList}
            renderItem={renderItem}
            scrollEnabled={false}
            layout="default"
            onSnapToItem={onSnapToItem}
            sliderWidth={EDIT_PROFILE_VIDEO_WIDTH}
            itemWidth={EDIT_PROFILE_VIDEO_WIDTH}
          />
        )}
        {!error && (
          <CheckFlickHeader
            activeDots={currentIndex + 1}
            onMute={switchProfileMuted}
            height={66}
            muted={profileMuted}
            problemVideoIndexes={problemVideoIndexes}
            onDotPress={onVideoNavigate}
            isShowHeaderGradient={false}
          />
        )}
        {error && (
          <EPVideoErrorBlock error={error} lastVideoIndex={lastVideoIndex} />
        )}
        <InView
          style={{
            left: 0,
            position: 'absolute',
            right: 0,
            top: EDIT_PROFILE_VIDEO_HEIGHT / 3,
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
      {!error && (
        <TouchableOpacity
          onPress={onEditWrongVideo}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: COLORS.raspberry,
            borderRadius: 50,
            height: 48,
            justifyContent: 'center',
            marginTop: 32,
            width: 48,
          }}>
          <EditIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(EditProfileVideo);
