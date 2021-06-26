import React from 'react';

import {Education, FieldValue} from '../hooks/useUpdateProfileField';
import {
  AttitudeToKid,
  EducationLevel,
  Gender,
  Height,
  Job,
  Neighborhood,
  PlaceOfBirth,
  Value,
} from '../store/generated/graphql';

export type NavigationParamsTypes = {};

interface EditProfileScreenType<T extends FieldValue>
  extends NavigationParamsTypes {
  title: string;
  description: string;
  selectedValue: T | undefined;
  onUpdateValue: (value: T) => void;
  ImageIcon: React.FunctionComponent | undefined;
}

export interface EPDefaultScreenType extends EditProfileScreenType<Value> {
  values: Value[];
}

export interface EPKidsScreenType extends EditProfileScreenType<AttitudeToKid> {
  values: AttitudeToKid[];
}

export interface EPEducationScreenType
  extends EditProfileScreenType<Education> {
  values: EducationLevel[];
}

export type EPNeighbourhoodScreenType = EditProfileScreenType<Neighborhood>;

export type EPNHeightScreenType = EditProfileScreenType<Height>;

export type EPPlaceOfBirthScreenType = EditProfileScreenType<PlaceOfBirth>;

export type EPJobScreenType = EditProfileScreenType<Job>;

export type EPOtherGenderType = Gender;
