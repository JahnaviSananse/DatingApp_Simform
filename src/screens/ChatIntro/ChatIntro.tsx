import {useNavigation} from '@react-navigation/native';
// MODULES
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';

import BlockReportModal from '../../components/BlockReportModal';
import {
  Block,
  ChatHeader,
  DeleteChat,
  Isidora,
  Row,
  Unmatch,
} from '../../components/index';
import SwipeListMessages from '../../components/SwipeListMessages/SwipeListMessages';
import WarningModalPopUp from '../../components/WarningModalPopUp';
import {COLORS, STRINGS} from '../../configs';
import strings from '../../configs/styles/strings';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import {
  IconChat,
  useDeleteMatchMutation,
  useMyPopularityQuery,
} from '../../store/generated/graphql';
import {
  useMyPopularityLazyQuery,
  useUpdateChatSubscription,
  useUpdateConversationsSubscription,
  useUpdateIntrosSubscription,
  useUpdateMatchesSubscription,
  useUpdatedUserLikesSubscription,
} from '../../store/generated/graphql';
import dimensions, {getHeightWithScaleFactor} from '../../utils/dimensions';
import styles from './styles';

type Route = {
  key: string;
  title: string;
  icon: string;
};

type State = NavigationState<Route>;

interface TabProps {
  isActive: boolean;
  route: Route;
  props: SceneRendererProps & {navigationState: State};
  onChangeTab: (status: boolean) => void;
  conversationsOrIntros: IconChat[];
  adminChatUnreadMess: string | null | undefined;
}

const Tab: React.FunctionComponent<TabProps> = ({
  isActive,
  route,
  props,
  onChangeTab,
  conversationsOrIntros,
  adminChatUnreadMess,
}) => {
  const selectTab = useCallback(() => {
    onChangeTab(true);
    props.jumpTo(route.key);
  }, [props, route, onChangeTab]);

  const unreadMessageCount = useCallback(
    (data: IconChat[]) => {
      if (data.length) {
        let count = 0;
        data.forEach(
          (el) => el.actual && Number(el.unreadMessagesCount) > 0 && count++,
        );
        return Number(adminChatUnreadMess) > 0 ? count++ : count;
      } else {
        return Number(adminChatUnreadMess) > 0 ? 1 : 0;
      }
    },
    [adminChatUnreadMess],
  );
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        alignItems: 'center',
        borderBottomColor: COLORS.blazeBlue,
        borderBottomWidth: isActive ? 4 : 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      key={route.key}
      onPress={selectTab}>
      <Isidora
        lineHeight={22}
        fontSize={18}
        textAlign="center"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={styles.poppinsTabHeader}>
        {route.title}
      </Isidora>
      {unreadMessageCount(conversationsOrIntros) > 0 && (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.darkSand50,
            borderColor: COLORS.raspberry20,
            borderRadius: 30,
            borderWidth: 1,
            justifyContent: 'center',
            marginLeft: 10,
            minHeight: 25,
            minWidth: 25,
            paddingHorizontal: 2,
          }}>
          <Isidora
            lineHeight={18}
            fontSize={13}
            textAlign="center"
            fontWeight="800"
            color={COLORS.raspberry}>
            {unreadMessageCount(conversationsOrIntros)}
          </Isidora>
        </View>
      )}
      {!isActive && (
        <View
          style={{
            backgroundColor: COLORS.blazeBlue50,
            bottom: 1.5,
            height: 1,
            position: 'absolute',
            width: '100%',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

interface Props {
  onUpdate: () => void;
}

const SubscriptionChatView: React.FunctionComponent<Props> = ({onUpdate}) => {
  const {data} = useUpdateChatSubscription();

  useEffect(() => {
    if (data) {
      onUpdate();
    }
  }, [onUpdate, data]);

  return <View />;
};

const SubscriptionMatchesView: React.FunctionComponent<Props> = ({
  onUpdate,
}) => {
  const {data} = useUpdateMatchesSubscription();
  //console.log('Subscriptions Match  ', data, loading, error);

  useEffect(() => {
    if (data) {
      onUpdate();
    }
  }, [onUpdate, data]);

  return <View />;
};

const SubscriptionConvoView: React.FunctionComponent<Props> = ({onUpdate}) => {
  const {data} = useUpdateConversationsSubscription();
  //console.log('SUBCRIPTION CONVERSATION', data, loading, error);
  useEffect(() => {
    if (data) {
      onUpdate();
    }
  }, [onUpdate, data]);

  return <View />;
};

const SubscriptionIntrosView: React.FunctionComponent<Props> = ({onUpdate}) => {
  const {data} = useUpdateIntrosSubscription();
  //console.log('IntrosSubscription', data, loading, error);
  useEffect(() => {
    if (data) {
      onUpdate();
    }
  }, [onUpdate, data]);

  return <View />;
};

const SubscriptionLikesView: React.FunctionComponent<Props> = ({onUpdate}) => {
  const {data} = useUpdatedUserLikesSubscription();
  //console.log('LikesSubscription', data, loading, error);
  useEffect(() => {
    if (data) {
      onUpdate();
    }
  }, [onUpdate, data]);

  return <View />;
};

interface PropsSwipeBtn {
  data: {
    item: {
      matchUser: {
        id: string;
      };
      chatId: string;
    };
  };
  isConvo: boolean;
  blockUser: (value: string) => void;
  unmatchUser: (value: string) => void;
  showDeletePopup?: (value: string) => void;
}

const SwipeBtnIntro: React.FunctionComponent<PropsSwipeBtn> = React.memo(
  ({data, isConvo, blockUser, unmatchUser, showDeletePopup}) => {
    const delChat = useCallback(() => {
      if (showDeletePopup) {
        showDeletePopup(data.item.chatId);
      }
    }, [data.item.chatId, showDeletePopup]);
    return (
      <Row style={styles.rowBack}>
        <TouchableOpacity
          style={[
            styles.touchableOpacityButton,
            {borderBottomLeftRadius: 12, borderTopLeftRadius: 12},
          ]}
          onPress={useCallback(() => unmatchUser(data.item.matchUser.id), [
            data.item.matchUser.id,
            unmatchUser,
          ])}>
          <Unmatch color={COLORS.blazeBlue} />
          <Isidora
            lineHeight={20}
            fontSize={14}
            textAlign="center"
            fontWeight="600"
            color={COLORS.blazeBlue}>
            {STRINGS.chatIntro.swipeButtonFirst}
          </Isidora>
        </TouchableOpacity>
        <View style={{backgroundColor: COLORS.darkSand50}}>
          <View style={styles.separateLine} />
        </View>
        {isConvo && (
          <>
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={delChat}>
              <DeleteChat color={COLORS.darkBrown} />
              <Isidora
                lineHeight={14}
                fontSize={14}
                textAlign="center"
                fontWeight="600"
                color={COLORS.darkBrown}
                style={{marginTop: getHeightWithScaleFactor(5)}}>
                {STRINGS.chatIntro.swipeButtonThird}
              </Isidora>
            </TouchableOpacity>
            <View style={{backgroundColor: COLORS.darkSand50}}>
              <View style={styles.separateLine} />
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.touchableOpacityButton}
          onPress={useCallback(() => blockUser(data.item.matchUser.id), [
            blockUser,
            data.item.matchUser.id,
          ])}>
          <Block color={COLORS.raspberry} />
          <Isidora
            lineHeight={14}
            fontSize={14}
            textAlign="center"
            fontWeight="600"
            color={COLORS.raspberry}
            style={{marginTop: getHeightWithScaleFactor(5)}}>
            {STRINGS.chatIntro.swipeButtonSecond}
          </Isidora>
        </TouchableOpacity>
      </Row>
    );
  },
);

const ChatIntro: React.FunctionComponent = () => {
  const {navigate} = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Intros'},
    {key: 'second', title: 'Convos'},
  ]);
  const initialLayout = {width: Dimensions.get('window').width};
  const [action, setAction] = useState(false);
  const [intros, setIntros] = useState([]);
  const [conversations, setConversations] = useState<IconChat[]>([]);
  const [isVisibleBlockReport, setIsVisibleBlockReport] = useState(false);
  const [isVisibleDelChat, setIsVisibleDelChat] = useState(false);
  const [chatIdForDel, setChatIdForDel] = useState<string | null>();
  const idIntroChat = useRef<null | string>();

  const [typeBlockReport, setTypeBlockReport] = useState<
    'unmatch' | 'report' | null | undefined
  >();
  const [suspectedUserId, setSuspectedUserId] = useState('');
  const [adminMessageCount, setAdminMessageCount] = useState<
    string | null | undefined
  >('0');

  const {
    isPhotoPassed,
    isVideoPassed,
    isDataChecking,
  } = usePhotoVideoModeration();

  const [showRefreshing, setShowRefreshing] = useState(false);

  // Manually data loading
  const [
    updateMyPopularity,
    {data: lazyData, error: lazyError, loading: lazyLoading},
  ] = useMyPopularityLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (lazyData) {
      setIntros(lazyData.myPopularity.intros);
      setConversations(lazyData.myPopularity.conversations);
      setAdminMessageCount(
        lazyData?.myPopularity?.advertsInfo?.countNewAdverts,
      );
    }
  }, [lazyData]);

  const updateList = useCallback(() => {
    updateMyPopularity();
    setShowRefreshing(true);
    setTimeout(() => {
      setShowRefreshing(false);
    }, 2000);
  }, [updateMyPopularity]);

  // First run data loading
  const {data, error, loading} = useMyPopularityQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (data) {
      setIntros(data.myPopularity.intros);
      setConversations(data.myPopularity.conversations);
      setAdminMessageCount(data?.myPopularity?.advertsInfo?.countNewAdverts);
    }
  }, [data]);

  // console.log('myPopularity', data, loading, error);

  const [deleteChatMutation, {data: chatDelData}] = useDeleteMatchMutation();

  useEffect(() => {
    if (chatDelData?.deleteMatch) {
      updateList();
    }
  }, [chatDelData, updateList]);

  const rotate = useRef(new Animated.Value(0)).current;

  const rotateAnimationIn = useCallback(() => {
    Animated.timing(rotate, {
      duration: 500,
      easing: Easing.linear,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, [rotate]);

  useEffect(() => {
    if (loading) {
      rotateAnimationIn();
    }
  }, [loading, rotateAnimationIn]);

  useEffect(() => {
    if (
      conversations.length &&
      idIntroChat.current &&
      conversations.some((el) => el.chatId === idIntroChat.current)
    ) {
      idIntroChat.current = null;
      setIndex(1);
    }
  }, [conversations]);

  const setIdIntroChat = useCallback(
    (value: string | null) => (idIntroChat.current = value),
    [],
  );

  const blockUser = useCallback((userId: string) => {
    setIsVisibleBlockReport(true);
    setTypeBlockReport('report');
    setSuspectedUserId(userId);
  }, []);

  const unmatchUser = useCallback((userId: string) => {
    setIsVisibleBlockReport(true);
    setTypeBlockReport('unmatch');
    setSuspectedUserId(userId);
  }, []);

  const showDeletePopup = useCallback((value: string) => {
    setChatIdForDel(value);
    setIsVisibleDelChat(true);
  }, []);

  const renderUnderListItemButtons = useCallback(
    (data, rowMap) => {
      return (
        <SwipeBtnIntro
          data={data}
          isConvo={false}
          blockUser={blockUser}
          unmatchUser={unmatchUser}
        />
      );
    },
    [blockUser, unmatchUser],
  );

  const renderUnderListItemButtonsConvo = useCallback(
    (data, rowMap) => {
      return (
        <SwipeBtnIntro
          data={data}
          isConvo
          blockUser={blockUser}
          unmatchUser={unmatchUser}
          showDeletePopup={showDeletePopup}
        />
      );
    },
    [blockUser, showDeletePopup, unmatchUser],
  );

  // const renderLoadingList = useCallback(() => {
  //   const spiner = rotate.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: ['0deg', '360deg'],
  //   });
  //   return (
  //     <Progress.Circle
  //       style={{paddingLeft: 18, paddingTop: 20}}
  //       color={COLORS.aquamarineBlue}
  //       borderWidth={2}
  //       size={64}
  //       indeterminate
  //     />
  //   );
  // }, []);

  const renderIntrosList = useCallback(
    (isIntros) => {
      return loading ? (
        // <FlatList
        //   data={[1, 2, 3, 4]}
        //   renderItem={renderLoadingList}
        //   // contentContainerStyle={{marginBottom: 20}}
        // />
        <ActivityIndicator
          size="large"
          color={COLORS.blazeBlue}
          style={{marginTop: dimensions.HEIGHT * 0.28}}
        />
      ) : (
        <SwipeListMessages
          isIntros={isIntros}
          intros={intros}
          conversations={conversations}
          isPhotoPassed={isPhotoPassed}
          isVideoPassed={isVideoPassed}
          isDataChecking={isDataChecking}
          setIdIntroChat={setIdIntroChat}
          adminMessageCount={adminMessageCount}
          setAdminMessageCount={setAdminMessageCount}
          renderUnderListItemButtons={renderUnderListItemButtons}
          renderUnderListItemButtonsConvo={renderUnderListItemButtonsConvo}
          refreshList={showRefreshing}
          onRefreshList={updateList}
          action={action}
          setAction={setAction}
          lastMessageAdmin={data?.myPopularity.advertsInfo.lastMessage}
        />
      );
    },
    [
      loading,
      intros,
      conversations,
      isPhotoPassed,
      isVideoPassed,
      isDataChecking,
      setIdIntroChat,
      adminMessageCount,
      renderUnderListItemButtons,
      renderUnderListItemButtonsConvo,
      showRefreshing,
      updateList,
      action,
      data,
    ],
  );

  const FirstRoute = useCallback(() => {
    return <View style={styles.scene}>{renderIntrosList(true)}</View>;
  }, [renderIntrosList]);

  const SecondRoute = useCallback(() => {
    return <View style={styles.scene}>{renderIntrosList(false)}</View>;
  }, [renderIntrosList]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = useCallback(
    (props: SceneRendererProps & {navigationState: State}) => {
      return (
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route: Route, index: number) => {
            const isActive = index === props.navigationState.index;
            return (
              <Tab
                key={index}
                props={props}
                isActive={isActive}
                route={route}
                onChangeTab={setAction}
                conversationsOrIntros={
                  route.key === 'first' ? intros : conversations
                }
                adminChatUnreadMess={adminMessageCount}
              />
            );
          })}
        </View>
      );
    },
    [adminMessageCount, conversations, intros],
  );

  const closeBlockReport = useCallback(() => {
    setIsVisibleBlockReport(false);
    setTypeBlockReport(null);
  }, [setIsVisibleBlockReport]);

  const onPressDeleteChat = useCallback(() => {
    if (chatIdForDel) {
      deleteChatMutation({
        variables: {
          matchId: chatIdForDel,
        },
      });
    }
    setIsVisibleDelChat(false);
    setChatIdForDel(null);
  }, [chatIdForDel, deleteChatMutation]);

  const onPressCancelDelChat = useCallback(() => {
    setIsVisibleDelChat(false);
    setChatIdForDel(null);
  }, []);

  return (
    <View style={styles.wrapper}>
      <BlockReportModal
        isVisible={isVisibleBlockReport}
        closeModal={closeBlockReport}
        userId={suspectedUserId}
        type={typeBlockReport}
      />
      {isVisibleDelChat && (
        <WarningModalPopUp
          hideCloseButton
          message={strings.chatIntro.deleteChatMessage}
          negativeText={strings.chatIntro.delete}
          onPressPositive={onPressCancelDelChat}
          positiveText={strings.chatIntro.cancel}
          title={strings.chatIntro.deleteChatTitle}
          onPressNegative={onPressDeleteChat}
          styles={{
            buttonsMarginTop: 21,
            paddingTopWrapper: 20,
          }}
        />
      )}

      <SubscriptionConvoView onUpdate={updateList} />
      <SubscriptionIntrosView onUpdate={updateList} />
      <SubscriptionMatchesView onUpdate={updateList} />
      <SubscriptionLikesView onUpdate={updateList} />
      <SubscriptionChatView onUpdate={updateList} />

      <ChatHeader
        load={loading}
        onUpdate={updateList}
        myLikes={data?.myPopularity.likes}
        myMatches={data?.myPopularity.matches}
      />
      <View style={styles.wrapperStyles}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          swipeEnabled={false}
        />
      </View>
    </View>
  );
};

export default React.memo(ChatIntro);
