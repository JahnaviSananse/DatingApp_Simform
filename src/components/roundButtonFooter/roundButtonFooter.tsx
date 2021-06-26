import React from 'react';
import type {Node} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

// import {getHeightWithScaleFactor} from '../../utils/dimensions';
import { COLORS } from '../../configs';
import NewFooterArrows from '../icons/NewFooterArrows';
import Row from '../Row';
import styles from './styles';

// CUSTOM MODULES

// MODULES

interface Props {
  active: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  color: string;
  value: number;
  showButtonProgress?: boolean;
}

export default (props: Props): Node => {
  const {active, style, onPress, color, value, showButtonProgress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={!active}>
      {/* {showButtonProgress && (
        <ProgressCircle
          style={styles.progressBar}
          strokeWidth={getWidthWithScaleFactor(3)}
          backgroundColor="transparent"
          progress={value}
          progressColor={COLORS.apricot}
        />
      )} */}
      <View
      // style={{
      // backgroundColor: color,
      // borderRadius: getHeightWithScaleFactor(30),
      // height: getHeightWithScaleFactor(56),
      // justifyContent: 'center',
      // paddingVertical: getHeightWithScaleFactor(16),
      // width: getHeightWithScaleFactor(56),
      // }}
      >
        <Row style={styles.iconRowWrapper}>
          <NewFooterArrows color={color} />
          {/* <FooterArrowsWithBorderIcon /> */}
        </Row>
      </View>
    </TouchableOpacity>
  );
};
