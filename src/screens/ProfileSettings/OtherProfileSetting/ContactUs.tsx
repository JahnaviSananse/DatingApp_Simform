import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';

import {ArrowRight, Isidora} from '../../../components';
import {COLORS} from '../../../configs';
import NavigationKey from '../../../navigation/NavigationKey';
import {useSurveyQuery} from '../../../store/generated/graphql';
import {getWidthWithScaleFactor} from '../../../utils/dimensions';

const ContactUs: React.FunctionComponent = () => {
  const {navigate} = useNavigation();

  const {data} = useSurveyQuery({
    variables: {
      name: 'user_query',
    },
  });

  const Btn = useCallback(
    (title, onPress, styles?) => (
      <TouchableOpacity
        key={title}
        onPress={onPress}
        style={{
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: COLORS.blazeBlue20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          minHeight: 56,
          ...styles,
        }}>
        <Isidora
          lineHeight={24}
          fontSize={16}
          textAlign="left"
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {title}
        </Isidora>
        <ArrowRight color={COLORS.raspberry} />
      </TouchableOpacity>
    ),
    [],
  );
  const goToSendMail = useCallback(
    (header: string, id: string) =>
      navigate(NavigationKey.SendMailSettings, {header, reasonId: id}),
    [navigate],
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
      {data?.survey?.modals &&
        data?.survey?.modals[0]?.attributives?.map((el) =>
          Btn(el.title, () => {
            goToSendMail(el?.header ?? '', el.id);
          }),
        )}
    </View>
  );
};
export default React.memo(ContactUs);
