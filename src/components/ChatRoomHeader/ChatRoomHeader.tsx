import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {COLORS, STRINGS} from '../../configs';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import NavigationKey from '../../navigation/NavigationKey';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';
import {photoFlickValidationAction} from '../../utils/photoFlickValidationAction';
import AdminIcon from '../icons/AdminIcon';
import NoPhotoIcon from '../icons/NoPhotoIcon';
import {
  FastImageComponent,
  HeaderLeftButton,
  Isidora,
  MoreDots,
  Row,
  Timing,
} from '../index';
import styles from './styles';

interface ChatRoomHeaderParams {
  headerParams: {
    name?: string;
    photo?: string;
    turn?: boolean;
    type?: 'respond' | 'match' | 'conversation';
    isAdmin?: boolean;
    profileId?: string | number;
    photoVideoModerationPassed?: boolean;
    isBlockedUser?: boolean;
    chatId?: string;
    isIRecovered?: boolean;
    actual?: boolean;
  };
  moreDotsOpen: (value: boolean) => void;
  expired: string;
  secondUserUnmatch?: boolean;
}

const ChatRoomHeader: React.FunctionComponent<ChatRoomHeaderParams> = ({
  headerParams,
  moreDotsOpen,
  expired,
  secondUserUnmatch,
}) => {
  const {goBack, navigate} = useNavigation();
  const [minutesLeft, setMinutesLeft] = useState(0);
  const {
    isPhotoPassed,
    isVideoPassed,
    isDataChecking,
  } = usePhotoVideoModeration();

  const expiredAt = useCallback(() => {
    const ms = moment(expired).diff(moment());
    return ms;
  }, [expired]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const timeLocal = expiredAt();
    if (timeLocal > 0 && headerParams.actual) {
      setMinutesLeft(moment.duration(timeLocal).asMinutes());
      interval = setInterval(() => {
        setMinutesLeft(moment.duration(expiredAt()).asMinutes());
      }, 60000);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [expiredAt, headerParams.actual]);

  const getTimeValueString = useCallback((value: number) => {
    if (value <= 60) {
      return Math.ceil(value) + 'm';
    } else if (value > 60 && value <= 2880) {
      return Math.round(value / 60) + 'h';
    } else if (value > 2880) {
      return Math.round(value / 60 / 24) + 'd';
    }
  }, []);

  const getBottomTitle = useCallback(() => {
    if (headerParams.actual) {
      switch (headerParams.type) {
        case 'match':
          return (
            <Text>
              Match times out in
              <Text style={styles.boldText}>
                {` ${getTimeValueString(minutesLeft <= 1 ? 1 : minutesLeft)}`}
              </Text>
            </Text>
          );
        case 'conversation':
          return (
            <Text>
              Convo times out in
              <Text style={styles.boldText}>
                {` ${getTimeValueString(minutesLeft <= 1 ? 1 : minutesLeft)}`}
              </Text>
            </Text>
          );
        case 'respond':
          return (
            <Text>
              {`${headerParams.turn ? 'You' : 'They'} have`}
              <Text style={styles.boldText}>
                {` ${getTimeValueString(minutesLeft <= 1 ? 1 : minutesLeft)} `}
              </Text>
              to respond
            </Text>
          );
      }
    } else if (!headerParams.actual) {
      switch (headerParams.type) {
        case 'conversation':
          return (
            <Text>
              Convo <Text style={styles.boldText}>timed out</Text>
            </Text>
          );
        case 'respond':
          return (
            <Text>
              Intro <Text style={styles.boldText}>timed out</Text>
            </Text>
          );
      }
    }
  }, [
    getTimeValueString,
    headerParams.actual,
    headerParams.turn,
    headerParams.type,
    minutesLeft,
  ]);

  const goBackNavigation = useCallback(() => {
    goBack();
  }, [goBack]);

  const moreInfo = useCallback(() => {
    moreDotsOpen(true);
  }, [moreDotsOpen]);

  const navigateToProfile = useCallback(() => {
    if (isVideoPassed && isPhotoPassed && !isDataChecking) {
      if (headerParams.photoVideoModerationPassed) {
        navigate(NavigationKey.PublicProfile, {
          isExpired:
            !headerParams.actual &&
            !headerParams?.isIRecovered &&
            !secondUserUnmatch,
          matchId: headerParams.chatId,
          profileId: `${headerParams.profileId}`,
        });
      } else {
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: STRINGS.chatIntro.messageItem.popUpText(
            headerParams.name ?? '',
          ),
          oneBtn: true,
          positiveText: 'Got it',
          textAlign: 'center',
          title: `${headerParams.name}'s ${STRINGS.chatIntro.messageItem.popUpTitle}`,
        });
      }
    } else {
      const option = photoFlickValidationAction({
        flickValidation: isVideoPassed,
        isDataChecking,
        navigate,
        photoValidation: isPhotoPassed ?? true,
      });
      navigate(NavigationKey.WarningModal, option);
    }
  }, [
    isVideoPassed,
    isPhotoPassed,
    isDataChecking,
    headerParams,
    navigate,
    secondUserUnmatch,
  ]);

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.sand,
        borderBottomColor: COLORS.blazeBlue50,
        borderBottomWidth: 0.5,
        paddingBottom: 8,
        // height: getHeightWithScaleFactor(103),
        paddingTop: getHeightWithScaleFactor(50),
        width: '100%',
      }}>
      <Row
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: getHeightWithScaleFactor(16),
          paddingRight: getWidthWithScaleFactor(21),
          width: '100%',
        }}>
        <HeaderLeftButton
          onPress={goBackNavigation}
          color={COLORS.blazeBlue}
          strokeWidth={2.5}
        />
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: headerParams?.isAdmin ? 24 : -10,
            overflow: 'hidden',
          }}>
          {headerParams.isAdmin ? (
            <AdminIcon style={{marginRight: 8}} />
          ) : (
            <TouchableOpacity
              onPress={navigateToProfile}
              style={{marginRight: 8}}>
              {headerParams.photoVideoModerationPassed ? (
                headerParams.isBlockedUser ? (
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: COLORS.blackPearl,
                      borderRadius: getHeightWithScaleFactor(22),
                      height: getHeightWithScaleFactor(44),
                      justifyContent: 'center',
                      width: getHeightWithScaleFactor(44),
                    }}>
                    <NoPhotoIcon width={26} height={26} color={COLORS.white} />
                  </View>
                ) : (
                  <FastImageComponent
                    style={{
                      borderRadius: getHeightWithScaleFactor(22),
                      height: getHeightWithScaleFactor(44),
                      width: getHeightWithScaleFactor(44),
                    }}
                    uri={headerParams.photo}
                    resizeMode="cover"
                  />
                )
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: COLORS.catskillWhite,
                    borderRadius: getHeightWithScaleFactor(22),
                    height: getHeightWithScaleFactor(44),
                    justifyContent: 'center',
                    width: getHeightWithScaleFactor(44),
                  }}>
                  <NoPhotoIcon
                    width={26}
                    height={26}
                    color={COLORS.blazeBlue}
                  />
                </View>
              )}
            </TouchableOpacity>
          )}
          <Isidora
            lineHeight={30}
            fontSize={20}
            textAlign="left"
            fontWeight="800"
            color={COLORS.blazeBlue}
            numberOfLines={1}
            style={{maxWidth: headerParams.isAdmin ? '80%' : '70%'}}>
            {headerParams.name}
          </Isidora>
        </Row>

        <View
          style={{
            borderRadius: 20,
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          {!headerParams.isAdmin && (
            <TouchableOpacity
              disabled={headerParams.isAdmin}
              onPress={moreInfo}
              style={{
                backgroundColor: COLORS.darkSand50,
                justifyContent: 'center',
                padding: 5,
              }}>
              <MoreDots color={COLORS.blazeBlue} />
            </TouchableOpacity>
          )}
        </View>
      </Row>
      {!headerParams.isAdmin && (
        <Row
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.darkSand50,
            borderColor: COLORS.raspberry,
            borderRadius: getHeightWithScaleFactor(15),
            borderWidth: 1,
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          <Timing />
          <Isidora
            lineHeight={18}
            fontSize={16}
            textAlign="center"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{paddingLeft: getWidthWithScaleFactor(20)}}>
            {/* style={{marginLeft: getWidthWithScaleFactor(5)}}> */}
            {expired && getBottomTitle()}
          </Isidora>
        </Row>
      )}
    </View>
  );
};

export default React.memo(ChatRoomHeader);
