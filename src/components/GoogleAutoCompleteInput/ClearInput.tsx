import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import {getHeightWithScaleFactor} from '../../utils/dimensions';
import ClearXIcon from '../icons/ClearXIcon';

interface GoogleAutoCompleteInputProps {
  handleTextChange: (place: string) => void;
}

const ClearInput: React.FunctionComponent<GoogleAutoCompleteInputProps> = ({
  handleTextChange,
}) => {
  const ClearSearchField = useCallback(() => {
    handleTextChange('');
  }, [handleTextChange]);

  return (
    <TouchableOpacity
      onPress={ClearSearchField}
      style={{
        alignItems: 'center',
        borderRadius: getHeightWithScaleFactor(25),
        height: getHeightWithScaleFactor(47),
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        width: getHeightWithScaleFactor(45),
      }}>
      <ClearXIcon />
    </TouchableOpacity>
  );
};
export default React.memo(ClearInput);
