import React from 'react';
import {TouchableOpacity} from 'react-native';

import {COLORS} from '../../configs';
import {PhotoActionType} from '../../hooks/useUserPhotos';
import EditIcon from '../icons/EditIcon';

interface Props {
  onPressReplace: () => void;
}

const PhotoActionButton: React.FunctionComponent<Props> = ({
  onPressReplace,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressReplace}
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.raspberry,
        borderRadius: 50,
        height: 48,
        justifyContent: 'center',
        marginTop: '9%',
        width: 48,
      }}>
      <EditIcon />
    </TouchableOpacity>
  );
};

export default React.memo(PhotoActionButton);
