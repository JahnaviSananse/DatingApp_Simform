import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import JwtDecode from 'jwt-decode';
import moment from 'moment';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {View} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {enableScreens} from 'react-native-screens';
import {SingletonHooksContainer} from 'react-singleton-hook';

import constants from '../configs/constants';
import colors from '../configs/styles/colors';
import useInternetConnection from '../hooks/useInternetConnection';
import {resetUserValidationData} from '../hooks/usePhotoVideoModeration';
import {TokenDto} from '../hooks/useUserData';
import {useVideoPrompt} from '../hooks/useVideoPrompt';
import AgeConfirmError from '../screens/AgeConfirmError/AgeConfirmError';
import BlockedScreen from '../screens/BlockedScreen';
import InternetError from '../screens/InternetError';
import CheckYourFlickScreen from '../screens/mediaFlow/CheckYourFlickScreen';
import OnBoardingPhoto from '../screens/mediaFlow/UploadPhotoScreen';
import VideoRecordScreen from '../screens/mediaFlow/VideoRecordScreen';
import WarningModal from '../screens/WarningModal';
import {useMyProfileLazyQuery} from '../store/generated/graphql';
import {checkFilledUserData} from '../utils/checkFilledUserData';
import {AuthContext, ContextProps} from '../utils/login-context';
import {MuteContext, MuteContextProps, MuteState} from '../utils/mute-context';
import AuthNavigator from './AuthNavigator';
import DataNavigator from './DataNavigator';
import MainNavigator from './MainNavigator';
import NavigationKey from './NavigationKey';

enableScreens();

const RootStack = createStackNavigator();

export type AccessLevelType = 'BLOCKED' | 'SUSPENSE' | 'DATA' | 'AGE' | 'FULL';

type State = {
  isSignedIn: boolean;
  isLoading: boolean;
};

type Action = {type: 'signIn'} | {type: 'signOut'};

function reducer(state: State, action: Action): State {
  // console.log(`Current action is ${action.type}`);
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isSignedIn: true,
      };
    case 'signOut':
      return {
        ...state,
        isSignedIn: false,
      };
  }
}
type LoadingType = {
  fetchData: () => void;
};
const LoadingScreen: React.FunctionComponent<LoadingType> = React.memo(
  ({fetchData}) => {
    useInternetConnection(fetchData);
    return <View style={{backgroundColor: colors.blazeCream, flex: 1}} />;
  },
);
interface RootType {
  isLogout: boolean;
  setLogout: (value: boolean) => void;
  setBaseToken: (value: null) => void;
  isAnimatedFinished: boolean;
  isBlocked: boolean;
  setIsBlocked: (value: boolean) => void;
}
const RootNavigator: React.FunctionComponent<RootType> = ({
  isLogout,
  setLogout,
  setBaseToken,
  isAnimatedFinished,
  isBlocked,
  setIsBlocked,
}) => {
  const {skipWholePrompt} = useVideoPrompt();

  // Mute props
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoProfileMuted, setVideoProfileMuted] = useState(false);

  // Mute control context
  const muteContext = useMemo<MuteContextProps>(
    () => ({
      muted: videoMuted,
      profileMuted: videoProfileMuted,
      switchMuted: async () => {
        let prevMuteState = false;

        // Update current state
        setVideoMuted((prevState) => {
          prevMuteState = prevState;
          return !prevState;
        });

        // Update state on storage
        await AsyncStorage.setItem(
          MuteState.GLOBAL,
          JSON.stringify(!prevMuteState),
        );
      },
      switchProfileMuted: async () => {
        let prevMuteState = false;

        // Update current state
        setVideoProfileMuted((prevState) => {
          prevMuteState = prevState;
          return !prevState;
        });

        // Update state on storage
        await AsyncStorage.setItem(
          MuteState.PROFILE,
          JSON.stringify(!prevMuteState),
        );
      },
    }),
    [videoMuted, videoProfileMuted],
  );

  // Data is already loaded
  const [firstLoading, setFirstLoading] = useState(true);

  // Current access level
  const [accessLevel, setAccessLevel] = useState<AccessLevelType>('SUSPENSE');

  // Auth reducer
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignedIn: false,
  });

  // Lazy user fetching
  const [fetchUserData, {data, client, loading, error}] = useMyProfileLazyQuery(
    {
      fetchPolicy: 'network-only',
    },
  );

  // Check the token
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('token');
      if (userToken) {
        dispatch({type: 'signIn'});

        // Fetch
        fetchUserData();
      } else {
        dispatch({type: 'signOut'});
      }
    };

    // Restore last mute state
    const restoreMuteStateAsync = async () => {
      const shouldMute = await AsyncStorage.getItem(MuteState.GLOBAL);
      if (shouldMute !== null) {
        setVideoMuted(JSON.parse(shouldMute));
      } else {
        // Setup state to storage
        await AsyncStorage.setItem(MuteState.GLOBAL, JSON.stringify(true));
      }

      // Mute state for profile videos
      const shouldProfileMute = await AsyncStorage.getItem(MuteState.PROFILE);
      if (shouldProfileMute !== null) {
        setVideoProfileMuted(JSON.parse(shouldProfileMute));
      } else {
        // Setup state to storage
        await AsyncStorage.setItem(MuteState.PROFILE, JSON.stringify(false));
      }
    };

    bootstrapAsync();
    restoreMuteStateAsync();
  }, [fetchUserData]);

  // Check the user data filling
  useEffect(() => {
    (async () => {
      if (data) {
        if (!firstLoading) return;
        // Set first loading
        setFirstLoading(false);

        // Get the profile data
        const {myProfile} = data;
        const isBirthDateFilled = myProfile?.birthDate !== null;

        const screenName = await checkFilledUserData(
          myProfile?.userAccount?.firstName,
          myProfile?.userAccount?.email,
          myProfile?.birthDate,
          myProfile?.genderBlock.value?.name,
          myProfile?.likeToMeetGender,
          !!myProfile?.userAccount.fbId || !!myProfile?.userAccount.appleUserId,
        );

        const hasAccess = !screenName;

        const age = moment(new Date()).diff(myProfile?.birthDate, 'years');
        // Check the user age
        if (isBirthDateFilled && age < 18) {
          setAccessLevel('AGE');
        } else if (hasAccess) {
          // Check and give the user access to use the main flow
          setAccessLevel('FULL');
        } else {
          setAccessLevel('DATA');
        }

        // Skip the video prompt and the check flick screen
        const isVideosFilled = myProfile?.userAccount.videoFilled;
        if (isVideosFilled) {
          skipWholePrompt();

          // Skip the check flick screen
          AsyncStorage.setItem(constants.SKIP_CHECK_FLICK_STATE, 'true');
        }
      }
    })();
  }, [data, firstLoading, skipWholePrompt]);

  const signInAndEnter = useCallback(
    async (token: string, refreshToken: string) => {
      dispatch({type: 'signOut'});
      setFirstLoading(true);
      setAccessLevel('SUSPENSE');

      // Get the user id
      const userId = JwtDecode<TokenDto>(token).user_id.toString();

      // Send the userId to OneSignal
      OneSignal.sendTag('userId', userId);

      // Save data
      await AsyncStorage.multiSet([
        ['token', token],
        ['refresh-token', refreshToken],
        ['accountId', userId],
      ]);
    },
    [],
  );

  const signOutAndExit = useCallback(async () => {
    // Sign out
    dispatch({type: 'signOut'});
    setFirstLoading(true);
    setAccessLevel('SUSPENSE');

    // Remove data
    await client.resetStore();
    await client.clearStore();
    await AsyncStorage.clear();
    await AsyncStorage.setItem('HIDE_NY_POPUP', 'true');
    resetUserValidationData();
    setBaseToken(null);
    setLogout(false);
  }, [client, setBaseToken, setLogout]);

  useEffect(() => {
    if (isLogout) {
      signOutAndExit();
    }
  }, [isLogout, signOutAndExit]);

  useEffect(() => {
    if (isBlocked) {
      setAccessLevel('BLOCKED');
      setIsBlocked(false);
    }
  }, [accessLevel, isBlocked, setIsBlocked]);

  const authContext = useMemo<ContextProps>(
    () => ({
      giveAccess: (level: AccessLevelType) => {
        setAccessLevel(level);

        // console.log('Access given: ', level);
      },
      isAnimatedFinished: isAnimatedFinished,
      signIn: (token: string, refreshToken: string) => {
        signInAndEnter(token, refreshToken).then(() => {
          // Make the user logged in
          dispatch({type: 'signIn'});

          // Fetch and check the user data filled
          fetchUserData();
        });
      },
      signOut: () => {
        signOutAndExit().then(() => {
          // console.log('Signed out');
        });
      },
    }),
    [fetchUserData, isAnimatedFinished, signInAndEnter, signOutAndExit],
  );

  const fetchData = useCallback(() => {
    fetchUserData();
  }, [fetchUserData]);

  const UploadingScreen = useCallback(() => {
    return <LoadingScreen fetchData={fetchData} />;
  }, [fetchData]);

  // Logged in flow check
  const loggedInFlow = useCallback(() => {
    // console.log('Access level', accessLevel);
    switch (accessLevel) {
      case 'BLOCKED':
        return (
          <RootStack.Screen
            name={NavigationKey.BlockedScreen}
            component={BlockedScreen}
            options={{
              headerShown: false,
            }}
          />
        );
      case 'SUSPENSE':
        return (
          <RootStack.Screen name="LoadingScreen" component={UploadingScreen} />
        );
      case 'DATA':
        return (
          <RootStack.Screen
            name={NavigationKey.DataNavigator}
            component={DataNavigator}
          />
        );
      case 'AGE':
        return (
          <RootStack.Screen
            name={NavigationKey.AgeConfirmError}
            component={AgeConfirmError}
            options={{headerShown: false}}
          />
        );
      case 'FULL':
        return (
          <RootStack.Screen
            name={NavigationKey.MainNavigator}
            component={MainNavigator}
          />
        );
    }
  }, [UploadingScreen, accessLevel]);

  return (
    <NavigationContainer>
      <MuteContext.Provider value={muteContext}>
        <AuthContext.Provider value={authContext}>
          <SingletonHooksContainer />
          <RootStack.Navigator
            screenOptions={{
              animationEnabled: false,
              cardOverlayEnabled: false,
              cardShadowEnabled: false,
              cardStyle: {
                // backgroundColor: colors.blazeCream,
                backgroundColor: colors.backdrop,
                elevation: 0,
                opacity: 1,
              },
            }}
            mode="modal"
            headerMode="none"
            initialRouteName={NavigationKey.MainNavigator}>
            {state.isSignedIn ? (
              loggedInFlow()
            ) : (
              <RootStack.Screen
                name={NavigationKey.AuthNavigator}
                component={AuthNavigator}
              />
            )}
            <RootStack.Screen
              name={NavigationKey.WarningModal}
              component={WarningModal}
              options={{animationEnabled: false, headerShown: false}}
            />
            <RootStack.Screen
              name={NavigationKey.VideoRecord}
              component={VideoRecordScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name={NavigationKey.CheckFlick}
              component={CheckYourFlickScreen}
              options={{gestureEnabled: false, headerShown: false}}
            />
            <RootStack.Screen
              name={NavigationKey.UploadPhoto}
              component={OnBoardingPhoto}
            />
            <RootStack.Screen
              name={NavigationKey.InternetError}
              component={InternetError}
              options={{
                headerShown: false,
              }}
            />
          </RootStack.Navigator>
        </AuthContext.Provider>
      </MuteContext.Provider>
    </NavigationContainer>
  );
};

export default React.memo(RootNavigator);
