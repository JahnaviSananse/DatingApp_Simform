import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

import {FfwdLogo} from '../../assets/images';
import {
  EyeProfileIcon,
  FastImageComponent,
  Isidora,
  Row,
  SettingsPink,
} from '../components';
import EditIcon from '../components/icons/EditIcon';
import MatchSettingsIcon from '../components/icons/MatchSettingsIcon';
import UploadPhotoIcon from '../components/icons/UploadPhotoIcon';
import {COLORS} from '../configs';
import strings from '../configs/styles/strings';
import {usePhotoVideoModeration} from '../hooks/usePhotoVideoModeration';
import {useProfileData} from '../hooks/useProfileData';
import NavigationKey from '../navigation/NavigationKey';
import {photoFlickValidationAction} from '../utils/photoFlickValidationAction';

const ProfileControlScreen: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <FastImageComponent
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          height: 32,
          marginBottom: 15,
          width: 100,
        }}
        uri={FfwdLogo}
      />
      <Isidora
        fontSize={16}
        fontWeight="600"
        lineHeight={24}
        color={COLORS.raspberry}>
        {strings.navigationPage.beta}
      </Isidora>
      <View style={{flex: 1, justifyContent: 'flex-start', paddingTop: 50}}>
        <UserInfoBlock />
        <NavigationBlock />
      </View>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  background-color: ${COLORS.lightYellow};
  flex: 1;
  padding-top: 48px;
`;

const UserInfoBlock: React.FunctionComponent = () => {
  // User profile data
  const {navigate} = useNavigation();

  const {fullProfile, userAge} = useProfileData();

  const {
    isVideoPassed,
    isPhotoPassed,
    photoUrl,
    isDataChecking,
    isPhotoChecking,
    videoCount,
  } = usePhotoVideoModeration();
  // User firstname and age
  const [userInfo, setUserInfo] = useState('');

  // Data loading handling
  useEffect(() => {
    if (fullProfile) {
      setUserInfo(`${fullProfile.userAccount.firstName}, ${userAge}`);
    }
  }, [fullProfile, userAge]);

  const openMyProfile = useCallback(() => {
    navigate(NavigationKey.MyProfile);
  }, [navigate]);

  const openWarningModal = useCallback(() => {
    const option = photoFlickValidationAction({
      flickValidation: isVideoPassed,
      fromProfileControl: true,
      hasPhoto: Boolean(photoUrl),
      isDataChecking,
      navigate,
      photoValidation: isPhotoPassed,
      videoCount,
    });
    navigate(NavigationKey.WarningModal, option);
  }, [
    isDataChecking,
    isPhotoPassed,
    isVideoPassed,
    navigate,
    photoUrl,
    videoCount,
  ]);

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.lightYellow,
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: COLORS.lightYellow,
          borderColor: COLORS.raspberry,
          borderRadius: 70,
          borderWidth: 1,
          height: 140,
          justifyContent: 'center',
          width: 140,
        }}>
        {isPhotoChecking || (isVideoPassed && isPhotoPassed) ? (
          <FastImage
            style={{
              borderRadius: 70,
              height: 132,
              width: 132,
            }}
            source={{
              priority: FastImage.priority.high,
              uri: photoUrl || '',
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        ) : (
          <UploadPhotoIcon width={132} height={132} />
        )}
        <TouchableOpacity
          onPress={
            isVideoPassed && isPhotoPassed && !isDataChecking
              ? openMyProfile
              : openWarningModal
          }
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.raspberry,
            borderRadius: 18,
            height: 36,
            justifyContent: 'center',
            position: 'absolute',
            right: 6,
            top: 6,
            width: 36,
          }}>
          <EyeProfileIcon />
        </TouchableOpacity>
      </View>
      <Isidora
        lineHeight={28}
        fontSize={24}
        textAlign="center"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{marginTop: 25}}>
        {userInfo}
      </Isidora>
    </View>
  );
};

const NavigationBlock: React.FunctionComponent = () => {
  const {navigate} = useNavigation();

  const onSettings = useCallback(() => {
    navigate(NavigationKey.Settings);
  }, [navigate]);

  const onEditProfile = useCallback(() => {
    navigate(NavigationKey.EditProfileNavigator);
  }, [navigate]);

  const onMatchPreference = useCallback(() => {
    navigate(NavigationKey.MatchPreferences);
  }, [navigate]);

  return (
    <View style={{flex: 1, marginTop: -16}}>
      <Row
        style={{
          backgroundColor: COLORS.lightYellow,
          justifyContent: 'space-around',
        }}>
        <BtnWrapper>
          <BtnSettings onPress={onSettings}>
            <SettingsPink />
          </BtnSettings>
          <Isidora fontSize={18} fontWeight="600">
            {strings.navigationPage.settings}
          </Isidora>
        </BtnWrapper>

        <BtnWrapper>
          <BtnSettings onPress={onEditProfile}>
            <EditIcon />
          </BtnSettings>
          <Isidora fontSize={18} fontWeight="600">
            {strings.navigationPage.edit}
          </Isidora>
        </BtnWrapper>
      </Row>
      <Row
        style={{
          backgroundColor: COLORS.lightYellow,
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <BtnWrapper>
          <BtnSettings onPress={onMatchPreference}>
            <MatchSettingsIcon />
          </BtnSettings>
          <Isidora fontSize={18} fontWeight="600">
            {strings.navigationPage.preferences}
          </Isidora>
        </BtnWrapper>
      </Row>
    </View>
  );
};

const BtnSettings = styled(TouchableOpacity)`
  background-color: ${COLORS.raspberry};
  height: 64px;
  width: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;
`;

const BtnWrapper = styled(View)`
  align-items: center;
`;

export default React.memo(ProfileControlScreen);
