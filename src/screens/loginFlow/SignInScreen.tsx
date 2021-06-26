import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Linking, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import InView from 'react-native-component-inview';
import Hyperlink from 'react-native-hyperlink';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {FfwdHearts} from '../../../assets/images';
import {AppleButton, FastImageComponent} from '../../components';
import FacebookLoginButton from '../../components/FacebookLoginButton/FacebookLoginButton';
import FFColorButton from '../../components/FFColorButton';
import Isidora from '../../components/texts/Isidora';
import {getIsidoraFullFontFamily} from '../../components/texts/IsidoraTypes';
import {COLORS, STRINGS} from '../../configs';
import strings from '../../configs/styles/strings';
import useCheckLocationBlock from '../../hooks/useCheckLocationBlock';
import NavigationKey from '../../navigation/NavigationKey';
import {checkLocationPermission} from '../../utils/checkLocationPermission';
import dimensions from '../../utils/dimensions';

const SignInScreen: React.FunctionComponent = () => {
  const {navigate} = useNavigation();

  const {checkLocation} = useCheckLocationBlock();

  const onPhoneLogin = useCallback(() => {
    checkLocationPermission().then(() => {
      navigate(NavigationKey.SignInPhone);
    });
  }, [navigate]);

  const onViewChange = useCallback(
    async (visible: boolean) => {
      const checkPopUp = await AsyncStorage.getItem('HIDE_NY_POPUP');
      if (visible && !checkPopUp) {
        setTimeout(() => {
          checkLocation();
        }, 6000);
      }
    },
    [checkLocation],
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.blazeCream,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: ifIphoneX(33, 15),
      }}>
      <View style={{alignItems: 'center'}}>
        <Isidora
          fontSize={16}
          fontWeight="600"
          textAlign="center"
          color={COLORS.blazeHotPink}
          style={{marginTop: 55, width: '100%'}}>
          {STRINGS.intro.version}
        </Isidora>
        <View
          style={{
            alignItems: 'center',
          }}>
          <FastImageComponent
            resizeMode="contain"
            style={{height: 82, marginBottom: 71, marginTop: 30, width: 111}}
            uri={FfwdHearts}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Isidora
            lineHeight={31}
            fontWeight="900"
            fontSize={24}
            color={COLORS.blazeBlue}
            style={{width: '100%'}}>
            {STRINGS.intro.titleFirst}
          </Isidora>
          <Isidora
            lineHeight={26}
            fontWeight="900"
            fontSize={24}
            color={COLORS.blazeHotPink}
            style={{marginTop: 13, width: '100%'}}>
            {STRINGS.intro.titleSecond}
          </Isidora>
          <Isidora
            lineHeight={26}
            fontSize={16}
            textAlign="center"
            color={COLORS.blazeBlue}
            style={{marginBottom: 18, marginTop: 110, width: '100%'}}>
            {STRINGS.intro.social}
          </Isidora>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            maxHeight: 48,
            width: dimensions.WIDTH,
          }}>
          <FacebookLoginButton />
          <InView onChange={onViewChange}>
            <FFColorButton
              icon="PhoneButton"
              onPress={onPhoneLogin}
              buttonStyle={{width: 96}}
            />
          </InView>
          <AppleButton />
        </View>
      </View>
      <HyperlinkText />
    </View>
  );
};

const HyperlinkText: React.FunctionComponent = () => {
  const onPress = useCallback((url: string, text: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  }, []);

  const onLinkText = useCallback<(url: string) => string>((url) => {
    switch (url) {
      case strings.intro.terms.url:
        return strings.intro.terms.text;
      case strings.intro.privacy.url:
        return strings.intro.privacy.text;
      case strings.intro.cookies.url:
        return strings.intro.cookies.text;
      default:
        return '';
    }
  }, []);

  return (
    <Hyperlink
      onPress={onPress}
      linkStyle={{
        color: COLORS.blazeBlue60,
        fontFamily: getIsidoraFullFontFamily('bold'),
      }}
      linkText={onLinkText}>
      <Isidora
        color={COLORS.blazeBlue60}
        fontWeight="300"
        fontSize={12}
        lineHeight={18}>
        {strings.intro.getInfoText(
          strings.intro.terms.url,
          strings.intro.privacy.url,
          strings.intro.cookies.url,
        )}
      </Isidora>
    </Hyperlink>
  );
};

export default React.memo(SignInScreen);
