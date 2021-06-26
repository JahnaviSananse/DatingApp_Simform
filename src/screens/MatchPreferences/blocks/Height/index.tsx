import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Switch} from 'react-native-switch';

import {Isidora} from '../../../../components';
import Row from '../../../../components/Row';
import {COLORS} from '../../../../configs';
import strings from '../../../../configs/styles/strings';
import ScreenSize, {
  getWidthWithScaleFactor,
} from '../../../../utils/dimensions';
import {SliderLine} from '../AgeRange/styles';
import {Wrapper} from './styles';

interface Props {
  min: number;
  max: number;
  onChange: (variables: {
    variables: {
      input: {
        maxHeight: string;
        minHeight: string;
      };
    };
  }) => void;
}

const Height: React.FunctionComponent<Props> = ({min, max, onChange}) => {
  const [unit, setUnit] = useState<'in' | 'cm' | null>();
  const [minHeight, setMinHeight] = useState(min);
  const [maxHeight, setMaxHeight] = useState(max);

  useEffect(() => {
    AsyncStorage.getItem('HeightType').then((result) =>
      result ? setUnit(result) : setUnit('in'),
    );
  }, []);

  const inToCm = useCallback((value: number) => {
    return Math.round(value * 30.48);
  }, []);

  const cmToIn = useCallback((value: number) => {
    return Math.round((value / 30.48) * 10) / 10;
  }, []);

  // const convert = useCallback(
  //   (value: number) => {
  //     if (unit === 'in') {
  //       return `${inToCm(value)} cm`;
  //     } else {
  //       return `${cmToIn(value)}'`;
  //     }
  //   },
  //   [cmToIn, inToCm, unit],
  // );

  const updateHeight = useCallback(
    (min?: number, max?: number) => {
      onChange({
        variables: {
          input: {
            maxHeight: max ? `${max}` : `${maxHeight}`,
            minHeight: min ? `${min}` : `${minHeight}`,
          },
        },
      });
    },
    [maxHeight, minHeight, onChange],
  );

  const onValueChangeSwitcher = useCallback(() => {
    if (unit === 'cm') {
      setUnit('in');
      updateHeight(cmToIn(minHeight), cmToIn(maxHeight));
      setMinHeight((prev) => cmToIn(prev));
      setMaxHeight((prev) => cmToIn(prev));
      AsyncStorage.setItem('HeightType', 'in');
    } else {
      setUnit('cm');
      updateHeight(inToCm(minHeight), inToCm(maxHeight));
      setMinHeight((prev) => inToCm(prev));
      setMaxHeight((prev) => inToCm(prev));
      AsyncStorage.setItem('HeightType', 'cm');
    }
  }, [cmToIn, inToCm, maxHeight, minHeight, unit, updateHeight]);

  return (
    <Wrapper>
      <Isidora
        lineHeight={24}
        fontSize={16}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{marginBottom: 14}}>
        {strings.matchPreferenceSettings.height.height}
      </Isidora>
      <Row style={{justifyContent: 'space-between', marginBottom: 3}}>
        <Row>
          <Isidora
            lineHeight={24}
            fontSize={14}
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginRight: 10}}>
            Cm
          </Isidora>
          <Switch
            value={unit === 'in'}
            onValueChange={onValueChangeSwitcher}
            renderActiveText={false}
            renderInActiveText={false}
            backgroundActive={COLORS.raspberry}
            backgroundInactive={COLORS.raspberry}
            innerCircleStyle={{
              borderColor: COLORS.borderInputGray,
              borderWidth: 0.5,
              elevation: 5,
              height: 25,
              shadowColor: COLORS.silver,
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              width: 25,
            }}
            circleSize={24}
            switchLeftPx={2}
            containerStyle={{
              elevation: 8,
              height: 24,
              marginRight: 7,
              shadowColor: COLORS.jumbo,
              shadowOffset: {
                height: 6,
                width: 0,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4.65,
              width: 36,
            }}
          />
          <Isidora
            lineHeight={24}
            fontSize={14}
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginRight: 10}}>
            In
          </Isidora>
        </Row>
        <Isidora
          lineHeight={24}
          fontSize={14}
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {unit === 'in'
            ? `${minHeight
                .toFixed(1)
                .toString()
                .replace('.', '’')} - ${maxHeight
                .toFixed(1)
                .toString()
                .replace('.', '’')}`
            : `${minHeight} cm - ${maxHeight} cm`}
        </Isidora>
      </Row>
      <Row style={{alignItems: 'center'}}>
        <SliderLine />
        <MultiSlider
          values={[minHeight, maxHeight]}
          sliderLength={ScreenSize.WIDTH - 2 * getWidthWithScaleFactor(24) - 20}
          min={unit === 'in' ? 4 : 122}
          max={unit === 'in' ? 7 : 213}
          step={unit === 'in' ? 0.1 : 1}
          onValuesChange={useCallback(
            ([first, second]) => {
              if (unit === 'in') {
                setMinHeight(Math.round(first * 10) / 10);
                setMaxHeight(Math.round(second * 10) / 10);
              } else {
                setMinHeight(first);
                setMaxHeight(second);
              }
            },
            [unit],
          )}
          markerStyle={{
            backgroundColor: COLORS.raspberry,
            borderWidth: 0,
            height: 24,
            width: 24,
          }}
          onValuesChangeFinish={updateHeight}
          selectedStyle={{
            backgroundColor: COLORS.blazeBlue,
            borderRadius: 0,
            height: 4,
          }}
          unselectedStyle={{
            backgroundColor: COLORS.blazeBlue50,
            borderRadius: 0,
            height: 4,
          }}
        />
        <SliderLine />
      </Row>

      <Row style={{justifyContent: 'space-between', marginTop: -9}}>
        <Isidora
          lineHeight={16}
          fontSize={14}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.height.minHeight}
        </Isidora>
        <Isidora
          lineHeight={16}
          fontSize={14}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.height.maxHeight}
        </Isidora>
      </Row>
    </Wrapper>
  );
};

export default React.memo(Height);
