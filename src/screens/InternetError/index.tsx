import {useNetInfo} from '@react-native-community/netinfo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Linking} from 'react-native';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, Isidora} from '../../components';
import NoInternetIcon from '../../components/icons/NoInternetIcon';
import {COLORS, STRINGS} from '../../configs';
import {NavigationParams} from '../../navigation/NavigationParams';
import dimensions from '../../utils/dimensions';
import {BtnCheck, Wrapper} from './styles';

type ScreenRouteProp = RouteProp<NavigationParams, 'InternetError'>;

const InternetError: React.FunctionComponent = () => {
  const netInfo = useNetInfo();

  const {
    params: {isFetchUserData},
  } = useRoute<ScreenRouteProp>();

  const {goBack, canGoBack} = useNavigation();

  // const isFocused = useIsFocused();

  useEffect(() => {
    if (netInfo.isConnected && netInfo.isInternetReachable) {
      if (isFetchUserData) {
        isFetchUserData();
      }
      if (canGoBack()) {
        goBack();
      }
    }
  }, [
    canGoBack,
    goBack,
    isFetchUserData,
    netInfo.isConnected,
    netInfo.isInternetReachable,
  ]);

  const openSettings = useCallback(() => {
    Linking.openURL('App-prefs:root=General');
  }, []);

  return (
    <Wrapper>
      <FastImageComponent
        resizeMode="contain"
        style={{
          height: 32,
          width: 100,
        }}
        uri={FfwdLogo}
      />
      <NoInternetIcon style={{marginTop: dimensions.HEIGHT * 0.125}} />
      <Isidora
        lineHeight={28}
        fontSize={24}
        textAlign="center"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{marginTop: 17}}>
        {STRINGS.internetError.offline}
      </Isidora>
      <BtnCheck onPress={openSettings}>
        <Isidora
          lineHeight={18}
          fontSize={18}
          textAlign="center"
          fontWeight="900"
          color={COLORS.sand}>
          {STRINGS.internetError.btnText}
        </Isidora>
      </BtnCheck>
    </Wrapper>
  );
};
export default React.memo(InternetError);
