import React, {useCallback, useEffect, useState} from 'react';

import {useSurveyLazyQuery} from '../../store/generated/graphql';
import SelectReason from './SelectReason';
import TellUsMore from './TellUsMore';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  userId: string;
  type?: 'unmatch' | 'report' | null;
  onSuccessesSend?: () => void;
}
const BlockReportModal: React.FunctionComponent<Props> = ({
  isVisible,
  closeModal,
  userId,
  type = 'report',
  onSuccessesSend,
}) => {
  const [selectedReason, setSelectedReason] = useState({
    mandatory: false,
    reasonId: '',
  });

  const [getReasonList, {data, loading}] = useSurveyLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (isVisible) {
      getReasonList({
        variables: {
          name:
            type === 'report' ? 'block_user_account' : 'unmatch_user_account',
        },
      });
    }
  }, [getReasonList, isVisible, type]);
  const closeCleanModal = useCallback(() => {
    setSelectedReason({mandatory: false, reasonId: ''});
    closeModal();
  }, [closeModal]);

  return selectedReason.reasonId ? (
    <TellUsMore
      isVisible={isVisible}
      selectedReason={selectedReason}
      closeModal={closeCleanModal}
      userId={userId}
      type={type}
      onSuccessesSend={onSuccessesSend}
    />
  ) : (
    <SelectReason
      isVisible={isVisible}
      onSelectReason={setSelectedReason}
      data={data?.survey}
      closeModal={closeModal}
      type={type}
      loading={loading}
    />
  );
};

export default React.memo(BlockReportModal);
