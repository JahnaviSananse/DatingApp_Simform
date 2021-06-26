import React, {useCallback} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../../configs/styles/colors';

interface ProgressDotsProps {
  activeDots: number;
  problemVideoIndexes: number[];
  onDotPress: (index: number) => void;
}

const ProgressDots: React.FunctionComponent<ProgressDotsProps> = ({
  activeDots,
  problemVideoIndexes,
  onDotPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 2,
      }}>
      <StepDot
        problem={problemVideoIndexes.includes(1)}
        index={1}
        onDotPress={onDotPress}
        activate={activeDots > 1}
      />
      <StepDot
        problem={problemVideoIndexes.includes(2)}
        index={2}
        onDotPress={onDotPress}
        activate={activeDots > 2}
      />
      <StepDot
        problem={problemVideoIndexes.includes(3)}
        index={3}
        onDotPress={onDotPress}
        activate={activeDots > 3}
      />
      <StepDot
        problem={problemVideoIndexes.includes(4)}
        index={4}
        onDotPress={onDotPress}
        activate={activeDots > 4}
      />
      <StepDot
        problem={problemVideoIndexes.includes(5)}
        index={5}
        onDotPress={onDotPress}
        activate={activeDots > 5}
      />
      <StepDot
        problem={problemVideoIndexes.includes(6)}
        index={6}
        onDotPress={onDotPress}
        activate={activeDots > 6}
      />
      <StepDot
        problem={problemVideoIndexes.includes(7)}
        index={7}
        onDotPress={onDotPress}
        activate={activeDots > 7}
      />
    </View>
  );
};

interface StepDotProps {
  index: number;
  problem: boolean;
  activate: boolean;
  onDotPress: (index: number) => void;
}

const StepDot: React.FunctionComponent<StepDotProps> = ({
  index,
  problem,
  activate,
  onDotPress,
}) => {
  const onPress = useCallback(() => {
    onDotPress(index);
  }, [index, onDotPress]);

  const dotColor = activate ? colors.sand : colors.blazeCream50;
  const problemDotColor = activate ? colors.raspberry : colors.raspberry20;

  return (
    <TouchableOpacity
      style={{marginHorizontal: 2, paddingVertical: 10}}
      onPress={onPress}>
      <View
        style={{
          backgroundColor: problem ? problemDotColor : dotColor,
          borderRadius: 4,
          height: 4,
          width: 40,
        }}
      />
    </TouchableOpacity>
  );
};

export default React.memo(ProgressDots);
