/* eslint-disable react/jsx-no-bind */
import Clipboard from '@react-native-community/clipboard';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Appearance,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Bubble,
  Composer,
  Day,
  GiftedChat,
  IMessage,
  InputToolbar,
  Send,
  Time,
} from 'react-native-gifted-chat';
import {createImageProgress} from 'react-native-image-progress';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Video from 'react-native-video';

import {
  EmptyMessagesListWarning,
  Isidora,
  SenderButton,
} from '../../../components';
import BackArrowIcon from '../../../components/icons/BackArrowIcon';
import ErrorAlertIcon from '../../../components/icons/ErrorAlertIcon';
import FingersIcon from '../../../components/icons/FingersIcon';
import LaughIcon from '../../../components/icons/LaughIcon';
import RefreshIcon2 from '../../../components/icons/RefreshIconInMessage';
import {COLORS, STRINGS} from '../../../configs';
import dimensions from '../../../utils/dimensions';
import {BtnRestore, ResendBtn, ResendWrapper} from './styles';

const FastImageLoader = createImageProgress(FastImage);
interface Props {
  messages: IMessage[];
  userId: number | undefined;
  setMessages: (value: IMessage[]) => void;
  pushMessage: (value: string, id: string | number) => void;
  openAttach: (value: boolean) => void;
  isUnBlocked: boolean;
  restoreConversation: () => void;
  openImage: (value: string) => void;
  isAdmin: boolean;
  loadEarlierMessages: () => void;
  loadingEarlierMessages: boolean;
  userName?: string;
  resendMessage?: (value: IMessage) => void;
  loadEarlierMessagesCount: number;
  expiredTime: number;
  type: 'respond' | 'match' | 'conversation' | undefined;
  iRecovered?: boolean;
  userRecovered?: boolean;
  secondUserUnmatch?: boolean;
}

const ChatBody: React.FunctionComponent<Props> = ({
  messages = [],
  userId,
  setMessages,
  pushMessage,
  openAttach,
  isUnBlocked,
  restoreConversation,
  openImage,
  isAdmin,
  loadEarlierMessages,
  loadingEarlierMessages,
  userName,
  resendMessage,
  loadEarlierMessagesCount,
  expiredTime,
  type,
  iRecovered,
  userRecovered,
  secondUserUnmatch,
}) => {
  const [text, setText] = useState<string>('');
  const composer = useRef();
  const giftedChatRef = useRef<GiftedChat>();

  useEffect(() => {
    if (isAdmin && messages.length === 1) {
      setTimeout(() => {
        // giftedChatRef?.current?._messageContainerRef?.current?.scrollToEnd();
        giftedChatRef?.current?._messageContainerRef?.current?.scrollToItem({
          animated: true,
          item: messages[messages.length - 1],
          viewPosition: 1,
        });
      }, 700);
    }
  }, [isAdmin, messages, messages.length]);

  const onSend = useCallback(
    (newMessages = []) => {
      setMessages((prev) => [...newMessages, ...prev]);
      newMessages.forEach((el: IMessage) =>
        pushMessage(el, [...newMessages, ...messages]),
      );
    },
    [messages, pushMessage, setMessages],
  );

  const openAttachModal = useCallback(() => {
    Keyboard.dismiss();
    openAttach(true);
  }, [openAttach]);

  const calculateToolbarHeight = useMemo(() => {
    if (isAdmin || secondUserUnmatch || (expiredTime > 0 && !isUnBlocked)) {
      return ifIphoneX(-30, 0);
    }
    if (!isUnBlocked && iRecovered && userRecovered) {
      return 0;
    }
    if (!isUnBlocked) {
      return 130;
    }
    return 50;
  }, [
    expiredTime,
    iRecovered,
    isAdmin,
    isUnBlocked,
    secondUserUnmatch,
    userRecovered,
  ]);

  const renderInputToolbar = useCallback(
    (props) => {
      if (isAdmin || secondUserUnmatch || (expiredTime > 0 && !isUnBlocked)) {
        return null;
      }
      if (!isUnBlocked && iRecovered && userRecovered) {
        return null;
      }
      if (!isUnBlocked && iRecovered) {
        return (
          <>
            <Isidora
              lineHeight={20}
              fontSize={16}
              textAlign="center"
              fontWeight="600"
              color={COLORS.blazeBlue}
              style={{paddingHorizontal: 20}}>
              {type === 'respond'
                ? STRINGS.chatRoom.howMustRestoreIntro(userName)
                : STRINGS.chatRoom.howMustRestoreConvo(userName)}
            </Isidora>
            {type === 'respond' ? (
              <LaughIcon style={{alignSelf: 'center', marginTop: 15}} />
            ) : (
              <FingersIcon style={{alignSelf: 'center', marginTop: 15}} />
            )}
          </>
        );
      }
      if (!isUnBlocked) {
        return (
          <>
            <Isidora
              lineHeight={22}
              fontSize={16}
              textAlign="center"
              fontWeight="600"
              color={COLORS.blazeBlue}
              style={{paddingHorizontal: 20}}>
              {STRINGS.chatRoom.reconnectMsg}
            </Isidora>
            <BtnRestore onPress={restoreConversation}>
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
          </>
        );
      }

      return (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: COLORS.sand,
            borderTopWidth: 0,
            marginBottom: 10,
          }}
        />
      );
    },

    [
      expiredTime,
      iRecovered,
      isAdmin,
      isUnBlocked,
      restoreConversation,
      secondUserUnmatch,
      type,
      userName,
      userRecovered,
    ],
  );

  const renderBubble = useCallback(
    (props) => {
      return (
        <>
          <Bubble
            {...props}
            renderCustomView={() =>
              props.currentMessage?.isWarning &&
              !props.currentMessage?.image && (
                <ResendWrapper>
                  <ResendBtn
                    onPress={() => resendMessage(props.currentMessage)}>
                    <RefreshIcon2 color={COLORS.red} width={18} height={18} />
                  </ResendBtn>
                </ResendWrapper>
              )
            }
            textStyle={{
              left: {
                color: COLORS.blazeBlue,
                fontFamily: 'IsidoraSansAlt-SemiBold',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 24,
              },
              right: {
                color: COLORS.sand,
                fontFamily: 'IsidoraSansAlt-SemiBold',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 24,
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor:
                  props.currentMessage?.image || props.currentMessage?.video
                    ? COLORS.sand
                    : COLORS.blazeDarker,
                borderBottomLeftRadius: 0,
                borderRadius: 20,
                marginBottom: 7,
                padding: 5,
              },
              right: {
                backgroundColor:
                  props.currentMessage?.image || props.currentMessage?.video
                    ? COLORS.sand
                    : COLORS.blazeBlue,
                borderBottomRightRadius: 0,
                borderRadius: 25,
                marginBottom: 7,
                padding: 5,
              },
            }}
            containerToPreviousStyle={{
              left: {borderTopLeftRadius: 25},
              right: {borderTopRightRadius: 25},
            }}
            containerToNextStyle={{
              left: {borderTopLeftRadius: 25},
              right: {borderTopRightRadius: 25},
            }}
            containerStyle={{
              left: {borderTopLeftRadius: 25},
              right: {borderTopRightRadius: 25},
            }}
          />
          {props.currentMessage?.isWarning && (
            <ErrorAlertIcon style={{marginBottom: 8, marginLeft: 3}} />
          )}
        </>
      );
    },
    [resendMessage],
  );

  const renderTime = useCallback(
    (props) => {
      if (isAdmin) {
        return null;
      }
      return (
        <Time
          {...props}
          timeTextStyle={{
            left: {
              color: COLORS.blazeBlue,
              fontFamily: 'IsidoraSansAlt-SemiBold',
              fontSize: 12,
              fontWeight: '400',
            },
            right: {
              color: COLORS.sand,
              fontFamily: 'IsidoraSansAlt-SemiBold',
              fontSize: 12,
              fontWeight: '400',
            },
          }}
        />
      );
    },
    [isAdmin],
  );

  const checkHeight = useCallback(() => {
    if (composer?.current?.contentSize?.height) {
      if (composer?.current?.contentSize.height >= 98) {
        return 125;
      } else {
        return composer?.current?.contentSize.height + 25;
      }
    } else {
      return 25;
    }
  }, []);
  const renderComposer = useCallback(
    (props) => (
      <>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 14,
            borderColor: COLORS.blazeDarker,
            borderTopRightRadius: 14,
            borderWidth: 0.5,
            height: checkHeight() <= 45 ? checkHeight() : checkHeight() - 12,
            marginBottom: 2,
            marginLeft: 20,
            paddingLeft: 7,
            paddingRight: 12,
            width: dimensions.WIDTH - 80,
          }}>
          <Composer
            {...props}
            ref={composer}
            keyboardAppearance={Appearance.getColorScheme()}
            textInputStyle={{
              color: COLORS.blazeBlue,
              fontFamily: 'IsidoraSansAlt-SemiBold',
              fontSize: 16,
              fontWeight: '600',
              lineHeight: 20,
              padding: 0,
              paddingBottom: 1,
            }}
            placeholderTextColor={COLORS.blazeBlue30}
          />
        </View>
      </>
    ),
    [checkHeight],
  );

  const renderMessageVideo = useCallback((props) => {
    return (
      <View style={{height: 230, position: 'relative', width: 170}}>
        <Video
          style={{
            borderRadius: 20,
            height: 230,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 170,
          }}
          resizeMode="cover"
          height={230}
          width={170}
          muted
          source={{uri: props.currentMessage.video}}
          allowsExternalPlayback={false}
          paused
          controls
        />
      </View>
    );
  }, []);

  const renderMessageImage = useCallback(
    (props) => (
      <TouchableOpacity
        // eslint-disable-next-line react/jsx-no-bind
        onPress={() => openImage(props.currentMessage.image)}
        // eslint-disable-next-line react/jsx-no-bind
        // onLongPress={() => resendMessage(props.currentMessage)}
        style={{
          borderBottomRightRadius:
            props.currentMessage?.user._id === props.user._id ? 4 : 16,
          borderRadius: 16,
          borderTopLeftRadius:
            props.currentMessage?.user._id !== props.user._id ? 4 : 16,
          marginVertical: 2,
          overflow: 'hidden',
        }}>
        {props.currentMessage.isLocal ? (
          <Image
            source={{uri: props.currentMessage.image}}
            style={{height: 120, width: 120}}
          />
        ) : (
          <FastImageLoader
            source={{uri: props.currentMessage.image}}
            style={{height: 120, width: 120}}
          />
        )}
      </TouchableOpacity>
    ),
    [openImage],
  );

  const onLongPress = useCallback(
    (context, message) => {
      const options = message.isWarning
        ? ['Copy', 'Resend Message', 'Cancel']
        : ['Copy', 'Cancel'];
      const cancelButtonIndex = options.length - 1;
      context.actionSheet().showActionSheetWithOptions(
        {
          cancelButtonIndex,
          options,
        },
        (buttonIndex) => {
          if (message.isWarning) {
            switch (buttonIndex) {
              case 0:
                Clipboard.setString(message.text);
                break;
              case 1:
                resendMessage(message);
                break;
            }
          } else {
            switch (buttonIndex) {
              case 0:
                Clipboard.setString(message.text);
                break;
            }
          }
        },
      );
    },
    [resendMessage],
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // bottomOffset={(Platform.OS === 'ios' && 33) || null}
    >
      <GiftedChat
        ref={giftedChatRef}
        maxComposerHeight={100}
        loadEarlier={!isAdmin}
        // infiniteScroll
        isLoadingEarlier={loadingEarlierMessages}
        isKeyboardInternallyHandled={false}
        scrollToBottomComponent={useCallback(
          () => (
            <BackArrowIcon
              color={COLORS.sand}
              style={{transform: [{rotate: '-90deg'}]}}
            />
          ),
          [],
        )}
        scrollToBottomStyle={{backgroundColor: COLORS.raspberry}}
        listViewProps={{
          onEndReached: loadEarlierMessages,
          onEndReachedThreshold: 0.5,
        }}
        renderLoadEarlier={useCallback(
          (props) =>
            messages.length >= 30 &&
            loadEarlierMessagesCount >= 30 && (
              <View style={{paddingVertical: 15}}>
                <ActivityIndicator color={COLORS.blazeBlue} />
              </View>
            ),
          [loadEarlierMessagesCount, messages.length],
        )}
        // onLoadEarlier={loadEarlierMessages}
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        user={{_id: `${userId}`}}
        renderChatEmpty={useCallback(
          () => (
            <EmptyMessagesListWarning />
          ),
          [],
        )}
        renderTime={renderTime}
        renderDay={useCallback(
          (props) =>
            isAdmin ? <View style={{height: 20}} /> : <Day {...props} />,
          [isAdmin],
        )}
        renderAvatar={useCallback(() => null, [])}
        showAvatarForEveryMessage
        scrollToBottom
        onSend={onSend}
        renderBubble={renderBubble}
        //    ability to send photo or video
        // renderActions={useCallback(
        //   () => (
        //     <TouchableOpacity
        //       onPress={openAttachModal}
        //       style={{marginBottom: 3, marginHorizontal: 15}}>
        //       <CameraIcon color={COLORS.blazeBlue} />
        //     </TouchableOpacity>
        //   ),
        //   [openAttachModal],
        // )}
        // alwaysShowSend
        renderSend={useCallback(
          (props) => {
            return (
              <Send
                {...props}
                containerStyle={{
                  justifyContent: 'center',
                  marginBottom: 2,
                  marginLeft: 10,
                }}
                disabled={text.length === 0}>
                <SenderButton
                  width={32}
                  height={32}
                  colorFill={COLORS.white}
                  color={COLORS.blazeBlue}
                />
              </Send>
            );
          },
          [text.length],
        )}
        placeholder="Send a message"
        renderInputToolbar={renderInputToolbar}
        minInputToolbarHeight={calculateToolbarHeight}
        renderComposer={renderComposer}
        keyboardShouldPersistTaps="handled"
        renderMessageVideo={renderMessageVideo}
        renderMessageImage={renderMessageImage}
        onLongPress={onLongPress}
      />
    </KeyboardAvoidingView>
  );
};
export default React.memo(ChatBody);
