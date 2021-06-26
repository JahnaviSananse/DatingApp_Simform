import React from 'react';
import {Text} from 'react-native';

import {COLORS} from '../../configs';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '../../utils/dimensions';
import {BaseFontProps} from './BaseTypes';
import {
  PoppinsFontWeightType,
  getPoppinsFontByWeight,
  getPoppinsFullFontFamily,
} from './PoppinsTypes';

const Poppins: React.FunctionComponent<BaseFontProps<
  PoppinsFontWeightType
>> = ({
  message,
  children,
  font,
  fontStyle = 'normal',
  fontWeight = '600',
  color = COLORS.blazeBlue,
  textAlign = 'center',
  fontSize = 14,
  lineHeight = 20,
  style,
  ...props
}) => {
  const fontFamily = font
    ? getPoppinsFullFontFamily(font)
    : getPoppinsFontByWeight(fontStyle, fontWeight);
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

export default React.memo(Poppins);
