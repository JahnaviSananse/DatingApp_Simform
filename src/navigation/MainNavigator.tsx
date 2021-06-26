import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useCallback, useEffect} from 'react';
import React from 'react';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

import HeaderLeft from '../components/header/headerLeftButton/headerLeftButton';
import RenderTopTabBar from '../components/RenderTopTabBar';
import {COLORS} from '../configs';
import {useFillUserProfile} from '../hooks/useFillUserProfile';
import useInternetConnection from '../hooks/useInternetConnection';
import useOpenNotification from '../hooks/useOpenNotification';
import {usePhotoVideoModeration} from '../hooks/usePhotoVideoModeration';
import {useSendMyGeoPosition} from '../hooks/useSendMyGeoPosition';
import ChatIntro from '../screens/ChatIntro/ChatIntro';
import ChatRoom from '../screens/ChatRoom/ChatRoom';
import EPDefaultBlockScreen from '../screens/editProfileFlow/EPDefaultScreen';
import InfoSearchScreen from '../screens/InfoSearchScreen';
import MatchPreferences from '../screens/MatchPreferences/MatchPreferences';
import VideoRecordIntroScreen from '../screens/mediaFlow/VideoRecordIntroScreen';
import MyProfile from '../screens/MyProfile';
import ProfileControlScreen from '../screens/ProfileControlScreen';
import ContactUs from '../screens/ProfileSettings/OtherProfileSetting/ContactUs';
import PushNotificationSettings from '../screens/ProfileSettings/OtherProfileSetting/PushNotificationsSetting';
import SendMailSettings from '../screens/ProfileSettings/OtherProfileSetting/SendMailSettings';
import ProfileSettings from '../screens/ProfileSettings/ProfileSettings';
import PublicProfile from '../screens/PublicProfile';
import SearchPeople from '../screens/SearchPeople';
import WhoLikesYou from '../screens/WhoLikesYou';
import EditProfileNavigator from './EditProfileNavigator';
import NavigationKey from './NavigationKey';

const {width: WIDTH} = Dimensions.get('window');

const MatchingStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ChatStack = createStackNavigator();
const AllStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator: React.FunctionComponent = () => {
  const {goBack} = useNavigation();
  useInternetConnection();
  useSendMyGeoPosition();
  useFillUserProfile();
  useOpenNotification();

  const {photoUrl} = usePhotoVideoModeration();
  useEffect(() => {
    if (photoUrl) {
      FastImage.preload([{uri: photoUrl}]);
    }
  }, [photoUrl]);

  const returnHeaderLeft = useCallback(() => <HeaderLeft onPress={goBack} />, [
    goBack,
  ]);

  const MatchingStackScreen = useCallback(() => {
    return (
      <MatchingStack.Navigator>
        <MatchingStack.Screen
          name={NavigationKey.MatchingScreen}
          component={SearchPeople}
          options={{
            headerShown: false,
          }}
        />
      </MatchingStack.Navigator>
    );
  }, []);

  const ChatStackScreen = useCallback(() => {
    return (
      <ChatStack.Navigator>
        <ChatStack.Screen
          name={NavigationKey.ChatIntro}
          component={ChatIntro}
          options={{
            headerShown: false,
          }}
        />
      </ChatStack.Navigator>
    );
  }, []);

  const SettingsStackScreen = useCallback(() => {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen
          name={NavigationKey.ProfileControl}
          component={ProfileControlScreen}
          options={{
            headerShown: false,
          }}
        />
      </SettingsStack.Navigator>
    );
  }, []);

  const renerTabBar = useCallback(
    (props) => <RenderTopTabBar {...props} />,
    [],
  );

  const renderTab = useCallback(() => {
    return (
      <Tab.Navigator
        initialRouteName={NavigationKey.MatchingStackTab}
        timingConfig={{
          duration: 0.01, // disable the animation
        }}
        swipeEnabled={false}
        tabBar={renerTabBar}
        // tabBarOptions={{
        //   indicatorStyle: {backgroundColor: COLORS.blazeCream},
        //   indicatorStyle: {backgroundColor: COLORS.primary},
        //   labelStyle: {color: COLORS.white, fontSize: 12},
        //   style: {
        //     paddingTop: getHeightWithScaleFactor(120),
        //   },
        // }}
      >
        <Tab.Screen name="SettingsStackTab" component={SettingsStackScreen} />
        <Tab.Screen
          name={NavigationKey.MatchingStackTab}
          component={MatchingStackScreen}
        />
        <Tab.Screen
          name={NavigationKey.ChatStackTab}
          component={ChatStackScreen}
        />
      </Tab.Navigator>
    );
  }, [renerTabBar, SettingsStackScreen, MatchingStackScreen, ChatStackScreen]);

  return (
    <AllStack.Navigator
      initialRouteName={NavigationKey.TabNavigation}
      screenOptions={{
        cardOverlayEnabled: false,
        cardShadowEnabled: false,
        cardStyle: {
          backgroundColor: COLORS.sand,
          elevation: 0,
          opacity: 1,
        },
        gestureEnabled: false,
        headerLeft: returnHeaderLeft,
        headerStyle: {
          backgroundColor: COLORS.sand,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: COLORS.blazeBlue,
        headerTitleStyle: {
          fontFamily: 'IsidoraSansAlt-SemiBold',
          fontSize: 24,
          fontWeight: '900',
          lineHeight: 24,
          textAlign: 'center',
          width: WIDTH - 144,
        },
      }}>
      <AllStack.Screen
        options={{animationEnabled: false, headerShown: false}}
        name={NavigationKey.TabNavigation}
        component={renderTab}
      />
      <AllStack.Screen
        options={{animationEnabled: false, headerShown: false}}
        name={NavigationKey.EditProfileNavigator}
        component={EditProfileNavigator}
      />
      <AllStack.Screen
        name={NavigationKey.ChatRoom}
        component={ChatRoom}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <AllStack.Screen
        name={NavigationKey.Settings}
        component={ProfileSettings}
        options={{
          gestureEnabled: false,
          title: 'SETTINGS',
        }}
      />
      <AllStack.Screen
        name={NavigationKey.PushNotificationSettings}
        component={PushNotificationSettings}
        options={{gestureEnabled: false, title: 'Push Notifications'}}
      />
      <AllStack.Screen
        name={NavigationKey.ContactUs}
        component={ContactUs}
        options={{
          gestureEnabled: false,
          title: 'Contact Us',
        }}
      />
      <AllStack.Screen
        name={NavigationKey.SendMailSettings}
        component={SendMailSettings}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <AllStack.Screen
        name={NavigationKey.MatchPreferences}
        component={MatchPreferences}
        options={{
          gestureEnabled: false,
          headerTitleStyle: {
            color: COLORS.blazeBlue,
            fontFamily: 'IsidoraSansAlt-SemiBold',
            fontSize: 21,
            fontWeight: '900',
            lineHeight: 22,
          },
          title: 'MATCH PREFERENCES',
        }}
      />
      <AllStack.Screen
        name={NavigationKey.EPDefault}
        component={EPDefaultBlockScreen}
        options={{headerShown: false}}
      />
      <AllStack.Screen
        name={NavigationKey.WhoLikesYou}
        component={WhoLikesYou}
        options={{
          gestureEnabled: false,
          headerTitleStyle: {
            color: COLORS.blazeBlue,
            fontFamily: 'IsidoraSansAlt-SemiBold',
            fontSize: 24,
            fontWeight: '900',
            lineHeight: 20,
          },
          title: 'Fanbase',
        }}
      />
      <AllStack.Screen
        name={NavigationKey.PublicProfile}
        component={PublicProfile}
        options={{
          headerShown: false,
        }}
      />
      <AllStack.Screen
        name={NavigationKey.MyProfile}
        component={MyProfile}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <AllStack.Screen
        name={NavigationKey.VideoRecordIntro}
        component={VideoRecordIntroScreen}
        options={{headerShown: false}}
      />
      <AllStack.Screen
        name={NavigationKey.InfoSearchScreen}
        component={InfoSearchScreen}
        options={{headerShown: false}}
      />
    </AllStack.Navigator>
  );
};

export default React.memo(MainNavigator);
