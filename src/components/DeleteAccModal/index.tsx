import React, {useCallback, useState} from 'react';

import {STRINGS} from '../../configs';
import ReasonToDelete from './ReasonToDelete';

interface Reason {
  title: string;
  message: string;
  content: {title: string; index: number}[];
}

const Data = new Map<number, Reason>([
  [
    0,
    {
      content: [
        {index: 1, title: STRINGS.deleteAccModa.itemTitle},
        {index: 2, title: STRINGS.deleteAccModa.itemTitle2},
        {index: 3, title: STRINGS.deleteAccModa.itemTitle3},
        {index: 3, title: STRINGS.deleteAccModa.itemTitle3},
      ],
      message: STRINGS.deleteAccModa.message,
      title: STRINGS.deleteAccModa.title,
    },
  ],
  [
    1,
    {
      content: [
        {index: 0, title: STRINGS.deleteAccModa['itemData1-1']},
        {index: 0, title: STRINGS.deleteAccModa['itemData1-2']},
      ],
      message: STRINGS.deleteAccModa.message1,
      title: STRINGS.deleteAccModa.title,
    },
  ],
  [
    2,
    {
      content: [
        {index: 0, title: STRINGS.deleteAccModa['itemData2-1']},
        {index: 0, title: STRINGS.deleteAccModa['itemData2-2']},
      ],
      message: STRINGS.deleteAccModa.message2,
      title: STRINGS.deleteAccModa.title2,
    },
  ],
  [
    3,
    {
      content: [
        {index: 0, title: STRINGS.deleteAccModa['itemData2-1']},
        {index: 0, title: STRINGS.deleteAccModa['itemData2-2']},
      ],
      message: STRINGS.deleteAccModa.message2,
      title: STRINGS.deleteAccModa.title2,
    },
  ],
]);
interface Props {
  closeModal: (value: boolean) => void;
}
const DeleteAccModal: React.FunctionComponent<Props> = ({closeModal}) => {
  const hideModal = useCallback(() => {
    closeModal(false);
  }, [closeModal]);
  const [index, setIndex] = useState(0);
  return (
    <ReasonToDelete
      isShowBack={false}
      data={Data.get(index)}
      setIndex={setIndex}
      hideModal={hideModal}
    />
  );
};
export default React.memo(DeleteAccModal);
