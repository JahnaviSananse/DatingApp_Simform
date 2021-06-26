import Slider from '@react-native-community/slider';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import {COLORS} from '../../configs';
import {CONSTANT} from '../../configs';
import {Poppins, Row} from '../index';

interface QuestionsListProps {
  value: number;
  onValueChanged: (value: number) => void;
  type: 'HEIGHT' | 'WEIGHT';
}

const SliderComponent: React.FunctionComponent<QuestionsListProps> = ({
  value,
  onValueChanged,
  type,
}) => {
  const [sliderValue, setSliderValue] = useState(value);
  const {
    coefficient,
    min,
    max,
    step,
    ConvertType,
    DefaultType,
  } = CONSTANT.SLIDER_HEIGHT_WEIGHT_MIN_MAX_VALUES[type];

  const valueSlider = useCallback(
    (size: number) => {
      const sizeForSlider = Number(size.toFixed(1));
      setSliderValue(sizeForSlider);
      onValueChanged(sizeForSlider);
    },
    [onValueChanged],
  );

  const buildStringValue = useCallback(
    (value, valueType, valueCoefficient, valueSlider, typeToConvert) => {
      const toFoots = `${value}`;
      return `${
        toFoots.length > 1 ? toFoots.replace('.', '′') : toFoots + '′'
      } (${Math.round(valueCoefficient * valueSlider)} ${typeToConvert})`;
    },
    [],
  );

  return (
    <View>
      <Poppins
        color={COLORS.black}
        lineHeight={16}
        fontSize={12}
        font="regular"
        textAlign="center">
        {buildStringValue(
          sliderValue,
          DefaultType,
          coefficient,
          sliderValue,
          ConvertType,
        )}
      </Poppins>
      <Slider
        style={{height: 50}}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor={COLORS.bombay}
        maximumTrackTintColor={COLORS.bombay}
        onValueChange={valueSlider}
        value={sliderValue}
        step={step}
      />
      <Row style={{justifyContent: 'space-between'}}>
        <Poppins
          color={COLORS.jumbo}
          lineHeight={16}
          fontSize={12}
          font="regular"
          textAlign="center"
          style={{marginBottom: 15}}>
          {buildStringValue(min, DefaultType, coefficient, min, ConvertType)}
        </Poppins>
        <Poppins
          color={COLORS.jumbo}
          lineHeight={16}
          fontSize={12}
          font="regular"
          textAlign="center"
          style={{marginBottom: 15}}>
          {buildStringValue(max, DefaultType, coefficient, max, ConvertType)}
        </Poppins>
      </Row>
    </View>
  );
};

export default React.memo(SliderComponent);
