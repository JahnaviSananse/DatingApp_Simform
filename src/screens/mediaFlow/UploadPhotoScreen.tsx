import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, Isidora, OnBoardingFooter} from '../../components';
import PhotoGalleryBlock from '../../components/UserGallery/PhotoGalleryBlock';
import {COLORS, STRINGS} from '../../configs';
import constants from '../../configs/constants';
import {useProfileData} from '../../hooks/useProfileData';
import NavigationKey from '../../navigation/NavigationKey';
import {useMeQuery} from '../../store/generated/graphql';
import {AuthContext} from '../../utils/login-context';

const UploadPhotoScreen: React.FunctionComponent = () => {
  const {reloadProfileData} = useProfileData();
  const [activeButton, setActiveButton] = useState(false);

  const {data: myData} = useMeQuery();

  const {reset} = useNavigation();

  const {giveAccess} = useContext(AuthContext);
  useEffect(() => {
    if (giveAccess) {
      giveAccess('FULL');
    }
    AsyncStorage.setItem('isFirstLogin', 'true');
  }, [giveAccess]);

  useEffect(() => {
    if (myData?.me?.image?.urls?.middle) {
      setActiveButton(true);
    }
  }, [myData]);

  const goToNextPage = useCallback(async () => {
    reloadProfileData();
    await AsyncStorage.setItem('skippOpeSettings', 'true');
    reset({
      index: 1,
      routes: [
        {name: NavigationKey.MainNavigator},
        {name: NavigationKey.CheckFlick},
      ],
    });
  }, [reloadProfileData, reset]);

  const uploaded = useCallback(() => setActiveButton(true), []);

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          paddingHorizontal: constants.PROFILE.paddingHorizontal,
          paddingTop: 50,
        }}>
        <FastImageComponent
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            height: 32,
            width: 100,
          }}
          uri={FfwdLogo}
        />
        <View style={{alignItems: 'center', marginTop: 22}}>
          <PhotoGalleryBlock onNextStep={uploaded} />
        </View>
        {!activeButton && (
          <Isidora
            fontSize={24}
            lineHeight={24}
            fontWeight="900"
            style={{marginTop: 21}}>
            {STRINGS.onBoardingPhoto.label}
          </Isidora>
        )}
      </View>

      <OnBoardingFooter
        value={0.9}
        onPress={goToNextPage}
        activeButton={activeButton}
      />
    </View>
  );
};

export default React.memo(UploadPhotoScreen);
