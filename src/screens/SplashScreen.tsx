import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Isidora from '../components/texts/Isidora';
import {COLORS, STRINGS} from '../configs';

interface Props {
  onAnimationFinish: () => void;
}

const Splash: React.FunctionComponent<Props> = ({onAnimationFinish}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.yellow,
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-start',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      <Isidora
        // lineHeight={12}
        fontSize={16}
        fontWeight="900"
        textAlign="center"
        color={COLORS.blazeHotPink}
        style={{marginTop: 58, zIndex: 2}}>
        {STRINGS.intro.version}
      </Isidora>
      <LottieView
        source={require('../../assets/animation/ffwd-intro-splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

export default Splash;
