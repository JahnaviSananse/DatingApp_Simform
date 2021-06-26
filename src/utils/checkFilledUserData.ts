import AsyncStorage from '@react-native-community/async-storage';

export const checkFilledUserData = async (
  name: null | undefined | string,
  email: null | undefined | string,
  birth: Date | undefined | null,
  myGender: null | undefined | string,
  likeToMeetGender: null | undefined | string,
  isFBorApple: boolean,
) => {
  const screenName = await AsyncStorage.getItem('currentScreen');
  if (screenName || (name && email && birth && myGender && likeToMeetGender)) {
    return screenName;
  } else {
    if (isFBorApple && !birth && !myGender) {
      await AsyncStorage.setItem('currentScreen', 'EMAIL');
      return 'EMAIL';
    }
    if (!email) {
      await AsyncStorage.setItem('currentScreen', 'EMAIL');
      return 'EMAIL';
    } else if (!name) {
      await AsyncStorage.setItem('currentScreen', 'FIRSTNAME');
      return 'FIRSTNAME';
    } else if (!birth) {
      await AsyncStorage.setItem('currentScreen', 'BIRTHDAY');
      return 'BIRTHDAY';
    } else if (!myGender) {
      await AsyncStorage.setItem('currentScreen', 'WHAT_GENDER');
      return 'WHAT_GENDER';
    } else if (!likeToMeetGender) {
      await AsyncStorage.setItem('currentScreen', 'WOULD_LIKE');
      return 'WOULD_LIKE';
    }
  }
};
