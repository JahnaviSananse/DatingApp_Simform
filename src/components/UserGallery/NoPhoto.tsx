import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';

import {COLORS} from '../../configs';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import AddPhotoIcon from '../icons/AddPhotoIcon';
import Poppins from '../texts/Poppins';

interface Props {
  size: number;
  primary: boolean;
  canUpload: boolean;
  onShowFilePicker: () => void;
}

const NoPhoto: React.FunctionComponent<Props> = ({
  size,
  primary,
  canUpload,
  onShowFilePicker,
}) => {
  const onPress = useCallback(() => {
    if (canUpload) {
      onShowFilePicker();
    }
  }, [canUpload, onShowFilePicker]);

  return (
    <Shadow
      inner
      useArt
      style={{
        alignItems: 'center',
        backgroundColor: colors.catskillWhite,
        borderRadius: 12,
        height: size,
        justifyContent: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        width: size,
      }}>
      <>
        <TouchableOpacity onPress={onPress}>
          <AddPhotoIcon active={canUpload} />
        </TouchableOpacity>
        {primary && (
          <Poppins
            fontSize={11}
            lineHeight={14}
            color={colors.jumbo}
            style={{
              bottom: size / 6,
              left: 0,
              position: 'absolute',
              right: 0,
            }}>
            {strings.photoFlow.other.primaryPhoto}
          </Poppins>
        )}
      </>
    </Shadow>
  );
};

export default React.memo(NoPhoto);
