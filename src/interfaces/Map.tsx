import {Region} from 'react-native-maps';

interface AddressComponent {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  formatted_address: string;
  place_id: string;
  types: string[];
}

export interface GeocoderProps {
  results: AddressComponent[];
  status: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
}

export interface RenderMapProps {
  region: Region;
  OnRegionChangeSwipe: (change: boolean) => void;
  newRegion: (newGeo: Region) => void;
  setMarkerOnCurrentLocation: Region | undefined;
  saveData: (neighborhood: string, markers: MarkerProps[]) => void;
}

export interface MarkerProps {
  description: string;
  latlng: {
    latitude: number;
    longitude: number;
  };
  title: string;
}
