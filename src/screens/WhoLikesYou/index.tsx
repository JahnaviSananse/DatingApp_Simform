import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {ActivityIndicator, FlatList, StatusBar} from 'react-native';

import {Isidora} from '../../components';
import EmbeddedVideo from '../../components/EmbeddedVideo/EmbeddedVideo';
import FFWDheartIcon from '../../components/icons/FFWDheartIcon';
import HeaderGradient from '../../components/icons/HeaderGradient';
import RelationsActionToUser from '../../components/RelationsActionToUser';
import {COLORS, STRINGS} from '../../configs';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import NavigationKey from '../../navigation/NavigationKey';
import {
  PublicAccount,
  useMyFanbaseLazyQuery,
  useUpdateWhoLikesYouSubscription,
} from '../../store/generated/graphql';
import dimensions from '../../utils/dimensions';
import {MuteContext} from '../../utils/mute-context';
import {photoFlickValidationAction} from '../../utils/photoFlickValidationAction';
import {CarouselContext} from '../SearchPeople';
import {
  BottomGradientWrapper,
  EmbeddedVideoWrapper,
  EmptyListWrapper,
  ItemWrapper,
  Wrapper,
} from './styles';

const WhoLikesYou: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Array<PublicAccount>>([]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const arrayOfVideosRef = useRef([]);
  const {navigate} = useNavigation();
  const currentIndexPlay = useRef<number | string>(null);
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [uploadedImageIndex, setUploadedImageIndex] = useState(0);
  const isCanOpenWarningModal = useRef(true);
  const [pause, setPause] = useState(false);

  const {muted, switchMuted} = useContext(MuteContext);
  const isFocused = useIsFocused();

  const [updateLikesList, {data, loading, error}] = useMyFanbaseLazyQuery({
    fetchPolicy: 'network-only',
  });

  const {
    isPhotoPassed,
    isVideoPassed,
    videoCount,
    photoUrl,
    isDataChecking,
  } = usePhotoVideoModeration();
  const {data: subscriptionData} = useUpdateWhoLikesYouSubscription();

  const openSettings = useCallback(() => {
    isCanOpenWarningModal.current = false;
  }, []);

  const hideWarningModal = useCallback(() => {
    isCanOpenWarningModal.current = false;
  }, []);

  useEffect(() => {
    if (isCanOpenWarningModal.current && (videoCount < 7 || !photoUrl)) {
      const option = photoFlickValidationAction({
        hasPhoto: Boolean(photoUrl),
        navigate,
        onPressNegative: hideWarningModal,
        openSettings,
        videoCount,
      });
      navigate(NavigationKey.WarningModal, option);
    }
  }, [hideWarningModal, navigate, openSettings, photoUrl, videoCount]);

  useEffect(() => {
    if (subscriptionData?.updateWhoLikesYou) {
      setUsers((prev) =>
        subscriptionData?.updateWhoLikesYou
          ? [...prev, subscriptionData?.updateWhoLikesYou]
          : [...prev],
      );
      arrayOfVideosRef.current = Array(
        arrayOfVideosRef.current.length + 1,
      ).fill(createRef());
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (data?.myFanbase?.length) {
      setUsers((prev) =>
        data.myFanbase
          ? [...prev, ...data.myFanbase].filter(
              (user, index, arr) =>
                index === arr.findIndex((t) => t.id === user.id),
            )
          : [...prev],
      );
      setPage((prev) => prev + 1);
      arrayOfVideosRef.current = Array(data.myFanbase.length).fill(createRef());
    }
    if (data?.myFanbase && data?.myFanbase?.length < 10) {
      setIsLoadMore(false);
    }
  }, [data]);

  useEffect(() => {
    if (
      (data?.myFanbase && !data.myFanbase.length) ||
      (data?.myFanbase?.length && users.length)
    ) {
      setLoadingSpinner(false);
    }
  }, [data, users.length]);

  const updateLikesListCallback = useCallback(
    (pageList: number) => {
      updateLikesList({
        variables: {
          page: `${pageList}`,
        },
      });
    },
    [updateLikesList],
  );

  useEffect(() => {
    updateLikesListCallback(1);
  }, [updateLikesListCallback]);

  const removeUserById = useCallback((userId: string) => {
    setUsers((prev) => prev.filter((el) => el.id !== userId));
    arrayOfVideosRef.current = Array(arrayOfVideosRef.current.length - 1).fill(
      createRef(),
    );
    currentIndexPlay.current = null;
    setPause(false);
  }, []);

  const openPublicProfile = useCallback(
    (index) => {
      navigate(NavigationKey.PublicProfile, {
        profileId: index,
        showActionBtn: true,
        updateUserList: removeUserById,
      });
    },
    [navigate, removeUserById],
  );

  const stopAndPlay = useCallback(
    (index: number) => {
      if (
        index !== currentIndexPlay.current &&
        currentIndexPlay.current !== null
      ) {
        arrayOfVideosRef.current[currentIndexPlay.current]?.snapToItem(0);
      }
      currentIndexPlay.current = index;
    },
    [arrayOfVideosRef],
  );

  const onRecord = useCallback(() => {
    arrayOfVideosRef.current[currentIndexPlay.current]?.snapToItem(0);
  }, [currentIndexPlay]);

  const onUploadedImage = useCallback(() => {
    setUploadedImageIndex((index) => index + 1);
  }, []);

  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({item, index}) => (
      // eslint-disable-next-line react/jsx-no-bind
      <ItemWrapper activeOpacity={1} onPress={() => stopAndPlay(index)}>
        <EmbeddedVideoWrapper>
          <EmbeddedVideo
            // eslint-disable-next-line react/jsx-no-bind
            ref={(el) => (arrayOfVideosRef.current[index] = el)}
            profileImage={item.profileImage}
            videos={item.videos}
            options={{
              autoplay: false,
              showEditButton: false,
              showHeaderTitle: false,
              showUserData: true,
              width: dimensions.WIDTH - 40,
            }}
            additionalUserData={{
              age: item.age.split(' ')[0],
              distance: item.distance,
              name: item.firstName,
              userId: item.id,
              userProfileId: item.userProfileId,
            }}
            openUserModal={openPublicProfile}
            muted={muted}
            setMuted={switchMuted}
            isShowImage={index <= uploadedImageIndex}
            onUploadedImage={onUploadedImage}
            resetIfFocusMissed
          />
          <BottomGradientWrapper>
            <HeaderGradient height={55} width={dimensions.WIDTH - 40} />
          </BottomGradientWrapper>
        </EmbeddedVideoWrapper>
        <RelationsActionToUser
          userId={item.id}
          updateUsersList={removeUserById}
          userPhoto={item.image?.middleUrl}
          matchModal={false}
          myPhotoPassed={isPhotoPassed ?? false}
          myVideoPassed={isVideoPassed ?? false}
          scrollToFirst={onRecord}
          userName={item.firstName}
          myVideoCount={videoCount}
          isDataChecking={isDataChecking}
          myPhoto={photoUrl ?? undefined}
          setIsDisableAutoPlay={setPause}
          resetPause
        />
      </ItemWrapper>
    ),
    [
      isDataChecking,
      isPhotoPassed,
      isVideoPassed,
      muted,
      onRecord,
      onUploadedImage,
      openPublicProfile,
      photoUrl,
      removeUserById,
      stopAndPlay,
      uploadedImageIndex,
      videoCount,
      switchMuted,
    ],
  );

  const loadMoreUsers = useCallback(() => {
    if (isLoadMore) {
      updateLikesListCallback(page);
    }
  }, [isLoadMore, page, updateLikesListCallback]);

  const getItemLayout = useCallback(
    (data, index) => ({
      index,
      length: dimensions.HEIGHT * 0.504 + 98,
      offset: (dimensions.HEIGHT * 0.504 + 98) * index,
    }),
    [],
  );

  return (
    <CarouselContext.Provider
      value={{
        isPaused: pause || !isFocused,
      }}>
      <Wrapper>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {loadingSpinner && page === 1 ? (
          <ActivityIndicator
            size="large"
            color={COLORS.blazeBlue}
            style={{marginTop: dimensions.HEIGHT * 0.37}}
          />
        ) : users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 30}}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator
                  size="small"
                  color={COLORS.blackPearl}
                  style={{paddingTop: 20}}
                />
              ) : null
            }
            onEndReachedThreshold={0.4}
            onEndReached={loadMoreUsers}
            removeClippedSubviews={false}
            initialNumToRender={5}
            windowSize={5}
            getItemLayout={getItemLayout}
          />
        ) : (
          <EmptyListWrapper>
            <FFWDheartIcon />
            <Isidora
              fontSize={16}
              lineHeight={19}
              color={COLORS.blazeBlue}
              textAlign="left"
              fontWeight="600"
              style={{marginLeft: 8}}>
              {STRINGS.whoLikesYou.emptyMessage}
            </Isidora>
          </EmptyListWrapper>
        )}
      </Wrapper>
    </CarouselContext.Provider>
  );
};
export default React.memo(WhoLikesYou);
