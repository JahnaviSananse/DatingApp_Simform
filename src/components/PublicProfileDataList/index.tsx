import moment from 'moment';
/* eslint-disable sort-keys-fix/sort-keys-fix */
import React, {useContext, useRef, useState} from 'react';

import {COLORS, STRINGS} from '../../configs';
import {PublicAccountFull, PublicProfile} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import {MuteContext} from '../../utils/mute-context';
import EmbeddedVideo from '../EmbeddedVideo/EmbeddedVideo';
import RefreshIcon2 from '../icons/RefreshIconInMessage';
import RelationsActionToUser from '../RelationsActionToUser';
import FirstBlockUserInfo from '../UserInfoBlock1';
import {BtnRestore, EmbeddedVideoWrapper, Wrapper} from './styles';
import {Isidora} from '..';

type PublicProfileMuteResult = {
  muted: boolean;
  switchMuted: () => void;
};

const usePublicProfileMute = (profile: boolean): PublicProfileMuteResult => {
  const muteContext = useContext(MuteContext);
  return {
    muted: profile ? muteContext.profileMuted : muteContext.muted,
    switchMuted: profile
      ? muteContext.switchProfileMuted
      : muteContext.switchMuted,
  };
};

interface Props {
  userPreviewProfile?: boolean;
  userData: PublicAccountFull | PublicProfile;
  hideRelationsActionBtns?: boolean;
  updateUsersList?: (value: string) => void;
  closeScreen?: () => void;
  swipeLeft?: () => void;
  swipeRight?: () => void;
  hideEmbeddedVideo?: boolean;
  setIsSuperLike?: (value: boolean) => void;
  hideIconPlay?: boolean;
  showRestoreBtn?: boolean;
  restore?: () => void;
  autoplayVideo?: boolean;
  matchModal?: boolean;
  myPhoto?: string;
  myPhotoPassed?: boolean;
  myVideoPassed?: boolean;
  myVideoCount?: number;
  setIsDisableAutoPlay?: (value: boolean) => void;
  onNavigateChatRoom?: () => void;
  hideUserData?: boolean;
  onHideMatchModal?: () => void;
  isRenderAllVideo?: boolean;
  isDataChecking: boolean;
}

const PublicProfileDataList: React.FunctionComponent<Props> = ({
  userPreviewProfile = false,
  userData,
  hideRelationsActionBtns,
  updateUsersList,
  closeScreen,
  swipeLeft,
  swipeRight,
  hideEmbeddedVideo,
  setIsSuperLike,
  hideIconPlay,
  showRestoreBtn = false,
  restore,
  autoplayVideo = false,
  matchModal,
  myPhoto,
  myPhotoPassed,
  myVideoPassed,
  myVideoCount,
  setIsDisableAutoPlay,
  onNavigateChatRoom,
  hideUserData,
  onHideMatchModal,
  isRenderAllVideo = true,
  isDataChecking,
}) => {
  // const embeddedVideoRef = useRef();
  const {muted, switchMuted} = usePublicProfileMute(userPreviewProfile);

  const [isOpenWarningModal, setIsOpenWarningModal] = useState(false);

  // const scrollToFirst = useCallback(() => {
  //   if (setIsDisableAutoPlay) {
  //     setIsDisableAutoPlay(true);
  //   }
  //   // embeddedVideoRef?.current?.snapToFirst();
  // }, [setIsDisableAutoPlay]);
  return (
    <>
      <Wrapper
      // showsVerticalScrollIndicator={false}
      // contentContainerStyle={{paddingBottom: 25}}
      >
        {/*<TouchableOpacity activeOpacity={1}>*/}
        {!hideEmbeddedVideo && (
          <EmbeddedVideoWrapper>
            <EmbeddedVideo
              // ref={embeddedVideoRef}
              profileImage={userData.profileImage}
              videos={userData.videos}
              resetIfFocusMissed={isOpenWarningModal}
              options={{
                autoplay: autoplayVideo,
                showEditButton: false,
                showHeaderTitle: false,
                showUserData: true,
                hideIconPlay: hideIconPlay ?? false,
                width: dimensions.WIDTH - 40,
              }}
              additionalUserData={{
                age: `${moment(new Date()).diff(userData.birthDate, 'years')}`,
                name: userData.firstName ?? '',
                userId: userData.userAccountId,
                distance: userData.distance,
              }}
              muted={muted}
              setMuted={switchMuted}
              isRenderAllVideo={isRenderAllVideo}
            />
          </EmbeddedVideoWrapper>
        )}

        {!hideRelationsActionBtns && (
          <RelationsActionToUser
            userName={userData.firstName}
            userId={userData.userAccountId}
            updateUsersList={updateUsersList}
            closeScreen={closeScreen}
            swipeLeft={swipeLeft}
            swipeRight={swipeRight}
            setIsSuperLike={setIsSuperLike}
            matchModal={matchModal ?? false}
            myPhoto={myPhoto}
            userPhoto={userData?.profileImage?.urls?.middle}
            haveLike={userData?.superlikedMe || userData?.likedMe}
            myPhotoPassed={myPhotoPassed}
            myVideoPassed={myVideoPassed}
            myVideoCount={myVideoCount}
            setIsDisableAutoPlay={setIsDisableAutoPlay}
            onNavigateChatRoom={onNavigateChatRoom}
            onHideMatchModal={onHideMatchModal}
            isDataChecking={isDataChecking}
            setIsOpenWarningModal={setIsOpenWarningModal}
          />
        )}
        {showRestoreBtn && (
          <BtnRestore onPress={restore}>
            <RefreshIcon2
              color={COLORS.sand}
              style={{marginRight: 15}}
              width={20}
              height={20}
            />
            <Isidora
              lineHeight={20}
              fontSize={20}
              textAlign="center"
              fontWeight="900"
              color={COLORS.sand}>
              {STRINGS.chatIntro.restore}
            </Isidora>
          </BtnRestore>
        )}
        {!hideUserData && (
          <FirstBlockUserInfo
            userData={{
              gender: userData.gender,
              job: userData.job,
              relationshipGoal: userData.relationshipGoal,
              relationshipStatus: userData.relationshipStatus,
              height: userData.height
                ? userData.height[0] + "'" + userData.height[1]
                : userData.height,
              religion: userData.religion,
              // attitudeToKid: userData.attitudeToKid?.attitudeToKidId,
              educationLevel: userData.educationLevel,
              placeOfBirth: userData.placeOfBirth,
              zodiac: userData.zodiac,
              attitudeToPet: userData.attitudeToPet,
              attitudeToAlcohol: userData.attitudeToAlcohol,
              physicalActivity: userData.physicalActivity,
              politicalIdeology: userData.politicalIdeology,
              attitudeToSmoking: userData.attitudeToSmoking,
              nativeLanguage: userData.nativeLanguage,
              attitudeToMarijuana: userData.attitudeToMarijuana,
            }}
            currentLocation={userData.currentLocation}
          />
        )}
        {/*</TouchableOpacity>*/}
      </Wrapper>
    </>
  );
};
export default React.memo(PublicProfileDataList);
