import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import {Isidora} from '..';

// type HeaderSizeType = {
//   min: number;
//   max: number;
// };
//
// const HEADER_HEIGHT: HeaderSizeType = {
//   max: 80,
//   min: 60,
// };
//
// const HEADER_FONT_SIZE: HeaderSizeType = {
//   max: 32,
//   min: 24,
// };
//
// const HEADER_LINE_HEIGHT: HeaderSizeType = {
//   max: 48,
//   min: 36,
// };

interface EditProfileHeaderProps {
  username: string;
  // scrollY: Animated.AnimatedValue;
  onDonePress: () => void;
}

const EditProfileHeader: React.FunctionComponent<EditProfileHeaderProps> = ({
  username,
  // scrollY,
  onDonePress,
}) => {
  // const headerHeight = scrollY.interpolate({
  //   extrapolate: 'clamp',
  //   inputRange: [0, HEADER_HEIGHT.max - HEADER_HEIGHT.min],
  //   outputRange: [HEADER_HEIGHT.max, HEADER_HEIGHT.min],
  // });
  //
  // const headerFontSize = scrollY.interpolate({
  //   extrapolate: 'clamp',
  //   inputRange: [0, HEADER_FONT_SIZE.max - HEADER_FONT_SIZE.min],
  //   outputRange: [HEADER_FONT_SIZE.max, HEADER_FONT_SIZE.min],
  // });
  //
  // const headerLineHeight = scrollY.interpolate({
  //   extrapolate: 'clamp',
  //   inputRange: [0, HEADER_LINE_HEIGHT.max - HEADER_LINE_HEIGHT.min],
  //   outputRange: [HEADER_LINE_HEIGHT.max, HEADER_LINE_HEIGHT.min],
  // });

  return (
    // <Animated.View
    //   style={{
    //     height: headerHeight,
    //     justifyContent: 'flex-end',
    //     paddingBottom: 12,
    //     paddingHorizontal: 24,
    //   }}>
    //   <View
    //     style={{
    //       alignContent: 'center',
    //       alignItems: 'center',
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //     }}>
    //     <View style={{flex: 1}} />
    //     <Animated.Text
    //       numberOfLines={1}
    //       style={{
    //         color: colors.blazeBlue,
    //         fontFamily: getIsidoraFontByWeight('normal', '900'),
    //         fontSize: headerFontSize,
    //         lineHeight: headerLineHeight,
    //         maxWidth: '72%',
    //         textAlign: 'center',
    //       }}>
    //       {username}
    //     </Animated.Text>
    //     <DoneButton onDonePress={onDonePress} />
    //   </View>
    // </Animated.View>
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 13,
        paddingHorizontal: 24,
        paddingTop: 24,
      }}>
      <Isidora
        fontSize={18}
        lineHeight={24}
        fontWeight="900"
        textAlign="right"
        color={colors.sand}>
        {strings.editProfile.header.done}
      </Isidora>
      <Isidora
        fontSize={24}
        lineHeight={24}
        textAlign="center"
        fontWeight="900"
        numberOfLines={1}
        style={{flexGrow: 1, maxWidth: '72%'}}>
        {username}
      </Isidora>
      <DoneButton onDonePress={onDonePress} />
    </View>
  );
};

interface DoneButtonProps {
  onDonePress: () => void;
}

const DoneButton: React.FunctionComponent<DoneButtonProps> = ({
  onDonePress,
}) => {
  return (
    <TouchableOpacity
      onPress={onDonePress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Isidora
        fontSize={18}
        lineHeight={24}
        fontWeight="900"
        textAlign="right"
        color={colors.raspberry}>
        {strings.editProfile.header.done}
      </Isidora>
    </TouchableOpacity>
  );
};

export default React.memo(EditProfileHeader);
