import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useCameraPermissions from '../../hooks/useCameraPermissions';
import {VideoErrorType} from '../../hooks/useCheckVideos';
import NavigationKey from '../../navigation/NavigationKey';
import dimensions from '../../utils/dimensions';
import CameraIcon2 from '../icons/CameraIcon2';
import {Isidora} from '..';

interface Props {
  error: VideoErrorType;
  lastVideoIndex: number | undefined;
}

const EPVideoErrorBlock: React.FunctionComponent<Props> = ({
  error,
  lastVideoIndex,
}) => {
  const {navigate} = useNavigation();

  // Set the edit video button text
  const editButtonTitle =
    error === 'DEFICIENCY'
      ? strings.editProfile.video.finish
      : error === 'EMPTY'
      ? strings.editProfile.video.record
      : strings.editProfile.video.edit;

  // Check the camera permissions granted and navigate to the record screen
  const onNavigateRecord = useCallback(() => {
    // AsyncStorage.setItem(constants.SKIP_CHECK_FLICK_STATE, 'true');
    AsyncStorage.removeItem(constants.SKIP_CHECK_FLICK_STATE);
    if (error === 'EMPTY') {
      navigate(NavigationKey.VideoRecord);
    } else {
      navigate(NavigationKey.VideoRecord, {
        editStepNumber: Number(lastVideoIndex) + 1,
      });
    }
  }, [error, lastVideoIndex, navigate]);
  const {checkPermissions} = useCameraPermissions();

  // Edit button listener
  const onEditVideo = useCallback(() => {
    switch (error) {
      case 'DEFICIENCY':
        checkPermissions().then(onNavigateRecord);
        break;
      case 'EMPTY':
        navigate(NavigationKey.VideoRecordIntro, {fromSettings: false});
        break;
      default:
        navigate(NavigationKey.CheckFlick);
        break;
    }
  }, [checkPermissions, error, navigate, onNavigateRecord]);

  const videoError = strings.checkYourFlick.getVideoError(error);

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.darkSand50,
          borderColor: colors.blazeDarker,
          borderRadius: 12,
          borderWidth: 0.5,
          height: dimensions.HEIGHT * 0.675,
          paddingBottom: 72,
          paddingTop: '48%',
        }}>
        <CameraIcon2 style={{transform: [{rotateY: '180deg'}]}} />
        <Isidora
          color={colors.blazeBlue}
          style={{marginTop: 12}}
          fontSize={24}
          lineHeight={30}
          fontWeight="900">
          {videoError.title}
        </Isidora>
        <Isidora
          fontWeight="600"
          color={colors.blazeBlue}
          style={{marginTop: 12}}
          fontSize={16}
          lineHeight={24}>
          {videoError.description}
        </Isidora>
      </View>
      <TouchableOpacity
        onPress={onEditVideo}
        style={{
          alignSelf: 'center',
          backgroundColor: COLORS.raspberry,
          borderRadius: 30,
          height: 48,
          justifyContent: 'center',
          marginTop: 33,
          width: dimensions.WIDTH * 0.425,
        }}>
        <Isidora
          color={colors.white}
          fontSize={18}
          lineHeight={18}
          fontWeight="900">
          {editButtonTitle}
        </Isidora>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(EPVideoErrorBlock);
