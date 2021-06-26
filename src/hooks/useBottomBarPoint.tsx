import {useCallback, useEffect, useState} from 'react';
import {singletonHook} from 'react-singleton-hook';

import {useMyPopularityLazyQuery} from '../store/generated/graphql';

const initialUnreadMessage = false;
let globalSetAdminMessageCount = (value: string): void | null => null;

export const useBottomBarPoint = singletonHook(initialUnreadMessage, () => {
  const [getMyPopularity, {data}] = useMyPopularityLazyQuery();
  const [isUnreadMessage, setIsUnreadMessage] = useState(false);

  useEffect(() => {
    getMyPopularity();
  }, [getMyPopularity]);

  const updateMessageStatus = useCallback(
    (adminMessage: string | null | undefined) => {
      if (
        data?.myPopularity.conversations.find((el) =>
          Number(el.unreadMessagesCount),
        )
      ) {
        setIsUnreadMessage(true);
      } else if (
        data?.myPopularity.intros.find((el) => Number(el.unreadMessagesCount))
      ) {
        setIsUnreadMessage(true);
      } else if (Number(adminMessage)) {
        setIsUnreadMessage(true);
      } else if (Number(data?.myPopularity.likes?.count)) {
        setIsUnreadMessage(true);
      } else {
        setIsUnreadMessage(false);
      }
    },
    [data],
  );

  globalSetAdminMessageCount = useCallback(
    (value: string) => {
      updateMessageStatus(value);
    },
    [updateMessageStatus],
  );

  useEffect(() => {
    if (data) {
      updateMessageStatus(data?.myPopularity?.advertsInfo?.countNewAdverts);
    }
  }, [data, updateMessageStatus]);

  return isUnreadMessage;
});

export const setAdminMessageCountHook = (value: string) =>
  globalSetAdminMessageCount(value);
