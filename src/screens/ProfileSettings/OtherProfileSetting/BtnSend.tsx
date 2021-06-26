import React from 'react';
import {TouchableOpacity} from 'react-native';

import {COLORS} from '../../../configs';
import strings from '../../../configs/styles/strings';
import {getWidthWithScaleFactor} from '../../../utils/dimensions';
import {Isidora} from "../../../components";

export interface Props {
  onPress: () => void;
  isActive: boolean;
}

const BtnSave: React.FunctionComponent<Props> = ({onPress, isActive}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!isActive}
      style={{
        paddingRight: getWidthWithScaleFactor(24),
      }}>
      <Isidora
        lineHeight={24}
        fontSize={18}
        fontWeight="900"
        color={isActive ? COLORS.raspberry : COLORS.raspberry20}>
        {strings.settings.btnSend}
      </Isidora>
    </TouchableOpacity>
  );
};
export default React.memo(BtnSave);
