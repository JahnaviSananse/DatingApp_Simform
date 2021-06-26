import {LocalGenderType} from '../components/GenderList';
import {
  EPDefaultScreenType,
  EPEducationScreenType,
  EPJobScreenType,
  EPKidsScreenType,
  EPNHeightScreenType,
  EPNeighbourhoodScreenType,
  EPOtherGenderType,
  EPPlaceOfBirthScreenType,
} from './NavigationParamsTypes';

export type NavigationParams = {
  WarningModal: {
    title: string;
    message: string;
    positiveText: string;
    onPressPositive: () => void;
    negativeText: string;
    onPressNegative: () => void;
    hideCloseButton?: boolean;
    oneBtn?: boolean;
    textAlign?: 'left' | 'center' | 'right';
  };
  OtherGenderScreen: {
    currentGender?: LocalGenderType;
    genders: LocalGenderType[];
    onGenderChanged: (gender?: LocalGenderType) => void;
  };
  PhoneCodeScreen: {
    phone: string;
  };
  PhoneConfirmModal: {
    phone: string;
  };
  VideoRecordScreen: {
    editStepNumber: number;
    questionId: number;
    singleEdit: boolean;
    showTutorial?: boolean;
    isCheckYourFlick: boolean;
  };
  MatchQuestion: {
    name: string;
    title: string;
    values: Array<{id: string; name: string}>;
    type?: string;
    param: string;
    selectedValue: string;
  };
  EPOtherGenderScreen: {
    values: EPOtherGenderType[];
    onSelectValue: (value: EPOtherGenderType) => void;
    localValue: EPOtherGenderType;
  };
  EPDefaultScreen: EPDefaultScreenType;
  EPKidsScreen: EPKidsScreenType;
  EPNeighbourhoodScreen: EPNeighbourhoodScreenType;
  EPHeightScreen: EPNHeightScreenType;
  EPPlaceOfBirthScreen: EPPlaceOfBirthScreenType;
  EPJobScreen: EPJobScreenType;
  EPEducationScreen: EPEducationScreenType;
  ChatRoom: {
    chatId?: string;
    turn?: boolean;
    type?: 'respond' | 'match' | 'conversation';
    isAdmin?: boolean;
  };

  PublicProfile: {
    profileId: string;
    showActionBtn?: boolean;
    isExpired?: boolean;
    matchId?: string;
    updateUserList?: (userId: string) => void;
  };

  InternetError: {
    isFetchUserData?: () => void;
  };

  VideoRecordIntro: {
    fromSettings?: boolean;
  };

  InfoLookBook: {
    type: 'beta' | 'noUsers';
    onGoBack?: () => void;
  };

  ContactUsMail: {
    reasonId: string;
    header: string;
  };

  ProfilePhoto: {
    openCover: boolean;
    hideWarningModal?:boolean;
  };
};
