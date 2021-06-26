import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, TouchableOpacity} from 'react-native';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent} from '../../components';
import BackArrowIcon from '../../components/icons/BackArrowIcon';
import PublicProfileDataList from '../../components/PublicProfileDataList';
import {COLORS} from '../../configs';
import useUserData from '../../hooks/useUserData';
import {usePublicUserProfileLazyQuery} from '../../store/generated/graphql';
import {Header, Wrapper} from './style';

const MyProfile: React.FunctionComponent = () => {
  // User id
  const {profileId} = useUserData();

  // Navigation
  const {goBack} = useNavigation();

  // Requests
  const [fetchUserProfile, {data}] = usePublicUserProfileLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (profileId) {
      fetchUserProfile({
        variables: {
          userProfileId: `${profileId}`,
        },
      });
    }
  }, [fetchUserProfile, profileId]);

  return (
    <>
      <Header>
        <TouchableOpacity onPress={goBack} style={{width: '50%'}}>
          <BackArrowIcon width={28} height={26} />
        </TouchableOpacity>
        <FastImageComponent
          resizeMode="contain"
          style={{
            height: 32,
            marginLeft: -50,
            width: 100,
          }}
          uri={FfwdLogo}
        />
      </Header>
      <Wrapper
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <StatusBar translucent barStyle="dark-content" />
        {data && data?.publicUserProfile ? (
          <PublicProfileDataList
            userPreviewProfile
            userData={{...data.publicUserProfile, distance: null}}
            hideRelationsActionBtns
            inModal={false}
            showActionBtn={false}
            hideBlockReport
            hideIconPlay
            autoplayVideo
          />
        ) : (
          <ActivityIndicator
            size="large"
            color={COLORS.blazeBlue}
            style={{marginTop: '70%'}}
          />
        )}
      </Wrapper>
    </>
  );
};
export default React.memo(MyProfile);
