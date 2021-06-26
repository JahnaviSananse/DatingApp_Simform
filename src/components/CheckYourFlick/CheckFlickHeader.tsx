import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import NavigationKey from '../../navigation/NavigationKey';
import dimensions from '../../utils/dimensions';
import AudioRoundMutedIcon from '../icons/AudioRoundMutedIcon';
import CloseIcon from '../icons/CloseIcon';
import HeaderGradient from '../icons/HeaderGradient';
import {Isidora} from '../index';
import ProgressDots from './ProgressDots';

interface CheckFlickHeaderProps {
  activeDots: number;
  onMute: () => void;
  muted: boolean;
  showTitle?: boolean;
  height?: number;
  problemVideoIndexes: number[];
  onDotPress: (index: number) => void;
  isShowHeaderGradient: boolean;
}

const CheckFlickHeader: React.FunctionComponent<CheckFlickHeaderProps> = ({
  activeDots,
  onMute,
  showTitle = false,
  height,
  muted,
  problemVideoIndexes,
  onDotPress,
  isShowHeaderGradient,
}) => {
  const {navigate} = useNavigation();

  const gradientHeight = useMemo(() => {
    return getStatusBarHeight() + 120;
  }, []);

  const onClose = useCallback(() => {
    navigate(NavigationKey.MatchingScreen);
  }, [navigate]);

  return (
    <>
      {isShowHeaderGradient && (
        <View style={{position: 'absolute'}}>
          <HeaderGradient
            height={height ?? gradientHeight}
            width={dimensions.WIDTH}
          />
        </View>
      )}
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'column',
          left: 0,
          position: 'absolute',
          right: 0,
          top: showTitle ? 30 : 4,
        }}>
        {showTitle && (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30,
              paddingHorizontal: 30,
            }}>
            <CloseButton onClose={onClose} />
            <Isidora
              fontWeight="600"
              fontSize={20}
              lineHeight={24}
              style={{
                textAlignVertical: 'center',
              }}
              color={colors.white}>
              {strings.checkYourFlick.title}
            </Isidora>
            <View style={{flex: 1}} />
          </View>
        )}
        <View>
          <ProgressDots
            activeDots={activeDots}
            onDotPress={onDotPress}
            problemVideoIndexes={problemVideoIndexes}
          />
          <View
            style={{
              bottom: 0,
              justifyContent: 'center',
              position: 'absolute',
              right: 18,
              top: 32,
            }}>
            <TouchableOpacity activeOpacity={5} onPress={onMute}>
              <AudioRoundMutedIcon strokeWidth={muted ? 2 : 0} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({onClose}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onClose}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CheckFlickHeader);
