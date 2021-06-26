import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components';

import colors from '../configs/styles/colors';
import dimensions from '../utils/dimensions';
import Icon, {IconName} from './Icon';
import {BaseFontProps} from './texts/BaseTypes';
import Isidora from './texts/Isidora';
import {IsidoraFontWeightType} from './texts/IsidoraTypes';

type ButtonStyle = {
  color?: string;
  height?: number;
  width?: number;
};

interface Props {
  title?: string;
  icon?: IconName;
  style?: StyleProp<ViewStyle>;
  fontStyle?: BaseFontProps<IsidoraFontWeightType>;
  buttonStyle?: ButtonStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

const FFColorButton: React.FunctionComponent<Props> = ({
  title,
  icon,
  style,
  fontStyle,
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <ButtonWrapper
        color={buttonStyle?.color ?? colors.blazeHotPink}
        height={buttonStyle?.height ?? 48}
        width={buttonStyle?.width ?? dimensions.WIDTH * 0.7}>
        {icon && (
          <View>
            <Icon name={icon} />
          </View>
        )}
        <Isidora
          fontSize={fontStyle?.fontSize ?? 14}
          lineHeight={fontStyle?.lineHeight ?? 16}
          fontWeight={fontStyle?.fontWeight ?? '600'}
          {...fontStyle}>
          {title}
        </Isidora>
      </ButtonWrapper>
    </TouchableOpacity>
  );
};

const ButtonWrapper = styled(View)<ButtonStyle>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export default React.memo(FFColorButton);
