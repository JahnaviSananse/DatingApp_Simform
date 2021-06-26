import React, {useCallback} from 'react';

import {SurveyQuery} from '../../../store/generated/graphql';
import {ReasonItem} from '../SelectReason/styles';

type CustomReasonProps = {
  onPress: (item: SurveyQuery) => void;
  item: SurveyQuery;
  children: React.ReactNode;
};

const CustomReason: React.FunctionComponent<CustomReasonProps> = ({
  onPress,
  item,
  children,
}) => {
  const onCompareValuePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

  return <ReasonItem onPress={onCompareValuePress}>{children}</ReasonItem>;
};

export {CustomReason};
