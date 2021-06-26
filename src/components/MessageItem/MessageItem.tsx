import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
/* eslint-disable react-native/no-raw-text */
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

import {COLORS, STRINGS} from '../../configs';
import {setAdminMessageCountHook} from '../../hooks/useBottomBarPoint';
import NavigationKey from '../../navigation/NavigationKey';
import {useRecoveryMatchMutation} from '../../store/generated/graphql';
import {getWidthWithScaleFactor} from '../../utils/dimensions';
import {photoFlickValidationAction} from '../../utils/photoFlickValidationAction';
import AdminIcon from '../icons/AdminIcon';
import NoPhotoIcon from '../icons/NoPhotoIcon';
import RefreshIcon2 from '../icons/RefreshIconInMessage';
import {
  AlertForUnreadMessage,
  FastImageComponent,
  Isidora,
  Row,
  Star,
} from '../index';
import styles from './styles';

interface ItemProps {
  index?: number;
  item: {
    photo?: string;
    isMyTurn?: boolean;
    title?: string;
    expireAt?: string;
    haveSuperLike?: boolean;
    lastMessage?: string;
    intro?: boolean;
    chatId?: number;
    sentSuperLike?: boolean;
    actual?: boolean;
    matchUser?: {
      firstName: string;
      id?: string;
      profilePhoto?: string;
      userProfileId?: string;
    };
    unreadMessagesCount?: string | number;
    countMessages?: number | string;
    isAdmin?: boolean;
    recovered?: boolean;
    blocked?: boolean;
    matchPhotoModerationPassed?: boolean;
    matchVideoModerationPassed?: boolean;
    iRecovered?: boolean;
    userRecovered?: boolean;
    secondUserUnmatch?: boolean;
  };
}

interface Props {
  item: ItemProps;
  isIntro?: boolean;
  myPhotoValidation?: boolean | undefined | null;
  myVideoValidation?: boolean | undefined | null;
  isDataChecking?: boolean;
  setAdminMessageCount?: (value: string) => void;
  setIdIntroChat?: (value: null | string) => void;
  isRowOpen?: boolean;
}

const MessageItem: React.FunctionComponent<Props> = ({
  item: itemProps,
  isIntro,
  myPhotoValidation,
  myVideoValidation,
  isDataChecking,
  setAdminMessageCount,
  setIdIntroChat,
  isRowOpen,
}) => {
  const [item, setItem] = useState<ItemProps>(itemProps);
  const [isMyTurn, setTurn] = useState(item.item.isMyTurn);
  const [id, setId] = useState(null);
  const {navigate, goBack} = useNavigation();
  const [
    recoveryMatchMutation,
    {data: recoveryData, error: recoveryError},
  ] = useRecoveryMatchMutation();

  useEffect(() => {
    if (recoveryData) {
      setItem((prev) => {
        return {
          ...prev,
          item: {
            ...prev.item,
            actual: recoveryData?.recoveryMatch?.actual,
            expireAt: recoveryData?.recoveryMatch?.expireAt,
            iRecovered: recoveryData?.recoveryMatch?.iRecovered,
            userRecovered: recoveryData?.recoveryMatch?.userRecovered,
          },
        };
      });
    }
  }, [recoveryData]);

  const goToSingleChat = useCallback(() => {
    if (item.item.isAdmin && setAdminMessageCount) {
      setAdminMessageCount('0');
      setAdminMessageCountHook('0');
    }
    if (setIdIntroChat) {
      setIdIntroChat(item.item.chatId.toString());
    }
    navigate(NavigationKey.ChatRoom, {
      chatId: item.item.chatId,
      isAdmin: !!item.item.isAdmin,
      turn: item.item.isMyTurn,
      type: isIntro ? 'respond' : 'conversation',
    });
  }, [
    item.item.isAdmin,
    item.item.chatId,
    item.item.isMyTurn,
    setAdminMessageCount,
    setIdIntroChat,
    navigate,
    isIntro,
  ]);

  const expiredAt = useCallback(() => {
    const ms = moment(item.item.expireAt).diff(moment());
    const expireInMin = Math.ceil(ms / 60000);
    let stringTime;
    if (expireInMin <= 60) {
      stringTime = `${expireInMin < 1 ? 1 : expireInMin}m`;
    } else if (expireInMin > 60 && expireInMin <= 2880) {
      stringTime = `${Math.round(ms / 60000 / 60)}h`;
    } else if (expireInMin > 2880) {
      stringTime = `${Math.round(ms / 60000 / 60 / 24)}d`;
    }

    return {
      expireInMin,
      stringTime,
    };
  }, [item]);

  const getAccountId = useCallback(async () => {
    const dataId = await AsyncStorage.getItem('accountId');
    if (dataId) {
      setId(dataId);
      // setTurn(item.item.matchUser.id === dataId ? false : true);
    }
  }, []);

  useEffect(() => {
    if (!id) {
      getAccountId();
    }
  }, [id, getAccountId]);

  const blockMatch = useCallback(() => !item.item.actual, [item.item.actual]);

  const navigateToPublicProfile = useCallback(() => {
    if (myPhotoValidation && myVideoValidation && !isDataChecking) {
      if (
        item.item.matchPhotoModerationPassed &&
        item.item.matchVideoModerationPassed
      ) {
        navigate(NavigationKey.PublicProfile, {
          isExpired:
            !item.item.actual &&
            !item.item.iRecovered &&
            !item.item.secondUserUnmatch,
          matchId: item.item.chatId,
          profileId: item.item.matchUser?.userProfileId,
        });
      } else {
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: STRINGS.chatIntro.messageItem.popUpText(
            item.item.matchUser?.firstName,
          ),
          oneBtn: true,
          positiveText: 'Got it',
          textAlign: 'center',
          title: `${item.item.matchUser?.firstName}'s ${STRINGS.chatIntro.messageItem.popUpTitle}`,
        });
      }
    } else {
      const option = photoFlickValidationAction({
        flickValidation: myVideoValidation,
        isDataChecking,
        navigate,
        photoValidation: myPhotoValidation,
      });
      navigate(NavigationKey.WarningModal, option);
    }
  }, [
    myPhotoValidation,
    myVideoValidation,
    isDataChecking,
    item.item.matchPhotoModerationPassed,
    item.item.matchVideoModerationPassed,
    item.item.actual,
    item.item.iRecovered,
    item.item.secondUserUnmatch,
    item.item.chatId,
    item.item.matchUser,
    navigate,
  ]);

  const restore = useCallback(() => {
    recoveryMatchMutation({
      variables: {
        matchId: `${item.item.chatId}`,
      },
    });
  }, [item.item.chatId, recoveryMatchMutation]);

  return (
    <TouchableOpacity
      style={{
        marginBottom: item.item.isAdmin ? 0 : 10,
        paddingLeft: 18,
      }}
      disabled={!blockMatch}
      activeOpacity={1}
      onPress={goToSingleChat}>
      <Row style={styles.rowWrapper}>
        {item.item.isAdmin ? (
          <View
            style={{
              alignItems: 'center',
              borderColor: COLORS.raspberry,
              borderRadius: 35,
              borderWidth: getWidthWithScaleFactor(2),
              height: 70,
              justifyContent: 'center',
              width: 70,
            }}>
            <AdminIcon width={56} height={56} />
          </View>
        ) : (
          <TouchableOpacity
            onPress={navigateToPublicProfile}
            style={styles.photoWrapper}>
            <ProgressCircle
              style={styles.progressBar}
              strokeWidth={getWidthWithScaleFactor(2)}
              backgroundColor="transparent"
              startAngle={Math.PI * 2}
              endAngle={0}
              progress={
                isIntro
                  ? !blockMatch()
                    ? expiredAt().expireInMin / 2880
                    : 1
                  : !blockMatch()
                  ? expiredAt().expireInMin /
                    (item.item.iRecovered || item.item.userRecovered
                      ? 2880
                      : 10080)
                  : 1
              }
              progressColor={
                !blockMatch()
                  ? item.item.iRecovered || item.item.userRecovered
                    ? COLORS.blazeLightBlue
                    : COLORS.raspberry
                  : COLORS.raspberry20
              }
            />
            <View style={styles.itemPhoto}>
              {!item.item.matchVideoModerationPassed ||
              !item.item.matchPhotoModerationPassed ? (
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: COLORS.darkSand50,
                    borderRadius: 28,
                    height: 56,
                    justifyContent: 'center',
                    width: 56,
                  }}>
                  <NoPhotoIcon
                    width={26}
                    height={26}
                    color={COLORS.blazeBlue}
                  />
                </View>
              ) : item.item.blocked ? (
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: COLORS.blackPearl,
                    borderRadius: 28,
                    height: 56,
                    justifyContent: 'center',
                    width: 56,
                  }}>
                  <NoPhotoIcon width={26} height={26} color={COLORS.white} />
                </View>
              ) : (
                <FastImageComponent
                  style={{...styles.photo, opacity: !blockMatch() ? 1 : 0.5}}
                  uri={{uri: item.item?.matchUser?.profilePhoto}}
                />
              )}
            </View>
            {!blockMatch() && (
              <View
                style={[
                  styles.timeWrapper,
                  {
                    borderColor: isIntro
                      ? expiredAt().expireInMin <= 720
                        ? COLORS.raspberry
                        : item.item.iRecovered || item.item.userRecovered
                        ? COLORS.blazeLightBlue
                        : COLORS.raspberry
                      : expiredAt().expireInMin <= 1440
                      ? COLORS.raspberry
                      : item.item.iRecovered || item.item.userRecovered
                      ? COLORS.blazeLightBlue
                      : COLORS.raspberry,
                  },
                  {
                    backgroundColor: isIntro
                      ? expiredAt().expireInMin <= 720
                        ? COLORS.raspberry
                        : COLORS.darkSand50
                      : expiredAt().expireInMin <= 1440
                      ? COLORS.raspberry
                      : COLORS.darkSand50,
                  },
                ]}>
                <Isidora
                  style={{
                    overflow: 'hidden',
                  }}
                  lineHeight={12}
                  fontSize={12}
                  textAlign="center"
                  fontWeight="600"
                  color={
                    isIntro
                      ? expiredAt().expireInMin <= 720
                        ? COLORS.sand
                        : item.item.iRecovered || item.item.userRecovered
                        ? COLORS.blazeLightBlue
                        : COLORS.raspberry
                      : expiredAt().expireInMin <= 1440
                      ? COLORS.sand
                      : item.item.iRecovered || item.item.userRecovered
                      ? COLORS.blazeLightBlue
                      : COLORS.raspberry
                  }>
                  {expiredAt().stringTime}
                </Isidora>
              </View>
            )}
          </TouchableOpacity>
        )}
        {item.item.haveSuperLike && (
          <View style={styles.mySuperLike}>
            <Star color={COLORS.sand} />
          </View>
        )}

        <View style={styles.wrapperTextBlock}>
          <Row style={{alignItems: 'flex-start'}}>
            {item.item.sentSuperLike && (
              <Star
                color={COLORS.blazeLightBlue}
                style={{marginRight: 5, marginTop: 2}}
              />
            )}
            <Isidora
              lineHeight={18}
              fontSize={16}
              textAlign="left"
              fontWeight="900"
              color={!blockMatch() ? COLORS.blazeBlue : COLORS.blazeBlue50}
              numberOfLines={1}
              style={{marginBottom: 7, maxWidth: '70%'}}>
              {item.item?.matchUser?.firstName}
            </Isidora>
          </Row>
          <Isidora
            message
            lineHeight={16}
            fontSize={14}
            textAlign="left"
            fontWeight="600"
            style={{maxWidth: getWidthWithScaleFactor(180)}}
            color={!blockMatch() ? COLORS.blazeBlue : COLORS.blazeBlue50}>
            {item.item.lastMessage && item.item.lastMessage.length
              ? item.item.lastMessage
              : ''}
          </Isidora>
          {blockMatch() && (
            <Row style={{width: getWidthWithScaleFactor(160)}}>
              <Isidora
                lineHeight={21}
                fontSize={12}
                textAlign="center"
                fontWeight="500"
                color={COLORS.blazeBlue50}>
                {isIntro
                  ? STRINGS.chatIntro.exIntro
                  : STRINGS.chatIntro.exConversation}
              </Isidora>
            </Row>
          )}
        </View>
        {!blockMatch() ? (
          <>
            {isIntro &&
            !isRowOpen &&
            Number(item.item.unreadMessagesCount) === 0 ? (
              <View
                style={{
                  ...styles.turn,
                  borderColor: isMyTurn ? COLORS.raspberry : COLORS.blazeBlue,
                  borderWidth: 0.5,
                  paddingTop: 1,
                }}>
                <Isidora
                  lineHeight={12}
                  fontSize={12}
                  textAlign="center"
                  fontWeight="900"
                  color={isMyTurn ? COLORS.raspberry : COLORS.blazeBlue}>
                  {isMyTurn
                    ? STRINGS.chatIntro.turnButtonYou
                    : STRINGS.chatIntro.turnButtonTheir}
                </Isidora>
              </View>
            ) : (
              <View style={styles.messages}>
                {Number(item.item.unreadMessagesCount) > 0 && (
                  <>
                    <AlertForUnreadMessage />
                    <Isidora
                      lineHeight={18}
                      fontSize={14}
                      textAlign="center"
                      fontWeight="800"
                      color={COLORS.raspberry}
                      style={{
                        alignSelf: 'center',
                        position: 'absolute',
                        top: 3,
                      }}>
                      {item.item.unreadMessagesCount}
                    </Isidora>
                  </>
                )}
              </View>
            )}
          </>
        ) : (
          !item.item.iRecovered &&
          !item.item.secondUserUnmatch &&
          !isRowOpen && (
            <TouchableOpacity
              onPress={restore}
              style={[
                styles.turn,
                {
                  backgroundColor: COLORS.blazeLightBlue,
                  marginTop: 0,
                  padding: 10,
                },
              ]}
              hitSlop={{bottom: 20, left: 20, right: 20, top: 20}}>
              <RefreshIcon2 color={COLORS.white} width={20} height={20} />
            </TouchableOpacity>
          )
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default React.memo(MessageItem);
