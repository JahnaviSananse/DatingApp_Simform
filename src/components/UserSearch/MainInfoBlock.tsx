import React from 'react';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import colors from '../../configs/styles/colors';
import dimensions from '../../utils/dimensions';
import Poppins from '../texts/Poppins';
import IconLabel from './IconLabel';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const wavesBackground = require('../../../assets/images/search-waves-background.png');

interface Props {
  name: string;
  distance: string;
  location: string;
}

const MainInfoBlock: React.FunctionComponent<Props> = ({
  name = 'Scarlet',
  distance = '4 mi',
  location = 'West Village, NYC',
}) => {
  const separateDot = ' ・ ';

  return (
    <View style={{bottom: 0, left: 0, position: 'absolute', right: 0}}>
      <View>
        <AutoHeightImage width={dimensions.WIDTH} source={wavesBackground} />
        <View style={{bottom: 0, left: 26, position: 'absolute', right: 0}}>
          <Poppins
            lineHeight={33}
            fontWeight="600"
            fontSize={22}
            textAlign="left">
            {name}
          </Poppins>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: colors.blackPearl,
          flexDirection: 'row',
          marginBottom: -2,
          paddingStart: 40,
          paddingTop: 6,
        }}>
        <IconLabel icon="MapPin" label={`${distance} ${separateDot}`} />
        <IconLabel icon="House" label={location} />
      </View>
    </View>
  );
};

export default React.memo(MainInfoBlock);
