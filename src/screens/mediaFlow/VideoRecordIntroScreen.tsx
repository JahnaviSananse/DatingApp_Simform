import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  AppState,
  PixelRatio,
  StatusBar,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import CallDetectorManager from 'react-native-call-detection';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Video from 'react-native-video';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, Isidora, Row} from '../../components';
import FFColorButton from '../../components/FFColorButton';
import BackArrowIcon from '../../components/icons/BackArrowIcon';
import CinemaIcon from '../../components/icons/CinemaIcon';
import {COLORS} from '../../configs';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import NavigationKey from '../../navigation/NavigationKey';
import {NavigationParams} from '../../navigation/NavigationParams';
import {useExampleVideoLazyQuery} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ScreenRouteProp = RouteProp<NavigationParams, 'VideoRecordIntro'>;

const VideoRecordIntroScreen: React.FunctionComponent = () => {
  const {params} = useRoute<ScreenRouteProp>();

  const {navigate, goBack} = useNavigation();

  const [paused, setPaused] = useState(false);
  const isFocused = useIsFocused();
  const [
    getVideoData,
    {data: videoData, loading: videoLoading, error: videoError},
  ] = useExampleVideoLazyQuery({
    fetchPolicy: 'network-only',
  });

  const handleAppStateChange = useCallback((nextAppState) => {
    if (nextAppState !== 'active') {
      setPaused(true);
    } else {
      setPaused(false);
    }
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, [handleAppStateChange]);

  useEffect(() => {
    const callDetector = new CallDetectorManager(
      (event: 'Incoming') => {
        if (event === 'Incoming') {
          setPaused(true);
        }
      },
      false,
      () => null,
      {
        message:
          'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
        title: 'Phone State Permission',
      },
    );

    return () => {
      callDetector?.dispose();
    };
  }, []);

  // Check the camera permissions granted and navigate to the record screen
  const onNavigateRecord = useCallback(() => {
    setPaused(true);
    navigate(NavigationKey.VideoRecord, {
      editStepNumber: 1,
      questionId: undefined,
      showTutorial: false,
      singleEdit: false,
    });
  }, [navigate]);
  const {checkPermissions} = useCameraPermissions();

  const onPressRecord = useCallback(() => {
    setPaused(true);
    checkPermissions().then(onNavigateRecord);
  }, [checkPermissions, onNavigateRecord]);

  // Getting video according to screen resolution
  const [size, setSize] = useState('');
  const widthResolution = useWindowDimensions().width * PixelRatio.get();

  const videoSize = useCallback(() => {
    if (widthResolution <= 750) {
      setSize('small');
    } else if (widthResolution >= 1125) {
      setSize('big');
    } else {
      setSize('medium');
    }
  }, [widthResolution]);

  useEffect(() => {
    videoSize();
    getVideoData({
      variables: {
        name: size,
      },
    });
  }, [getVideoData, size, videoSize]);

  // const onSkip = useCallback(() => {
  //   if (giveAccess && params.giveAccess) {
  //     giveAccess('FULL');
  //     navigate(NavigationKey.MainNavigator);
  //   } else {
  //     goBack();
  //   }
  // }, [giveAccess, params.giveAccess, navigate, goBack]);

  // const onShowModal = useCallback(() => {
  //   navigate(NavigationKey.WarningModal, {
  //     hideCloseButton: true,
  //     message: strings.videoRecordIntro.modal.message,
  //     negativeText: strings.videoRecordIntro.modal.negative,
  //     onPressNegative: onSkip,
  //     onPressPositive: checkPermissions,
  //     positiveText: strings.videoRecordIntro.modal.positive,
  //     title: strings.videoRecordIntro.modal.title,
  //   });
  // }, [navigate, checkPermissions, onSkip]);

  const onPressBack = useCallback(() => {
    if (params?.fromSettings) {
      goBack();
    }
    //onShowModal()
  }, [goBack, params]);

  const startPlayVideo = useCallback(
    () => setPaused((prevPause) => !prevPause),
    [],
  );

  return (
    <View
      style={{
        backgroundColor: colors.sand,
        flex: 1,
        paddingBottom: ifIphoneX(35, 10),
        paddingHorizontal: 16,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingTop: 44,
        }}>
        <View style={{width: '50%'}}>
          {params?.fromSettings && (
            <TouchableOpacity
              onPress={onPressBack}
              style={{alignSelf: 'flex-start'}}>
              {/*<CloseIcon color={COLORS.blazeBlue} />*/}
              <BackArrowIcon color={COLORS.blazeBlue} />
            </TouchableOpacity>
          )}
        </View>
        <FastImageComponent
          resizeMode="contain"
          style={{
            height: 32,
            marginLeft: -50,
            width: 100,
          }}
          uri={FfwdLogo}
        />
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={startPlayVideo}
        style={{
          backgroundColor: COLORS.yellow,
          borderRadius: 14,
          flex: 1,
          marginTop: 10,
          overflow: 'hidden',
        }}>
        <Video
          source={{
            uri: videoData?.exampleVideo?.url,
          }}
          paused={paused || !isFocused}
          repeat
          playInBackground={false}
          progressUpdateInterval={1000}
          resizeMode="cover"
          ignoreSilentSwitch="ignore"
          style={{
            borderColor: colors.sand,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
          }}
        />
      </TouchableOpacity>

      <Row style={{alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <CinemaIcon style={{marginRight: 10}} />
        <Isidora fontSize={24} lineHeight={24} fontWeight="900">
          {strings.videoRecordIntro.makeScene}
        </Isidora>
      </Row>

      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        {/*<FFColorButton*/}
        {/*  buttonStyle={{*/}
        {/*    color: colors.blazeLightBlue85,*/}
        {/*    width: dimensions.WIDTH * 0.43,*/}
        {/*  }}*/}
        {/*  title={strings.videoRecordIntro.skipAndBrowse}*/}
        {/*  onPress={onShowModal}*/}
        {/*  fontStyle={{color: colors.sand, fontSize: 18, fontWeight: '900'}}*/}
        {/*/>*/}
        {!params.fromSettings && (
          <FFColorButton
            buttonStyle={{
              color: colors.raspberry,
              width: dimensions.WIDTH * 0.43,
            }}
            title={strings.videoRecordIntro.letsRecord}
            onPress={onPressRecord}
            fontStyle={{color: colors.sand, fontSize: 18, fontWeight: '900'}}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(VideoRecordIntroScreen);
