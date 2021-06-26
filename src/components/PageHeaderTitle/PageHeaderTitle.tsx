import React, {useMemo} from 'react';
import {View, ViewStyle} from 'react-native';

import {COLORS, STRINGS} from '../../configs';
import {Isidora} from '../index';
import styles from './styles';

export interface IsidoraProps {
  groupName:
    | 'whatsGender'
    | 'otherGender'
    | 'onBoardingPhoto'
    | 'onBoardingPhone'
    | 'onBoardingName'
    | 'onBoardingCode'
    | 'onBoardingBirthday'
    | 'emailScreen'
    | 'gender';
  // isOnlyTitle?: boolean;
  phone?: string;
  propStyles?: ViewStyle;
}

const Titles: React.FunctionComponent<IsidoraProps> = ({
  groupName,
  // isOnlyTitle,
  phone = '',
  propStyles,
}) => {
  const memoizedAboutString = useMemo(
    () => `${STRINGS[groupName].subTitle} ${phone}`,
    [groupName, phone],
  );

  return (
    <View
      // style={[!isOnlyTitle ? null : styles.marginBottomSubTitle, propStyles]}>
      style={[styles.marginBottomSubTitle, propStyles]}>
      {/*<View*/}
      {/*  style={{*/}
      {/*    alignItems: 'center',*/}
      {/*    alignSelf: 'center',*/}
      {/*    flex: 1,*/}
      {/*    justifyContent: 'center',*/}
      {/*    paddingHorizontal: 40,*/}
      {/*  }}>*/}
      {/*  <FastImageComponent*/}
      {/*    resizeMode="contain"*/}
      {/*    style={{*/}
      {/*      height: 40,*/}
      {/*      marginTop: 47,*/}
      {/*      width: 117,*/}
      {/*    }}*/}
      {/*    uri={FfwdLogo}*/}
      {/*  />*/}
      {/*</View>*/}

      <Isidora
        lineHeight={28}
        fontSize={24}
        textAlign="center"
        style={[
          styles.marginBottomSubTitle,
          {fontWeight: '900', marginBottom: 24, marginTop: 3},
          propStyles,
        ]}
        color={COLORS.blazeBlue}>
        {STRINGS[groupName].label}
      </Isidora>
      {/* {!isOnlyTitle ? (
        <Isidora
          color={COLORS.blazeBlue}
          lineHeight={24}
          fontSize={14}
          font="regular"
          textAlign="left"
          style={[styles.marginBottomSubTitle, propStyles]}
          {memoizedAboutString}
        </Isidora>
      ) : null} */}
    </View>
  );
};

export default React.memo(Titles);
