import React from 'react';
import {View} from 'react-native';

import colors from '../../configs/styles/colors';
import IconLabel from './IconLabel';
import IconLabelBlock from './IconLabelBlock';

interface Props {
  zodiac: string;
  children: string;
  alcohol: string;
  pets: string;
  politic: string;
  sport: string;
  smoking: string;
  drugs: string;
}

const PreferenceInfoBlock: React.FunctionComponent<Props> = ({
  zodiac = 'Sagittarius',
  children = 'Doesn’t Have & Wants',
  alcohol = 'Sometimes',
  pets = 'Has cats(s)',
  politic = 'Liberal',
  sport = 'Active',
  smoking = 'Never',
  drugs = 'Never',
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.blackPearl,
        flexDirection: 'column',
        paddingStart: 40,
      }}>
      <IconLabelBlock
        firstLabel={<IconLabel icon="Zodiac" label={zodiac} />}
        secondLabel={<IconLabel icon="Children" label={children} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Alcohol" label={alcohol} />}
        secondLabel={<IconLabel icon="Pets" label={pets} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Politic" label={politic} />}
        secondLabel={<IconLabel icon="Sport" label={sport} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Smoking" label={smoking} />}
        secondLabel={<IconLabel icon="Drugs" label={drugs} />}
      />
    </View>
  );
};

export default React.memo(PreferenceInfoBlock);
