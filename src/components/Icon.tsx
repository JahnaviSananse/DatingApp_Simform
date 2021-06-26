import React, {useMemo} from 'react';
import {FlexAlignType, View} from 'react-native';

import AlcoholIcon from './icons/AlcoholIcon';
import AppleIcon from './icons/AppleIcon';
import ChildrenIcon from './icons/ChildrenIcon';
import CurrentLocationIcon from './icons/CurrentLocationIcon';
import DrugsIcon from './icons/DrugsIcon';
import EditPhotoIcon from './icons/EditPhotoIcon';
import EditPink from './icons/EditPink';
import EducationIcon from './icons/EducationIcon';
import ErrorPhotoIcon from './icons/ErrorPhotoIcon';
import EyeProfileIcon from './icons/EyeProfileIcon';
import FfwdLogoWithHearts from './icons/FfwdLogoWithHearts';
import GenderIcon from './icons/GenderIcon';
import HeartIcon from './icons/HeartIcon';
import HeightIcon from './icons/HeightIcon';
import House from './icons/House';
import JobIcon from './icons/JobIcon';
import MapPin from './icons/MapPin';
import PetsIcon from './icons/PetsIcon';
import PhoneButton from './icons/PhoneButton';
import PlanetIcon from './icons/PlanetIcon';
import PoliticIcon from './icons/PoliticIcon';
import PreferencesIcon from './icons/PreferencesIcon';
import RecognizePhotoIcon from './icons/RecognizePhotoIcon';
import ReligionIcon from './icons/ReligionIcon';
import RemovePhotoIcon from './icons/RemovePhotoIcon';
import SearchIcon from './icons/SearchIcon';
import SettingsPink from './icons/SettingsPink';
import SmokingIcon from './icons/SmokingIcon';
import SportIcon from './icons/SportIcon';
import ZodiacIcon from './icons/ZodiacIcon';

export type IconName =
  | 'Apple'
  | 'Alcohol'
  | 'Children'
  | 'Drugs'
  | 'Pets'
  | 'Politic'
  | 'Smoking'
  | 'Sport'
  | 'Zodiac'
  | 'MapPin'
  | 'CurrentLocation'
  | 'House'
  | 'Gender'
  | 'Heart'
  | 'Height'
  | 'Job'
  | 'Planet'
  | 'Religion'
  | 'Search'
  | 'Education'
  | 'Settings'
  | 'Edit'
  | 'Preferences'
  | 'ProfileEye'
  | 'RemovePhoto'
  | 'ErrorPhoto'
  | 'EditPhoto'
  | 'RecognizePhoto'
  | 'FfwdLogoWithHearts';
'PhoneButton';

interface Props {
  name: IconName;
  alight?: FlexAlignType;
}

const Icon: React.FunctionComponent<Props> = ({
  name,
  alight = 'flex-start',
}) => {
  const renderIcon = useMemo(() => {
    switch (name) {
      case 'CurrentLocation':
        return <CurrentLocationIcon />;
      case 'Alcohol':
        return <AlcoholIcon />;
      case 'Children':
        return <ChildrenIcon />;
      case 'Drugs':
        return <DrugsIcon />;
      case 'Pets':
        return <PetsIcon />;
      case 'Politic':
        return <PoliticIcon />;
      case 'Smoking':
        return <SmokingIcon />;
      case 'Sport':
        return <SportIcon />;
      case 'Zodiac':
        return <ZodiacIcon />;
      case 'MapPin':
        return <MapPin />;
      case 'House':
        return <House />;
      case 'Gender':
        return <GenderIcon />;
      case 'Heart':
        return <HeartIcon />;
      case 'Height':
        return <HeightIcon />;
      case 'Job':
        return <JobIcon />;
      case 'Planet':
        return <PlanetIcon />;
      case 'Religion':
        return <ReligionIcon />;
      case 'Search':
        return <SearchIcon />;
      case 'Education':
        return <EducationIcon />;
      case 'Apple':
        return <AppleIcon />;
      case 'Settings':
        return <SettingsPink />;
      case 'Edit':
        return <EditPink />;
      case 'Preferences':
        return <PreferencesIcon />;
      case 'ProfileEye':
        return <EyeProfileIcon />;
      case 'RemovePhoto':
        return <RemovePhotoIcon />;
      case 'ErrorPhoto':
        return <ErrorPhotoIcon />;
      case 'EditPhoto':
        return <EditPhotoIcon />;
      case 'RecognizePhoto':
        return <RecognizePhotoIcon />;
      case 'PhoneButton':
        return <PhoneButton />;
      case 'FfwdLogoWithHearts':
        return <FfwdLogoWithHearts />;
    }
  }, [name]);

  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: alight,
        height: 20,
        justifyContent: 'center',
        width: 20,
      }}>
      {renderIcon}
    </View>
  );
};

export default React.memo(Icon);
