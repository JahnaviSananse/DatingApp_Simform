import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import EditProfileScreen from '../screens/editProfileFlow/EditProfileScreen';
import EPDefaultBlockScreen from '../screens/editProfileFlow/EPDefaultScreen';
import EPEducationScreen from '../screens/editProfileFlow/EPEducationScreen';
import EPGenderScreen from '../screens/editProfileFlow/EPGenderScreen';
import EPHeightScreen from '../screens/editProfileFlow/EPHeightScreen';
import EPJobScreen from '../screens/editProfileFlow/EPJobScreen';
import EPKidsScreen from '../screens/editProfileFlow/EPKidsScreen';
import EPNeighbourhoodScreen from '../screens/editProfileFlow/EPNeighbourhoodScreen';
import EPPlaceOfBirthScreen from '../screens/editProfileFlow/EPPlaceOfBirthScreen';
import NavigationKey from './NavigationKey';
import EPOtherGenderScreen from "../screens/editProfileFlow/EPOtherGenderScreen";

const EditProfileStack = createStackNavigator();

const EditProfileNavigator: React.FunctionComponent = () => {
  return (
    <EditProfileStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <EditProfileStack.Screen
        name={NavigationKey.EditProfile}
        component={EditProfileScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPDefault}
        component={EPDefaultBlockScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPKids}
        component={EPKidsScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPNeighbourhood}
        component={EPNeighbourhoodScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPHeight}
        component={EPHeightScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPPlaceOfBirth}
        component={EPPlaceOfBirthScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPJob}
        component={EPJobScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPEducation}
        component={EPEducationScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPGenderScreen}
        component={EPGenderScreen}
      />
      <EditProfileStack.Screen
        name={NavigationKey.EPOtherGenderScreen}
        component={EPOtherGenderScreen}
      />
    </EditProfileStack.Navigator>
  );
};

export default React.memo(EditProfileNavigator);
