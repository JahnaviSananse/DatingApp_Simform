import React from 'react';
import {Text} from 'react-native';

import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '../../utils/dimensions';
import {BaseFontProps} from './BaseTypes';
import {
  SanFranciscoFontWeightType,
  getSanFranciscoFontByWeight,
  getSanFranciscoFullFontFamily,
} from './SanFranciscoTypes';

const SanFrancisco: React.FunctionComponent<BaseFontProps<
  SanFranciscoFontWeightType
>> = ({
  children,
  font,
  fontStyle = 'normal',
  fontWeight = '400',
  color = 'white',
  textAlign = 'center',
  fontSize = 14,
  lineHeight = getHeightWithScaleFactor(20),
  style,
  ...props
}) => {
  const fontFamily = font
    ? getSanFranciscoFullFontFamily(font)
    : getSanFranciscoFontByWeight(fontStyle, fontWeight);
  const lineHeightScale = getHeightWithScaleFactor(lineHeight);

  return (
    <Text
      allowFontScaling={false}
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

export default React.memo(SanFrancisco);
