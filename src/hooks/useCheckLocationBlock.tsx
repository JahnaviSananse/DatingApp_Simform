import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import Geocoder from 'react-native-geocoding';
import {requestNotifications} from 'react-native-permissions';

import {STRINGS} from '../configs';
import {GeocoderProps} from '../interfaces/Map';
import NavigationKey from '../navigation/NavigationKey';
import {FilterGeocoderData} from '../utils/FilterGeocoderData';

interface CheckLocationBlockResult {
  checkLocation: () => void;
}

const useCheckLocationBlock = (): CheckLocationBlockResult => {
  const {navigate} = useNavigation();

  const checkPushPermission = useCallback(async () => {
    AsyncStorage.setItem('HIDE_NY_POPUP', 'true');
    await requestNotifications(['alert', 'sound']);
  }, []);

  const findNeighborhood = useCallback(
    (geocoderData: GeocoderProps) => {
      const address = FilterGeocoderData(geocoderData);
      if (address.includes('NY' || 'NYC' || 'New York')) {
        // console.log('Apparently you are in New York');
      } else {
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: STRINGS.locationOnlyWarning.message,
          onPressPositive: checkPushPermission,
          oneBtn: true,
          positiveText: STRINGS.locationOnlyWarning.confirmButton,
          textAlign: 'center',
          title: STRINGS.locationOnlyWarning.title,
        });
      }
    },
    [checkPushPermission, navigate],
  );

  // const getCurrentLocation = useCallback(() => {
  //   if (Geolocation) {
  //     Geolocation.getCurrentPosition((info) => {
  //       Geocoder.from(info.coords.latitude, info.coords.longitude)
  //         .then(findNeighborhood)
  //         .catch((error: unknown) => console.warn(error));
  //     });
  //   }
  // }, [findNeighborhood]);

  const checkLocationPermissions = useCallback(() => {
    // getCurrentLocation();
    navigate(NavigationKey.WarningModal, {
      hideCloseButton: true,
      message: STRINGS.locationOnlyWarning.message,
      onPressPositive: checkPushPermission,
      oneBtn: true,
      positiveText: STRINGS.locationOnlyWarning.confirmButton,
      textAlign: 'center',
      title: STRINGS.locationOnlyWarning.title,
    });
  }, [checkPushPermission, navigate]);

  const checkLocation = useCallback(() => {
    checkLocationPermissions();
  }, [checkLocationPermissions]);

  return {checkLocation};
};

export default useCheckLocationBlock;
