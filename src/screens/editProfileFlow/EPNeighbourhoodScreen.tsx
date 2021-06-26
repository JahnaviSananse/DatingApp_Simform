import Geolocation from '@react-native-community/geolocation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Platform, TouchableOpacity, View} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {Region} from 'react-native-maps';
import {
  PERMISSIONS,
  RESULTS,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';

import {RenderMap} from '../../components';
import EPBlockHeader from '../../components/EditProfile/EPBlockHeader';
import Icon from '../../components/Icon';
import {STRINGS} from '../../configs';
import colors from '../../configs/styles/colors';
import {MarkerProps} from '../../interfaces/Map';
import {NavigationParams} from '../../navigation/NavigationParams';

const defaultRegion: Region = {
  latitude: 40.7127,
  latitudeDelta: 0.0922,
  longitude: -74.006,
  longitudeDelta: 0.0421,
};

type ScreenRouteProp = RouteProp<NavigationParams, 'EPNeighbourhoodScreen'>;

const EPNeighbourhoodScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();

  // Get the params from navigation
  const {
    params: {title, description, selectedValue, onUpdateValue, ImageIcon},
  } = useRoute<ScreenRouteProp>();

  // Values
  const [region, setRegion] = useState(defaultRegion);
  const [change, setChange] = useState(false);
  const [currentMarker, setCurrentMarker] = useState<Region>();
  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const [markerLocation, setMarkerLocation] = useState('');
  const [permissionsLocation, setPermissionsLocation] = useState(false);

  // Save value and go back
  const onGoBack = useCallback(() => {
    if (
      markerLocation &&
      markers.length > 0 &&
      markerLocation !== selectedValue?.neighborhood
    ) {

      onUpdateValue({
        __typename: 'Neighborhood',
        inNeighborhood: selectedValue?.inNeighborhood ?? false,
        lat: markers[0].latlng.latitude.toString(),
        lon: markers[0].latlng.longitude.toString(),
        neighborhood: markerLocation,
      });
    }
    goBack();
  }, [goBack, markerLocation, markers, onUpdateValue, selectedValue]);

  const getCurrentLocation = useCallback(() => {
    if (permissionsLocation && Geolocation) {
      Geolocation.getCurrentPosition((info) => {
        const newRegion: Region = {
          latitude: info.coords.latitude,
          latitudeDelta: 0.0922,
          longitude: info.coords.longitude,
          longitudeDelta: 0.0421,
        };
        if (
          (newRegion.latitude !== region.latitude &&
            newRegion.longitude !== region.longitude) ||
          change
        ) {
          setRegion(newRegion);
          setChange(false);
          setCurrentMarker(newRegion);
        }
      });
    }
  }, [change, permissionsLocation, region]);

  // Check the location permissions
  const [checkedLocation, setCheckedLocation] = useState(false);
  const checkLocationPermissions = useCallback(() => {
    requestMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
        : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
    ).then((statuses) => {
      const permissionsGranted =
        Platform.OS === 'ios'
          ? statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED
          : statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
            RESULTS.GRANTED;
      setPermissionsLocation(permissionsGranted);
      if (permissionsGranted) {
        // if (selectedValue === undefined && !checkedLocation) {
        if (!checkedLocation) {
          setCheckedLocation(true);
          getCurrentLocation();
        }
      } else {
        Alert.alert(
          STRINGS.mapPage.permissionsAlertTitle,
          STRINGS.mapPage.permissionsAlertDescription,
          [
            {
              onPress: () => null,
              style: 'cancel',
              text: STRINGS.mapPage.negative,
            },
            {
              onPress: () => openSettings(),
              text: STRINGS.mapPage.positive,
            },
          ],
          {cancelable: false},
        );
      }
    });
  }, [checkedLocation, getCurrentLocation]);

  useEffect(() => {
    checkLocationPermissions();
  }, [checkLocationPermissions]);

  // Set last values
  useEffect(() => {
    if (selectedValue?.lat && selectedValue?.lon) {
      const newRegion: Region = {
        latitude: Number(selectedValue.lat),
        latitudeDelta: 0.0922,
        longitude: Number(selectedValue.lon),
        longitudeDelta: 0.0421,
      };
      setRegion(newRegion);
      setCurrentMarker(newRegion);
      setChange(false);
    } else {
      if (Geolocation && permissionsLocation) {
        Geolocation.getCurrentPosition((info) => {
          const newRegion: Region = {
            latitude: info.coords.latitude,
            latitudeDelta: 0.0922,
            longitude: info.coords.longitude,
            longitudeDelta: 0.0421,
          };
          setRegion(newRegion);
          setChange(false);
          setCurrentMarker(newRegion);
        });
      }
    }
  }, [permissionsLocation, selectedValue]);

  const saveData = useCallback(
    (neighborhood: string, markers: MarkerProps[]) => {
      setMarkers(markers);
      setMarkerLocation(neighborhood);
    },
    [],
  );

  return (
    <>
      <EPBlockHeader
        title={title}
        description={description}
        onGoBack={onGoBack}
        ImageIcon={ImageIcon}
      />
      <View
        style={{
          backgroundColor: colors.sand,
          flex: 1,
          paddingBottom: getBottomSpace(),
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: colors.blazeDarker30,
            borderRadius: 14,
            flex: 0.932,
            overflow: 'hidden',
          }}>
          <RenderMap
            newRegion={setRegion}
            OnRegionChangeSwipe={setChange}
            region={region}
            setMarkerOnCurrentLocation={currentMarker}
            saveData={saveData}
          />
        </View>
        {permissionsLocation && change && (
          <TouchableOpacity onPress={getCurrentLocation}>
            <View
              style={{
                backgroundColor: colors.sand,
                borderRadius: 60,
                bottom: 20 + getBottomSpace(),
                height: 44,
                justifyContent: 'center',
                position: 'absolute',
                right: 20,
                width: 44,
              }}>
              <Icon alight="center" name="CurrentLocation" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default React.memo(EPNeighbourhoodScreen);
