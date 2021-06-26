import {useNavigation} from '@react-navigation/native';
/* REACT */
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {COLORS, STRINGS} from '../../configs';
import NavigationKey from '../../navigation/NavigationKey';
import {MyLikes as MyLikesType} from '../../store/generated/graphql';
import {FastImageComponent, Isidora} from '../index';
import styles from './styles';

/* MODULES */

interface Props {
  load: boolean;
  myLikes: MyLikesType;
}

const MyLikes: React.FunctionComponent<Props> = ({load, myLikes = {}}) => {
  const {navigate} = useNavigation();

  const onPressMyLikes = useCallback(() => {
    navigate(NavigationKey.WhoLikesYou);
  }, [navigate]);

  return (
    <View style={styles.likesList}>
      <Isidora
        lineHeight={24}
        fontSize={18}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{textTransform: 'uppercase'}}>
        {STRINGS.chatIntro.whoLikesYou}
      </Isidora>
      <TouchableOpacity
        onPress={onPressMyLikes}
        disabled={load}
        style={[styles.button, {marginTop: 20}]}>
        <View style={[styles.likeItem, {borderColor: COLORS.aquamarineBlue}]} />
        <View style={[styles.likeItem, {borderColor: COLORS.white}]} />
        <View style={[styles.likeItem, {borderColor: COLORS.aquamarineBlue}]} />
        <View style={[styles.likeItem, {borderColor: COLORS.white}]} />
        <View
          style={[
            styles.likeItem,
            {
              backgroundColor: COLORS.sand,
              borderColor: COLORS.aquamarineBlue,
              overflow: 'hidden',
            },
          ]}>
          {!load && myLikes?.lastSender?.profilePhoto && (
            <FastImageComponent
              style={{
                borderRadius: 50,
                height: 60,
                width: 60,
              }}
              uri={myLikes.lastSender.profilePhoto}
            />
          )}
        </View>
      </TouchableOpacity>
      {Number(myLikes.count) > 0 && (
        <Isidora
          lineHeight={22}
          fontSize={12}
          textAlign="center"
          fontWeight="800"
          color={COLORS.blazeLightBlue}
          style={styles.likeCounter}>
          {Number(myLikes.count)}
        </Isidora>
      )}
    </View>
  );
};

export default React.memo(MyLikes);
