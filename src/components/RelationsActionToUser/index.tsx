import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import {STRINGS} from '../../configs';
import NavigationKey from '../../navigation/NavigationKey';
import {
  useUserLikeMutation,
  useUserSkipMutation,
  useUserSuperLikeMutation,
} from '../../store/generated/graphql';
import {photoFlickValidationAction} from '../../utils/photoFlickValidationAction';
import BtnLike from '../icons/BtnLike';
import BtnUnLike from '../icons/BtnUnLike';
import SuperLikeIcon from '../icons/SuperLikeIcon';
import InfoPopUp from '../InfoPopUp';
import {BtnWrapper, InlineBlock} from './styles';

interface Props {
  userId?: string;
  updateUsersList?: (value: string) => void;
  closeScreen?: () => void;
  swipeLeft?: () => void;
  swipeRight?: () => void;
  setIsSuperLike?: (value: boolean) => void;
  userName?: string;
  matchModal: boolean;
  myPhoto?: string;
  userPhoto?: string;
  haveLike?: boolean;
  myPhotoPassed?: boolean;
  myVideoPassed?: boolean;
  myVideoCount?: number;
  setIsDisableAutoPlay?: (value: boolean) => void;
  onNavigateChatRoom?: () => void;
  onHideMatchModal?: () => void;
  isDataChecking: boolean;
  setIsOpenWarningModal?: (value: boolean) => void;
  resetPause?: boolean;
}

const RelationsActionToUser: React.FunctionComponent<Props> = ({
  userId,
  updateUsersList,
  closeScreen,
  swipeLeft,
  swipeRight,
  setIsSuperLike,
  userName,
  matchModal,
  myPhoto,
  userPhoto,
  haveLike,
  myPhotoPassed,
  myVideoPassed,
  setIsDisableAutoPlay,
  onNavigateChatRoom,
  myVideoCount,
  onHideMatchModal,
  isDataChecking,
  setIsOpenWarningModal,
  resetPause,
}) => {
  const {navigate} = useNavigation();
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);
  const [isShowMatchModal, setIsShowMatchModal] = useState(false);

  const [
    userSkipMutation,
    {data: dataSkip, loading: dataLoading, error: dataError},
  ] = useUserSkipMutation();

  const [
    userSuperLikeMutation,
    {data: dataSuperLike, loading: loadingSuperLike, error: errorSuperLike},
  ] = useUserSuperLikeMutation();
  const [
    userLikeMutation,
    {data: dataLike, loading: loadingLike, error: errorLike},
  ] = useUserLikeMutation();

  const navigateToChat = useCallback(() => {
    if (onHideMatchModal) {
      onHideMatchModal();
    }
    if (onNavigateChatRoom) {
      onNavigateChatRoom();
    }
    setIsShowMatchModal(false);
    navigate(NavigationKey.ChatRoom, {
      chatId:
        dataSuperLike?.userSuperLike?.matchId || dataLike?.userLike?.matchId,
      isAdmin: false,
      type: 'match',
    });
  }, [dataLike, dataSuperLike, navigate, onHideMatchModal, onNavigateChatRoom]);

  useEffect(() => {
    if (dataSkip || dataSuperLike?.userSuperLike || dataLike?.userLike) {
      if (updateUsersList && userId) {
        updateUsersList(userId);
      }
      if (closeScreen) {
        closeScreen();
      }
    }
  }, [closeScreen, dataLike, dataSkip, dataSuperLike, updateUsersList, userId]);

  const openSettings = useCallback(() => {
    if (setIsDisableAutoPlay) {
      setIsDisableAutoPlay(false);
    }
    if (setIsOpenWarningModal) {
      setIsOpenWarningModal(false);
    }
  }, [setIsDisableAutoPlay, setIsOpenWarningModal]);

  const onPressNegativeWarningModal = useCallback(() => {
    if (setIsDisableAutoPlay) {
      setIsDisableAutoPlay(false);
    }
    if (setIsOpenWarningModal) {
      setIsOpenWarningModal(false);
    }
  }, [setIsDisableAutoPlay, setIsOpenWarningModal]);

  const navigateWarningModal = useCallback(() => {
    if (setIsDisableAutoPlay) {
      setIsDisableAutoPlay(true);
    }
    if (setIsOpenWarningModal) {
      setIsOpenWarningModal(true);
    }
    const option = photoFlickValidationAction({
      flickValidation: myVideoPassed,
      hasPhoto: !!myPhoto,
      isDataChecking: false,
      navigate,
      onPressNegative: onPressNegativeWarningModal,
      openSettings,
      photoValidation: myPhotoPassed,
      videoCount: myVideoCount ?? 7,
    });
    navigate(NavigationKey.WarningModal, option);
  }, [
    setIsDisableAutoPlay,
    setIsOpenWarningModal,
    myVideoPassed,
    myPhoto,
    onPressNegativeWarningModal,
    openSettings,
    myPhotoPassed,
    myVideoCount,
    navigate,
  ]);

  const skipUser = useCallback(() => {
    if (swipeLeft) {
      swipeLeft();
    }
    userSkipMutation({
      variables: {
        input: {
          userAccountId: `${userId}`,
        },
      },
    });
  }, [swipeLeft, userId, userSkipMutation]);

  const superLikeUser = useCallback(() => {
    userSuperLikeMutation({
      variables: {
        input: {
          userAccountId: `${userId}`,
        },
      },
    });
    if (setIsSuperLike) {
      setIsSuperLike(true);
    }
    setIsVisiblePopUp(false);
    if (haveLike && matchModal && !isDataChecking) {
      setIsShowMatchModal(true);
    } else if (swipeRight) {
      swipeRight();
    }
    if (resetPause && setIsDisableAutoPlay) {
      setIsDisableAutoPlay(false);
    }
  }, [
    userSuperLikeMutation,
    userId,
    setIsSuperLike,
    haveLike,
    matchModal,
    isDataChecking,
    swipeRight,
    resetPause,
    setIsDisableAutoPlay,
  ]);
  const onPressSuperLike = useCallback(() => {
    if ((myVideoPassed && myPhotoPassed) || isDataChecking) {
      if (setIsDisableAutoPlay) {
        setIsDisableAutoPlay(true);
      }
      setIsVisiblePopUp(true);
    } else {
      navigateWarningModal();
    }
  }, [
    isDataChecking,
    myPhotoPassed,
    myVideoPassed,
    navigateWarningModal,
    setIsDisableAutoPlay,
  ]);

  const likeUser = useCallback(() => {
    if ((myVideoPassed && myPhotoPassed) || isDataChecking) {
      userLikeMutation({
        variables: {
          input: {
            userAccountId: `${userId}`,
          },
        },
      });
      if (haveLike && matchModal && !isDataChecking) {
        if (setIsDisableAutoPlay) {
          setIsDisableAutoPlay(true);
        }
        setIsShowMatchModal(true);
      } else if (swipeRight) {
        swipeRight();
      }
    } else {
      navigateWarningModal();
    }
  }, [
    isDataChecking,
    haveLike,
    matchModal,
    myPhotoPassed,
    myVideoPassed,
    navigateWarningModal,
    setIsDisableAutoPlay,
    swipeRight,
    userId,
    userLikeMutation,
  ]);

  const closePoPUP = useCallback(() => {
    if (setIsDisableAutoPlay) {
      setIsDisableAutoPlay(false);
    }
    setIsVisiblePopUp(false);
  }, [setIsDisableAutoPlay]);
  const onPressLater = useCallback(() => {
    if (setIsDisableAutoPlay) {
      setIsDisableAutoPlay(false);
    }
    if (onHideMatchModal) {
      onHideMatchModal();
    }
    setIsShowMatchModal(false);
    if (swipeRight) {
      swipeRight();
    }
  }, [onHideMatchModal, setIsDisableAutoPlay, swipeRight]);

  return (
    <>
      {isVisiblePopUp && !isShowMatchModal && (
        <InfoPopUp
          isVisible
          title={STRINGS.relationActionBtn.title}
          message={STRINGS.relationActionBtn.message(userName)}
          positiveText={STRINGS.relationActionBtn.positiveText}
          negativeText={STRINGS.relationActionBtn.negativeText}
          onPressNegative={closePoPUP}
          onPressPositive={superLikeUser}
          uriPhoto={userPhoto}
          isSuperLike
        />
      )}

      {!isVisiblePopUp && isShowMatchModal && (
        <InfoPopUp
          isVisible
          title={STRINGS.searchPeople.modalTitle}
          message={STRINGS.searchPeople.modalMessage}
          positiveText={STRINGS.searchPeople.positive}
          negativeText={STRINGS.searchPeople.negativeText}
          onPressNegative={onPressLater}
          onPressPositive={navigateToChat}
          uriPhoto={userPhoto}
          myUriPhoto={myPhoto}
        />
      )}
      <InlineBlock>
        <BtnWrapper onPress={skipUser}>
          <BtnUnLike />
        </BtnWrapper>
        <BtnWrapper onPress={onPressSuperLike}>
          <SuperLikeIcon />
        </BtnWrapper>
        <BtnWrapper onPress={likeUser}>
          <BtnLike />
        </BtnWrapper>
      </InlineBlock>
    </>
  );
};
export default React.memo(RelationsActionToUser);
