import React from 'react';
import {View} from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import FfwdLogo from '../../../assets/images/FfwdLogo.png';
import {
  FFColorButton,
  FastImageComponent,
  Isidora,
} from '../../components/index';
import {COLORS, STRINGS} from '../../configs';
import dimensions from '../../utils/dimensions';
import {AuthContext} from '../../utils/login-context';

const AgeConfirmError: React.FunctionComponent = () => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        flex: 1,
        paddingTop: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <FastImageComponent
          resizeMode="contain"
          style={{
            height: 42,
            marginTop: 32,
            width: 100,
          }}
          uri={FfwdLogo}
        />
        <Isidora
          lineHeight={27}
          fontSize={24}
          textAlign="center"
          fontWeight="900"
          color={COLORS.blazeBlue}
          style={{marginBottom: 40, marginTop: 9}}>
          {STRINGS.errorAgeScreen.title}
        </Isidora>
        <Isidora
          lineHeight={22}
          fontSize={14}
          textAlign="center"
          fontWeight="600"
          color={COLORS.blazeBlue}
          style={{marginBottom: 27}}>
          {STRINGS.errorAgeScreen.messageAbout}
        </Isidora>
        <FFColorButton
          title={STRINGS.errorAgeScreen.button}
          fontStyle={{color: COLORS.sand, fontSize: 20, fontWeight: '800'}}
          buttonStyle={{width: 157}}
          onPress={signOut}
        />
        {/* <HyperlinkText /> */}
      </View>
      {/* <OnBoardingFooter clearFooter keyboardValue={0} noInput /> */}
    </View>
  );
};

export default React.memo(AgeConfirmError);

// const HyperlinkText: React.FunctionComponent = () => {
//   const onPress = useCallback((url: string, text: string) => {
//     Linking.canOpenURL(url).then((supported) => {
//       if (supported) {
//         Linking.openURL(url);
//       }
//     });
//   }, []);

//   const onLinkText = useCallback<(url: string) => string>((url) => {
//     switch (url) {
//       case STRINGS.intro.terms.url:
//         return STRINGS.errorAgeScreen.terms;
//       default:
//         return '';
//     }
//   }, []);

//   return (
//     <Hyperlink
//       onPress={onPress}
//       linkStyle={{
// color: COLORS.jumbo,
//         textDecorationLine: 'underline',
//       }}
//       linkText={onLinkText}>
//       <Isidora color={COLORS.jumbo} fontSize={12} lineHeight={35}>
//         {STRINGS.intro.getTermsText(STRINGS.intro.terms.url)}
//       </Isidora>
//     </Hyperlink>
//   );
// };
