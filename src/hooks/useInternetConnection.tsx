import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import {Keyboard} from 'react-native';

import NavigationKey from '../navigation/NavigationKey';

const useInternetConnection = (isFetchUserData?: () => void) => {
  const route = useRoute();
  const {navigate} = useNavigation();

  const changeScreen = useCallback(
    (state: NetInfoState) => {
      const routes = route?.state?.routes || [];
      const routeName = routes[routes.length - 1]?.name;

      if (routeName !== NavigationKey.ChatRoom) {
        if (
          (!state.isConnected || state.isInternetReachable == false) &&
          state.type !== 'unknown'
        ) {
          Keyboard.dismiss();
          navigate(NavigationKey.InternetError, {
            isFetchUserData: isFetchUserData,
          });
        }
      }
    },
    [isFetchUserData, navigate, route],
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(changeScreen);
    return () => {
      unsubscribe();
    };
  }, [changeScreen]);
};
export default useInternetConnection;
