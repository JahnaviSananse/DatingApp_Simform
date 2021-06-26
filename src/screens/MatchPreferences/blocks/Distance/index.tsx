import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-switch';

import {Isidora} from '../../../../components';
import Row from '../../../../components/Row';
import {COLORS} from '../../../../configs';
import strings from '../../../../configs/styles/strings';
import ScreenSize, {
  getWidthWithScaleFactor,
} from '../../../../utils/dimensions';
import {Wrapper} from './styles';

interface Props {
  value: number;
  onChange: (variables: {
    variables: {
      input: {
        distance: string;
      };
    };
  }) => void;
}
const Distance: React.FunctionComponent<Props> = ({value = 10, onChange}) => {
  const [unit, setUnit] = useState<'mi' | 'km' | null>();
  const [distance, setDistance] = useState(value);
  const isSwitched = useRef(false);

  const miToKm = useCallback((valueDistance: number) => {
    return Math.round(valueDistance / 0.62137);
  }, []);

  const kmToMi = useCallback((valueDistance: number) => {
    return Math.round(valueDistance * 0.62137);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('DistanceType').then((result) =>
      result ? setUnit(result) : setUnit('mi'),
    );
  }, []);

  const onValueChangeSlider = useCallback(
    (data) => {
      setDistance(data);
    },
    [setDistance],
  );

  const updateDistance = useCallback(
    (value?: number) => {
      onChange({
        variables: {
          input: {
            distance: value ? `${value}` : `${distance}`,
          },
        },
      });
    },
    [distance, onChange],
  );

  const onValueChangeSwitcher = useCallback(
    (selectedValue: boolean) => {
      isSwitched.current = true;
      if (selectedValue) {
        setUnit('mi');
        updateDistance(kmToMi(distance));
        setDistance((prev) => kmToMi(prev));
        AsyncStorage.setItem('DistanceType', 'mi');
      } else {
        setUnit('km');
        updateDistance(miToKm(distance));
        setDistance((prev) => miToKm(prev));
        AsyncStorage.setItem('DistanceType', 'km');
      }
    },
    [distance, kmToMi, miToKm, updateDistance],
  );
  return (
    <Wrapper>
      <Isidora
        lineHeight={24}
        fontSize={16}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{marginBottom: 15}}>
        {strings.matchPreferenceSettings.distance.distance}
      </Isidora>
      <Row style={{justifyContent: 'space-between', marginBottom: 5}}>
        <Row>
          <Isidora
            lineHeight={24}
            fontSize={14}
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginRight: 10}}>
            Km
          </Isidora>
          <Switch
            value={unit === 'mi'}
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
            style={{marginLeft: 10}}>
            Mi
          </Isidora>
        </Row>
        <Isidora
          lineHeight={24}
          fontSize={14}
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.distance.within} {distance} {unit}
        </Isidora>
      </Row>
      <Row style={{alignItems: 'center'}}>
        <View
          style={{backgroundColor: COLORS.blazeBlue, height: 4, width: 10}}
        />
        <MultiSlider
          values={[distance]}
          sliderLength={ScreenSize.WIDTH - 2 * getWidthWithScaleFactor(24) - 15}
          min={0}
          max={unit == 'mi' ? 51 : isSwitched.current ? 81 : 80}
          step={1}
          onValuesChange={useCallback(([first]) => onValueChangeSlider(first), [
            onValueChangeSlider,
          ])}
          onValuesChangeFinish={updateDistance}
          markerStyle={{
            backgroundColor: COLORS.raspberry,
            borderWidth: 0,
            height: 24,
            width: 24,
          }}
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
        <View
          style={{
            backgroundColor: COLORS.blazeBlue50,
            height: 4,
            width: 5,
            zIndex: -1,
          }}
        />
      </Row>

      <Row style={{justifyContent: 'space-between', marginTop: -8}}>
        <Isidora
          lineHeight={16}
          fontSize={14}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.distance.minDistance}
        </Isidora>
        <Isidora
          lineHeight={16}
          fontSize={14}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.distance.maxDisance}
        </Isidora>
      </Row>
    </Wrapper>
  );
};

export default React.memo(Distance);
