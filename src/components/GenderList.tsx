import {useCallback} from 'react';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import GenderStateButton from './GenderStateButton';

export type LocalGenderType = {
  id: number;
  name: string;
  shortName?: string;
  selected: boolean;
};

interface GenderListProps {
  genders: LocalGenderType[];
  bottomSpace?: number;
  onGenderSelected: (gender: LocalGenderType) => void;
  scrollEnabled?: boolean;
  genderListRef?: React.RefObject<FlatList<LocalGenderType>>;
  paddingHorizontal?: number;
}

const GenderList: React.FunctionComponent<GenderListProps> = ({
  genders,
  bottomSpace = 0,
  onGenderSelected,
  scrollEnabled = true,
  genderListRef,
  paddingHorizontal = 0,
}) => {
  const renderItem = useCallback<
    ({item}: {item: LocalGenderType}) => React.ReactElement
  >(
    ({item}) => {
      return (
        <GenderStateButton
          gender={item}
          style={{marginBottom: 16}}
          onButtonSelected={onGenderSelected}
        />
      );
    },
    [onGenderSelected],
  );

  const keyExtractor = useCallback(
    (item: LocalGenderType) => `${item.name} + ${item.id}`,
    [],
  );

  return (
    <FlatList
      data={genders}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingBottom: bottomSpace,
        paddingHorizontal: paddingHorizontal,
      }}
      scrollEnabled={scrollEnabled}
      ref={genderListRef}
    />
  );
};

export default React.memo(GenderList);
