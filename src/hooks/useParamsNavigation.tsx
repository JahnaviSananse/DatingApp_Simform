import {NavigationProp} from '@react-navigation/core/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import {useCallback} from 'react';

import {NavigationKeyType} from '../navigation/NavigationKey';
import {NavigationParamsTypes} from '../navigation/NavigationParamsTypes';

type NavigateType = <T extends NavigationParamsTypes = never>(
  key: NavigationKeyType,
  params?: T,
) => void;

type ParamsNavigationResultType = {
  navigate: NavigateType;
  default: NavigationProp<ParamListBase>;
};

export default function useParamsNavigation(): ParamsNavigationResultType {
  const {navigate} = useNavigation();

  const paramsNavigate = useCallback<NavigateType>(
    (key, params) => {
      if (params) {
        navigate(key, params);
      } else {
        navigate(key);
      }
    },
    [navigate],
  );

  return {default: useNavigation(), navigate: paramsNavigate};
}
