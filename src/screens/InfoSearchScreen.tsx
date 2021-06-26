import AsyncStorage from '@react-native-community/async-storage';
import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {FfwdLogo} from '../../assets/images';
import {FastImageComponent, Isidora, Row} from '../components';
import HundredIcon from '../components/icons/HundredIcon';
import LaughIcon2 from '../components/icons/LaughIcon2';
import {COLORS, STRINGS} from '../configs';
import {useIsNeedUpdateLookBook} from '../hooks/useIsNeedUpdateLookBook';
import {NavigationParams} from '../navigation/NavigationParams';

type ScreenRouteProp = RouteProp<NavigationParams, 'InfoLookBook'>;

const InfoSearchScreen: React.FunctionComponent = () => {
  const {goBack, dispatch} = useNavigation();
  const {
    params: {type, onGoBack},
  } = useRoute<ScreenRouteProp>();

  const {setIsUpdateLook} = useIsNeedUpdateLookBook();

  const onPress = useCallback(() => {
    if (onGoBack) {
      onGoBack();
    }
    if (type === 'beta') {
      AsyncStorage.removeItem('isFirstLogin').then(() => goBack());
    } else {
      setIsUpdateLook(true);
      dispatch(
        CommonActions.navigate({
          name: 'SettingsStackTab',
        }),
      );
    }
  }, [dispatch, goBack, onGoBack, setIsUpdateLook, type]);
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.sand,
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 45,
      }}>
      <FastImageComponent
        resizeMode="contain"
        style={{
          height: 32,
          width: 100,
        }}
        uri={FfwdLogo}
      />
      <Row
        style={{
          alignItems: 'center',
          marginBottom: type === 'beta' ? 42 : 24,
          marginTop: 25,
        }}>
        {type === 'beta' ? (
          <>
            <Isidora
              fontSize={24}
              lineHeight={26}
              fontWeight="900"
              color={COLORS.blazeBlue}>
              {STRINGS.betaSearchScreen.keepingPart1}
            </Isidora>
            <HundredIcon style={{marginTop: 7}} />
            <Isidora
              fontSize={24}
              lineHeight={26}
              fontWeight="900"
              color={COLORS.blazeBlue}>
              {STRINGS.betaSearchScreen.keepingPart2}
            </Isidora>
          </>
        ) : (
          <>
            <Isidora
              fontSize={24}
              lineHeight={26}
              fontWeight="900"
              color={COLORS.blazeBlue}>
              {STRINGS.betaSearchScreen.title}
            </Isidora>
            <LaughIcon2 style={{alignSelf: 'flex-end', marginLeft: -25}} />
          </>
        )}
      </Row>

      <Isidora
        fontSize={type === 'beta' ? 14 : 15}
        lineHeight={type === 'beta' ? 20 : 22}
        fontWeight="600"
        color={COLORS.blazeBlue}>
        {type === 'beta'
          ? STRINGS.betaSearchScreen.message
          : STRINGS.betaSearchScreen.messageNoUsers}
      </Isidora>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLORS.raspberry,
          borderRadius: 30,
          height: 48,
          justifyContent: 'center',
          marginTop: type === 'beta' ? 50 : 37,
          width: 157,
        }}>
        <Isidora
          fontSize={18}
          lineHeight={18}
          fontWeight="900"
          color={COLORS.sand}>
          {STRINGS.betaSearchScreen.gotIt}
        </Isidora>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(InfoSearchScreen);
