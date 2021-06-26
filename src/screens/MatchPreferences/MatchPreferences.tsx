/* eslint-disable radix */

import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, StatusBar} from 'react-native';

import PreferenceField from '../../components/Preferences/PreferenceField';
import {COLORS} from '../../configs';
import {useIsNeedUpdateLookBook} from '../../hooks/useIsNeedUpdateLookBook';
import usePreferenceFields from '../../hooks/usePreferenceFields';
import {ProfileBlockType} from '../../hooks/useProfileEditFields';
import {
  DefaultBlock,
  useMyPreferencesQuery,
  useUserPreferenceUpdateMutation,
} from '../../store/generated/graphql';
import AgeRange from './blocks/AgeRange';
import Distance from './blocks/Distance';
import Height from './blocks/Height';
import InterestedIn from './blocks/InterestedIn/InterestedIn';
import {SelectedItemsWrapper, Wrapper, WrapperLoader} from './styles';

type RenderItemType = {
  index: number;
  item: DefaultBlock;
};

const MatchPreferences: React.FunctionComponent = () => {
  const {blocksList} = usePreferenceFields();

  const {data} = useMyPreferencesQuery();
  const {isUpdateLookBook, setIsUpdateLook} = useIsNeedUpdateLookBook();

  const [updateUserPreferenceOnServer] = useUserPreferenceUpdateMutation();

  const updateUserPreference = useCallback(
    (value) => {
      updateUserPreferenceOnServer(value).then(() => {
        if (!isUpdateLookBook) {
          setIsUpdateLook(true);
        }
      });
    },
    [isUpdateLookBook, setIsUpdateLook, updateUserPreferenceOnServer],
  );

  const renderItem = useCallback(({item}: RenderItemType) => {
    return <PreferenceField block={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ProfileBlockType) => `${item.title}`,
    [],
  );

  return data && data?.myPreferences ? (
    <Wrapper showsVerticalScrollIndicator={false}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <InterestedIn
        startSex={data?.myPreferences?.gender}
        gendersList={data?.myPreferences?.gendersList}
      />
      <AgeRange
        start={parseInt(data?.myPreferences?.minAge)}
        end={parseInt(data?.myPreferences?.maxAge)}
        onChange={updateUserPreference}
      />
      <Distance
        value={parseInt(data?.myPreferences?.distance)}
        onChange={updateUserPreference}
      />
      <Height
        min={+parseFloat(data?.myPreferences?.minHeight ?? '0').toFixed(1)}
        max={+parseFloat(data?.myPreferences?.maxHeight ?? '7').toFixed(1)}
        onChange={updateUserPreference}
      />
      <SelectedItemsWrapper>
        <FlatList
          data={blocksList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </SelectedItemsWrapper>
    </Wrapper>
  ) : (
    <WrapperLoader>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ActivityIndicator
        size="large"
        color={COLORS.blazeBlue}
        style={{marginTop: '70%'}}
      />
    </WrapperLoader>
  );
};

export default React.memo(MatchPreferences);
