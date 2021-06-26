import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {COLORS, STRINGS} from '../../configs';
import styles from '../../screens/ChatIntro/styles';
import {IconChat} from '../../store/generated/graphql';
import dimensions, {getHeightWithScaleFactor} from '../../utils/dimensions';
import {Isidora, MessageItem, Row, Timing} from '../index';

type HeaderProps = {
  isIntro: boolean;
  data: {
    countNewAdverts: string | null | undefined;
    lastMessage?: string | null;
  };
  setAdminMessageCount: (value: string) => void;
};

const HeaderChatList: React.FunctionComponent<HeaderProps> = React.memo(
  ({isIntro, data, setAdminMessageCount}) => {
    return (
      <>
        <Row style={styles.listHeaderWrapper}>
          <View style={styles.listHeaderIcon}>
            <Timing />
          </View>
          <Isidora
            lineHeight={20}
            fontSize={13}
            textAlign="center"
            fontWeight="600"
            color={COLORS.blazeBlue}>
            {isIntro
              ? STRINGS.chatIntro.listHeaderTitleIntro
              : STRINGS.chatIntro.listHeaderTitleConversations}
          </Isidora>
        </Row>
        <MessageItem
          item={{
            item: {
              actual: true,
              isAdmin: true,
              lastMessage: data?.lastMessage || '',
              matchUser: {firstName: 'The FFWD Crew'},
              unreadMessagesCount: data?.countNewAdverts ?? '0',
            },
          }}
          setAdminMessageCount={setAdminMessageCount}
        />
      </>
    );
  },
);

type SwipeListProps = {
  isIntros: boolean;
  intros: IconChat[];
  conversations: IconChat[];
  isPhotoPassed: boolean | undefined;
  isVideoPassed: boolean;
  isDataChecking: boolean;
  setIdIntroChat: (value: string | null) => void;
  adminMessageCount: string | null | undefined;
  setAdminMessageCount: (value: string) => void;
  renderUnderListItemButtons: () => React.FunctionComponent;
  renderUnderListItemButtonsConvo: () => React.FunctionComponent;
  refreshList: boolean;
  onRefreshList: () => void;
  action: boolean;
  setAction: (value: boolean) => void;
  lastMessageAdmin: string | null | undefined;
};

const SwipeListMessages: React.FunctionComponent<SwipeListProps> = ({
  isIntros,
  intros,
  conversations,
  isPhotoPassed,
  isVideoPassed,
  isDataChecking,
  setIdIntroChat,
  adminMessageCount,
  setAdminMessageCount,
  renderUnderListItemButtons,
  renderUnderListItemButtonsConvo,
  refreshList,
  onRefreshList,
  action,
  setAction,
  lastMessageAdmin,
}) => {
  const [rows, setRows] = useState();
  // const [action, setAction] = useState(false);
  const [openRow, setOpenRow] = useState<string | null>(null);

  useEffect(() => {
    if (rows && action) {
      rows.closeRow();
      setAction(false);
      setOpenRow(null);
    }
  }, [rows, action, setAction]);

  const keyExtractor = useCallback((item) => item.chatId, []);

  const setActiveRow = useCallback((rowKey, rowMap) => {
    const rowRef = rowMap[rowKey];
    setRows(rowRef);
    setOpenRow(rowKey);
  }, []);

  const onCloseRow = useCallback(() => {
    setOpenRow(null);
  }, []);

  const renderListItemComponent = useCallback(
    (item, isIntro) => {
      return (
        <MessageItem
          item={item}
          isIntro={isIntro}
          myPhotoValidation={isPhotoPassed}
          myVideoValidation={isVideoPassed}
          isDataChecking={isDataChecking}
          {...(isIntro ? {setIdIntroChat: setIdIntroChat} : {})}
          isRowOpen={openRow == item.item.chatId}
        />
      );
    },
    [
      isDataChecking,
      isPhotoPassed,
      isVideoPassed,
      openRow,
      setIdIntroChat,
    ],
  );

  const renderItems = useCallback(
    (item, isIntros) =>
      isIntros
        ? renderListItemComponent(item, true)
        : renderListItemComponent(item, false),
    [renderListItemComponent],
  );

  return (
    <SwipeListView
      data={isIntros ? intros : conversations}
      // eslint-disable-next-line react/jsx-no-bind
      renderItem={(item) => renderItems(item, isIntros)}
      ListHeaderComponentStyle={{
        marginBottom: getHeightWithScaleFactor(10),
      }}
      ListFooterComponentStyle={{
        marginTop: getHeightWithScaleFactor(50),
      }}
      contentContainerStyle={{
        paddingBottom: 140,
      }}
      ListHeaderComponent={
        <HeaderChatList
          data={{
            countNewAdverts: adminMessageCount,
            lastMessage: lastMessageAdmin ?? '',
          }}
          isIntro={isIntros}
          setAdminMessageCount={setAdminMessageCount}
        />
      }
      renderHiddenItem={
        isIntros ? renderUnderListItemButtons : renderUnderListItemButtonsConvo
      }
      refreshing={refreshList}
      onRefresh={onRefreshList}
      rightOpenValue={
        isIntros ? -dimensions.WIDTH * 0.43 : -dimensions.WIDTH * 0.65
      }
      onScrollBeginDrag={Keyboard.dismiss}
      keyExtractor={keyExtractor}
      style={{marginTop: 0}}
      previewOpenDelay={3000}
      disableRightSwipe
      onRowOpen={setActiveRow}
      onRowClose={onCloseRow}
      directionalDistanceChangeThreshold={6}
      swipeToOpenPercent={1}
      swipeToClosePercent={10}
    />
  );
};
export default React.memo(SwipeListMessages);
