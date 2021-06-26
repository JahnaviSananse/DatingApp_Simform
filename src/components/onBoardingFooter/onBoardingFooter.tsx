import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import RoundButtonFooter from '../../components/roundButtonFooter/roundButtonFooter';
import {COLORS} from '../../configs';
import dimensions, {getHeightWithScaleFactor} from '../../utils/dimensions';

interface Props {
  onPress?: () => void;
  activeButton?: boolean;
  value?: number;
  showButtonProgress?: boolean;
  clearFooter?: boolean;
  keyboardValue?: number;
  noInput?: boolean;
}

const onBoardingFooter: React.FunctionComponent<Props> = (props) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={getHeightWithScaleFactor(
        props.keyboardValue ?? 75,
      )}
      behavior={!props.noInput && Platform.OS == 'ios' ? 'position' : 'height'}>
      {/* <ImageBackground
        source={FOOTER}
        resizeMode="cover"
        style={styles.imageBGStyles}> */}
      {!props.clearFooter && (
        <RoundButtonFooter
          showButtonProgress={
            props.showButtonProgress ? props.showButtonProgress : true
          }
          value={props.value}
          onPress={props.onPress}
          active={props.activeButton}
          style={{bottom: 33, left: dimensions.WIDTH - 76}}
          color={props.activeButton ? COLORS.blazeBlue : COLORS.blazeBlue25}
        />
      )}
      {/* </ImageBackground> */}
    </KeyboardAvoidingView>
  );
};

export default React.memo(onBoardingFooter);
