import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';
import OneSignal from 'react-native-onesignal';

import NavigationKey from '../navigation/NavigationKey';
import useCheckVideos from './useCheckVideos';

const useOpenNotification = () => {
  const {navigate, reset} = useNavigation();
  const {lastVideoIndex, error} = useCheckVideos();
  const [pushId, setPushId] = useState<string | null>(null);

  const onOpened = useCallback((openResult) => {
    setPushId(openResult.notification.payload.additionalData.push_id);
  }, []);
  useEffect(() => {
    switch (pushId) {
      case '1':
        setPushId(null);
        break;
      case '2':
        if (lastVideoIndex && error) {
          reset({
            index: 0,
            routes: [
              {
                name: NavigationKey.VideoRecord,
                params: {
                  editStepNumber: error === 'EMPTY' ? 1 : lastVideoIndex + 1,
                },
              },
            ],
          });
          setPushId(null);
        }
        break;
      case '3':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '4':
        navigate(NavigationKey.MatchingStackTab);
        setPushId(null);
        break;
      case '5':
        navigate(NavigationKey.MatchingStackTab);
        setPushId(null);
        break;
      case '6':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '7':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '8':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '9':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '10':
        navigate(NavigationKey.ChatStackTab);
        setPushId(null);
        break;
      case '11':
        navigate(NavigationKey.MatchingStackTab);
        setPushId(null);
        break;
      case '12':
        navigate(NavigationKey.MatchingStackTab);
        setPushId(null);
        break;
      case '15':
        Linking.canOpenURL('itms-apps://itunes.apple.com').then((supported) => {
          supported && Linking.openURL('itms-apps://itunes.apple.com');
        });
        setPushId(null);
        break;
    }
  }, [error, lastVideoIndex, navigate, pushId, reset]);

  useEffect(() => {
    OneSignal.addEventListener('opened', onOpened);
    return () => {
      OneSignal.removeEventListener('opened', onOpened);
    };
  }, [onOpened]);
};

export default useOpenNotification;
