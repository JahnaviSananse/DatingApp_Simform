import React from 'react';
import {Text} from 'react-native';

import {COLORS} from '../../configs';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '../../utils/dimensions';
import {BaseFontProps} from './BaseTypes';
import {
  IsidoraFontWeightType,
  getIsidoraFontByWeight,
  getIsidoraFullFontFamily,
} from './IsidoraTypes';

const Isidora: React.FunctionComponent<BaseFontProps<
  IsidoraFontWeightType
>> = ({
  message,
  children,
  font,
  fontStyle = 'normal',
  fontWeight = '900',
  color = COLORS.blazeBlue,
  textAlign = 'center',
  fontSize = 14,
  lineHeight = 20,
  style,
  ...props
}) => {
  const fontFamily = font
    ? getIsidoraFullFontFamily(font)
    : getIsidoraFontByWeight(fontStyle, fontWeight);
  const lineHeightScale = getHeightWithScaleFactor(lineHeight);

  return (
    <Text
      numberOfLines={message ? 1 : 0}
      allowFontScaling={false}
      ellipsizeMode="tail"
      style={[
        {
          color,
          fontFamily: fontFamily,
          fontSize: getFontWithScaleFactor(fontSize),
          lineHeight: lineHeightScale,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default React.memo(Isidora);
