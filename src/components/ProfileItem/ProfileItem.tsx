import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';

import {Poppins, Row} from '../../components/index';
import {COLORS} from '../../configs';
import NavigationKey from '../../navigation/NavigationKey';
import {getHeightWithScaleFactor} from '../../utils/dimensions';
import styles from './styles';

interface ProfileItemProps {
  changeStatus: (title: string, status?: boolean) => void;
  item: ItemProf;
  goToPage: (item: ItemProf) => void;
  value: string;
  subValue?: string;
}

interface ItemProf {
  id: number;
  isActive: boolean;
  title: string;
  type: string;
  value: string;
  subValue?: string;
  typeName: string;
}

const ProfileItem: React.FunctionComponent<ProfileItemProps> = ({
  item,
  changeStatus,
  goToPage,
  value = '',
  subValue = '',
}) => {
  const {navigate} = useNavigation();
  const goToPageWithParams = useCallback(() => {
    if (item.type === 'map') {
      navigate(NavigationKey.Map);
    } else {
      goToPage({...item, value: value});
    }
  }, [goToPage, item, navigate, value]);

  const onChangeStatusSelect = useCallback(() => {
    changeStatus(item.title, !item.isActive);
  }, [item, changeStatus]);

  return (
    <View style={styles.viewWrapperRenderElement}>
      <Row style={styles.rowWrapper}>
        <Poppins
          lineHeight={20}
          fontSize={14}
          textAlign="left"
          fontWeight="600"
          color={COLORS.blackPearl}>
          {item.title}
        </Poppins>
        <TouchableOpacity onPress={onChangeStatusSelect}>
          <IconIonic
            name={item.isActive ? 'md-eye' : 'md-eye-off'}
            size={getHeightWithScaleFactor(22)}
            color={COLORS.bombay}
          />
        </TouchableOpacity>
      </Row>
      <TouchableOpacity style={styles.value} onPress={goToPageWithParams}>
        <Poppins
          lineHeight={20}
          fontSize={12}
          textAlign="left"
          fontWeight="500"
          color={
            value === 'Add' ||
            (item.typeName === 'attitudeToKid' &&
              value.attitudeToKidName === null)
              ? COLORS.silver85
              : COLORS.blackPearl
          }>
          {item.type === 'slider' && value && value.replace('.', "'")}
          {item.type !== 'slider' && value && value.shortName}
          {item.type !== 'slider' &&
            item.typeName !== 'gender' &&
            item.typeName !== 'attitudeToKid' &&
            value}
          {item.type !== 'slider' &&
            item.typeName !== 'gender' &&
            item.typeName === 'job' &&
            `${subValue.length > 0 ? ' at ' + subValue : ''}`}
          {item.typeName === 'attitudeToKid' &&
            (value.attitudeToKidName || 'Add')}
          {item.typeName === 'education' &&
            `${
              subValue.length > 0 && subValue !== 'Add' ? ' at ' + subValue : ''
            }`}
        </Poppins>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProfileItem);
