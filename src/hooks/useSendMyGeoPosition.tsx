import Geolocation from '@react-native-community/geolocation';
import {useCallback, useEffect} from 'react';

import {useUserProfileUpdateMutation} from '../store/generated/graphql';

const NY = {
  latitude: '40.7127',
  longitude: '-74.006',
};

export const useSendMyGeoPosition = () => {
  const [updateProfile] = useUserProfileUpdateMutation();

  const updateLocation = useCallback(
    (lat: string, lon: string) => {
      updateProfile({
        variables: {
          input: {
            lat,
            lon,
          },
        },
      });
    },
    [updateProfile],
  );

  const getLocation = useCallback(() => {
    // Geolocation.setRNConfiguration({
    //   authorizationLevel: 'whenInUse',
    //   skipPermissionRequests: true,
    // });
    Geolocation.getCurrentPosition(
      (info) => {
        updateLocation(
          info.coords.latitude.toString(),
          info.coords.longitude.toString(),
        );
      },
      () => {
        // updateLocation(NY.latitude, NY.longitude);
      },
    );
  }, [updateLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);
};
