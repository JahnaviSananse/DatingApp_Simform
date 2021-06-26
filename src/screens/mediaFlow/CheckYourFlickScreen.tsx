import AsyncStorage from '@react-native-community/async-storage';
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import React, {useCallback, useContext, useState} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, Isidora} from '../../components';
import EmbeddedVideo from '../../components/EmbeddedVideo/EmbeddedVideo';
import CloseIcon from '../../components/icons/CloseIcon';
import EditIcon from '../../components/icons/EditIcon';
import EyesIcon from '../../components/icons/EyesIcon';
import NextArrowsIcon from '../../components/icons/NextArrowsIcon';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import useCheckVideos from '../../hooks/useCheckVideos';
import NavigationKey from '../../navigation/NavigationKey';
import dimensions from '../../utils/dimensions';
import {MuteContext} from '../../utils/mute-context';
import {CarouselContext} from '../SearchPeople';

const CheckYourFlickScreen: React.FunctionComponent = () => {
  const {navigate, dispatch, goBack} = useNavigation();
  const {
    profileImage,
    videos,
    problemVideoIndexes,
    resetVideo,
  } = useCheckVideos();

  const isFocused = useIsFocused();

  const {profileMuted, switchProfileMuted} = useContext(MuteContext);

  const [isPaused, setIsPaused] = useState(false);
  // Check the camera permissions granted and navigate to the record screen
  const {checkPermissions} = useCameraPermissions();

  const onRetry = useCallback(() => {
    AsyncStorage.removeItem(constants.SKIP_CHECK_FLICK_STATE);
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: NavigationKey.VideoRecord}],
    });
    dispatch(resetAction);
  }, [dispatch]);

  const onEditWholeFlick = useCallback(() => {
    setIsPaused(true);
    navigate(NavigationKey.WarningModal, {
      hideCloseButton: true,
      message: strings.checkYourFlick.editFlickModal.message,
      negativeText: strings.checkYourFlick.editFlickModal.negative,
      onPressNegative: () => {
        checkPermissions().then(onRetry);
      },
      onPressPositive: () => setIsPaused(false),
      positiveText: strings.checkYourFlick.editFlickModal.positive,
      title: strings.checkYourFlick.editFlickModal.title,
    });
  }, [checkPermissions, navigate, onRetry]);
  return (
    <CarouselContext.Provider value={{isPaused: isPaused || !isFocused}}>
      <View
        style={{
          backgroundColor: colors.sand,
          flex: 1,
          justifyContent: 'space-between',
          paddingBottom: ifIphoneX(35, 15),
          paddingHorizontal: 16,
          paddingTop: 50,
        }}>
        <View>
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
              marginBottom: 15,
            }}>
            <View style={{width: '50%'}}>
              <TouchableOpacity
                onPress={goBack}
                style={{alignSelf: 'flex-start'}}>
                <CloseIcon color={colors.blazeBlue} />
              </TouchableOpacity>
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

          <View style={{height: dimensions.HEIGHT * 0.68}}>
            {videos && (
              <EmbeddedVideo
                profileImage={
                  profileImage ?? {
                    __typename: 'AccountPhoto',
                    urls: {
                      middle: null,
                    },
                  }
                }
                videos={videos}
                options={{
                  autoplay: false,
                  problemVideoIndexes: problemVideoIndexes,
                  showEditButton: true,
                  showHeaderTitle: false,
                  width: dimensions.WIDTH - 32,
                }}
                resetIfFocusMissed
                muted={profileMuted}
                setMuted={switchProfileMuted}
                isCheckYourFlick
                isRenderAllVideo
                isShowHeaderGradient={false}
                resetVideo={resetVideo}
              />
            )}
          </View>
          <View
            style={{alignSelf: 'center', flexDirection: 'row', marginTop: 25}}>
            <EyesIcon style={{marginRight: 10}} />
            <Isidora
              fontSize={24}
              lineHeight={24}
              color={colors.blazeBlue}
              fontWeight="900">
              {strings.checkYourFlick.title}
            </Isidora>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
          }}>
          <ReRecordButton onReRecord={onEditWholeFlick} />
          <SaveRecordButton onSave={goBack} />
        </View>
      </View>
    </CarouselContext.Provider>
  );
};

interface ReRecordButtonProps {
  onReRecord: () => void;
}

const ReRecordButton: React.FunctionComponent<ReRecordButtonProps> = ({
  onReRecord,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onReRecord}
        style={{
          alignItems: 'center',
          backgroundColor: colors.raspberry,
          borderRadius: 30,
          height: 48,
          justifyContent: 'center',
          marginLeft: -24,
          width: 48,
        }}>
        <EditIcon />
      </TouchableOpacity>
    </View>
  );
};

interface SaveRecordButtonProps {
  onSave: () => void;
}

const SaveRecordButton: React.FunctionComponent<SaveRecordButtonProps> = ({
  onSave,
}) => {
  return (
    <TouchableOpacity
      onPress={onSave}
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.blazeBlue,
        borderRadius: 30,
        height: 48,
        justifyContent: 'center',
        width: 48,
      }}>
      <NextArrowsIcon style={{marginStart: 3}} />
    </TouchableOpacity>
  );
};

export default React.memo(CheckYourFlickScreen);
