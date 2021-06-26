import AsyncStorage from '@react-native-community/async-storage';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent} from '../../components';
import BlockReportModal from '../../components/BlockReportModal';
import ModalHeaderMore from '../../components/ChatRoomHeader/ModalHeaderMore';
import BackIcon2 from '../../components/icons/BackIcon2';
import BtnLike from '../../components/icons/BtnLike';
import BtnSuperLike from '../../components/icons/BtnSuperLike';
import BtnUnLike from '../../components/icons/BtnUnLike';
import MoreDots from '../../components/icons/MoreDots';
import PublicProfileDataList from '../../components/PublicProfileDataList';
import Swiper from '../../components/Swiper';
import {COLORS} from '../../configs';
import {useIsNeedUpdateLookBook} from '../../hooks/useIsNeedUpdateLookBook';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import NavigationKey from '../../navigation/NavigationKey';
import {
  PublicAccountFull,
  useSearchLazyQuery,
} from '../../store/generated/graphql';
import {AuthContext} from '../../utils/login-context';
import {
  BackBtnWrapper,
  CardWrapper,
  Header,
  Loader,
  LoaderWrapper,
  Wrapper,
  WrapperSwiper,
} from './styles';

type CarouselProps = {
  isPaused: boolean;
};

export const CarouselContext = React.createContext<Partial<CarouselProps>>({});

const SearchPeople: React.FunctionComponent = () => {
  const {navigate} = useNavigation();
  const scrollView = useRef();
  const swiper = useRef();
  const currentUserId = useRef<string>();
  const isCanSaveLastUser = useRef(true);
  const [users, setUsers] = useState<Array<PublicAccountFull>>([]);
  const [isSuperLike, setIsSuperLike] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisibleModalMore, setIsVisibleModalMore] = useState(false);
  const [isVisibleBlockReport, setIsVisibleBlockReport] = useState(false);
  const [lastUser, setLastUser] = useState<PublicAccountFull | null>(null);
  const authContext = useContext(AuthContext);
  const [isDisableAutoPlay, setIsDisableAutoPlay] = useState(false);
  const [isCanGoInfoScreen, setIsCanGoInfoScreen] = useState(true);
  const isCanSetUsers = useRef(true);
  const {
    isVideoPassed,
    isPhotoPassed,
    photoUrl,
    videoCount,
    isDataChecking,
  } = usePhotoVideoModeration();

  const [fetchUsers, {data, error, loading}] = useSearchLazyQuery({
    fetchPolicy: 'network-only',
  });
  const {isUpdateLookBook, setIsUpdateLook} = useIsNeedUpdateLookBook();

  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      if (!isCanGoInfoScreen) {
        setIsCanGoInfoScreen(true);
      }
    }, [isCanGoInfoScreen]),
  );

  useEffect(() => {
    if (isUpdateLookBook) {
      isCanSetUsers.current = true;
      fetchUsers({
        variables: {
          page: page.toString(),
        },
      });
    }
  }, [fetchUsers, isFocused, isUpdateLookBook, page]);

  const onGoBackFromInfoScreen = useCallback(() => {
    setIsDisableAutoPlay(false);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('isFirstLogin').then((res) => {
      if (res && isFocused) {
        setIsDisableAutoPlay(true);
        navigate(NavigationKey.InfoSearchScreen, {
          onGoBack: onGoBackFromInfoScreen,
          type: 'beta',
        });
      } else if (
        !loading &&
        (data || error) &&
        isCanGoInfoScreen &&
        isFocused &&
        !isUpdateLookBook
      ) {
        if (!data?.search?.length || error) {
          navigate(NavigationKey.InfoSearchScreen, {type: 'noUsers'});
        }
      }
    });
  }, [
    data,
    error,
    isCanGoInfoScreen,
    isFocused,
    isUpdateLookBook,
    loading,
    navigate,
    onGoBackFromInfoScreen,
  ]);

  useEffect(() => {
    if (data?.search && data?.search.length && isCanSetUsers.current) {
      setUsers([...data.search]);
      currentUserId.current = data.search[0].userAccountId;
      setIsUpdateLook(false);
    }
    if (data?.search?.length === 0 && isCanSetUsers.current) {
      setIsUpdateLook(false);
      setLastUser(null);
      setUsers([]);
      setPage(1);
    }
  }, [data, setIsUpdateLook]);

  useEffect(() => {
    if (!isUpdateLookBook && !data && !loading) {
      setIsUpdateLook(true);
    }
  }, [data, isUpdateLookBook, loading, setIsUpdateLook]);

  const userBack = useCallback(() => {
    if (lastUser) {
      setUsers([]);
      setTimeout(() => {
        const index = data?.search.indexOf(lastUser);
        if (index >= 0) {
          setUsers([...data?.search.slice(index)]);
        } else {
          setUsers([lastUser, ...data?.search]);
        }
        setLastUser(null);
      }, 250);
    }
  }, [data, lastUser]);

  const swipeLeft = useCallback(() => {
    scrollView.current?.scrollTo(0);
    setHideHeader(true);
    swiper.current?.swipeLeft();
  }, []);
  const swipeRight = useCallback(() => {
    scrollView.current?.scrollTo(0);
    setHideHeader(true);
    swiper.current?.swipeRight();
  }, []);

  const onHideMatchModal = useCallback(() => {
    isCanSaveLastUser.current = false;
    setLastUser(null);
  }, []);

  const onNavigateChatRoom = useCallback(() => {
    setIsCanGoInfoScreen(false);
    swipeRight();
    isCanSetUsers.current = false;
    setTimeout(() => setIsDisableAutoPlay(true), 1000);
  }, [swipeRight]);

  const renderCard = useCallback(
    (card, overlay, index) => (
      <CardWrapper>
        <PublicProfileDataList
          hideUserData={!!index}
          userData={card.data}
          hideRelationsActionBtns={false}
          swipeLeft={swipeLeft}
          swipeRight={swipeRight}
          setIsSuperLike={setIsSuperLike}
          hideIconPlay
          autoplayVideo={
            index === 0 &&
            authContext?.isAnimatedFinished &&
            !isDisableAutoPlay &&
            isFocused
          }
          matchModal
          myPhoto={photoUrl ?? undefined}
          myPhotoPassed={isPhotoPassed ?? false}
          myVideoPassed={isVideoPassed ?? false}
          myVideoCount={videoCount ?? 7}
          setIsDisableAutoPlay={setIsDisableAutoPlay}
          onNavigateChatRoom={onNavigateChatRoom}
          onHideMatchModal={onHideMatchModal}
          isRenderAllVideo={index === 0}
          isDataChecking={isDataChecking}
        />
        {overlay}
      </CardWrapper>
    ),
    [
      isDataChecking,
      authContext,
      isDisableAutoPlay,
      isFocused,
      isPhotoPassed,
      isVideoPassed,
      onHideMatchModal,
      onNavigateChatRoom,
      photoUrl,
      swipeLeft,
      swipeRight,
      videoCount,
    ],
  );

  const openModalMore = useCallback(() => {
    setIsDisableAutoPlay(true);
    setIsVisibleModalMore(true);
  }, []);

  const closeBlockReport = useCallback(() => {
    setIsVisibleBlockReport(false);
    setIsDisableAutoPlay(false);
  }, []);

  const onPressCancelModalMore = useCallback(() => {
    setIsDisableAutoPlay(false);
  }, []);

  const cardsWithKey = useMemo(
    () =>
      users.map((el) => ({
        data: el,
        key: 'qwe' + el.userAccountId,
      })),
    [users],
  );

  return (
    <CarouselContext.Provider
      value={{
        isPaused: isDisableAutoPlay || !isFocused,
      }}>
      <ModalHeaderMore
        visibleModal={isVisibleModalMore}
        changeVisibleModal={setIsVisibleModalMore}
        blockReport={setIsVisibleBlockReport}
        hideUnmatch
        onPressCancel={onPressCancelModalMore}
      />

      <BlockReportModal
        isVisible={isVisibleBlockReport}
        closeModal={closeBlockReport}
        userId={currentUserId.current}
        onSuccessesSend={swipeLeft}
      />
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackBtnWrapper>
          {lastUser && (
            <TouchableOpacity onPress={userBack}>
              <BackIcon2 />
            </TouchableOpacity>
          )}
        </BackBtnWrapper>

        <FastImageComponent
          resizeMode="contain"
          style={{
            height: 33,
            marginLeft: -7,
            marginTop: -4,
            width: 100,
          }}
          uri={FfwdLogo}
        />
        <TouchableOpacity disabled={loading} onPress={openModalMore}>
          <MoreDots color={COLORS.blazeBlue} />
        </TouchableOpacity>
      </Header>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Wrapper
          ref={scrollView}
          showsVerticalScrollIndicator={false}
          style={{overflow: hideHeader ? 'visible' : 'hidden'}}>
          <WrapperSwiper>
            <Swiper
              ref={swiper}
              cards={cardsWithKey}
              animationDuration={600}
              overlayLabels={{
                left: (
                  <BtnUnLike
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: '25%',
                    }}
                    width={100}
                    height={100}
                  />
                ),
                right: isSuperLike ? (
                  <BtnSuperLike
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: '25%',
                    }}
                    width={100}
                    height={100}
                  />
                ) : (
                  <BtnLike
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: '25%',
                    }}
                    width={100}
                    height={100}
                  />
                ),
              }}
              renderCard={renderCard}
              // eslint-disable-next-line react/jsx-no-bind
              onSwipe={(index, showCard, currentCard) => {
                setIsSuperLike(false);
                setHideHeader(false);
                setIsDisableAutoPlay(false);
                if (isCanSaveLastUser.current) {
                  setLastUser(currentCard.data);
                } else {
                  isCanSaveLastUser.current = true;
                }
                currentUserId.current = showCard.data.userAccountId;
              }}
              // eslint-disable-next-line react/jsx-no-bind
              onFinished={() => {
                isCanSetUsers.current = true;
                setPage((page) => page + 1);
                setIsUpdateLook(true);
              }}
            />
          </WrapperSwiper>
        </Wrapper>
      )}
    </CarouselContext.Provider>
  );
};

export default React.memo(SearchPeople);
