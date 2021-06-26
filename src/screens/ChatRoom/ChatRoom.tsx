import PhotoView from '@merryjs/photo-viewer';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Platform, StatusBar} from 'react-native';
import {IMessage} from 'react-native-gifted-chat';
import Loader from 'react-native-modal-loader';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

import {ChatRoomHeader} from '../../components';
import BlockReportModal from '../../components/BlockReportModal';
import ModalHeaderMore from '../../components/ChatRoomHeader/ModalHeaderMore';
import GalleryModal from '../../components/GalleryModal';
import {COLORS} from '../../configs';
import useUserData from '../../hooks/useUserData';
import {NavigationParams} from '../../navigation/NavigationParams';
import {
  Advert,
  ChatMessages,
  useChatMessagesLazyQuery,
  useChatRoomLazyQuery,
  useMessageSeenMutation,
  useMyAdvertsLazyQuery,
  useReconnectionChatSubscription,
  useRecoveryMatchMutation,
  useUpdateChatSubscription,
} from '../../store/generated/graphql';
import {SendMessageToServer} from '../../utils/request';
import ChatBody from './ChatBody';
import {IndicatorWrapper, Wrapper} from './styles';

type ScreenRouteProp = RouteProp<NavigationParams, 'ChatRoom'>;

const ChatRoom: React.FunctionComponent = () => {
  const {params} = useRoute<ScreenRouteProp>();
  const {goBack} = useNavigation();

  const [getMessages, {data: MessageData, loading}] = useChatMessagesLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [
    getChatData,
    {data: chatData, loading: chatLoading},
  ] = useChatRoomLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [
    getAdminMessages,
    {data: adminMessages, loading: adminMessagesLoading},
  ] = useMyAdvertsLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [seenMessagesMutation] = useMessageSeenMutation();

  const data: ChatMessages = MessageData?.chatMessages;

  const [messages, setMessages] = useState<Array<IMessage>>([]);

  const {userId: id, token} = useUserData();

  const [isShowGalleryAttach, setIsShowGalleryAttach] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoViewer, setPhotoViewer] = useState(false);
  const [images, setImages] = useState([]);
  const [isVisibleModalMore, setIsVisibleModalMore] = useState(false);
  const [isVisibleBlockReport, setIsVisibleBlockReport] = useState(false);
  const [typeReportModal, setTypeReportModal] = useState<
    'unmatch' | 'report'
  >();
  const [undeliveredMessages, setUndeliveredMessages] = useState<IMessage[]>(
    [],
  );

  const isUpdateChat = useRef(false);
  const secondUserId = useRef<number>();

  const {data: upDateChatData} = useUpdateChatSubscription({
    variables: {
      matchId: params.isAdmin ? null : params.chatId,
    },
  });

  const {data: updateReconnectionData} = useReconnectionChatSubscription({
    variables: {
      matchId: params.isAdmin ? null : params.chatId,
    },
  });

  const [recoveryMatchMutation] = useRecoveryMatchMutation();

  const [chatPage, setChatPage] = useState(1);

  const toCorrectFormat = useCallback((messageData) => {
    return {
      _id: messageData.id,
      createdAt: messageData.createdAt,
      image: messageData.fileType?.startsWith('image')
        ? messageData.fileUrl
        : null,
      received: messageData.seen,
      text: messageData.text,
      user: {
        _id: messageData.userAccountId,
      },
      video: messageData.fileType?.startsWith('video')
        ? messageData.fileUrl
        : null,
    };
  }, []);

  const toCorrectFormatAdminMessages = useCallback((messageData: Advert) => {
    return {
      _id: messageData.id,
      createdAt: messageData.sentAt,
      text: messageData.message,
      user: {
        _id: 'admin',
      },
    };
  }, []);

  useEffect(() => {
    if (params.isAdmin) {
      getAdminMessages();
    } else {
      getChatData({
        variables: {
          chatId: `${params.chatId}`,
        },
      });
    }
  }, [getAdminMessages, getChatData, params.chatId, params.isAdmin]);

  useEffect(() => {
    if (updateReconnectionData && updateReconnectionData?.reconnectionChat) {
      isUpdateChat.current = true;
      getChatData({
        variables: {
          chatId: `${params.chatId}`,
        },
      });
    }
  }, [getChatData, params.chatId, updateReconnectionData]);

  useEffect(() => {
    if (
      upDateChatData &&
      upDateChatData.updateChat?.userAccountId == secondUserId.current &&
      (upDateChatData.updateChat?.text || upDateChatData.updateChat?.fileUrl)
    ) {
      setMessages((prev) => [
        toCorrectFormat(upDateChatData.updateChat),
        ...prev,
      ]);
      seenMessagesMutation({
        variables: {
          matchId: String(params.chatId),
        },
      });
    }
  }, [params.chatId, seenMessagesMutation, toCorrectFormat, upDateChatData]);

  useEffect(() => {
    if (data?.messages?.length) {
      setMessages((prev) => [...prev, ...data?.messages.map(toCorrectFormat)]);
      setChatPage((prev) => prev + 1);
    }
  }, [data, toCorrectFormat]);

  useEffect(() => {
    AsyncStorage.getItem(`undeliveredMessagesChatId-${params.chatId}`)
      .then((req) => JSON.parse(req))
      .then((data) => {
        if (data) {
          setUndeliveredMessages(data);
        }
      });
  }, [params.chatId]);

  useEffect(() => {
    if (
      chatData?.chatRoom?.messages &&
      chatPage === 1 &&
      !isUpdateChat.current
    ) {
      secondUserId.current = chatData.chatRoom.userId;
      setMessages(() =>
        [
          ...chatData?.chatRoom?.messages.map(toCorrectFormat),
          ...undeliveredMessages,
        ].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatData, chatPage, toCorrectFormat]);

  useEffect(() => {
    if (adminMessages) {
      setMessages(adminMessages.myAdverts.map(toCorrectFormatAdminMessages));
    }
  }, [adminMessages, toCorrectFormatAdminMessages]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
        if (response !== RESULTS.GRANTED) {
          request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        }
      });
    }
  }, []);

  const pushMessage = useCallback(
    async (message, newMessages) => {
      if (token && params.chatId) {
        SendMessageToServer({
          chatId: params.chatId,
          message: message.text,
          token,
        }).catch((er) => {
          if (!er.response) {
            const tempMessage =
              newMessages[
                newMessages.findIndex((el: IMessage) => el._id === message._id)
              ];
            tempMessage.isWarning = true;
            setMessages([...newMessages]);

            setUndeliveredMessages((prev) => [tempMessage, ...prev]);
          }
        });
      }
    },
    [params.chatId, token],
  );

  useEffect(() => {
    AsyncStorage.setItem(
      `undeliveredMessagesChatId-${params.chatId}`,
      JSON.stringify([...undeliveredMessages]),
    );
  }, [params.chatId, undeliveredMessages]);

  const resendMessage = useCallback(
    (message) => {
      NetInfo.fetch().then((state: NetInfoState) => {
        if (state.isConnected && state.isInternetReachable) {
          setMessages((prev) => [
            {...message, createdAt: new Date(), isWarning: false},
            ...prev.filter((el) => el._id !== message._id),
          ]);

          setUndeliveredMessages((prev) =>
            prev.filter((el) => el._id !== message._id),
          );
          pushMessage({...message, createdAt: new Date(), isWarning: false}, [
            {...message, createdAt: new Date(), isWarning: false},
            ...messages.filter((el) => el._id !== message._id),
          ]);
        } else {
          setMessages((prev) => [
            {...message, createdAt: new Date()},
            ...prev.filter((el) => el._id !== message._id),
          ]);
        }
      });
    },
    [messages, pushMessage],
  );

  const changeShowGalleryAttach = useCallback(
    (value) => setIsShowGalleryAttach(value),
    [],
  );

  const restoreConversation = useCallback(() => {
    recoveryMatchMutation({
      variables: {
        matchId: `${params.chatId}`,
      },
    });
  }, [params.chatId, recoveryMatchMutation]);

  const openImage = useCallback((uri: string) => {
    setImages([{source: {uri}}]);
    setPhotoViewer(true);
  }, []);

  const loadEarlierMessages = useCallback(() => {
    if (
      (data?.messages?.length ?? 30) >= 30 &&
      messages.length >= 30 &&
      !params.isAdmin
    ) {
      getMessages({
        variables: {
          matchId: `${params.chatId}`,
          page: `${chatPage + 1}`,
        },
      });
    }
  }, [
    chatPage,
    data,
    getMessages,
    messages.length,
    params.chatId,
    params.isAdmin,
  ]);

  const showAttachmentMessage = useCallback((message: IMessage) => {
    setMessages((prev) => [message, ...prev]);

    if (message.isWarning) {
      setUndeliveredMessages((prev) => [message, ...prev]);
    }
  }, []);

  const expiredAt = useCallback(() => {
    return moment(chatData?.chatRoom?.expireAt).diff(moment());
  }, [chatData]);

  const checkType = (messages: IMessage[]) => {
    if (messages.length) {
      const myMessages = messages.find((item) => id === Number(item.user?._id));
      const anotherUserMessages = messages.find(
        (item) => id !== Number(item.user?._id),
      );
      if (myMessages && anotherUserMessages) {
        return 'conversation';
      } else {
        return 'respond';
      }
    } else {
      return 'match';
    }
  };

  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <ChatRoomHeader
        headerParams={{
          actual: chatData?.chatRoom?.actual,
          chatId: params.chatId,
          isAdmin: params.isAdmin,
          isBlockedUser: chatData?.chatRoom?.blocked,
          isIRecovered: chatData?.chatRoom?.iRecovered,
          name: params.isAdmin
            ? 'The FFWD Crew'
            : chatData?.chatRoom?.firstName,
          photo: chatData?.chatRoom?.photoUri,
          photoVideoModerationPassed:
            chatData?.chatRoom?.photoVideoModerationPassed,
          profileId: chatData?.chatRoom?.profileId,
          turn: params.turn,
          type: checkType(messages),
          // type: params.type,
        }}
        expired={chatData?.chatRoom?.expireAt}
        moreDotsOpen={setIsVisibleModalMore}
        secondUserUnmatch={chatData?.chatRoom?.secondUserUnmatch}
      />
      {(chatData || adminMessages) && (
        <ChatBody
          messages={messages}
          userId={id}
          setMessages={setMessages}
          pushMessage={pushMessage}
          openAttach={changeShowGalleryAttach}
          isUnBlocked={chatData?.chatRoom?.actual ?? true}
          restoreConversation={restoreConversation}
          openImage={openImage}
          isAdmin={params.isAdmin ?? false}
          loadEarlierMessages={loadEarlierMessages}
          loadingEarlierMessages={loading}
          iRecovered={chatData?.chatRoom?.iRecovered}
          userRecovered={chatData?.chatRoom?.userRecovered}
          userName={chatData?.chatRoom?.firstName}
          resendMessage={resendMessage}
          loadEarlierMessagesCount={data?.messages?.length ?? 30}
          expiredTime={expiredAt()}
          type={params.type}
          secondUserUnmatch={chatData?.chatRoom?.secondUserUnmatch}
        />
      )}
      {(chatLoading || adminMessagesLoading) && (
        <IndicatorWrapper>
          <ActivityIndicator color={COLORS.raspberry} size="large" />
        </IndicatorWrapper>
      )}

      <Loader loading={isLoading} size="large" color={COLORS.blazeBlue} />
      {isShowGalleryAttach && (
        <GalleryModal
          closeAttach={changeShowGalleryAttach}
          chatId={params.chatId}
          setIsLoading={setIsLoading}
          showAttachmentMessage={showAttachmentMessage}
          id={id}
        />
      )}
      <PhotoView
        visible={photoViewer}
        data={images}
        hideStatusBar
        initial={0}
        onDismiss={useCallback(() => {
          setPhotoViewer(false);
        }, [])}
      />
      <ModalHeaderMore
        visibleModal={isVisibleModalMore}
        changeVisibleModal={setIsVisibleModalMore}
        blockReport={setIsVisibleBlockReport}
        setType={setTypeReportModal}
      />
      <BlockReportModal
        isVisible={isVisibleBlockReport}
        closeModal={useCallback(() => setIsVisibleBlockReport(false), [])}
        userId={chatData?.chatRoom?.userId.toString()}
        type={typeReportModal}
        onSuccessesSend={goBack}
      />
    </Wrapper>
  );
};
export default React.memo(ChatRoom);
