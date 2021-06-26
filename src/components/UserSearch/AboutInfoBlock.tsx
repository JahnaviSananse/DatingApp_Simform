import React from 'react';
import {View} from 'react-native';

import colors from '../../configs/styles/colors';
import IconLabel from './IconLabel';
import IconLabelBlock from './IconLabelBlock';

interface Props {
  gender: string;
  job: string;
  relationshipGoal: string;
  relationshipStatus: string;
  height: string;
  education: string;
  location: string;
  religion: string;
}

const AboutInfoBlock: React.FunctionComponent<Props> = ({
  gender = 'Cisgender',
  job = 'Nurse',
  relationshipGoal = 'Relationship',
  relationshipStatus = 'Single',
  height = "5'6 ",
  education = 'Associate’s Degree, Hunter College',
  location = 'Brazil',
  religion = 'Atheist',
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.blackPearl,
        flexDirection: 'column',
        paddingStart: 40,
        paddingTop: 4,
      }}>
      <IconLabelBlock
        firstLabel={<IconLabel icon="Gender" label={gender} />}
        secondLabel={<IconLabel icon="Job" label={job} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Search" label={relationshipGoal} />}
        secondLabel={<IconLabel icon="Heart" label={relationshipStatus} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Height" label={height} />}
        secondLabel={<IconLabel icon="Education" label={education} />}
      />
      <IconLabelBlock
        firstLabel={<IconLabel icon="Planet" label={location} />}
        secondLabel={<IconLabel icon="Religion" label={religion} />}
      />
    </View>
  );
};

export default React.memo(AboutInfoBlock);
