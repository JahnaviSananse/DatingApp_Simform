/* eslint-disable prettier/prettier */
export type NavigationKeyType =
  | 'Home'
  | 'SignIn'
  | 'SignInCode'
  | 'SignInPhone'
  | 'SignInEmail'
  | 'SignInName'
  | 'SignInBirthday'
  | 'Splash'
  | 'WhatGender'
  | 'WouldLike'
  | 'OtherGender'
  | 'AuthNavigator'
  | 'CheckFlick'
  | 'UploadPhoto'
  | 'VideoRecord'
  | 'Questions'
  | 'TabNavigation'
  | 'WarningModal'
  | 'VideoRecordIntro'
  | 'AgeConfirmError'
  | 'UserSearch'
  | 'ProfileControl'
  | 'ChatIntro'
  | 'ChatRoom'
  | 'MatchingScreen'
  | 'Settings'
  | 'DataNavigator'
  | 'MainNavigator'
  | 'PushNotificationSettings'
  | 'ContactUs'
  | 'SendMailSettings'
  | 'MatchPreferences'
  | 'EditProfileNavigator'
  | 'EditProfile'
  | 'EPNeighbourhood'
  | 'EPKids'
  | 'EPPlaceOfBirth'
  | 'EPDefault'
  | 'EPHeight'
  | 'EPJob'
  | 'EPEducation'
  | 'WhoLikesYou'
  | 'PublicProfile'
  | 'InternetError'
  | 'MyProfile'
  | 'EmptyScreen'
  | 'InfoSearchScreen'
    | 'EPGenderScreen'
    | 'EPOtherGenderScreen'
    | 'BlockedScreen'
    | 'MatchingStackTab'
    | 'ChatStackTab';

const NavigationKey: {[key in NavigationKeyType]: NavigationKeyType} = {
  AgeConfirmError: 'AgeConfirmError',
  AuthNavigator: 'AuthNavigator',
  BlockedScreen: 'BlockedScreen',
  ChatIntro: 'ChatIntro',
  ChatRoom: 'ChatRoom',
  ChatStackTab: 'ChatStackTab',
  CheckFlick: 'CheckFlick',
  ContactUs: 'ContactUs',
  DataNavigator: 'DataNavigator',
  EPDefault: 'EPDefault',
  EPEducation: 'EPEducation',
  EPGenderScreen: 'EPGenderScreen',
  EPHeight: 'EPHeight',
  EPJob: 'EPJob',
  EPKids: 'EPKids',
  EPNeighbourhood: 'EPNeighbourhood',
  EPOtherGenderScreen: 'EPOtherGenderScreen',
  EPPlaceOfBirth: 'EPPlaceOfBirth',
  EditProfile: 'EditProfile',
  EditProfileNavigator: 'EditProfileNavigator',
  EmptyScreen: 'EmptyScreen',
  Home: 'Home',
  InfoSearchScreen: 'InfoSearchScreen',
  InternetError: 'InternetError',
  MainNavigator: 'MainNavigator',
  MatchPreferences: 'MatchPreferences',
  MatchingScreen: 'MatchingScreen',
  MatchingStackTab: 'MatchingStackTab',
  MyProfile: 'MyProfile',
  OtherGender: 'OtherGender',
  ProfileControl: 'ProfileControl',
  PublicProfile: 'PublicProfile',
  PushNotificationSettings: 'PushNotificationSettings',
  Questions: 'Questions',
  SendMailSettings: 'SendMailSettings',
  Settings: 'Settings',
  SignIn: 'SignIn',
  SignInBirthday: 'SignInBirthday',
  SignInCode: 'SignInCode',
  SignInEmail: 'SignInEmail',
  SignInName: 'SignInName',
  SignInPhone: 'SignInPhone',
  Splash: 'Splash',
  TabNavigation: 'TabNavigation',
  UploadPhoto: 'UploadPhoto',
  UserSearch: 'UserSearch',
  VideoRecord: 'VideoRecord',
  VideoRecordIntro: 'VideoRecordIntro',
  WarningModal: 'WarningModal',
  WhatGender: 'WhatGender',
  WhoLikesYou: 'WhoLikesYou',
  WouldLike: 'WouldLike'
};

export default NavigationKey;
