import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, StatusBar, View} from 'react-native';
import {
  RESULTS,
  checkNotifications,
  openSettings,
} from 'react-native-permissions';

import {Isidora, Row} from '../../../components';
import HeaderLeftButton from '../../../components/header/headerLeftButton/headerLeftButton';
import {COLORS, STRINGS} from '../../../configs';
import useCheckLocationBlock from '../../../hooks/useCheckLocationBlock';
import {
  useMeQuery,
  useUserAccountUpdateMutation,
} from '../../../store/generated/graphql';
import {getWidthWithScaleFactor} from '../../../utils/dimensions';
import {CustomSwitch} from '../CustomComponents/CustomSwitch';

const dataSettings: Array<{name: string; type: number}> = [
  {name: 'New Matches', type: 0},
  {name: 'New Likes', type: 1},
  {name: 'New SuperLikes', type: 2},
  {name: 'New Messages', type: 3},
  {name: 'Expiring Messages', type: 4},
  {name: 'Expiring Conversations', type: 5},
  {name: 'All things FFWD', type: 6},
];

const PushNotificationSettings: React.FunctionComponent = () => {
  const {setOptions, goBack} = useNavigation();
  const {checkLocation} = useCheckLocationBlock();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderLeftButton isCross color={COLORS.blazeBlue} onPress={goBack} />
      ),
    });
  }, [goBack, setOptions]);

  const {data} = useMeQuery();
  const [updateUserAccount] = useUserAccountUpdateMutation();

  const [matches, setMatches] = useState<boolean | null | undefined>();
  const [likes, setLikes] = useState<boolean | null | undefined>();
  const [superLikes, setSuperLikes] = useState<boolean | null | undefined>();
  const [messages, setMessages] = useState<boolean | null | undefined>();
  const [expiringMessages, setExpiringMessages] = useState<
    boolean | null | undefined
  >();
  const [conversations, setConversations] = useState<
    boolean | null | undefined
  >();
  const [allFFWD, setAllFFWD] = useState<boolean | null | undefined>();

  useEffect(() => {
    if (
      matches &&
      likes &&
      superLikes &&
      messages &&
      expiringMessages &&
      conversations
    ) {
      setAllFFWD(true);
    } else {
      setAllFFWD(false);
    }
  }, [matches, likes, superLikes, messages, expiringMessages, conversations]);

  useEffect(() => {
    checkNotifications().then(({status, settings}) => {
      if (status === RESULTS.GRANTED && data?.me && data) {
        setMatches(data.me.pushNewMatch);
        setLikes(data.me.pushNewLike);
        setSuperLikes(data.me.pushNewSuperLike);
        setMessages(data.me.pushNewMessage);
        setExpiringMessages(data.me.pushExpiringMessages);
        setConversations(data.me.pushExpiringConversation);
      } else if (status === RESULTS.BLOCKED) {
        setMatches(false);
        setLikes(false);
        setSuperLikes(false);
        setMessages(false);
        setExpiringMessages(false);
        setConversations(false);
        setAllFFWD(false);
      }
    });
  }, [data]);

  const updataPush = useCallback(
    (name, value) => {
      updateUserAccount({
        variables: {
          input: {
            [name]: value,
          },
        },
      });
    },
    [updateUserAccount],
  );

  const updateAll = useCallback(
    (value: boolean) => {
      setMatches(value);
      setLikes(value);
      setSuperLikes(value);
      setMessages(value);
      setExpiringMessages(value);
      setConversations(value);
      updateUserAccount({
        variables: {
          input: {
            pushExpiringConversation: value,
            pushExpiringMessages: value,
            pushNewLike: value,
            pushNewMatch: value,
            pushNewMessage: value,
            pushNewSuperLike: value,
          },
        },
      });
    },
    [updateUserAccount],
  );

  const updateStatus = useCallback(
    (type: number) => {
      switch (type) {
        case 0:
          updataPush('pushNewMatch', !matches);
          setMatches(!matches);
          break;
        case 1:
          updataPush('pushNewLike', !likes);
          setLikes(!likes);
          break;
        case 2:
          updataPush('pushNewSuperLike', !superLikes);
          setSuperLikes(!superLikes);
          break;
        case 3:
          updataPush('pushNewMessage', !messages);
          setMessages(!messages);
          break;
        case 4:
          updataPush('pushExpiringMessages', !expiringMessages);
          setExpiringMessages(!expiringMessages);
          break;
        case 5:
          updataPush('pushExpiringConversation', !conversations);
          setConversations(!conversations);
          break;
        case 6:
          updateAll(!allFFWD);
          setAllFFWD(!allFFWD);
          break;
      }
    },
    [
      matches,
      updataPush,
      likes,
      superLikes,
      messages,
      expiringMessages,
      conversations,
      updateAll,
      allFFWD,
    ],
  );
  const getStatusValue = useCallback(
    (type: number) => {
      switch (type) {
        case 0:
          return matches;
        case 1:
          return likes;
        case 2:
          return superLikes;
        case 3:
          return messages;
        case 4:
          return expiringMessages;
        case 5:
          return conversations;
        case 6:
          return allFFWD;
      }
    },
    [
      matches,
      likes,
      superLikes,
      messages,
      expiringMessages,
      conversations,
      allFFWD,
    ],
  );

  const updateStatusHandler = useCallback(
    async (item) => {
      const isBlockedPermission = await checkNotifications();
      if (isBlockedPermission.status === RESULTS.BLOCKED) {
        Alert.alert(
          'Notifications',
          'Do you want to enable notifications?',
          [
            {
              onPress: () => console.log('Cancel'),
              text: STRINGS.settings.deleAccCencel,
            },
            {
              onPress: openSettings,
              text: STRINGS.mapPage.positive,
            },
          ],
          {cancelable: false},
        );
      }
      if (isBlockedPermission.status === RESULTS.GRANTED) {
        updateStatus(item.type);
      }
    },
    [updateStatus],
  );

  const renderListSettings = useCallback(
    ({item}) => (
      <View
        style={{
          borderBottomColor: COLORS.blazeBlue20,
          borderBottomWidth: 0.5,
          justifyContent: 'center',
          minHeight: 60,
        }}>
        <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
          <Isidora
            lineHeight={24}
            fontSize={16}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}>
            {item.name}
          </Isidora>
          <CustomSwitch
            onValueChange={updateStatusHandler}
            value={!!getStatusValue(item.type)}
            item={item}
          />
          {/* <Switch
            trackColor={{false: COLORS.silver, true: COLORS.apricot}}
            onValueChange={() => updateStatus(item.type)}
            value={getStatusValue(item.type)}
          /> */}
        </Row>
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      matches,
      likes,
      superLikes,
      messages,
      expiringMessages,
      conversations,
      allFFWD,
      getStatusValue,
      updateStatus,
    ],
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.sand,
        flex: 1,
        paddingHorizontal: getWidthWithScaleFactor(24),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <FlatList
        data={dataSettings}
        keyExtractor={useCallback((item) => item.name, [])}
        renderItem={renderListSettings}
      />
    </View>
  );
};
export default React.memo(PushNotificationSettings);
