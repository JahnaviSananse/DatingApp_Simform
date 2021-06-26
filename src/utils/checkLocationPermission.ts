import AsyncStorage from '@react-native-community/async-storage';
import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';

import {STRINGS} from '../configs';

export const checkLocationPermission = () => {
  return new Promise((resolve) => {
    requestMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
        : [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          ],
    ).then((statuses) => {
      const permissionsGranted =
        Platform.OS === 'ios'
          ? statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED
          : statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
            RESULTS.GRANTED;
      if (permissionsGranted) {
        resolve();
      } else {
        AsyncStorage.getItem('isFirstSkipPermission').then((value) => {
          Alert.alert(
            STRINGS.mapPage.permissionsAlertTitle,
            value
              ? STRINGS.mapPage.permissionsAlertDescription2
              : STRINGS.mapPage.permissionsAlertDescription,
            [
              {
                onPress: resolve,
                text: STRINGS.mapPage.skip,
              },
              {
                onPress: openSettings,
                text: STRINGS.mapPage.positive,
              },
            ],
            {cancelable: false},
          );
          if (!value) {
            AsyncStorage.setItem('isFirstSkipPermission', 'true');
          }
        });
      }
    });
  });
};
