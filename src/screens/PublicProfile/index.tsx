import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {StatusBar} from 'react-native';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, MoreDots} from '../../components';
import BlockReportModal from '../../components/BlockReportModal';
import ModalHeaderMore from '../../components/ChatRoomHeader/ModalHeaderMore';
import BackArrowIcon from '../../components/icons/BackArrowIcon';
import PublicProfileDataList from '../../components/PublicProfileDataList';
import {COLORS} from '../../configs';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import {NavigationParams} from '../../navigation/NavigationParams';
import {
  usePublicUserProfileQuery,
  useRecoveryMatchMutation,
} from '../../store/generated/graphql';
import {CarouselContext} from '../SearchPeople';
import {BtnWrapper, BtnWrapperMoreDots, Header, Wrapper} from './styles';

type ScreenRouteProp = RouteProp<NavigationParams, 'PublicProfile'>;

const PublicProfile: React.FunctionComponent = () => {
  const {params} = useRoute<ScreenRouteProp>();
  const {goBack} = useNavigation();

  const {
    isVideoPassed,
    isPhotoPassed,
    isDataChecking,
    photoUrl,
  } = usePhotoVideoModeration();

  const {data, loading} = usePublicUserProfileQuery({
    fetchPolicy: 'network-only',
    variables: {
      userProfileId: params.profileId,
    },
  });

  const [
    recoveryMatchMutation,
    {data: recoveryData},
  ] = useRecoveryMatchMutation();

  const [isVisibleModalMore, setIsVisibleModalMore] = useState(false);
  const [isVisibleBlockReport, setIsVisibleBlockReport] = useState(false);
  const [typeReport, setTypeReport] = useState<'report' | 'unmatch'>();
  // const [isRecover, setIsRecover] = useState(() => params.isExpired ?? false);
  const [disableAutoplayVideo, setDisableAutoplayVideo] = useState(false);
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (recoveryData?.recoveryMatch) {
  //     setIsRecover(false);
  //   }
  // }, [recoveryData]);

  const closeBlockReport = useCallback(() => {
    setIsVisibleBlockReport(false);
    setDisableAutoplayVideo(false);
  }, []);

  const openModalMore = useCallback(() => {
    setDisableAutoplayVideo(true);
    setIsVisibleModalMore(true);
  }, []);

  const navigateToChatIntro = useCallback(
    () => goBack(),
    //navigate(NavigationKey.ChatIntro)
    [goBack],
  );

  const restore = useCallback(() => {
    if (params.matchId) {
      recoveryMatchMutation({
        variables: {
          matchId: params.matchId,
        },
      });
      goBack();
    }
  }, [goBack, params.matchId, recoveryMatchMutation]);

  const onPressCancelHeaderModal = useCallback(() => {
    setDisableAutoplayVideo(false);
  }, []);

  return (
    <>
      <CarouselContext.Provider
        value={{isPaused: disableAutoplayVideo || !isFocused}}>
        <ModalHeaderMore
          visibleModal={isVisibleModalMore}
          changeVisibleModal={setIsVisibleModalMore}
          blockReport={setIsVisibleBlockReport}
          setType={setTypeReport}
          hideUnmatch={params.showActionBtn ?? false}
          onPressCancel={onPressCancelHeaderModal}
        />
        <BlockReportModal
          isVisible={isVisibleBlockReport}
          closeModal={closeBlockReport}
          userId={data?.publicUserProfile.userAccountId}
          type={typeReport}
          onSuccessesSend={navigateToChatIntro}
        />
        <Header>
          <BtnWrapper onPress={navigateToChatIntro}>
            <BackArrowIcon />
          </BtnWrapper>
          <FastImageComponent
            resizeMode="contain"
            style={{
              height: 32,
              width: 100,
            }}
            uri={FfwdLogo}
          />
          <BtnWrapperMoreDots onPress={openModalMore}>
            <MoreDots color={COLORS.blazeBlue} />
          </BtnWrapperMoreDots>
        </Header>
        <Wrapper
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}>
          <StatusBar translucent barStyle="dark-content" />
          {/* {loading && (
            <View>
              <ActivityIndicator
                size="large"
                color={COLORS.blazeBlue}
                style={{marginTop: dimensions.HEIGHT * 0.365}}
              />
            </View>
          )} */}
          {data && !loading && (
            <PublicProfileDataList
              userData={data?.publicUserProfile}
              hideRelationsActionBtns={!params?.showActionBtn}
              showActionBtn={false}
              showRestoreBtn={params.isExpired ?? false}
              restore={restore}
              closeScreen={goBack}
              hideIconPlay
              autoplayVideo={isFocused && !disableAutoplayVideo}
              updateUsersList={params.updateUserList}
              myPhotoPassed={isPhotoPassed ?? false}
              myVideoPassed={isVideoPassed ?? false}
              setIsDisableAutoPlay={setDisableAutoplayVideo}
              isDataChecking={isDataChecking}
              myPhoto={photoUrl ?? undefined}
            />
          )}
        </Wrapper>
      </CarouselContext.Provider>
    </>
  );
};

export default React.memo(PublicProfile);
