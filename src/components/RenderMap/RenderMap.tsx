import React, {useCallback, useEffect, useRef, useState} from 'react';
import Geocoder from 'react-native-geocoding';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import colors from '../../configs/styles/colors';
import {GeocoderProps, MarkerProps, RenderMapProps} from '../../interfaces/Map';
import {FilterGeocoderData} from '../../utils/FilterGeocoderData';
import {Isidora, MapMarker} from '../index';

const InitMarkerArray: MarkerProps[] = [];
Geocoder.init('AIzaSyCyw5vUidBstOesU7SNg59MAxv17Tq3esk');

const RenderMap: React.FunctionComponent<RenderMapProps> = ({
  region,
  OnRegionChangeSwipe,
  newRegion,
  saveData,
  setMarkerOnCurrentLocation,
}) => {
  const markerRef = useRef(null);
  const [markers, setMarker] = useState(InitMarkerArray);
  const [markerLocation, setMarkerLocation] = useState('');
  const [isPopupShow, setStatusPopupShow] = useState(false);

  // change style for appearance of showsMyLocationButton
  const [mapMargin, setMapMargin] = useState(1);
  const setMargin = () => {
    setMapMargin(0);
  };

  useEffect(() => {
    if (markers.length > 0 && markerLocation?.length > 0 && isPopupShow) {
      if (markerRef?.current?.showCallout) {
        markerRef.current.showCallout();
      }
    }
  }, [
    markerLocation,
    markerLocation.length,
    markerRef,
    markers.length,
    isPopupShow,
  ]);

  const onRegionChange = useCallback(
    (updateRegion) => {
      if (
        updateRegion.latitude.toFixed(4) ===
          setMarkerOnCurrentLocation?.latitude.toFixed(4) &&
        updateRegion.longitude.toFixed(4) ===
          setMarkerOnCurrentLocation?.longitude.toFixed(4)
      ) {
        OnRegionChangeSwipe(false);
      }
    },
    [OnRegionChangeSwipe, setMarkerOnCurrentLocation],
  );

  const FindNeighborhood = useCallback((GeocoderData: GeocoderProps) => {
    const address = FilterGeocoderData(GeocoderData);
    setMarkerLocation(address);
    setTimeout(() => {
      setStatusPopupShow(true);
    }, 800);
  }, []);

  const getRegionName = useCallback(
    (lat, lng) => {
      Geocoder.from(lat, lng)
        .then(FindNeighborhood)
        .catch((error: unknown) => console.warn(error));
    },
    [FindNeighborhood],
  );

  const sendDataToParentComponent = useCallback(() => {
    if (markerLocation && markers) {
      saveData(markerLocation, markers);
    }
  }, [markerLocation, markers, saveData]);

  useEffect(() => {
    sendDataToParentComponent();
  }, [sendDataToParentComponent]);

  const onMapTap = useCallback(
    (e) => {
      if (e && e.nativeEvent.coordinate) {
        setStatusPopupShow(false);
        const marker: MarkerProps = {
          description: 'description',
          latlng: {
            ...e.nativeEvent.coordinate,
          },
          title: 'title',
        };
        getRegionName(
          e.nativeEvent.coordinate.latitude,
          e.nativeEvent.coordinate.longitude,
        );
        setMarker([marker]);
        newRegion({
          ...e.nativeEvent.coordinate,
          latitudeDelta: 0.03342339265807226,
          longitudeDelta: 0.030599981546401978,
        });
      }
    },
    [getRegionName, newRegion],
  );

  useEffect(() => {
    if (setMarkerOnCurrentLocation) {
      setStatusPopupShow(false);
      setMarker([]);
      const marker: MarkerProps = {
        description: 'description',
        latlng: {
          latitude: setMarkerOnCurrentLocation.latitude,
          longitude: setMarkerOnCurrentLocation.longitude,
        },
        title: 'title',
      };
      getRegionName(
        setMarkerOnCurrentLocation.latitude,
        setMarkerOnCurrentLocation.longitude,
      );
      setTimeout(() => {
        setMarker([marker]);
      }, 100);
    }
  }, [getRegionName, setMarkerOnCurrentLocation]);

  return (
    <MapView
      zoomTapEnabled={false}
      moveOnMarkerPress={false}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      onRegionChangeComplete={onRegionChange}
      followsUserLocation
      style={{height: '100%', margin: mapMargin, width: '100%'}}
      // eslint-disable-next-line react/jsx-no-bind
      onMapReady={setMargin}
      region={region}
      onPress={onMapTap}
      showsCompass>
      {markers.map((marker: MarkerProps, index) => (
        <Marker ref={markerRef} key={index} coordinate={marker.latlng}>
          <MapMarker />
          <Callout
            tooltip
            style={{
              backgroundColor: colors.sand,
              borderRadius: 25,
              maxWidth: 230,
              minWidth: 160,
              paddingHorizontal: 12,
              paddingVertical: 16,
            }}>
            {markerLocation.length > 0 && (
              <Isidora
                fontWeight="600"
                textAlign="center"
                fontSize={14}
                lineHeight={16}
                style={{flex: 1}}
                color={colors.blazeBlue}>
                {markerLocation}
              </Isidora>
            )}
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};
export default React.memo(RenderMap);
