import {useState} from 'react';
import {singletonHook} from 'react-singleton-hook';

const initialUpdate = {
  isUpdateLookBook: true,
  setIsUpdateLook: (value: boolean): void | null => null,
};

export const useIsNeedUpdateLookBook = singletonHook(initialUpdate, () => {
  const [isUpdateLookBook, setIsUpdateLook] = useState(
    initialUpdate.isUpdateLookBook,
  );
  return {isUpdateLookBook, setIsUpdateLook};
});
