import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
/* REACT */
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, FlatList, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ProgressCircle} from 'react-native-svg-charts';

import {COLORS, STRINGS} from '../../configs';
import {usePhotoVideoModeration} from '../../hooks/usePhotoVideoModeration';
import NavigationKey from '../../navigation/NavigationKey';
import {photoFlickValidationAction} from '../../utils/photoFlickValidationAction';
import NoPhotoIcon from '../icons/NoPhotoIcon';
import {
  FastImageComponent,
  IconStarSuperLike,
  Isidora,
  Row,
  Timing,
} from '../index';
import styles from './styles';

/* MODULES */

interface PropsItem {
  actual: boolean;
  blocked: boolean;
  chatId: string;
  expireAt: string;
  haveSuperLike?: boolean | null | undefined;
  lastMessage?: string;
  matchUser: {
    firstName: string;
    id: string;
    profilePhoto: string;
    age: string;
    userProfileId: string;
    recovered: boolean;
  };
  sentSuperLike?: boolean;
  recovered: boolean;
  matchPhotoModerationPassed?: boolean;
  matchVideoModerationPassed?: boolean;
  iRecovered: boolean;
  userRecovered: boolean;
}

interface Props {
  load: boolean;
  onUpdate: () => void;
  myMatches: PropsItem[];
}

interface PropsMyMatchItem {
  item: PropsItem;
  photoPassed: boolean | null | undefined;
  videoPassed: boolean | null | undefined;
  isDataChecking: boolean;
}

const MyMatchItem: React.FunctionComponent<PropsMyMatchItem> = ({
  item,
  photoPassed,
  videoPassed,
  isDataChecking,
}) => {
  const {navigate} = useNavigation();

  const expiredAt = useCallback(() => {
    const ms = moment(item.expireAt).diff(moment());
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
  }, [item.expireAt]);

  const blockMatch = useCallback(() => {
    return !item.actual;
  }, [item.actual]);

  const goToSingleChat = useCallback(() => {
    if (photoPassed && videoPassed && !isDataChecking) {
      if (
        !item.matchVideoModerationPassed ||
        !item.matchPhotoModerationPassed
      ) {
        navigate(NavigationKey.WarningModal, {
          hideCloseButton: true,
          message: STRINGS.chatIntro.messageItem.popUpText(
            item.matchUser?.firstName,
          ),
          oneBtn: true,
          positiveText: 'Got it',
          textAlign: 'center',
          title: `${item.matchUser.firstName}'s ${STRINGS.chatIntro.messageItem.popUpTitle}`,
        });
      } else {
        if (blockMatch()) {
          navigate(NavigationKey.PublicProfile, {
            isExpired: !item.actual && !item.iRecovered,
            matchId: item.chatId,
            profileId: item.matchUser?.userProfileId,
          });
        } else {
          navigate(NavigationKey.ChatRoom, {
            chatId: item.chatId,
            isAdmin: false,
            type: 'match',
          });
        }
      }
    } else {
      const option = photoFlickValidationAction({
        flickValidation: videoPassed,
        isDataChecking,
        navigate,
        photoValidation: photoPassed,
      });
      navigate(NavigationKey.WarningModal, option);
    }
  }, [
    blockMatch,
    isDataChecking,
    item.actual,
    item.chatId,
    item.iRecovered,
    item.matchPhotoModerationPassed,
    item.matchUser,
    item.matchVideoModerationPassed,
    navigate,
    photoPassed,
    videoPassed,
  ]);
  return (
    <TouchableOpacity style={styles.wrapperMatches} onPress={goToSingleChat}>
      {item.sentSuperLike && !blockMatch() && (
        <View style={styles.superLike}>
          <IconStarSuperLike color={COLORS.sand} />
        </View>
      )}
      {!item.matchPhotoModerationPassed || !item.matchVideoModerationPassed ? (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.catskillWhite,
            borderRadius: 38,
            height: 56,
            justifyContent: 'center',
            width: 56,
          }}>
          <NoPhotoIcon width={26} height={26} color={COLORS.blazeBlue} />
        </View>
      ) : item.blocked ? (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.blackPearl,
            borderRadius: 38,
            height: 56,
            justifyContent: 'center',
            width: 56,
          }}>
          <NoPhotoIcon width={26} height={26} color={COLORS.white} />
        </View>
      ) : (
        <FastImageComponent
          style={[styles.matchPhoto, {opacity: !blockMatch() ? 1 : 0.5}]}
          uri={{uri: item.matchUser.profilePhoto}}
        />
      )}
      <ProgressCircle
        startAngle={Math.PI * 2}
        endAngle={0}
        style={styles.progressBar}
        strokeWidth={2}
        backgroundColor="transparent"
        progress={!blockMatch() ? expiredAt().expireInMin / 60 / 48 : 1}
        progressColor={
          !blockMatch()
            ? item.iRecovered || item.userRecovered
              ? COLORS.blazeLightBlue
              : COLORS.raspberry
            : COLORS.raspberry20
        }
      />
      {!blockMatch() && (
        <View
          style={[
            styles.matchesTimer,
            {
              borderColor:
                expiredAt().expireInMin <= 720
                  ? COLORS.raspberry
                  : item.iRecovered || item.userRecovered
                  ? COLORS.blazeLightBlue
                  : COLORS.raspberry,
            },
            {
              backgroundColor:
                expiredAt().expireInMin <= 720
                  ? COLORS.raspberry
                  : COLORS.darkSand50,
            },
          ]}>
          <Isidora
            lineHeight={12}
            fontSize={12}
            textAlign="center"
            fontWeight="600"
            color={
              expiredAt().expireInMin <= 720
                ? COLORS.sand
                : item.iRecovered || item.userRecovered
                ? COLORS.blazeLightBlue
                : COLORS.raspberry
            }>
            {expiredAt().stringTime}
          </Isidora>
        </View>
      )}
    </TouchableOpacity>
  );
};

const MyMatches: React.FunctionComponent<Props> = ({
  load,
  onUpdate,
  myMatches = [],
}) => {
  const {navigate} = useNavigation();

  const {
    isPhotoPassed,
    isVideoPassed,
    isDataChecking,
  } = usePhotoVideoModeration();

  const rotate = useRef(new Animated.Value(0)).current;

  const rotateAnimationIn = useCallback(() => {
    Animated.timing(rotate, {
      duration: 10000,
      easing: Easing.linear,
      toValue: 1,
    }).start();
  }, [rotate]);

  useEffect(() => {
    if (load) {
      rotateAnimationIn();
    }
  }, [load, rotateAnimationIn]);

  const renderMyMatchItem = useCallback(
    (item) => {
      return (
        <MyMatchItem
          item={item.item}
          photoPassed={isPhotoPassed}
          videoPassed={isVideoPassed}
          isDataChecking={isDataChecking}
        />
      );
    },
    [isDataChecking, isPhotoPassed, isVideoPassed],
  );

  const renderEmptyLoaders = useCallback(() => {
    // const spiner = rotate.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg'],
    // });
    return (
      // <Animated.View
      //   style={{
      //     height: getHeightWithScaleFactor(62),
      //     justifyContent: 'center',
      //     marginLeft: 8,
      //     marginRight: 8,
      //     transform: [{rotate: spiner}],
      //     width: getHeightWithScaleFactor(62),
      //   }}>
      //   <LoaderMatches color={COLORS.noAvatar} />
      // </Animated.View>
      <View
        style={{
          alignItems: 'center',
          borderColor: COLORS.raspberry20,
          borderRadius: 50,
          borderWidth: 2,
          height: 65,
          justifyContent: 'center',
          marginHorizontal: 8,
          marginTop: 10,
          paddingHorizontal: 2,
          paddingVertical: 2,
          width: 65,
        }}>
        <View
          style={{
            backgroundColor: COLORS.darkSand50,
            borderRadius: 50,
            height: 57,
            width: 57,
          }}
        />
      </View>
    );
  }, []);

  return (
    <View
      style={{
        width: '100%',
      }}>
      <Isidora
        lineHeight={24}
        fontSize={18}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={styles.matchesTitle}>
        {STRINGS.chatIntro.whoMatchesYou}
      </Isidora>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={load || !myMatches.length ? [1, 2, 3] : myMatches}
        extraData={load || !myMatches.length ? [1, 2, 3] : myMatches}
        contentContainerStyle={{
          paddingRight: 120,
        }}
        style={{
          paddingBottom: 10,
          paddingTop: 10,
        }}
        keyExtractor={useCallback((item, index) => `${index}`, [])}
        renderItem={
          load || !myMatches.length ? renderEmptyLoaders : renderMyMatchItem
        }
      />
      <Row style={{alignItems: 'center', marginLeft: 45, marginTop: 5}}>
        <Timing width={14} height={16} style={{marginRight: 5}} />
        <Isidora
          lineHeight={14}
          fontSize={13}
          textAlign="left"
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {STRINGS.chatIntro.whoMatchesYouTime}
        </Isidora>
      </Row>
    </View>
  );
};

export default React.memo(MyMatches);
