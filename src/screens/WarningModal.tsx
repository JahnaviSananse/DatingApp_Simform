import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';

import WarningModalContent from '../components/WarningModalContent';
import {NavigationParams} from '../navigation/NavigationParams';
import dimensions from '../utils/dimensions';

type ScreenRouteProp = RouteProp<NavigationParams, 'WarningModal'>;

const WarningModal: React.FunctionComponent = () => {
  const {params} = useRoute<ScreenRouteProp>();

  const {goBack} = useNavigation();

  const onClose = useCallback(() => {
    goBack();
  }, [goBack]);

  const onPositive = useCallback(async () => {
    goBack();
    params.onPressPositive();
  }, [goBack, params]);

  const onNegative = useCallback(async () => {
    goBack();
    params.onPressNegative();
  }, [goBack, params]);

  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        marginTop: dimensions.HEIGHT * 0.23,
        width: dimensions.WIDTH * 0.88,
      }}>
      <WarningModalContent
        {...params}
        onPressPositive={onPositive}
        onPressNegative={onNegative}
        onClose={onClose}
      />
    </View>
  );
};

export default React.memo(WarningModal);
