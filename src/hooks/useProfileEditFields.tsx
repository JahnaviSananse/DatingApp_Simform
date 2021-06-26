import {useCallback, useEffect, useState} from 'react';

import {
  DefaultBlock,
  EducationBlock,
  HeightBlock,
  JobBlock,
  KidsBlock,
  NeighborhoodBlock,
  PlaceOfBirthBlock,
  UserProfile,
  useMyProfileQuery,
  Gender, Genders, Scalars, Value, Maybe
} from '../store/generated/graphql';

type EPGender = {
  __typename?: 'Gender';
  description: Scalars['String'];
  list: Array<Value>;
  title: Scalars['String'];
  value?: Maybe<Value>;
  visibility: Scalars['Boolean'];
};

export type ProfileBlockType =
  | DefaultBlock
  | HeightBlock
  | JobBlock
  | EducationBlock
  | PlaceOfBirthBlock
  | NeighborhoodBlock
  | KidsBlock
  | EPGender;

type ProfileFieldsReturnType = {
  firstName: string;
  blocksList: undefined | ProfileBlockType[];
};

const useProfileEditFields = (): ProfileFieldsReturnType => {
  const {data} = useMyProfileQuery();
  const [blocksList, setBlocksList] = useState<ProfileBlockType[]>();

  const generateBlocksList = useCallback((userProfile: UserProfile) => {
    const localBlocksList: ProfileBlockType[] = [];

    // Add the blocks in the right order
    localBlocksList.push({...userProfile.genderBlock, __typename: "Gender"});
    localBlocksList.push(userProfile.neighborhoodBlock);
    localBlocksList.push(userProfile.heightBlock);
    localBlocksList.push(userProfile.jobBlock);
    localBlocksList.push(userProfile.religionBlock);
    localBlocksList.push(userProfile.relationshipStatusBlock);
    localBlocksList.push(userProfile.relationshipGoalBlock);
    localBlocksList.push(userProfile.educationBlock);
    localBlocksList.push(userProfile.attitudeToKidsBlock);
    localBlocksList.push(userProfile.placeOfBirthBlock);
    localBlocksList.push(userProfile.nativeLanguageBlock);
    localBlocksList.push(userProfile.physicalActivityBlock);
    localBlocksList.push(userProfile.zodiacBlock);
    localBlocksList.push(userProfile.politicalIdeologyBlock);
    localBlocksList.push(userProfile.attitudeToPetBlock);
    localBlocksList.push(userProfile.attitudeToAlcoholBlock);
    localBlocksList.push(userProfile.attitudeToSmokingBlock);
    localBlocksList.push(userProfile.attitudeToMarijuanaBlock);

    // Update the global blocks list
    setBlocksList(localBlocksList);
  }, []);

  useEffect(() => {
    if (data && data.myProfile) {
      generateBlocksList(data.myProfile as UserProfile);
    }
  }, [data, generateBlocksList]);

  return {
    blocksList: blocksList,
    firstName: data?.myProfile?.userAccount.firstName ?? '',
  };
};

export default useProfileEditFields;
