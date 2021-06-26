import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useCallback, useState} from 'react';

import {Isidora} from '../../../../components';
import Row from '../../../../components/Row';
import {COLORS} from '../../../../configs';
import strings from '../../../../configs/styles/strings';
import ScreenSize, {
  getWidthWithScaleFactor,
} from '../../../../utils/dimensions';
import {SliderLine, Wrapper} from './styles';

interface Props {
  start: number;
  end: number;
  onChange: (value: {
    variables: {
      input: {
        maxAge: string;
        minAge: string;
      };
    };
  }) => void;
}
const AgeRange: React.FunctionComponent<Props> = ({
  start = 18,
  end = 65,
  onChange,
}) => {
  const [startAge, setStartAge] = useState(start);
  const [endAge, setEndAge] = useState(end);

  const updateValue = useCallback(
    () =>
      onChange({
        variables: {
          input: {
            maxAge: `${endAge}`,
            minAge: `${startAge}`,
          },
        },
      }),
    [endAge, onChange, startAge],
  );

  const onValuesChangeAge = useCallback(
    (min, max) => {
      setStartAge(min);
      setEndAge(max);
    },
    [setStartAge, setEndAge],
  );
  return (
    <Wrapper>
      <Row style={{justifyContent: 'space-between'}}>
        <Isidora
          lineHeight={24}
          fontSize={16}
          fontWeight="900"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.age.ageRange}
        </Isidora>
        <Isidora
          lineHeight={24}
          fontSize={14}
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {startAge} - {endAge}
          {endAge >= 65 && '+'}
        </Isidora>
      </Row>

      <Row style={{alignItems: 'center'}}>
        <SliderLine />
        <MultiSlider
          values={[startAge, endAge]}
          sliderLength={ScreenSize.WIDTH - 2 * getWidthWithScaleFactor(24) - 20}
          min={18}
          max={65}
          markerStyle={{
            backgroundColor: COLORS.raspberry,
            borderWidth: 0,
            height: 24,
            width: 24,
          }}
          onValuesChange={useCallback(
            ([first, second]) => onValuesChangeAge(first, second),
            [onValuesChangeAge],
          )}
          onValuesChangeFinish={updateValue}
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

      <Row style={{justifyContent: 'space-between', marginTop: -7}}>
        <Isidora
          lineHeight={16}
          fontSize={15}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.age.minAge}
        </Isidora>
        <Isidora
          lineHeight={16}
          fontSize={15}
          fontWeight="300"
          color={COLORS.blazeBlue}>
          {strings.matchPreferenceSettings.age.maxAge}
        </Isidora>
      </Row>
    </Wrapper>
  );
};

export default React.memo(AgeRange);
