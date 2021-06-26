import React from 'react';
import {SvgProps} from 'react-native-svg';

import AlcoholIcon2 from '../components/icons/AlcoholIcon2';
import BirthPlaceIcon from '../components/icons/BirthPlaceIcon';
import ChildrenIcon2 from '../components/icons/ChildrenIcon2';
import EducationIcon2 from '../components/icons/EducationIcon2';
import GenderIcon2 from '../components/icons/GenderIcon2';
import HeightIcon2 from '../components/icons/HeightIcon2';
import JobPlaceIcon2 from '../components/icons/JobPlaceIcon2';
import LanguageIcon2 from '../components/icons/LanguageIcon2';
import MarijuanaIcon2 from '../components/icons/MarijuanaIcon2';
import NeighborhoodIcon2 from '../components/icons/NeighborhoodIcon2';
import PetsIcon2 from '../components/icons/PetsIcon2';
import PhysicalActivity2 from '../components/icons/PhysicalActivity2';
import PoliticalIcon2 from '../components/icons/PoliticalIcon2';
import RelationshipGoalsIcon2 from '../components/icons/RelationshipGoalsIcon';
import RelationshipStatusIcon2 from '../components/icons/RelationshipStatusIcon2';
import ReligionIcon2 from '../components/icons/ReligionIcon2';
import SmokingIcon2 from '../components/icons/SmokingIcon2';
import ZodiacIcon2 from '../components/icons/ZodiacIcon2';
import dimensions from '../utils/dimensions';

export default {
  HEADER_BUTTONS: {
    Back: 'md-arrow-round-back',
  },
  HIT_SLOP_15: {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  },
  IMAGES_DEFAULT_BLOCK: {
    data: [
      {
        disabledDrag: true,
        disabledReSorted: true,
        id: 1,
        key: 'one',
        name: '1',
      },
      {
        canAdd: false,
        disabledDrag: true,
        disabledReSorted: true,
        id: 2,
        key: 'two',
        name: '2',
      },
      {
        apiID: null,
        approved: false,
        canAdd: true,
        disabledDrag: false,
        disabledReSorted: false,
        errors: {
          invalids: [],
          primaryInvalids: [],
        },
        id: 3,
        key: 'three',
        name: '3',
        primary: false,
        spinner: false,
        uri: null,
      },
      {
        disabledDrag: true,
        disabledReSorted: true,
        id: 4,
        key: 'four',
        name: '4',
      },
      {
        disabledDrag: true,
        disabledReSorted: true,
        id: 5,
        key: 'five',
        name: '5',
      },
      {
        apiID: null,
        approved: false,
        canAdd: false,
        disabledDrag: true,
        disabledReSorted: true,
        errors: {
          invalids: [],
          primaryInvalids: [],
        },
        id: 6,
        key: 'six',
        name: '6',
        primary: false,
        spinner: false,
        uri: null,
      },
      {
        apiID: null,
        approved: false,
        canAdd: false,
        disabledDrag: true,
        disabledReSorted: true,
        errors: {
          invalids: [],
          primaryInvalids: [],
        },
        id: 7,
        key: 'seven',
        name: '7',
        primary: false,
        spinner: false,
        uri: null,
      },
      {
        apiID: null,
        approved: false,
        canAdd: false,
        disabledDrag: true,
        disabledReSorted: true,
        errors: {
          invalids: [],
          primaryInvalids: [],
        },
        id: 8,
        key: 'eight',
        name: '8',
        primary: false,
        spinner: false,
        uri: null,
      },
      {
        apiID: null,
        approved: false,
        canAdd: false,
        disabledDrag: true,
        disabledReSorted: true,
        errors: {
          invalids: [],
          primaryInvalids: [],
        },
        id: 9,
        key: 'zero',
        name: '0',
        primary: false,
        spinner: false,
        uri: null,
      },
    ],
  },
  IMAGE_COMPONENT_MAP: new Map<string, React.FunctionComponent<SvgProps>>([
    ['PlaceOfBirthBlock', BirthPlaceIcon],
    ['JobBlock', JobPlaceIcon2],
    ['KidsBlock', ChildrenIcon2],
    ['Gender', GenderIcon2],
    ['NativeLanguage', LanguageIcon2],
    ['PhysicalActivity', PhysicalActivity2],
    ['PoliticalIdeology', PoliticalIcon2],
    ['Zodiac', ZodiacIcon2],
    ['NeighborhoodBlock', NeighborhoodIcon2],
    ['HeightBlock', HeightIcon2],
    ['EducationBlock', EducationIcon2],
    ['EducationLevel', EducationIcon2],
    ['Kids', ChildrenIcon2],
    ['AttitudeToKid', ChildrenIcon2],
    ['AttitudeToAlcohol', AlcoholIcon2],
    ['AttitudeToMarijuana', MarijuanaIcon2],
    ['AttitudeToPet', PetsIcon2],
    ['AttitudeToSmoking', SmokingIcon2],
    ['RelationshipGoal', RelationshipGoalsIcon2],
    ['RelationshipStatus', RelationshipStatusIcon2],
    ['Religion', ReligionIcon2],
  ]),
  IMG_PICKER_OPTIONS: {
    cameraType: 'front',
    options: {
      path: 'images',
      skipBackup: true,
    },
    title: 'ADD PHOTO',
  },

  IMG_PICKER_OPTIONS_GENERAL: {
    maxHeight: 1440,
    maxWidth: 2560,
    mediaType: 'photo',
    noData: true,
  },

  LAST_PROMPT_STATE: 'LAST_PROMPT_STATE',
  PROFILE: {
    paddingHorizontal: 20,
  },
  QUESTION_CARD: {
    borderColors: ['#F08380', '#04132E', '#FFC0C0', '#183059'],
    height: 60,
    textColor: '#303AB2',
    width: dimensions.WIDTH * 0.85,
  },
  QUESTION_CARD_STACK: {
    itemWidth: dimensions.WIDTH * 0.82,
    sliderWidth: dimensions.WIDTH,
  },
  SKIP_CHECK_FLICK_STATE: 'SKIP_CHECK_FLICK_STATE',
  SLIDER_HEIGHT_WEIGHT_MIN_MAX_VALUES: {
    HEIGHT: {
      ConvertType: 'cm',
      DefaultType: "'",
      coefficient: 30.48,
      max: 7,
      min: 3,
      step: 0.1,
    },
    WEIGHT: {
      ConvertType: 'kg',
      DefaultType: 'lb',
      coefficient: 0.468,
      max: 250,
      min: 50,
      step: 0.1,
    },
  },
  TYPES_OF_PROFILE: {
    Input: 'input',
    Select: 'select',
    Slider: 'slider',
  },
};
