import {useCallback} from 'react';
import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';

import strings from '../configs/styles/strings';

type CameraPermissionsResultType = {
  checkPermissions: () => Promise<void>;
};

const useCameraPermissions = (): CameraPermissionsResultType => {
  const onCheckPermissions = useCallback(
    async () =>
      new Promise<void>((resolve, reject) => {
        requestMultiple(
          Platform.OS === 'android'
            ? [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO]
            : [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE],
        ).then((statuses) => {
          // Check permissions granted status for IOS and Android
          const permissionsGranted =
            Platform.OS === 'android'
              ? statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED &&
                statuses[PERMISSIONS.ANDROID.RECORD_AUDIO] === RESULTS.GRANTED
              : statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED &&
                statuses[PERMISSIONS.IOS.MICROPHONE] === RESULTS.GRANTED;

          // Show alerts with error or navigate next screen
          if (permissionsGranted) {
            resolve();
          } else {
            reject();
            Alert.alert(
              strings.videoRecordIntro.cameraPermissions.title,
              strings.videoRecordIntro.cameraPermissions.message,
              [
                {
                  onPress: () => null,
                  style: 'cancel',
                  text: strings.videoRecordIntro.cameraPermissions.negative,
                },
                {
                  onPress: () => openSettings(),
                  text: strings.videoRecordIntro.cameraPermissions.positive,
                },
              ],
              {cancelable: false},
            );
          }
        });
      }),
    [],
  );

  return {checkPermissions: onCheckPermissions};
};

export default useCameraPermissions;
