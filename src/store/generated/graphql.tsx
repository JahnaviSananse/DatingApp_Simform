import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  /** A valid phone, transported as a string */
  Phone: any;
};

/** An Account Photo Object */
export type AccountPhoto = {
  __typename?: 'AccountPhoto';
  errors?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  moderation: ImageModeration;
  /** Image with file errors */
  shouldDestroy: Scalars['Boolean'];
  urls: PhotoUrls;
};

/** An Advert Object */
export type Advert = {
  __typename?: 'Advert';
  advertId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  seen: Scalars['Boolean'];
  seenAt?: Maybe<Scalars['ISO8601DateTime']>;
  sentAt: Scalars['ISO8601DateTime'];
};

/** An Adverts Info Object */
export type AdvertsInfo = {
  __typename?: 'AdvertsInfo';
  countNewAdverts?: Maybe<Scalars['String']>;
  lastMessage?: Maybe<Scalars['String']>;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
};

/** An AnswerDurations Object */
export type AnswerDurations = {
  __typename?: 'AnswerDurations';
  full: Scalars['String'];
  min: Scalars['String'];
};

/** An Profile AttitudeToAlcohol Object */
export type AttitudeToAlcohol = {
  __typename?: 'AttitudeToAlcohol';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile AttitudeToKid Object */
export type AttitudeToKid = {
  __typename?: 'AttitudeToKid';
  conditions?: Maybe<Array<KidsCondition>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile AttitudeToKidsType Object */
export type AttitudeToKids = {
  __typename?: 'AttitudeToKids';
  attitudeToKidId?: Maybe<Scalars['String']>;
  attitudeToKidName?: Maybe<Scalars['String']>;
  chosenKidsConditions?: Maybe<Array<KidsConditionChosen>>;
  kidsConditionList: Array<KidsCondition>;
};

/** An Profile AttitudeToMarijuana Object */
export type AttitudeToMarijuana = {
  __typename?: 'AttitudeToMarijuana';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile AttitudeToPet Object */
export type AttitudeToPet = {
  __typename?: 'AttitudeToPet';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile AttitudeToSmoking Object */
export type AttitudeToSmoking = {
  __typename?: 'AttitudeToSmoking';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An AttributiveType  Object */
export type Attributive = {
  __typename?: 'Attributive';
  action?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mandatory?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  navigateTo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** A audio file's data */
export type Audio = {
  __typename?: 'Audio';
  duration: Scalars['String'];
  url: Scalars['String'];
};

/** Auth token Provider */
export type AuthToken = {
  __typename?: 'AuthToken';
  /** Access JWT Token */
  access: Scalars['String'];
  /** JWT token for refreshing access token */
  refresh: Scalars['String'];
};

/** User Block */
export type BlockInput = {
  /** User's ID who blocked */
  userAccountId: Scalars['String'];
  /** User's blocked comment */
  comment?: Maybe<Scalars['String']>;
  /** Attributive reason ID */
  attributiveId: Scalars['String'];
  /** Uploaded Blobs Ids */
  blobIds?: Maybe<Array<Scalars['String']>>;
};

/** A ButtonType  Object */
export type Button = {
  __typename?: 'Button';
  action?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  navigateTo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  visible: Scalars['Boolean'];
};

/** A Chat/Match data */
export type Chat = {
  __typename?: 'Chat';
  /** Not expired yet */
  actual: Scalars['Boolean'];
  /** Chat blocked */
  blocked: Scalars['Boolean'];
  /** Chat expired */
  chatExpired: Scalars['Boolean'];
  /** Messages number */
  countMessages: Scalars['String'];
  /** Time created UTC */
  createdAt: Scalars['ISO8601DateTime'];
  /** Time expire UTC */
  expireAt: Scalars['ISO8601DateTime'];
  /** Name with whom communicate */
  firstName: Scalars['String'];
  /** Current User Recovery Match */
  iRecovered: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Chat messages */
  messages?: Maybe<Array<Message>>;
  /** PhotoUri with whom communicate */
  photoUri: Scalars['String'];
  /** Photo/videoModerationPassed with whom communicate */
  photoVideoModerationPassed: Scalars['Boolean'];
  /** ProfileId with whom communicate */
  profileId: Scalars['Int'];
  /** Possibly Recovery Match */
  recovered: Scalars['Boolean'];
  /** Second User Recovery Match */
  secondUserReconnect: Scalars['Boolean'];
  /** Second User Unmatch */
  secondUserUnmatch: Scalars['Boolean'];
  /** Id with whom communicate */
  userId: Scalars['Int'];
  /** User Recovery Match */
  userRecovered: Scalars['Boolean'];
};

/** Chat-message object */
export type ChatMessages = {
  __typename?: 'ChatMessages';
  /** Messages number */
  countMessages: Scalars['String'];
  /** Chat messages */
  messages?: Maybe<Array<Message>>;
};

/** A Default block Object */
export type DefaultBlock = {
  __typename?: 'DefaultBlock';
  description: Scalars['String'];
  list: Array<Value>;
  title: Scalars['String'];
  value?: Maybe<Value>;
  visibility: Scalars['Boolean'];
};

/** DeleteAccount input */
export type DeleteAccountInput = {
  /** Attributive reason ID */
  attributiveId: Scalars['String'];
  /** Comment Reason For Deletion  */
  comment: Scalars['String'];
  /** Uploaded Blobs Ids */
  blobIds?: Maybe<Array<Scalars['String']>>;
};

/** An Education Block */
export type EducationBlock = {
  __typename?: 'EducationBlock';
  description: Scalars['String'];
  list: Array<Value>;
  nameOfSchool?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  value?: Maybe<Value>;
  visibility: Scalars['Boolean'];
};

/** An Profile EducationLevel Object */
export type EducationLevel = {
  __typename?: 'EducationLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** The Example Videos */
export type ExampleVideo = {
  __typename?: 'ExampleVideo';
  id: Scalars['ID'];
  /** Name video */
  name: Scalars['String'];
  /** Video */
  url: Scalars['String'];
};

/** A FeedbackType  Object */
export type Feedback = {
  __typename?: 'Feedback';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

/** An Profile Gender Object */
export type Gender = {
  __typename?: 'Gender';
  id: Scalars['ID'];
  name: Scalars['String'];
  shortName: Scalars['String'];
};

/** Profile Genders Object */
export type Genders = {
  __typename?: 'Genders';
  base: Array<Gender>;
  other: Array<Gender>;
  selected?: Maybe<Gender>;
  visibility: Scalars['Boolean'];
};

/** A Height Object */
export type Height = {
  __typename?: 'Height';
  heightCm?: Maybe<Scalars['String']>;
  heightFt?: Maybe<Scalars['String']>;
  heightIn: Scalars['String'];
  heightM?: Maybe<Scalars['String']>;
};

/** A Place of Birth block Object */
export type HeightBlock = {
  __typename?: 'HeightBlock';
  description: Scalars['String'];
  title: Scalars['String'];
  value: Height;
  visibility: Scalars['Boolean'];
};


/** A Match data */
export type IconChat = {
  __typename?: 'IconChat';
  actual: Scalars['Boolean'];
  blocked: Scalars['Boolean'];
  /** Chat expired */
  chatExpired: Scalars['Boolean'];
  chatId: Scalars['String'];
  /** Count all messages */
  countMessages: Scalars['String'];
  /** Time expire UTC */
  expireAt: Scalars['ISO8601DateTime'];
  /** Owner have super like */
  haveSuperLike?: Maybe<Scalars['Boolean']>;
  /** Current User Recovery Match */
  iRecovered: Scalars['Boolean'];
  /** User turn send message */
  isMyTurn: Scalars['Boolean'];
  /** Last chat message text */
  lastMessage?: Maybe<Scalars['String']>;
  matchPhotoModerationPassed?: Maybe<Scalars['Boolean']>;
  /** Match User */
  matchUser: MatchUser;
  matchVideoModerationPassed?: Maybe<Scalars['Boolean']>;
  /** Possibly Recovery Match */
  recovered: Scalars['Boolean'];
  /** Second User Recovery Match */
  secondUserReconnect: Scalars['Boolean'];
  /** Second User Unmatch */
  secondUserUnmatch: Scalars['Boolean'];
  /** Owner sent super like */
  sentSuperLike?: Maybe<Scalars['Boolean']>;
  /** Count unread messages */
  unreadMessagesCount: Scalars['String'];
  /** User Recovery Match */
  userRecovered: Scalars['Boolean'];
};

/** Validation Image Info */
export type ImageInvalids = {
  __typename?: 'ImageInvalids';
  general?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
};

/** Image Moderation Type */
export type ImageModeration = {
  __typename?: 'ImageModeration';
  approved: Scalars['Boolean'];
  invalids: ImageInvalids;
  recognized: Scalars['Boolean'];
};

/** An Profile Job Object */
export type Job = {
  __typename?: 'Job';
  jobDescription?: Maybe<Scalars['String']>;
  placeOfWork?: Maybe<Scalars['String']>;
};

/** A Job block Object */
export type JobBlock = {
  __typename?: 'JobBlock';
  description: Scalars['String'];
  title: Scalars['String'];
  value: Job;
  visibility: Scalars['Boolean'];
};

/** An Attitude to Kids Block */
export type KidsBlock = {
  __typename?: 'KidsBlock';
  chosenConditionIds: Array<Scalars['String']>;
  description: Scalars['String'];
  list: Array<Value>;
  title: Scalars['String'];
  value?: Maybe<KidsValue>;
  visibility: Scalars['Boolean'];
};

/** An Profile KidsCondition Object */
export type KidsCondition = {
  __typename?: 'KidsCondition';
  checked: Scalars['Boolean'];
  conditionId: Scalars['String'];
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

/** An Profile KidsCondition Object */
export type KidsConditionChosen = {
  __typename?: 'KidsConditionChosen';
  conditionId: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['Boolean'];
};

export type KidsValue = {
  __typename?: 'KidsValue';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  errorLike?: Maybe<Scalars['String']>;
  matchId?: Maybe<Scalars['Int']>;
  userLike: Scalars['Boolean'];
};

/** Users Like or Dislike */
export type LikeInput = {
  /** User's ID which you like */
  userAccountId: Scalars['String'];
};

/** An Profile LikeToMeet Object */
export type LikeToMeet = {
  __typename?: 'LikeToMeet';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Profile LikeToMeets Object */
export type LikeToMeets = {
  __typename?: 'LikeToMeets';
  list: Array<LikeToMeet>;
  selected?: Maybe<LikeToMeet>;
};

/** A Match User data */
export type MatchUser = {
  __typename?: 'MatchUser';
  age: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  profilePhoto?: Maybe<Scalars['String']>;
  userProfileId: Scalars['String'];
};

/** An Message Object */
export type Message = {
  __typename?: 'Message';
  /** Chat expired */
  chatExpired: Scalars['Boolean'];
  /** Time created UTC */
  createdAt: Scalars['ISO8601DateTime'];
  fileType?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  matchId: Scalars['String'];
  /** Second User Recovery Match */
  secondUserReconnect: Scalars['Boolean'];
  /** Second User Unmatch */
  secondUserUnmatch: Scalars['Boolean'];
  seen: Scalars['Boolean'];
  seenAt?: Maybe<Scalars['ISO8601DateTime']>;
  text?: Maybe<Scalars['String']>;
  userAccountId: Scalars['String'];
};

/** A ModalType  Object */
export type Modal = {
  __typename?: 'Modal';
  attributives?: Maybe<Array<Attributive>>;
  buttons?: Maybe<Array<Button>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Query Message */
  createQueryMessage?: Maybe<Array<QueryMessage>>;
  /** Create User query */
  createUserQuery?: Maybe<Scalars['Boolean']>;
  /** Delete User account */
  deleteAccount?: Maybe<UserAccount>;
  /** Delete match-chat */
  deleteMatch?: Maybe<Chat>;
  /** Messages was seen */
  messageSeen?: Maybe<Scalars['Boolean']>;
  /** Mark messages as seen */
  queryMessagesSeen?: Maybe<Scalars['Boolean']>;
  /** Recovery disabled match-chat */
  recoveryMatch?: Maybe<Chat>;
  signOut?: Maybe<Scalars['Boolean']>;
  /** User account update */
  userAccountUpdate?: Maybe<UserAccount>;
  /** Blocked user account, DEPRECATED */
  userBlocked?: Maybe<Scalars['Boolean']>;
  /** Create like */
  userLike?: Maybe<Like>;
  /** User preference update */
  userPreferenceUpdate?: Maybe<Preference>;
  /** User data update */
  userProfileUpdate?: Maybe<UserProfile>;
  /** Sign user by facebook */
  userSignByFb?: Maybe<AuthToken>;
  /** Sign user by apple */
  userSignByIos?: Maybe<AuthToken>;
  /** Send OneTimeCode user to phone */
  userSignByPhone?: Maybe<Scalars['Boolean']>;
  /** SignIn user */
  userSignIn?: Maybe<AuthToken>;
  /** Create skip like */
  userSkip?: Maybe<Scalars['Boolean']>;
  /** Update Users SuperLikes */
  userSuperLike?: Maybe<Like>;
  /** Create Unlike */
  userUnlike?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateQueryMessageArgs = {
  input: QueryMessageInput;
};


export type MutationCreateUserQueryArgs = {
  input: UserQueryInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteMatchArgs = {
  matchId: Scalars['String'];
};


export type MutationMessageSeenArgs = {
  matchId: Scalars['String'];
};


export type MutationQueryMessagesSeenArgs = {
  userQueryId: Scalars['String'];
};


export type MutationRecoveryMatchArgs = {
  matchId: Scalars['String'];
};


export type MutationUserAccountUpdateArgs = {
  input: UserAccountInput;
};


export type MutationUserBlockedArgs = {
  input: BlockInput;
};


export type MutationUserLikeArgs = {
  input: LikeInput;
};


export type MutationUserPreferenceUpdateArgs = {
  input: PreferenceInput;
};


export type MutationUserProfileUpdateArgs = {
  input: UserProfileInput;
};


export type MutationUserSignByFbArgs = {
  input: UserAccountSignFbInput;
};


export type MutationUserSignByIosArgs = {
  input: UserAccountSignIosInput;
};


export type MutationUserSignByPhoneArgs = {
  input: UserSignByPhoneInput;
};


export type MutationUserSignInArgs = {
  input: UserSignInInput;
};


export type MutationUserSkipArgs = {
  input: LikeInput;
};


export type MutationUserSuperLikeArgs = {
  input: LikeInput;
};


export type MutationUserUnlikeArgs = {
  input: UnlikeInput;
};

/** User's Like data */
export type MyLikes = {
  __typename?: 'MyLikes';
  count?: Maybe<Scalars['String']>;
  /** Last User Sender */
  lastSender?: Maybe<MatchUser>;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
};

/** An Profile Native Language Object */
export type NativeLanguage = {
  __typename?: 'NativeLanguage';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A Neighborhood Object */
export type Neighborhood = {
  __typename?: 'Neighborhood';
  inNeighborhood: Scalars['Boolean'];
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
};

/** A Place of Birth block Object */
export type NeighborhoodBlock = {
  __typename?: 'NeighborhoodBlock';
  description: Scalars['String'];
  title: Scalars['String'];
  value: Neighborhood;
  visibility: Scalars['Boolean'];
};


/** Photo urls */
export type PhotoUrls = {
  __typename?: 'PhotoUrls';
  blur?: Maybe<Scalars['String']>;
  middle?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
};

/** An Profile PhysicalActivity Object */
export type PhysicalActivity = {
  __typename?: 'PhysicalActivity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile Place of Birth Object */
export type PlaceOfBirth = {
  __typename?: 'PlaceOfBirth';
  placeOfBirth?: Maybe<Scalars['String']>;
};

/** A Place of Birth block Object */
export type PlaceOfBirthBlock = {
  __typename?: 'PlaceOfBirthBlock';
  description: Scalars['String'];
  title: Scalars['String'];
  value?: Maybe<PlaceOfBirth>;
  visibility: Scalars['Boolean'];
};

/** An Profile PoliticalIdeology Object */
export type PoliticalIdeology = {
  __typename?: 'PoliticalIdeology';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** User Popularity Object */
export type Popularity = {
  __typename?: 'Popularity';
  advertsInfo: AdvertsInfo;
  conversations: Array<IconChat>;
  intros: Array<IconChat>;
  likes?: Maybe<MyLikes>;
  matches: Array<IconChat>;
};

/** An User Preference Object */
export type Preference = {
  __typename?: 'Preference';
  attitudeToAlcohol?: Maybe<Scalars['String']>;
  attitudeToAlcoholsList?: Maybe<Array<AttitudeToAlcohol>>;
  attitudeToKids?: Maybe<Scalars['String']>;
  attitudeToKidsList?: Maybe<Array<AttitudeToKid>>;
  attitudeToMarijuana?: Maybe<Scalars['String']>;
  attitudeToMarijuanaList?: Maybe<Array<AttitudeToMarijuana>>;
  attitudeToPet?: Maybe<Scalars['String']>;
  attitudeToPetsList?: Maybe<Array<AttitudeToPet>>;
  attitudeToSmoking?: Maybe<Scalars['String']>;
  attitudeToSmokingList?: Maybe<Array<AttitudeToSmoking>>;
  /** Preference distance */
  distance?: Maybe<Scalars['String']>;
  educationLevel?: Maybe<Scalars['String']>;
  /** Like to meet gender list */
  educationLevelsList?: Maybe<Array<EducationLevel>>;
  /** Like to meet gender */
  gender?: Maybe<Scalars['String']>;
  gendersList?: Maybe<Array<LikeToMeet>>;
  id: Scalars['ID'];
  maxAge: Scalars['String'];
  maxHeight?: Maybe<Scalars['String']>;
  minAge: Scalars['String'];
  minHeight?: Maybe<Scalars['String']>;
  physicalActivitiesList?: Maybe<Array<PhysicalActivity>>;
  physicalActivity?: Maybe<Scalars['String']>;
  political?: Maybe<Scalars['String']>;
  relationshipGoals?: Maybe<Scalars['String']>;
  relationshipGoalsList?: Maybe<Array<RelationshipGoal>>;
  relationshipStatus?: Maybe<Scalars['String']>;
  relationshipStatusList?: Maybe<Array<RelationshipStatus>>;
  religion?: Maybe<Scalars['String']>;
  religionsList?: Maybe<Array<Religion>>;
};

/** User Preference input */
export type PreferenceInput = {
  /** Min age */
  minAge?: Maybe<Scalars['String']>;
  /** Max age */
  maxAge?: Maybe<Scalars['String']>;
  /** User's gender */
  genderId?: Maybe<Scalars['String']>;
  /** User's religion */
  religionId?: Maybe<Scalars['String']>;
  /** Max height */
  maxHeight?: Maybe<Scalars['String']>;
  /** Min height */
  minHeight?: Maybe<Scalars['String']>;
  /** Preference distance */
  distance?: Maybe<Scalars['String']>;
  /** User's education level */
  educationLevelId?: Maybe<Scalars['String']>;
  /** User's relationship statuses */
  relationshipStatusesId?: Maybe<Scalars['String']>;
  /** User's relationship goal */
  relationshipGoalId?: Maybe<Scalars['String']>;
  /** User's attitude to kids */
  attitudeToKidsId?: Maybe<Scalars['String']>;
  /** User's physical activity */
  physicalActivityId?: Maybe<Scalars['String']>;
  /** User's political activity */
  politicalActivityId?: Maybe<Scalars['String']>;
  /** User's attitude to pets */
  attitudeToPetId?: Maybe<Scalars['String']>;
  /** User's attitude to alcohol */
  attitudeToAlcoholId?: Maybe<Scalars['String']>;
  /** User's attitude to smoking */
  attitudeToSmokingId?: Maybe<Scalars['String']>;
  /** User's attitude to marijuana */
  attitudeToMarijuanaId?: Maybe<Scalars['String']>;
};

/** An Public UserAccount Object */
export type PublicAccount = {
  __typename?: 'PublicAccount';
  age: Scalars['String'];
  countLikes: Scalars['String'];
  countMatches: Scalars['String'];
  countSuperLikes: Scalars['String'];
  currentLocation?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UserAccountImage>;
  neighborhood?: Maybe<Scalars['String']>;
  premium: Scalars['Boolean'];
  /** Primary User Image */
  profileImage?: Maybe<AccountPhoto>;
  userProfileId: Scalars['String'];
  videos?: Maybe<Array<UserAccountVideo>>;
};

/** An Public Account with full data Object */
export type PublicAccountFull = {
  __typename?: 'PublicAccountFull';
  attitudeToAlcohol?: Maybe<Scalars['String']>;
  attitudeToKid?: Maybe<AttitudeToKids>;
  attitudeToMarijuana?: Maybe<Scalars['String']>;
  attitudeToPet?: Maybe<Scalars['String']>;
  attitudeToSmoking?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['ISO8601DateTime']>;
  currentLocation?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  educationLevel?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  genderShort?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  heightCm?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<AccountPhoto>;
  job?: Maybe<Scalars['String']>;
  likeToMeet?: Maybe<Scalars['String']>;
  likedMe: Scalars['Boolean'];
  nameOfSchool?: Maybe<Scalars['String']>;
  nativeLanguage?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  physicalActivity?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  placeOfWork?: Maybe<Scalars['String']>;
  politicalIdeology?: Maybe<Scalars['String']>;
  /** Primary User Image */
  profileImage?: Maybe<AccountPhoto>;
  relationshipGoal?: Maybe<Scalars['String']>;
  relationshipStatus?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  superlikedMe: Scalars['Boolean'];
  /** User Account Id */
  userAccountId: Scalars['String'];
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
  videos?: Maybe<Array<UserAccountVideo>>;
  zodiac?: Maybe<Scalars['String']>;
};

/** An Public Profile Object */
export type PublicProfile = {
  __typename?: 'PublicProfile';
  attitudeToAlcohol?: Maybe<Scalars['String']>;
  attitudeToKid?: Maybe<AttitudeToKids>;
  attitudeToMarijuana?: Maybe<Scalars['String']>;
  attitudeToPet?: Maybe<Scalars['String']>;
  attitudeToSmoking?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['ISO8601DateTime']>;
  currentLocation?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  distanceIn?: Maybe<Scalars['String']>;
  educationLevel?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  genderShort?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  heightCm?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<AccountPhoto>;
  job?: Maybe<Scalars['String']>;
  likeToMeet?: Maybe<Scalars['String']>;
  nameOfSchool?: Maybe<Scalars['String']>;
  nativeLanguage?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  physicalActivity?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  placeOfWork?: Maybe<Scalars['String']>;
  politicalIdeology?: Maybe<Scalars['String']>;
  /** Primary User Image */
  profileImage?: Maybe<AccountPhoto>;
  relationshipGoal?: Maybe<Scalars['String']>;
  relationshipStatus?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  /** User Account Id */
  userAccountId: Scalars['String'];
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
  videos?: Maybe<Array<UserAccountVideo>>;
  zodiac?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Chats's matches */
  chatMessages?: Maybe<ChatMessages>;
  /** Chat/match room */
  chatRoom?: Maybe<Chat>;
  /** The example videos */
  exampleVideo?: Maybe<ExampleVideo>;
  /** The current user */
  me?: Maybe<UserAccount>;
  /** The user's Account Image */
  myAccountImage: AccountPhoto;
  /** The user's Account Videos */
  myAccountVideos?: Maybe<VideoPreview>;
  /** User's adverts */
  myAdverts?: Maybe<Array<Advert>>;
  /** User's Fanbase */
  myFanbase?: Maybe<Array<PublicAccount>>;
  /** User's Likes */
  myLikes?: Maybe<Array<PublicAccount>>;
  /** User's popularity data */
  myPopularity: Popularity;
  /** The current user profile */
  myPreferences?: Maybe<Preference>;
  /** The current user profile */
  myProfile?: Maybe<UserProfile>;
  /** The questions for make video answers */
  myQuestions?: Maybe<UserAccountQuestions>;
  /** User's SuperLikes */
  mySuperLikes?: Maybe<Array<MatchUser>>;
  /** The show public user account */
  publicUserAccount?: Maybe<PublicAccount>;
  /** The show public user profile */
  publicUserProfile?: Maybe<PublicProfile>;
  /** The questions by screen for make video answers */
  screenQuestions?: Maybe<QuestionsPart>;
  /** List Preference Users */
  search?: Maybe<Array<PublicAccountFull>>;
  /** Static page info */
  staticPage?: Maybe<StaticPage>;
  /** Get Survey windows */
  survey: Survey;
  /** UserAccount Genders */
  userGenders: UserGenders;
};


export type QueryChatMessagesArgs = {
  page?: Maybe<Scalars['String']>;
  matchId: Scalars['String'];
};


export type QueryChatRoomArgs = {
  chatId: Scalars['String'];
};


export type QueryExampleVideoArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryMyAdvertsArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryMyFanbaseArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryMyLikesArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryMySuperLikesArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryPublicUserAccountArgs = {
  userAccountId?: Maybe<Scalars['String']>;
};


export type QueryPublicUserProfileArgs = {
  userProfileId?: Maybe<Scalars['String']>;
};


export type QueryScreenQuestionsArgs = {
  screenNumber: Scalars['String'];
};


export type QuerySearchArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryStaticPageArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type QuerySurveyArgs = {
  name: Scalars['String'];
};

/** A Query Message */
export type QueryMessage = {
  __typename?: 'QueryMessage';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  seenAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Sender message */
  sender: Scalars['String'];
};

/** Query Message Input */
export type QueryMessageInput = {
  /** User's ID which you like */
  usersQueryId: Scalars['String'];
  /** Query comment */
  message: Scalars['String'];
  /** Uploaded Blobs Ids */
  blobIds?: Maybe<Array<Scalars['String']>>;
};

/** An Question Object */
export type Question = {
  __typename?: 'Question';
  answerDurations: AnswerDurations;
  audio: Audio;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  topic: Scalars['String'];
};

/** An Question list Objects */
export type QuestionsPart = {
  __typename?: 'QuestionsPart';
  answered?: Maybe<UserAccountVideo>;
  questions?: Maybe<Array<Question>>;
};

/** An Reconnection Message Object */
export type Reconnection = {
  __typename?: 'Reconnection';
  /** Chat expired */
  chatExpired: Scalars['Boolean'];
  /** Time created UTC */
  createdAt: Scalars['ISO8601DateTime'];
  fileType?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  matchId: Scalars['String'];
  /** Second User Recovery Match */
  secondUserReconnect: Scalars['Boolean'];
  /** Second User Unmatch */
  secondUserUnmatch: Scalars['Boolean'];
  seen: Scalars['Boolean'];
  seenAt?: Maybe<Scalars['ISO8601DateTime']>;
  text?: Maybe<Scalars['String']>;
  userAccountId: Scalars['String'];
};

/** An Profile RelationshipGoal Object */
export type RelationshipGoal = {
  __typename?: 'RelationshipGoal';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile RelationshipStatus Object */
export type RelationshipStatus = {
  __typename?: 'RelationshipStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** An Profile Religion Object */
export type Religion = {
  __typename?: 'Religion';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Static Page */
export type StaticPage = {
  __typename?: 'StaticPage';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<StaticPageOption>>;
  text: Scalars['String'];
};

/** Static Page Option */
export type StaticPageOption = {
  __typename?: 'StaticPageOption';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  processError: Scalars['String'];
  reconnectionChat?: Maybe<Reconnection>;
  updateChat?: Maybe<Message>;
  updateConversations?: Maybe<Array<IconChat>>;
  updateIntros?: Maybe<Array<IconChat>>;
  updateMatches?: Maybe<Array<IconChat>>;
  updateProfile?: Maybe<UserProfile>;
  updateVideoPreview: VideoPreview;
  updateWhoLikesYou?: Maybe<PublicAccount>;
  updatedAccountPhoto: AccountPhoto;
  updatedUserLikes?: Maybe<MyLikes>;
  updatedUserSuperLikes?: Maybe<UserAccount>;
};


export type SubscriptionProcessErrorArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionReconnectionChatArgs = {
  matchId: Scalars['String'];
};


export type SubscriptionUpdateChatArgs = {
  matchId: Scalars['String'];
};


export type SubscriptionUpdateConversationsArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdateIntrosArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdateMatchesArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdateProfileArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdateVideoPreviewArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdateWhoLikesYouArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdatedAccountPhotoArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdatedUserLikesArgs = {
  userAccountId: Scalars['String'];
};


export type SubscriptionUpdatedUserSuperLikesArgs = {
  userAccountId: Scalars['String'];
};

/** A SurveyType  Object */
export type Survey = {
  __typename?: 'Survey';
  baseModal?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  feedbacks: Array<Feedback>;
  id: Scalars['ID'];
  modals: Array<Modal>;
  name: Scalars['String'];
};

/** User Unlike */
export type UnlikeInput = {
  /** User's ID who unliked */
  userAccountId: Scalars['String'];
  /** User's unlike comment */
  comment?: Maybe<Scalars['String']>;
  /** Attributive reason ID */
  attributiveId: Scalars['String'];
  /** Uploaded Blobs Ids */
  blobIds?: Maybe<Array<Scalars['String']>>;
};

/** An UserAccount Object */
export type UserAccount = {
  __typename?: 'UserAccount';
  appleUserId?: Maybe<Scalars['String']>;
  countLikes: Scalars['String'];
  countMatches: Scalars['String'];
  countSuperLikes: Scalars['String'];
  /** Account will drop after date  */
  dropAfter?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** Account is enabled */
  enabled: Scalars['Boolean'];
  fbId?: Maybe<Scalars['String']>;
  fbToken?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<AccountPhoto>;
  /** New adverts number */
  newAdverts?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Phone']>;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  premium: Scalars['Boolean'];
  premiumExpireAt?: Maybe<Scalars['ISO8601DateTime']>;
  profileFilled: Scalars['Boolean'];
  /** Primary User Image */
  profileImage?: Maybe<AccountPhoto>;
  /** Push Expiring Conversation */
  pushExpiringConversation: Scalars['Boolean'];
  /** Push Expiring Messages */
  pushExpiringMessages: Scalars['Boolean'];
  /** Push New Likes */
  pushNewLike: Scalars['Boolean'];
  /** Push New Matches */
  pushNewMatch: Scalars['Boolean'];
  /** Push New Messages */
  pushNewMessage: Scalars['Boolean'];
  /** Push New SuperLikes */
  pushNewSuperLike: Scalars['Boolean'];
  /** Users Queries */
  userQueries?: Maybe<Array<UserQuery>>;
  videoFilled: Scalars['Boolean'];
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
  /** Voximplant ID */
  voximplantId?: Maybe<Scalars['String']>;
  /** Voximplant Name */
  voximplantName?: Maybe<Scalars['String']>;
};

/** DEPRECATED! An UserAccountImage Object */
export type UserAccountImage = {
  __typename?: 'UserAccountImage';
  approved: Scalars['Boolean'];
  blur?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  invalids?: Maybe<Array<Scalars['String']>>;
  middleUrl?: Maybe<Scalars['String']>;
  primary: Scalars['String'];
  primaryInvalids?: Maybe<Array<Scalars['String']>>;
  /** With validation */
  recognized: Scalars['Boolean'];
  /** Image with file errors */
  shouldDestroy: Scalars['Boolean'];
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** UserAccount input */
export type UserAccountInput = {
  /** User's first name */
  firstName?: Maybe<Scalars['String']>;
  /** User's email */
  email?: Maybe<Scalars['String']>;
  /** User's email */
  phone?: Maybe<Scalars['String']>;
  pushNewMatch?: Maybe<Scalars['Boolean']>;
  pushNewLike?: Maybe<Scalars['Boolean']>;
  pushNewSuperLike?: Maybe<Scalars['Boolean']>;
  pushNewMessage?: Maybe<Scalars['Boolean']>;
  pushExpiringMessages?: Maybe<Scalars['Boolean']>;
  pushExpiringConversation?: Maybe<Scalars['Boolean']>;
};

/** List Questions for create video */
export type UserAccountQuestions = {
  __typename?: 'UserAccountQuestions';
  screen1?: Maybe<QuestionsPart>;
  screen2?: Maybe<QuestionsPart>;
  screen3?: Maybe<QuestionsPart>;
  screen4?: Maybe<QuestionsPart>;
  screen5?: Maybe<QuestionsPart>;
  screen6?: Maybe<QuestionsPart>;
  screen7?: Maybe<QuestionsPart>;
};

/** SignUp by facebook input */
export type UserAccountSignFbInput = {
  /** User's facebook access token */
  facebookAccessToken?: Maybe<Scalars['String']>;
};

/** SignUp by apple input */
export type UserAccountSignIosInput = {
  /** User's apple credentials */
  appleCredentials?: Maybe<Scalars['String']>;
  /** JWT from apple */
  appleJwt?: Maybe<Scalars['String']>;
  /** User's name */
  name?: Maybe<Scalars['String']>;
};

/** An UserAccountVideo Object */
export type UserAccountVideo = {
  __typename?: 'UserAccountVideo';
  approved: Scalars['Boolean'];
  errors?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  invalids?: Maybe<Array<Scalars['String']>>;
  question: Question;
  /** With validation */
  recognized: Scalars['Boolean'];
  screenUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** User Genders Object */
export type UserGenders = {
  __typename?: 'UserGenders';
  current: Genders;
  likeToMeet: LikeToMeets;
};

/** An UserProfile Object */
export type UserProfile = {
  __typename?: 'UserProfile';
  attitudeToAlcoholBlock: DefaultBlock;
  attitudeToKidsBlock: KidsBlock;
  attitudeToMarijuanaBlock: DefaultBlock;
  attitudeToPetBlock: DefaultBlock;
  attitudeToSmokingBlock: DefaultBlock;
  birthDate?: Maybe<Scalars['ISO8601DateTime']>;
  educationBlock: EducationBlock;
  genderBlock: DefaultBlock;
  heightBlock: HeightBlock;
  id: Scalars['ID'];
  jobBlock: JobBlock;
  likeToMeetGender?: Maybe<Scalars['String']>;
  nativeLanguageBlock: DefaultBlock;
  neighborhoodBlock: NeighborhoodBlock;
  photoModerationPassed?: Maybe<Scalars['Boolean']>;
  physicalActivityBlock: DefaultBlock;
  placeOfBirthBlock: PlaceOfBirthBlock;
  politicalIdeologyBlock: DefaultBlock;
  /** Location lat for finding */
  preferenceLat?: Maybe<Scalars['String']>;
  /** Location lon for finding */
  preferenceLon?: Maybe<Scalars['String']>;
  relationshipGoalBlock: DefaultBlock;
  relationshipStatusBlock: DefaultBlock;
  religionBlock: DefaultBlock;
  /** Profile is sleep(not visible) */
  sleep: Scalars['Boolean'];
  /** UserAccount data */
  userAccount: UserAccount;
  /** UserAccountId */
  userAccountId: Scalars['String'];
  videoModerationPassed?: Maybe<Scalars['Boolean']>;
  zodiacBlock: DefaultBlock;
};

/** UserProfile input */
export type UserProfileInput = {
  /** User's birth date, format 'mm.dd.yyyy' */
  birthDate?: Maybe<Scalars['String']>;
  /** User's gender */
  genderId?: Maybe<Scalars['String']>;
  /** Like gender for meet */
  likeToMeetId?: Maybe<Scalars['String']>;
  /** User's religion */
  religionId?: Maybe<Scalars['String']>;
  /** User's religion */
  neighborhood?: Maybe<Scalars['String']>;
  /** User's job */
  jobDescription?: Maybe<Scalars['String']>;
  /** User's education Level */
  educationLevelId?: Maybe<Scalars['String']>;
  /** User's place of work */
  placeOfWork?: Maybe<Scalars['String']>;
  /** User's name of school */
  nameOfSchool?: Maybe<Scalars['String']>;
  /** User's place of birth */
  placeOfBirth?: Maybe<Scalars['String']>;
  /** User's height in FT! */
  height?: Maybe<Scalars['String']>;
  /** User's height in cm! */
  heightCm?: Maybe<Scalars['String']>;
  /** User's weight */
  weight?: Maybe<Scalars['String']>;
  /** User's relationship statuses */
  relationshipStatusId?: Maybe<Scalars['String']>;
  /** User's relationship goal */
  relationshipGoalId?: Maybe<Scalars['String']>;
  /** User's attitude to kids */
  attitudeToKidId?: Maybe<Scalars['String']>;
  /** User's physical activity */
  physicalActivityId?: Maybe<Scalars['String']>;
  /** User's political ideology */
  politicalIdeologyId?: Maybe<Scalars['String']>;
  /** User's zodiac */
  zodiacId?: Maybe<Scalars['String']>;
  /** User's attitude to pets */
  attitudeToPetId?: Maybe<Scalars['String']>;
  /** User's attitude to alcohol */
  attitudeToAlcoholId?: Maybe<Scalars['String']>;
  /** User's attitude to smoking */
  attitudeToSmokingId?: Maybe<Scalars['String']>;
  /** User's attitude to marijuana */
  attitudeToMarijuanaId?: Maybe<Scalars['String']>;
  /** Native Language */
  nativeLanguageId?: Maybe<Scalars['String']>;
  /** Ids kids conditions */
  kidsConditionIds?: Maybe<Array<Scalars['String']>>;
  /** Location lon */
  lon?: Maybe<Scalars['String']>;
  /** Location lat */
  lat?: Maybe<Scalars['String']>;
  /** Preference location lon */
  preferenceLon?: Maybe<Scalars['String']>;
  /** Preference location lat */
  preferenceLat?: Maybe<Scalars['String']>;
  /** Permission to show gender */
  showGender?: Maybe<Scalars['Boolean']>;
  /** Permission to show neighborhood */
  showNeighborhood?: Maybe<Scalars['Boolean']>;
  /** Permission to show height */
  showHeight?: Maybe<Scalars['Boolean']>;
  /** Permission to show job */
  showJob?: Maybe<Scalars['Boolean']>;
  /** Permission to show religion */
  showReligion?: Maybe<Scalars['Boolean']>;
  /** Permission to show education */
  showEducation?: Maybe<Scalars['Boolean']>;
  /** Permission to show birth date */
  showBirthDate?: Maybe<Scalars['Boolean']>;
  /** Permission to show place of birth */
  showPlaceOfBirth?: Maybe<Scalars['Boolean']>;
  /** Permission to show native language */
  showNativeLanguage?: Maybe<Scalars['Boolean']>;
  /** Permission to show relationship status */
  showRelationshipStatus?: Maybe<Scalars['Boolean']>;
  /** Permission to show relationship goal */
  showRelationshipGoal?: Maybe<Scalars['Boolean']>;
  /** Permission to show attitude to kids */
  showAttitudeToKid?: Maybe<Scalars['Boolean']>;
  /** Permission to show physical activity */
  showPhysicalActivity?: Maybe<Scalars['Boolean']>;
  /** Permission to show zodiac */
  showZodiac?: Maybe<Scalars['Boolean']>;
  /** Permission to show political ideology */
  showPoliticalIdeology?: Maybe<Scalars['Boolean']>;
  /** Permission to show attitude to pet */
  showAttitudeToPet?: Maybe<Scalars['Boolean']>;
  /** Permission to show attitude to alcohol */
  showAttitudeToAlcohol?: Maybe<Scalars['Boolean']>;
  /** Permission to show attitude to smoking */
  showAttitudeToSmoking?: Maybe<Scalars['Boolean']>;
  /** Permission to show attitude to marijuana */
  showAttitudeToMarijuana?: Maybe<Scalars['Boolean']>;
  /** Distance unit 'mi' or 'km' */
  distanceIn?: Maybe<Scalars['String']>;
  /** Height unit 'ft' or 'm' */
  heightIn?: Maybe<Scalars['String']>;
  /** Find in neighborhood */
  inNeighborhood?: Maybe<Scalars['Boolean']>;
};

/** A User Query */
export type UserQuery = {
  __typename?: 'UserQuery';
  /** Title attributive */
  attributive: Scalars['String'];
  id: Scalars['ID'];
  /** Messages */
  queryMessages: Array<QueryMessage>;
};

/** UserQuery input */
export type UserQueryInput = {
  /** Attributive reason ID */
  attributiveId: Scalars['String'];
  /** Suspected user account ID */
  suspectedUserId?: Maybe<Scalars['String']>;
  /** Query comment */
  message: Scalars['String'];
  /** Uploaded Blobs Ids */
  blobIds?: Maybe<Array<Scalars['String']>>;
  /** User's email */
  email: Scalars['String'];
};

/** Sign by Phone input */
export type UserSignByPhoneInput = {
  /** User's phone */
  phone?: Maybe<Scalars['String']>;
};

/** SignIn input */
export type UserSignInInput = {
  /** User's phone */
  phone?: Maybe<Scalars['String']>;
  /** One time code from SMS */
  oneTimeCode?: Maybe<Scalars['String']>;
};

/** Represented  Object */
export type Value = AttitudeToAlcohol | AttitudeToKid | AttitudeToMarijuana | AttitudeToPet | AttitudeToSmoking | EducationLevel | Gender | NativeLanguage | PhysicalActivity | PoliticalIdeology | RelationshipGoal | RelationshipStatus | Religion | Zodiac;

/** An Video Preview Object */
export type VideoPreview = {
  __typename?: 'VideoPreview';
  profileImage?: Maybe<AccountPhoto>;
  videos?: Maybe<Array<UserAccountVideo>>;
  videosNumber?: Maybe<Scalars['String']>;
};

/** An Profile Zodiac Object */
export type Zodiac = {
  __typename?: 'Zodiac';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateQueryMessageMutationVariables = {
  input: QueryMessageInput;
};


export type CreateQueryMessageMutation = { __typename?: 'Mutation', createQueryMessage?: Maybe<Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }>> };

export type CreateUserQueryMutationVariables = {
  input: UserQueryInput;
};


export type CreateUserQueryMutation = { __typename?: 'Mutation', createUserQuery?: Maybe<boolean> };

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput;
};


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount?: Maybe<{ __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }> };

export type DeleteMatchMutationVariables = {
  matchId: Scalars['String'];
};


export type DeleteMatchMutation = { __typename?: 'Mutation', deleteMatch?: Maybe<{ __typename?: 'Chat', actual: boolean, blocked: boolean, countMessages: string, createdAt: any, expireAt: any, id: string, recovered: boolean, messages?: Maybe<Array<{ __typename?: 'Message', createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }>> }> };

export type MessageSeenMutationVariables = {
  matchId: Scalars['String'];
};


export type MessageSeenMutation = { __typename?: 'Mutation', messageSeen?: Maybe<boolean> };

export type QueryMessagesSeenMutationVariables = {
  userQueryId: Scalars['String'];
};


export type QueryMessagesSeenMutation = { __typename?: 'Mutation', queryMessagesSeen?: Maybe<boolean> };

export type RecoveryMatchMutationVariables = {
  matchId: Scalars['String'];
};


export type RecoveryMatchMutation = { __typename?: 'Mutation', recoveryMatch?: Maybe<{ __typename?: 'Chat', actual: boolean, blocked: boolean, countMessages: string, createdAt: any, expireAt: any, id: string, recovered: boolean, iRecovered: boolean, userRecovered: boolean, messages?: Maybe<Array<{ __typename?: 'Message', createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }>> }> };

export type SignOutMutationVariables = {};


export type SignOutMutation = { __typename?: 'Mutation', signOut?: Maybe<boolean> };

export type UserAccountUpdateMutationVariables = {
  input: UserAccountInput;
};


export type UserAccountUpdateMutation = { __typename?: 'Mutation', userAccountUpdate?: Maybe<{ __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }> };

export type UserBlockedMutationVariables = {
  input: BlockInput;
};


export type UserBlockedMutation = { __typename?: 'Mutation', userBlocked?: Maybe<boolean> };

export type UserLikeMutationVariables = {
  input: LikeInput;
};


export type UserLikeMutation = { __typename?: 'Mutation', userLike?: Maybe<{ __typename?: 'Like', matchId?: Maybe<number>, userLike: boolean }> };

export type UserPreferenceUpdateMutationVariables = {
  input: PreferenceInput;
};


export type UserPreferenceUpdateMutation = { __typename?: 'Mutation', userPreferenceUpdate?: Maybe<{ __typename?: 'Preference', attitudeToAlcohol?: Maybe<string>, attitudeToKids?: Maybe<string>, attitudeToMarijuana?: Maybe<string>, attitudeToPet?: Maybe<string>, attitudeToSmoking?: Maybe<string>, distance?: Maybe<string>, educationLevel?: Maybe<string>, gender?: Maybe<string>, id: string, maxAge: string, maxHeight?: Maybe<string>, minAge: string, minHeight?: Maybe<string>, physicalActivity?: Maybe<string>, political?: Maybe<string>, relationshipGoals?: Maybe<string>, relationshipStatus?: Maybe<string>, religion?: Maybe<string>, attitudeToAlcoholsList?: Maybe<Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string }>>, attitudeToKidsList?: Maybe<Array<{ __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> }>>, attitudeToMarijuanaList?: Maybe<Array<{ __typename?: 'AttitudeToMarijuana', id: string, name: string }>>, attitudeToPetsList?: Maybe<Array<{ __typename?: 'AttitudeToPet', id: string, name: string }>>, attitudeToSmokingList?: Maybe<Array<{ __typename?: 'AttitudeToSmoking', id: string, name: string }>>, educationLevelsList?: Maybe<Array<{ __typename?: 'EducationLevel', id: string, name: string }>>, gendersList?: Maybe<Array<{ __typename?: 'LikeToMeet', id: string, name: string }>>, physicalActivitiesList?: Maybe<Array<{ __typename?: 'PhysicalActivity', id: string, name: string }>>, relationshipGoalsList?: Maybe<Array<{ __typename?: 'RelationshipGoal', id: string, name: string }>>, relationshipStatusList?: Maybe<Array<{ __typename?: 'RelationshipStatus', id: string, name: string }>>, religionsList?: Maybe<Array<{ __typename?: 'Religion', id: string, name: string }>> }> };

export type UserProfileUpdateMutationVariables = {
  input: UserProfileInput;
};


export type UserProfileUpdateMutation = { __typename?: 'Mutation', userProfileUpdate?: Maybe<{ __typename?: 'UserProfile', birthDate?: Maybe<any>, id: string, photoModerationPassed?: Maybe<boolean>, preferenceLat?: Maybe<string>, preferenceLon?: Maybe<string>, sleep: boolean, userAccountId: string, videoModerationPassed?: Maybe<boolean>, attitudeToAlcoholBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToKidsBlock: { __typename?: 'KidsBlock', chosenConditionIds: Array<string>, description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'KidsValue', id: string, name: string }> }, attitudeToMarijuanaBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToPetBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToSmokingBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, educationBlock: { __typename?: 'EducationBlock', description: string, nameOfSchool?: Maybe<string>, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, genderBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, heightBlock: { __typename?: 'HeightBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Height', heightFt?: Maybe<string>, heightIn: string, heightM?: Maybe<string> } }, jobBlock: { __typename?: 'JobBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Job', jobDescription?: Maybe<string>, placeOfWork?: Maybe<string> } }, nativeLanguageBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, neighborhoodBlock: { __typename?: 'NeighborhoodBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Neighborhood', inNeighborhood: boolean, lat?: Maybe<string>, lon?: Maybe<string>, neighborhood?: Maybe<string> } }, physicalActivityBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, placeOfBirthBlock: { __typename?: 'PlaceOfBirthBlock', description: string, title: string, visibility: boolean, value?: Maybe<{ __typename?: 'PlaceOfBirth', placeOfBirth?: Maybe<string> }> }, politicalIdeologyBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipGoalBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipStatusBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, religionBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, userAccount: { __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }, zodiacBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> } }> };

export type UserSignByFbMutationVariables = {
  input: UserAccountSignFbInput;
};


export type UserSignByFbMutation = { __typename?: 'Mutation', userSignByFb?: Maybe<{ __typename?: 'AuthToken', access: string, refresh: string }> };

export type UserSignByIosMutationVariables = {
  input: UserAccountSignIosInput;
};


export type UserSignByIosMutation = { __typename?: 'Mutation', userSignByIos?: Maybe<{ __typename?: 'AuthToken', access: string, refresh: string }> };

export type UserSignByPhoneMutationVariables = {
  input: UserSignByPhoneInput;
};


export type UserSignByPhoneMutation = { __typename?: 'Mutation', userSignByPhone?: Maybe<boolean> };

export type UserSignInMutationVariables = {
  input: UserSignInInput;
};


export type UserSignInMutation = { __typename?: 'Mutation', userSignIn?: Maybe<{ __typename?: 'AuthToken', access: string, refresh: string }> };

export type UserSkipMutationVariables = {
  input: LikeInput;
};


export type UserSkipMutation = { __typename?: 'Mutation', userSkip?: Maybe<boolean> };

export type UserSuperLikeMutationVariables = {
  input: LikeInput;
};


export type UserSuperLikeMutation = { __typename?: 'Mutation', userSuperLike?: Maybe<{ __typename?: 'Like', matchId?: Maybe<number>, userLike: boolean }> };

export type UserUnlikeMutationVariables = {
  input: UnlikeInput;
};


export type UserUnlikeMutation = { __typename?: 'Mutation', userUnlike?: Maybe<boolean> };

export type ChatMessagesQueryVariables = {
  page?: Maybe<Scalars['String']>;
  matchId: Scalars['String'];
};


export type ChatMessagesQuery = { __typename?: 'Query', chatMessages?: Maybe<{ __typename?: 'ChatMessages', countMessages: string, messages?: Maybe<Array<{ __typename?: 'Message', createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }>> }> };

export type ChatRoomQueryVariables = {
  chatId: Scalars['String'];
};


export type ChatRoomQuery = { __typename?: 'Query', chatRoom?: Maybe<{ __typename?: 'Chat', actual: boolean, blocked: boolean, chatExpired: boolean, countMessages: string, createdAt: any, expireAt: any, firstName: string, iRecovered: boolean, id: string, photoUri: string, photoVideoModerationPassed: boolean, profileId: number, recovered: boolean, secondUserReconnect: boolean, secondUserUnmatch: boolean, userId: number, userRecovered: boolean, messages?: Maybe<Array<{ __typename?: 'Message', createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }>> }> };

export type ExampleVideoQueryVariables = {
  name?: Maybe<Scalars['String']>;
};


export type ExampleVideoQuery = { __typename?: 'Query', exampleVideo?: Maybe<{ __typename?: 'ExampleVideo', id: string, name: string, url: string }> };

export type MeQueryVariables = {};


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }> };

export type MyAccountImageQueryVariables = {};


export type MyAccountImageQuery = { __typename?: 'Query', myAccountImage: { __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } } };

export type MyAccountVideosQueryVariables = {};


export type MyAccountVideosQuery = { __typename?: 'Query', myAccountVideos?: Maybe<{ __typename?: 'VideoPreview', videosNumber?: Maybe<string>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }> };

export type MyAdvertsQueryVariables = {
  page?: Maybe<Scalars['String']>;
};


export type MyAdvertsQuery = { __typename?: 'Query', myAdverts?: Maybe<Array<{ __typename?: 'Advert', advertId?: Maybe<string>, id: string, message?: Maybe<string>, seen: boolean, seenAt?: Maybe<any>, sentAt: any }>> };

export type MyFanbaseQueryVariables = {
  page?: Maybe<Scalars['String']>;
};


export type MyFanbaseQuery = { __typename?: 'Query', myFanbase?: Maybe<Array<{ __typename?: 'PublicAccount', age: string, countLikes: string, countMatches: string, countSuperLikes: string, currentLocation?: Maybe<string>, distance?: Maybe<string>, enabled: boolean, firstName: string, id: string, neighborhood?: Maybe<string>, premium: boolean, userProfileId: string, image?: Maybe<{ __typename?: 'UserAccountImage', approved: boolean, blur?: Maybe<string>, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, middleUrl?: Maybe<string>, primary: string, primaryInvalids?: Maybe<Array<string>>, recognized: boolean, shouldDestroy: boolean, smallUrl?: Maybe<string>, url?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }>> };

export type MyLikesQueryVariables = {
  page?: Maybe<Scalars['String']>;
};


export type MyLikesQuery = { __typename?: 'Query', myLikes?: Maybe<Array<{ __typename?: 'PublicAccount', age: string, countLikes: string, countMatches: string, countSuperLikes: string, currentLocation?: Maybe<string>, distance?: Maybe<string>, enabled: boolean, firstName: string, id: string, neighborhood?: Maybe<string>, premium: boolean, userProfileId: string, image?: Maybe<{ __typename?: 'UserAccountImage', approved: boolean, blur?: Maybe<string>, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, middleUrl?: Maybe<string>, primary: string, primaryInvalids?: Maybe<Array<string>>, recognized: boolean, shouldDestroy: boolean, smallUrl?: Maybe<string>, url?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }>> };

export type MyPopularityQueryVariables = {};


export type MyPopularityQuery = { __typename?: 'Query', myPopularity: { __typename?: 'Popularity', advertsInfo: { __typename?: 'AdvertsInfo', countNewAdverts?: Maybe<string>, lastMessage?: Maybe<string>, photoModerationPassed?: Maybe<boolean>, videoModerationPassed?: Maybe<boolean> }, conversations: Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatExpired: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, iRecovered: boolean, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, secondUserReconnect: boolean, secondUserUnmatch: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, userRecovered: boolean, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }>, intros: Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatExpired: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, iRecovered: boolean, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, secondUserReconnect: boolean, secondUserUnmatch: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, userRecovered: boolean, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }>, likes?: Maybe<{ __typename?: 'MyLikes', count?: Maybe<string>, photoModerationPassed?: Maybe<boolean>, videoModerationPassed?: Maybe<boolean>, lastSender?: Maybe<{ __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string }> }>, matches: Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatExpired: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, iRecovered: boolean, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, secondUserReconnect: boolean, secondUserUnmatch: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, userRecovered: boolean, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }> } };

export type MyPreferencesQueryVariables = {};


export type MyPreferencesQuery = { __typename?: 'Query', myPreferences?: Maybe<{ __typename?: 'Preference', attitudeToAlcohol?: Maybe<string>, attitudeToKids?: Maybe<string>, attitudeToMarijuana?: Maybe<string>, attitudeToPet?: Maybe<string>, attitudeToSmoking?: Maybe<string>, distance?: Maybe<string>, educationLevel?: Maybe<string>, gender?: Maybe<string>, id: string, maxAge: string, maxHeight?: Maybe<string>, minAge: string, minHeight?: Maybe<string>, physicalActivity?: Maybe<string>, political?: Maybe<string>, relationshipGoals?: Maybe<string>, relationshipStatus?: Maybe<string>, religion?: Maybe<string>, attitudeToAlcoholsList?: Maybe<Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string }>>, attitudeToKidsList?: Maybe<Array<{ __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> }>>, attitudeToMarijuanaList?: Maybe<Array<{ __typename?: 'AttitudeToMarijuana', id: string, name: string }>>, attitudeToPetsList?: Maybe<Array<{ __typename?: 'AttitudeToPet', id: string, name: string }>>, attitudeToSmokingList?: Maybe<Array<{ __typename?: 'AttitudeToSmoking', id: string, name: string }>>, educationLevelsList?: Maybe<Array<{ __typename?: 'EducationLevel', id: string, name: string }>>, gendersList?: Maybe<Array<{ __typename?: 'LikeToMeet', id: string, name: string }>>, physicalActivitiesList?: Maybe<Array<{ __typename?: 'PhysicalActivity', id: string, name: string }>>, relationshipGoalsList?: Maybe<Array<{ __typename?: 'RelationshipGoal', id: string, name: string }>>, relationshipStatusList?: Maybe<Array<{ __typename?: 'RelationshipStatus', id: string, name: string }>>, religionsList?: Maybe<Array<{ __typename?: 'Religion', id: string, name: string }>> }> };

export type MyProfileQueryVariables = {};


export type MyProfileQuery = { __typename?: 'Query', myProfile?: Maybe<{ __typename?: 'UserProfile', likeToMeetGender?: Maybe<string>, birthDate?: Maybe<any>, id: string, photoModerationPassed?: Maybe<boolean>, preferenceLat?: Maybe<string>, preferenceLon?: Maybe<string>, sleep: boolean, userAccountId: string, videoModerationPassed?: Maybe<boolean>, attitudeToAlcoholBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToKidsBlock: { __typename?: 'KidsBlock', chosenConditionIds: Array<string>, description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'KidsValue', id: string, name: string }> }, attitudeToMarijuanaBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToPetBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToSmokingBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, educationBlock: { __typename?: 'EducationBlock', description: string, nameOfSchool?: Maybe<string>, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, genderBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, heightBlock: { __typename?: 'HeightBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Height', heightFt?: Maybe<string>, heightIn: string, heightM?: Maybe<string>, heightCm?: Maybe<string> } }, jobBlock: { __typename?: 'JobBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Job', jobDescription?: Maybe<string>, placeOfWork?: Maybe<string> } }, nativeLanguageBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, neighborhoodBlock: { __typename?: 'NeighborhoodBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Neighborhood', inNeighborhood: boolean, lat?: Maybe<string>, lon?: Maybe<string>, neighborhood?: Maybe<string> } }, physicalActivityBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, placeOfBirthBlock: { __typename?: 'PlaceOfBirthBlock', description: string, title: string, visibility: boolean, value?: Maybe<{ __typename?: 'PlaceOfBirth', placeOfBirth?: Maybe<string> }> }, politicalIdeologyBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipGoalBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipStatusBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, religionBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, userAccount: { __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }, zodiacBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', conditionId: string, name: string, visible: boolean, checked: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> } }> };

export type MyQuestionsQueryVariables = {};


export type MyQuestionsQuery = { __typename?: 'Query', myQuestions?: Maybe<{ __typename?: 'UserAccountQuestions', screen1?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen2?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen3?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen4?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen5?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen6?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }>, screen7?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }> }> };

export type MySuperLikesQueryVariables = {
  page?: Maybe<Scalars['String']>;
};


export type MySuperLikesQuery = { __typename?: 'Query', mySuperLikes?: Maybe<Array<{ __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string }>> };

export type PublicUserAccountQueryVariables = {
  userAccountId?: Maybe<Scalars['String']>;
};


export type PublicUserAccountQuery = { __typename?: 'Query', publicUserAccount?: Maybe<{ __typename?: 'PublicAccount', age: string, countLikes: string, countMatches: string, countSuperLikes: string, distance?: Maybe<string>, enabled: boolean, firstName: string, id: string, neighborhood?: Maybe<string>, premium: boolean, userProfileId: string, image?: Maybe<{ __typename?: 'UserAccountImage', approved: boolean, blur?: Maybe<string>, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, middleUrl?: Maybe<string>, primary: string, primaryInvalids?: Maybe<Array<string>>, recognized: boolean, shouldDestroy: boolean, smallUrl?: Maybe<string>, url?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }> };

export type PublicUserProfileQueryVariables = {
  userProfileId?: Maybe<Scalars['String']>;
};


export type PublicUserProfileQuery = { __typename?: 'Query', publicUserProfile?: Maybe<{ __typename?: 'PublicProfile', attitudeToAlcohol?: Maybe<string>, attitudeToMarijuana?: Maybe<string>, attitudeToPet?: Maybe<string>, attitudeToSmoking?: Maybe<string>, birthDate?: Maybe<any>, currentLocation?: Maybe<string>, distance?: Maybe<string>, distanceIn?: Maybe<string>, educationLevel?: Maybe<string>, firstName?: Maybe<string>, gender?: Maybe<string>, genderShort?: Maybe<string>, height?: Maybe<string>, id: string, job?: Maybe<string>, likeToMeet?: Maybe<string>, nameOfSchool?: Maybe<string>, nativeLanguage?: Maybe<string>, neighborhood?: Maybe<string>, photoModerationPassed?: Maybe<boolean>, physicalActivity?: Maybe<string>, placeOfBirth?: Maybe<string>, placeOfWork?: Maybe<string>, politicalIdeology?: Maybe<string>, relationshipGoal?: Maybe<string>, relationshipStatus?: Maybe<string>, religion?: Maybe<string>, userAccountId: string, videoModerationPassed?: Maybe<boolean>, zodiac?: Maybe<string>, attitudeToKid?: Maybe<{ __typename?: 'AttitudeToKids', attitudeToKidId?: Maybe<string>, attitudeToKidName?: Maybe<string>, chosenKidsConditions?: Maybe<Array<{ __typename?: 'KidsConditionChosen', conditionId: string, name: string, value: boolean }>>, kidsConditionList: Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }> }>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }> };

export type ScreenQuestionsQueryVariables = {
  screenNumber: Scalars['String'];
};


export type ScreenQuestionsQuery = { __typename?: 'Query', screenQuestions?: Maybe<{ __typename?: 'QuestionsPart', answered?: Maybe<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>, questions?: Maybe<Array<{ __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } }>> }> };

export type SearchQueryVariables = {
  page?: Maybe<Scalars['String']>;
};


export type SearchQuery = { __typename?: 'Query', search?: Maybe<Array<{ __typename?: 'PublicAccountFull', attitudeToAlcohol?: Maybe<string>, attitudeToMarijuana?: Maybe<string>, attitudeToPet?: Maybe<string>, attitudeToSmoking?: Maybe<string>, birthDate?: Maybe<any>, distance?: Maybe<string>, currentLocation?: Maybe<string>, educationLevel?: Maybe<string>, enabled: boolean, firstName: string, gender?: Maybe<string>, genderShort?: Maybe<string>, height?: Maybe<string>, id: string, job?: Maybe<string>, likeToMeet?: Maybe<string>, likedMe: boolean, nameOfSchool?: Maybe<string>, nativeLanguage?: Maybe<string>, neighborhood?: Maybe<string>, photoModerationPassed?: Maybe<boolean>, physicalActivity?: Maybe<string>, placeOfBirth?: Maybe<string>, placeOfWork?: Maybe<string>, politicalIdeology?: Maybe<string>, relationshipGoal?: Maybe<string>, relationshipStatus?: Maybe<string>, religion?: Maybe<string>, superlikedMe: boolean, userAccountId: string, videoModerationPassed?: Maybe<boolean>, zodiac?: Maybe<string>, attitudeToKid?: Maybe<{ __typename?: 'AttitudeToKids', attitudeToKidId?: Maybe<string>, attitudeToKidName?: Maybe<string>, chosenKidsConditions?: Maybe<Array<{ __typename?: 'KidsConditionChosen', conditionId: string, name: string, value: boolean }>>, kidsConditionList: Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }> }>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }>> };

export type StaticPageQueryVariables = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type StaticPageQuery = { __typename?: 'Query', staticPage?: Maybe<{ __typename?: 'StaticPage', description: string, id: string, imageUrl?: Maybe<string>, name: string, text: string, options?: Maybe<Array<{ __typename?: 'StaticPageOption', id: string, name: string, value: string }>> }> };

export type SurveyQueryVariables = {
  name: Scalars['String'];
};


export type SurveyQuery = { __typename?: 'Query', survey: { __typename?: 'Survey', baseModal?: Maybe<string>, description: string, id: string, name: string, feedbacks: Array<{ __typename?: 'Feedback', description?: Maybe<string>, id: string, name: string, title?: Maybe<string> }>, modals: Array<{ __typename?: 'Modal', description?: Maybe<string>, id: string, name: string, title?: Maybe<string>, attributives?: Maybe<Array<{ __typename?: 'Attributive', action?: Maybe<string>, feedback?: Maybe<string>, header?: Maybe<string>, id: string, mandatory?: Maybe<boolean>, name: string, navigateTo?: Maybe<string>, title?: Maybe<string> }>>, buttons?: Maybe<Array<{ __typename?: 'Button', action?: Maybe<string>, feedback?: Maybe<string>, id: string, name: string, navigateTo?: Maybe<string>, title?: Maybe<string>, visible: boolean }>> }> } };

export type UserGendersQueryVariables = {};


export type UserGendersQuery = { __typename?: 'Query', userGenders: { __typename?: 'UserGenders', current: { __typename?: 'Genders', visibility: boolean, base: Array<{ __typename?: 'Gender', id: string, name: string, shortName: string }>, other: Array<{ __typename?: 'Gender', id: string, name: string, shortName: string }>, selected?: Maybe<{ __typename?: 'Gender', id: string, name: string, shortName: string }> }, likeToMeet: { __typename?: 'LikeToMeets', list: Array<{ __typename?: 'LikeToMeet', id: string, name: string }>, selected?: Maybe<{ __typename?: 'LikeToMeet', id: string, name: string }> } } };

export type ProcessErrorSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type ProcessErrorSubscription = { __typename?: 'Subscription', processError: string };

export type ReconnectionChatSubscriptionVariables = {
  matchId: Scalars['String'];
};


export type ReconnectionChatSubscription = { __typename?: 'Subscription', reconnectionChat?: Maybe<{ __typename?: 'Reconnection', chatExpired: boolean, createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, secondUserReconnect: boolean, secondUserUnmatch: boolean, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }> };

export type UpdateChatSubscriptionVariables = {
  matchId: Scalars['String'];
};


export type UpdateChatSubscription = { __typename?: 'Subscription', updateChat?: Maybe<{ __typename?: 'Message', chatExpired: boolean, createdAt: any, fileType?: Maybe<string>, fileUrl?: Maybe<string>, id: string, matchId: string, secondUserReconnect: boolean, secondUserUnmatch: boolean, seen: boolean, seenAt?: Maybe<any>, text?: Maybe<string>, userAccountId: string }> };

export type UpdateConversationsSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateConversationsSubscription = { __typename?: 'Subscription', updateConversations?: Maybe<Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, iRecovered: boolean, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, userRecovered: boolean, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }>> };

export type UpdateIntrosSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateIntrosSubscription = { __typename?: 'Subscription', updateIntros?: Maybe<Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, iRecovered: boolean, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, userRecovered: boolean, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }>> };

export type UpdateMatchesSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateMatchesSubscription = { __typename?: 'Subscription', updateMatches?: Maybe<Array<{ __typename?: 'IconChat', actual: boolean, blocked: boolean, chatId: string, countMessages: string, expireAt: any, haveSuperLike?: Maybe<boolean>, isMyTurn: boolean, lastMessage?: Maybe<string>, matchPhotoModerationPassed?: Maybe<boolean>, matchVideoModerationPassed?: Maybe<boolean>, recovered: boolean, sentSuperLike?: Maybe<boolean>, unreadMessagesCount: string, matchUser: { __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string } }>> };

export type UpdateProfileSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateProfileSubscription = { __typename?: 'Subscription', updateProfile?: Maybe<{ __typename?: 'UserProfile', birthDate?: Maybe<any>, id: string, photoModerationPassed?: Maybe<boolean>, preferenceLat?: Maybe<string>, preferenceLon?: Maybe<string>, sleep: boolean, userAccountId: string, videoModerationPassed?: Maybe<boolean>, attitudeToAlcoholBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string, conditions?: Maybe<Array<{ __typename?: 'KidsCondition', checked: boolean, conditionId: string, name: string, visible: boolean }>> } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToKidsBlock: { __typename?: 'KidsBlock', chosenConditionIds: Array<string>, description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'KidsValue', id: string, name: string }> }, attitudeToMarijuanaBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToPetBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, attitudeToSmokingBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, educationBlock: { __typename?: 'EducationBlock', description: string, nameOfSchool?: Maybe<string>, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, genderBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, heightBlock: { __typename?: 'HeightBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Height', heightFt?: Maybe<string>, heightIn: string, heightM?: Maybe<string> } }, jobBlock: { __typename?: 'JobBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Job', jobDescription?: Maybe<string>, placeOfWork?: Maybe<string> } }, nativeLanguageBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, neighborhoodBlock: { __typename?: 'NeighborhoodBlock', description: string, title: string, visibility: boolean, value: { __typename?: 'Neighborhood', inNeighborhood: boolean, lat?: Maybe<string>, lon?: Maybe<string>, neighborhood?: Maybe<string> } }, physicalActivityBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, placeOfBirthBlock: { __typename?: 'PlaceOfBirthBlock', description: string, title: string, visibility: boolean, value?: Maybe<{ __typename?: 'PlaceOfBirth', placeOfBirth?: Maybe<string> }> }, politicalIdeologyBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipGoalBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, relationshipStatusBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, religionBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> }, userAccount: { __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }, zodiacBlock: { __typename?: 'DefaultBlock', description: string, title: string, visibility: boolean, list: Array<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }>, value?: Maybe<{ __typename?: 'AttitudeToAlcohol', id: string, name: string } | { __typename?: 'AttitudeToKid', id: string, name: string } | { __typename?: 'AttitudeToMarijuana', id: string, name: string } | { __typename?: 'AttitudeToPet', id: string, name: string } | { __typename?: 'AttitudeToSmoking', id: string, name: string } | { __typename?: 'EducationLevel', id: string, name: string } | { __typename?: 'Gender', id: string, name: string, shortName: string } | { __typename?: 'NativeLanguage', id: string, name: string } | { __typename?: 'PhysicalActivity', id: string, name: string } | { __typename?: 'PoliticalIdeology', id: string, name: string } | { __typename?: 'RelationshipGoal', id: string, name: string } | { __typename?: 'RelationshipStatus', id: string, name: string } | { __typename?: 'Religion', id: string, name: string } | { __typename?: 'Zodiac', id: string, name: string }> } }> };

export type UpdateVideoPreviewSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateVideoPreviewSubscription = { __typename?: 'Subscription', updateVideoPreview: { __typename?: 'VideoPreview', videosNumber?: Maybe<string>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> } };

export type UpdateWhoLikesYouSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdateWhoLikesYouSubscription = { __typename?: 'Subscription', updateWhoLikesYou?: Maybe<{ __typename?: 'PublicAccount', age: string, countLikes: string, countMatches: string, countSuperLikes: string, distance?: Maybe<string>, enabled: boolean, firstName: string, id: string, neighborhood?: Maybe<string>, premium: boolean, userProfileId: string, image?: Maybe<{ __typename?: 'UserAccountImage', approved: boolean, blur?: Maybe<string>, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, middleUrl?: Maybe<string>, primary: string, primaryInvalids?: Maybe<Array<string>>, recognized: boolean, shouldDestroy: boolean, smallUrl?: Maybe<string>, url?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, videos?: Maybe<Array<{ __typename?: 'UserAccountVideo', approved: boolean, errors?: Maybe<Array<string>>, id: string, invalids?: Maybe<Array<string>>, recognized: boolean, screenUrl?: Maybe<string>, url?: Maybe<string>, question: { __typename?: 'Question', enabled: boolean, id: string, name: string, topic: string, answerDurations: { __typename?: 'AnswerDurations', full: string, min: string }, audio: { __typename?: 'Audio', duration: string, url: string } } }>> }> };

export type UpdatedAccountPhotoSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdatedAccountPhotoSubscription = { __typename?: 'Subscription', updatedAccountPhoto: { __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } } };

export type UpdatedUserLikesSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdatedUserLikesSubscription = { __typename?: 'Subscription', updatedUserLikes?: Maybe<{ __typename?: 'MyLikes', count?: Maybe<string>, photoModerationPassed?: Maybe<boolean>, videoModerationPassed?: Maybe<boolean>, lastSender?: Maybe<{ __typename?: 'MatchUser', age: string, firstName?: Maybe<string>, id: string, profilePhoto?: Maybe<string>, userProfileId: string }> }> };

export type UpdatedUserSuperLikesSubscriptionVariables = {
  userAccountId: Scalars['String'];
};


export type UpdatedUserSuperLikesSubscription = { __typename?: 'Subscription', updatedUserSuperLikes?: Maybe<{ __typename?: 'UserAccount', appleUserId?: Maybe<string>, countLikes: string, countMatches: string, countSuperLikes: string, dropAfter?: Maybe<any>, email?: Maybe<string>, emailConfirmed?: Maybe<boolean>, enabled: boolean, fbId?: Maybe<string>, fbToken?: Maybe<string>, firstName?: Maybe<string>, id: string, newAdverts?: Maybe<string>, phone?: Maybe<any>, photoModerationPassed?: Maybe<boolean>, premium: boolean, premiumExpireAt?: Maybe<any>, profileFilled: boolean, pushExpiringConversation: boolean, pushExpiringMessages: boolean, pushNewLike: boolean, pushNewMatch: boolean, pushNewMessage: boolean, pushNewSuperLike: boolean, videoFilled: boolean, videoModerationPassed?: Maybe<boolean>, voximplantId?: Maybe<string>, voximplantName?: Maybe<string>, image?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean, invalids: { __typename?: 'ImageInvalids', general?: Maybe<string>, primary?: Maybe<string> } }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, profileImage?: Maybe<{ __typename?: 'AccountPhoto', errors?: Maybe<string>, id: string, shouldDestroy: boolean, moderation: { __typename?: 'ImageModeration', approved: boolean, recognized: boolean }, urls: { __typename?: 'PhotoUrls', blur?: Maybe<string>, middle?: Maybe<string>, original?: Maybe<string>, small?: Maybe<string> } }>, userQueries?: Maybe<Array<{ __typename?: 'UserQuery', attributive: string, id: string, queryMessages: Array<{ __typename?: 'QueryMessage', createdAt?: Maybe<any>, files?: Maybe<Array<string>>, id: string, message?: Maybe<string>, seenAt?: Maybe<any>, sender: string }> }>> }> };


export const CreateQueryMessageDocument = gql`
    mutation createQueryMessage($input: QueryMessageInput!) {
  createQueryMessage(input: $input) {
    createdAt
    files
    id
    message
    seenAt
    sender
  }
}
    `;
export type CreateQueryMessageMutationFn = ApolloReactCommon.MutationFunction<CreateQueryMessageMutation, CreateQueryMessageMutationVariables>;

/**
 * __useCreateQueryMessageMutation__
 *
 * To run a mutation, you first call `useCreateQueryMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQueryMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQueryMessageMutation, { data, loading, error }] = useCreateQueryMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQueryMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateQueryMessageMutation, CreateQueryMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateQueryMessageMutation, CreateQueryMessageMutationVariables>(CreateQueryMessageDocument, baseOptions);
      }
export type CreateQueryMessageMutationHookResult = ReturnType<typeof useCreateQueryMessageMutation>;
export type CreateQueryMessageMutationResult = ApolloReactCommon.MutationResult<CreateQueryMessageMutation>;
export type CreateQueryMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateQueryMessageMutation, CreateQueryMessageMutationVariables>;
export const CreateUserQueryDocument = gql`
    mutation createUserQuery($input: UserQueryInput!) {
  createUserQuery(input: $input)
}
    `;
export type CreateUserQueryMutationFn = ApolloReactCommon.MutationFunction<CreateUserQueryMutation, CreateUserQueryMutationVariables>;

/**
 * __useCreateUserQueryMutation__
 *
 * To run a mutation, you first call `useCreateUserQueryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserQueryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserQueryMutation, { data, loading, error }] = useCreateUserQueryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserQueryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserQueryMutation, CreateUserQueryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserQueryMutation, CreateUserQueryMutationVariables>(CreateUserQueryDocument, baseOptions);
      }
export type CreateUserQueryMutationHookResult = ReturnType<typeof useCreateUserQueryMutation>;
export type CreateUserQueryMutationResult = ApolloReactCommon.MutationResult<CreateUserQueryMutation>;
export type CreateUserQueryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserQueryMutation, CreateUserQueryMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation deleteAccount($input: DeleteAccountInput!) {
  deleteAccount(input: $input) {
    appleUserId
    countLikes
    countMatches
    countSuperLikes
    dropAfter
    email
    emailConfirmed
    enabled
    fbId
    fbToken
    firstName
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    newAdverts
    phone
    photoModerationPassed
    premium
    premiumExpireAt
    profileFilled
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    pushExpiringConversation
    pushExpiringMessages
    pushNewLike
    pushNewMatch
    pushNewMessage
    pushNewSuperLike
    userQueries {
      attributive
      id
      queryMessages {
        createdAt
        files
        id
        message
        seenAt
        sender
      }
    }
    videoFilled
    videoModerationPassed
    voximplantId
    voximplantName
  }
}
    `;
export type DeleteAccountMutationFn = ApolloReactCommon.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, baseOptions);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = ApolloReactCommon.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const DeleteMatchDocument = gql`
    mutation deleteMatch($matchId: String!) {
  deleteMatch(matchId: $matchId) {
    actual
    blocked
    countMessages
    createdAt
    expireAt
    id
    messages {
      createdAt
      fileType
      fileUrl
      id
      matchId
      seen
      seenAt
      text
      userAccountId
    }
    recovered
  }
}
    `;
export type DeleteMatchMutationFn = ApolloReactCommon.MutationFunction<DeleteMatchMutation, DeleteMatchMutationVariables>;

/**
 * __useDeleteMatchMutation__
 *
 * To run a mutation, you first call `useDeleteMatchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMatchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMatchMutation, { data, loading, error }] = useDeleteMatchMutation({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useDeleteMatchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteMatchMutation, DeleteMatchMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteMatchMutation, DeleteMatchMutationVariables>(DeleteMatchDocument, baseOptions);
      }
export type DeleteMatchMutationHookResult = ReturnType<typeof useDeleteMatchMutation>;
export type DeleteMatchMutationResult = ApolloReactCommon.MutationResult<DeleteMatchMutation>;
export type DeleteMatchMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteMatchMutation, DeleteMatchMutationVariables>;
export const MessageSeenDocument = gql`
    mutation messageSeen($matchId: String!) {
  messageSeen(matchId: $matchId)
}
    `;
export type MessageSeenMutationFn = ApolloReactCommon.MutationFunction<MessageSeenMutation, MessageSeenMutationVariables>;

/**
 * __useMessageSeenMutation__
 *
 * To run a mutation, you first call `useMessageSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMessageSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [messageSeenMutation, { data, loading, error }] = useMessageSeenMutation({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useMessageSeenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MessageSeenMutation, MessageSeenMutationVariables>) {
        return ApolloReactHooks.useMutation<MessageSeenMutation, MessageSeenMutationVariables>(MessageSeenDocument, baseOptions);
      }
export type MessageSeenMutationHookResult = ReturnType<typeof useMessageSeenMutation>;
export type MessageSeenMutationResult = ApolloReactCommon.MutationResult<MessageSeenMutation>;
export type MessageSeenMutationOptions = ApolloReactCommon.BaseMutationOptions<MessageSeenMutation, MessageSeenMutationVariables>;
export const QueryMessagesSeenDocument = gql`
    mutation queryMessagesSeen($userQueryId: String!) {
  queryMessagesSeen(userQueryId: $userQueryId)
}
    `;
export type QueryMessagesSeenMutationFn = ApolloReactCommon.MutationFunction<QueryMessagesSeenMutation, QueryMessagesSeenMutationVariables>;

/**
 * __useQueryMessagesSeenMutation__
 *
 * To run a mutation, you first call `useQueryMessagesSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQueryMessagesSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [queryMessagesSeenMutation, { data, loading, error }] = useQueryMessagesSeenMutation({
 *   variables: {
 *      userQueryId: // value for 'userQueryId'
 *   },
 * });
 */
export function useQueryMessagesSeenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<QueryMessagesSeenMutation, QueryMessagesSeenMutationVariables>) {
        return ApolloReactHooks.useMutation<QueryMessagesSeenMutation, QueryMessagesSeenMutationVariables>(QueryMessagesSeenDocument, baseOptions);
      }
export type QueryMessagesSeenMutationHookResult = ReturnType<typeof useQueryMessagesSeenMutation>;
export type QueryMessagesSeenMutationResult = ApolloReactCommon.MutationResult<QueryMessagesSeenMutation>;
export type QueryMessagesSeenMutationOptions = ApolloReactCommon.BaseMutationOptions<QueryMessagesSeenMutation, QueryMessagesSeenMutationVariables>;
export const RecoveryMatchDocument = gql`
    mutation recoveryMatch($matchId: String!) {
  recoveryMatch(matchId: $matchId) {
    actual
    blocked
    countMessages
    createdAt
    expireAt
    id
    messages {
      createdAt
      fileType
      fileUrl
      id
      matchId
      seen
      seenAt
      text
      userAccountId
    }
    recovered
    iRecovered
    userRecovered
  }
}
    `;
export type RecoveryMatchMutationFn = ApolloReactCommon.MutationFunction<RecoveryMatchMutation, RecoveryMatchMutationVariables>;

/**
 * __useRecoveryMatchMutation__
 *
 * To run a mutation, you first call `useRecoveryMatchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoveryMatchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoveryMatchMutation, { data, loading, error }] = useRecoveryMatchMutation({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useRecoveryMatchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RecoveryMatchMutation, RecoveryMatchMutationVariables>) {
        return ApolloReactHooks.useMutation<RecoveryMatchMutation, RecoveryMatchMutationVariables>(RecoveryMatchDocument, baseOptions);
      }
export type RecoveryMatchMutationHookResult = ReturnType<typeof useRecoveryMatchMutation>;
export type RecoveryMatchMutationResult = ApolloReactCommon.MutationResult<RecoveryMatchMutation>;
export type RecoveryMatchMutationOptions = ApolloReactCommon.BaseMutationOptions<RecoveryMatchMutation, RecoveryMatchMutationVariables>;
export const SignOutDocument = gql`
    mutation signOut {
  signOut
}
    `;
export type SignOutMutationFn = ApolloReactCommon.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        return ApolloReactHooks.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, baseOptions);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = ApolloReactCommon.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = ApolloReactCommon.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const UserAccountUpdateDocument = gql`
    mutation userAccountUpdate($input: UserAccountInput!) {
  userAccountUpdate(input: $input) {
    appleUserId
    countLikes
    countMatches
    countSuperLikes
    dropAfter
    email
    emailConfirmed
    enabled
    fbId
    fbToken
    firstName
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    newAdverts
    phone
    photoModerationPassed
    premium
    premiumExpireAt
    profileFilled
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    pushExpiringConversation
    pushExpiringMessages
    pushNewLike
    pushNewMatch
    pushNewMessage
    pushNewSuperLike
    userQueries {
      attributive
      id
      queryMessages {
        createdAt
        files
        id
        message
        seenAt
        sender
      }
    }
    videoFilled
    videoModerationPassed
    voximplantId
    voximplantName
  }
}
    `;
export type UserAccountUpdateMutationFn = ApolloReactCommon.MutationFunction<UserAccountUpdateMutation, UserAccountUpdateMutationVariables>;

/**
 * __useUserAccountUpdateMutation__
 *
 * To run a mutation, you first call `useUserAccountUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserAccountUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userAccountUpdateMutation, { data, loading, error }] = useUserAccountUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserAccountUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserAccountUpdateMutation, UserAccountUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserAccountUpdateMutation, UserAccountUpdateMutationVariables>(UserAccountUpdateDocument, baseOptions);
      }
export type UserAccountUpdateMutationHookResult = ReturnType<typeof useUserAccountUpdateMutation>;
export type UserAccountUpdateMutationResult = ApolloReactCommon.MutationResult<UserAccountUpdateMutation>;
export type UserAccountUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserAccountUpdateMutation, UserAccountUpdateMutationVariables>;
export const UserBlockedDocument = gql`
    mutation userBlocked($input: BlockInput!) {
  userBlocked(input: $input)
}
    `;
export type UserBlockedMutationFn = ApolloReactCommon.MutationFunction<UserBlockedMutation, UserBlockedMutationVariables>;

/**
 * __useUserBlockedMutation__
 *
 * To run a mutation, you first call `useUserBlockedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserBlockedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userBlockedMutation, { data, loading, error }] = useUserBlockedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserBlockedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserBlockedMutation, UserBlockedMutationVariables>) {
        return ApolloReactHooks.useMutation<UserBlockedMutation, UserBlockedMutationVariables>(UserBlockedDocument, baseOptions);
      }
export type UserBlockedMutationHookResult = ReturnType<typeof useUserBlockedMutation>;
export type UserBlockedMutationResult = ApolloReactCommon.MutationResult<UserBlockedMutation>;
export type UserBlockedMutationOptions = ApolloReactCommon.BaseMutationOptions<UserBlockedMutation, UserBlockedMutationVariables>;
export const UserLikeDocument = gql`
    mutation userLike($input: LikeInput!) {
  userLike(input: $input) {
    matchId
    userLike
  }
}
    `;
export type UserLikeMutationFn = ApolloReactCommon.MutationFunction<UserLikeMutation, UserLikeMutationVariables>;

/**
 * __useUserLikeMutation__
 *
 * To run a mutation, you first call `useUserLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLikeMutation, { data, loading, error }] = useUserLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserLikeMutation, UserLikeMutationVariables>) {
        return ApolloReactHooks.useMutation<UserLikeMutation, UserLikeMutationVariables>(UserLikeDocument, baseOptions);
      }
export type UserLikeMutationHookResult = ReturnType<typeof useUserLikeMutation>;
export type UserLikeMutationResult = ApolloReactCommon.MutationResult<UserLikeMutation>;
export type UserLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<UserLikeMutation, UserLikeMutationVariables>;
export const UserPreferenceUpdateDocument = gql`
    mutation userPreferenceUpdate($input: PreferenceInput!) {
  userPreferenceUpdate(input: $input) {
    attitudeToAlcohol
    attitudeToAlcoholsList {
      id
      name
    }
    attitudeToKids
    attitudeToKidsList {
      conditions {
        checked
        conditionId
        name
        visible
      }
      id
      name
    }
    attitudeToMarijuana
    attitudeToMarijuanaList {
      id
      name
    }
    attitudeToPet
    attitudeToPetsList {
      id
      name
    }
    attitudeToSmoking
    attitudeToSmokingList {
      id
      name
    }
    distance
    educationLevel
    educationLevelsList {
      id
      name
    }
    gender
    gendersList {
      id
      name
    }
    id
    maxAge
    maxHeight
    minAge
    minHeight
    physicalActivitiesList {
      id
      name
    }
    physicalActivity
    political
    relationshipGoals
    relationshipGoalsList {
      id
      name
    }
    relationshipStatus
    relationshipStatusList {
      id
      name
    }
    religion
    religionsList {
      id
      name
    }
  }
}
    `;
export type UserPreferenceUpdateMutationFn = ApolloReactCommon.MutationFunction<UserPreferenceUpdateMutation, UserPreferenceUpdateMutationVariables>;

/**
 * __useUserPreferenceUpdateMutation__
 *
 * To run a mutation, you first call `useUserPreferenceUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserPreferenceUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userPreferenceUpdateMutation, { data, loading, error }] = useUserPreferenceUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserPreferenceUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserPreferenceUpdateMutation, UserPreferenceUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserPreferenceUpdateMutation, UserPreferenceUpdateMutationVariables>(UserPreferenceUpdateDocument, baseOptions);
      }
export type UserPreferenceUpdateMutationHookResult = ReturnType<typeof useUserPreferenceUpdateMutation>;
export type UserPreferenceUpdateMutationResult = ApolloReactCommon.MutationResult<UserPreferenceUpdateMutation>;
export type UserPreferenceUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserPreferenceUpdateMutation, UserPreferenceUpdateMutationVariables>;
export const UserProfileUpdateDocument = gql`
    mutation userProfileUpdate($input: UserProfileInput!) {
  userProfileUpdate(input: $input) {
    attitudeToAlcoholBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToKidsBlock {
      chosenConditionIds
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        id
        name
      }
      visibility
    }
    attitudeToMarijuanaBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToPetBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToSmokingBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    birthDate
    educationBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      nameOfSchool
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    genderBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    heightBlock {
      description
      title
      value {
        heightFt
        heightIn
        heightM
      }
      visibility
    }
    id
    jobBlock {
      description
      title
      value {
        jobDescription
        placeOfWork
      }
      visibility
    }
    nativeLanguageBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    neighborhoodBlock {
      description
      title
      value {
        inNeighborhood
        lat
        lon
        neighborhood
      }
      visibility
    }
    photoModerationPassed
    physicalActivityBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    placeOfBirthBlock {
      description
      title
      value {
        placeOfBirth
      }
      visibility
    }
    politicalIdeologyBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    preferenceLat
    preferenceLon
    relationshipGoalBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    relationshipStatusBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    religionBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    sleep
    userAccount {
      appleUserId
      countLikes
      countMatches
      countSuperLikes
      dropAfter
      email
      emailConfirmed
      enabled
      fbId
      fbToken
      firstName
      id
      image {
        errors
        id
        moderation {
          approved
          invalids {
            general
            primary
          }
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      newAdverts
      phone
      photoModerationPassed
      premium
      premiumExpireAt
      profileFilled
      profileImage {
        errors
        id
        moderation {
          approved
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      pushExpiringConversation
      pushExpiringMessages
      pushNewLike
      pushNewMatch
      pushNewMessage
      pushNewSuperLike
      userQueries {
        attributive
        id
        queryMessages {
          createdAt
          files
          id
          message
          seenAt
          sender
        }
      }
      videoFilled
      videoModerationPassed
      voximplantId
      voximplantName
    }
    userAccountId
    videoModerationPassed
    zodiacBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
  }
}
    `;
export type UserProfileUpdateMutationFn = ApolloReactCommon.MutationFunction<UserProfileUpdateMutation, UserProfileUpdateMutationVariables>;

/**
 * __useUserProfileUpdateMutation__
 *
 * To run a mutation, you first call `useUserProfileUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserProfileUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userProfileUpdateMutation, { data, loading, error }] = useUserProfileUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserProfileUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserProfileUpdateMutation, UserProfileUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserProfileUpdateMutation, UserProfileUpdateMutationVariables>(UserProfileUpdateDocument, baseOptions);
      }
export type UserProfileUpdateMutationHookResult = ReturnType<typeof useUserProfileUpdateMutation>;
export type UserProfileUpdateMutationResult = ApolloReactCommon.MutationResult<UserProfileUpdateMutation>;
export type UserProfileUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserProfileUpdateMutation, UserProfileUpdateMutationVariables>;
export const UserSignByFbDocument = gql`
    mutation userSignByFb($input: UserAccountSignFbInput!) {
  userSignByFb(input: $input) {
    access
    refresh
  }
}
    `;
export type UserSignByFbMutationFn = ApolloReactCommon.MutationFunction<UserSignByFbMutation, UserSignByFbMutationVariables>;

/**
 * __useUserSignByFbMutation__
 *
 * To run a mutation, you first call `useUserSignByFbMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignByFbMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignByFbMutation, { data, loading, error }] = useUserSignByFbMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignByFbMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSignByFbMutation, UserSignByFbMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSignByFbMutation, UserSignByFbMutationVariables>(UserSignByFbDocument, baseOptions);
      }
export type UserSignByFbMutationHookResult = ReturnType<typeof useUserSignByFbMutation>;
export type UserSignByFbMutationResult = ApolloReactCommon.MutationResult<UserSignByFbMutation>;
export type UserSignByFbMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSignByFbMutation, UserSignByFbMutationVariables>;
export const UserSignByIosDocument = gql`
    mutation userSignByIos($input: UserAccountSignIosInput!) {
  userSignByIos(input: $input) {
    access
    refresh
  }
}
    `;
export type UserSignByIosMutationFn = ApolloReactCommon.MutationFunction<UserSignByIosMutation, UserSignByIosMutationVariables>;

/**
 * __useUserSignByIosMutation__
 *
 * To run a mutation, you first call `useUserSignByIosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignByIosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignByIosMutation, { data, loading, error }] = useUserSignByIosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignByIosMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSignByIosMutation, UserSignByIosMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSignByIosMutation, UserSignByIosMutationVariables>(UserSignByIosDocument, baseOptions);
      }
export type UserSignByIosMutationHookResult = ReturnType<typeof useUserSignByIosMutation>;
export type UserSignByIosMutationResult = ApolloReactCommon.MutationResult<UserSignByIosMutation>;
export type UserSignByIosMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSignByIosMutation, UserSignByIosMutationVariables>;
export const UserSignByPhoneDocument = gql`
    mutation userSignByPhone($input: UserSignByPhoneInput!) {
  userSignByPhone(input: $input)
}
    `;
export type UserSignByPhoneMutationFn = ApolloReactCommon.MutationFunction<UserSignByPhoneMutation, UserSignByPhoneMutationVariables>;

/**
 * __useUserSignByPhoneMutation__
 *
 * To run a mutation, you first call `useUserSignByPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignByPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignByPhoneMutation, { data, loading, error }] = useUserSignByPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignByPhoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSignByPhoneMutation, UserSignByPhoneMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSignByPhoneMutation, UserSignByPhoneMutationVariables>(UserSignByPhoneDocument, baseOptions);
      }
export type UserSignByPhoneMutationHookResult = ReturnType<typeof useUserSignByPhoneMutation>;
export type UserSignByPhoneMutationResult = ApolloReactCommon.MutationResult<UserSignByPhoneMutation>;
export type UserSignByPhoneMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSignByPhoneMutation, UserSignByPhoneMutationVariables>;
export const UserSignInDocument = gql`
    mutation userSignIn($input: UserSignInInput!) {
  userSignIn(input: $input) {
    access
    refresh
  }
}
    `;
export type UserSignInMutationFn = ApolloReactCommon.MutationFunction<UserSignInMutation, UserSignInMutationVariables>;

/**
 * __useUserSignInMutation__
 *
 * To run a mutation, you first call `useUserSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignInMutation, { data, loading, error }] = useUserSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSignInMutation, UserSignInMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSignInMutation, UserSignInMutationVariables>(UserSignInDocument, baseOptions);
      }
export type UserSignInMutationHookResult = ReturnType<typeof useUserSignInMutation>;
export type UserSignInMutationResult = ApolloReactCommon.MutationResult<UserSignInMutation>;
export type UserSignInMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSignInMutation, UserSignInMutationVariables>;
export const UserSkipDocument = gql`
    mutation userSkip($input: LikeInput!) {
  userSkip(input: $input)
}
    `;
export type UserSkipMutationFn = ApolloReactCommon.MutationFunction<UserSkipMutation, UserSkipMutationVariables>;

/**
 * __useUserSkipMutation__
 *
 * To run a mutation, you first call `useUserSkipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSkipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSkipMutation, { data, loading, error }] = useUserSkipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSkipMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSkipMutation, UserSkipMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSkipMutation, UserSkipMutationVariables>(UserSkipDocument, baseOptions);
      }
export type UserSkipMutationHookResult = ReturnType<typeof useUserSkipMutation>;
export type UserSkipMutationResult = ApolloReactCommon.MutationResult<UserSkipMutation>;
export type UserSkipMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSkipMutation, UserSkipMutationVariables>;
export const UserSuperLikeDocument = gql`
    mutation userSuperLike($input: LikeInput!) {
  userSuperLike(input: $input) {
    matchId
    userLike
  }
}
    `;
export type UserSuperLikeMutationFn = ApolloReactCommon.MutationFunction<UserSuperLikeMutation, UserSuperLikeMutationVariables>;

/**
 * __useUserSuperLikeMutation__
 *
 * To run a mutation, you first call `useUserSuperLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSuperLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSuperLikeMutation, { data, loading, error }] = useUserSuperLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSuperLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSuperLikeMutation, UserSuperLikeMutationVariables>) {
        return ApolloReactHooks.useMutation<UserSuperLikeMutation, UserSuperLikeMutationVariables>(UserSuperLikeDocument, baseOptions);
      }
export type UserSuperLikeMutationHookResult = ReturnType<typeof useUserSuperLikeMutation>;
export type UserSuperLikeMutationResult = ApolloReactCommon.MutationResult<UserSuperLikeMutation>;
export type UserSuperLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<UserSuperLikeMutation, UserSuperLikeMutationVariables>;
export const UserUnlikeDocument = gql`
    mutation userUnlike($input: UnlikeInput!) {
  userUnlike(input: $input)
}
    `;
export type UserUnlikeMutationFn = ApolloReactCommon.MutationFunction<UserUnlikeMutation, UserUnlikeMutationVariables>;

/**
 * __useUserUnlikeMutation__
 *
 * To run a mutation, you first call `useUserUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUnlikeMutation, { data, loading, error }] = useUserUnlikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUnlikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserUnlikeMutation, UserUnlikeMutationVariables>) {
        return ApolloReactHooks.useMutation<UserUnlikeMutation, UserUnlikeMutationVariables>(UserUnlikeDocument, baseOptions);
      }
export type UserUnlikeMutationHookResult = ReturnType<typeof useUserUnlikeMutation>;
export type UserUnlikeMutationResult = ApolloReactCommon.MutationResult<UserUnlikeMutation>;
export type UserUnlikeMutationOptions = ApolloReactCommon.BaseMutationOptions<UserUnlikeMutation, UserUnlikeMutationVariables>;
export const ChatMessagesDocument = gql`
    query chatMessages($page: String, $matchId: String!) {
  chatMessages(page: $page, matchId: $matchId) {
    countMessages
    messages {
      createdAt
      fileType
      fileUrl
      id
      matchId
      seen
      seenAt
      text
      userAccountId
    }
  }
}
    `;

/**
 * __useChatMessagesQuery__
 *
 * To run a query within a React component, call `useChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useChatMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>) {
        return ApolloReactHooks.useQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(ChatMessagesDocument, baseOptions);
      }
export function useChatMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChatMessagesQuery, ChatMessagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(ChatMessagesDocument, baseOptions);
        }
export type ChatMessagesQueryHookResult = ReturnType<typeof useChatMessagesQuery>;
export type ChatMessagesLazyQueryHookResult = ReturnType<typeof useChatMessagesLazyQuery>;
export type ChatMessagesQueryResult = ApolloReactCommon.QueryResult<ChatMessagesQuery, ChatMessagesQueryVariables>;
export const ChatRoomDocument = gql`
    query chatRoom($chatId: String!) {
  chatRoom(chatId: $chatId) {
    actual
    blocked
    chatExpired
    countMessages
    createdAt
    expireAt
    firstName
    iRecovered
    id
    messages {
      createdAt
      fileType
      fileUrl
      id
      matchId
      seen
      seenAt
      text
      userAccountId
    }
    photoUri
    photoVideoModerationPassed
    profileId
    recovered
    secondUserReconnect
    secondUserUnmatch
    userId
    userRecovered
  }
}
    `;

/**
 * __useChatRoomQuery__
 *
 * To run a query within a React component, call `useChatRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useChatRoomQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChatRoomQuery, ChatRoomQueryVariables>) {
        return ApolloReactHooks.useQuery<ChatRoomQuery, ChatRoomQueryVariables>(ChatRoomDocument, baseOptions);
      }
export function useChatRoomLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChatRoomQuery, ChatRoomQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChatRoomQuery, ChatRoomQueryVariables>(ChatRoomDocument, baseOptions);
        }
export type ChatRoomQueryHookResult = ReturnType<typeof useChatRoomQuery>;
export type ChatRoomLazyQueryHookResult = ReturnType<typeof useChatRoomLazyQuery>;
export type ChatRoomQueryResult = ApolloReactCommon.QueryResult<ChatRoomQuery, ChatRoomQueryVariables>;
export const ExampleVideoDocument = gql`
    query exampleVideo($name: String) {
  exampleVideo(name: $name) {
    id
    name
    url
  }
}
    `;

/**
 * __useExampleVideoQuery__
 *
 * To run a query within a React component, call `useExampleVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleVideoQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useExampleVideoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExampleVideoQuery, ExampleVideoQueryVariables>) {
        return ApolloReactHooks.useQuery<ExampleVideoQuery, ExampleVideoQueryVariables>(ExampleVideoDocument, baseOptions);
      }
export function useExampleVideoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExampleVideoQuery, ExampleVideoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExampleVideoQuery, ExampleVideoQueryVariables>(ExampleVideoDocument, baseOptions);
        }
export type ExampleVideoQueryHookResult = ReturnType<typeof useExampleVideoQuery>;
export type ExampleVideoLazyQueryHookResult = ReturnType<typeof useExampleVideoLazyQuery>;
export type ExampleVideoQueryResult = ApolloReactCommon.QueryResult<ExampleVideoQuery, ExampleVideoQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    appleUserId
    countLikes
    countMatches
    countSuperLikes
    dropAfter
    email
    emailConfirmed
    enabled
    fbId
    fbToken
    firstName
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    newAdverts
    phone
    photoModerationPassed
    premium
    premiumExpireAt
    profileFilled
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    pushExpiringConversation
    pushExpiringMessages
    pushNewLike
    pushNewMatch
    pushNewMessage
    pushNewSuperLike
    userQueries {
      attributive
      id
      queryMessages {
        createdAt
        files
        id
        message
        seenAt
        sender
      }
    }
    videoFilled
    videoModerationPassed
    voximplantId
    voximplantName
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const MyAccountImageDocument = gql`
    query myAccountImage {
  myAccountImage {
    errors
    id
    moderation {
      approved
      invalids {
        general
        primary
      }
      recognized
    }
    shouldDestroy
    urls {
      blur
      middle
      original
      small
    }
  }
}
    `;

/**
 * __useMyAccountImageQuery__
 *
 * To run a query within a React component, call `useMyAccountImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyAccountImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyAccountImageQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyAccountImageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyAccountImageQuery, MyAccountImageQueryVariables>) {
        return ApolloReactHooks.useQuery<MyAccountImageQuery, MyAccountImageQueryVariables>(MyAccountImageDocument, baseOptions);
      }
export function useMyAccountImageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyAccountImageQuery, MyAccountImageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyAccountImageQuery, MyAccountImageQueryVariables>(MyAccountImageDocument, baseOptions);
        }
export type MyAccountImageQueryHookResult = ReturnType<typeof useMyAccountImageQuery>;
export type MyAccountImageLazyQueryHookResult = ReturnType<typeof useMyAccountImageLazyQuery>;
export type MyAccountImageQueryResult = ApolloReactCommon.QueryResult<MyAccountImageQuery, MyAccountImageQueryVariables>;
export const MyAccountVideosDocument = gql`
    query myAccountVideos {
  myAccountVideos {
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
    videosNumber
  }
}
    `;

/**
 * __useMyAccountVideosQuery__
 *
 * To run a query within a React component, call `useMyAccountVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyAccountVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyAccountVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyAccountVideosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyAccountVideosQuery, MyAccountVideosQueryVariables>) {
        return ApolloReactHooks.useQuery<MyAccountVideosQuery, MyAccountVideosQueryVariables>(MyAccountVideosDocument, baseOptions);
      }
export function useMyAccountVideosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyAccountVideosQuery, MyAccountVideosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyAccountVideosQuery, MyAccountVideosQueryVariables>(MyAccountVideosDocument, baseOptions);
        }
export type MyAccountVideosQueryHookResult = ReturnType<typeof useMyAccountVideosQuery>;
export type MyAccountVideosLazyQueryHookResult = ReturnType<typeof useMyAccountVideosLazyQuery>;
export type MyAccountVideosQueryResult = ApolloReactCommon.QueryResult<MyAccountVideosQuery, MyAccountVideosQueryVariables>;
export const MyAdvertsDocument = gql`
    query myAdverts($page: String) {
  myAdverts(page: $page) {
    advertId
    id
    message
    seen
    seenAt
    sentAt
  }
}
    `;

/**
 * __useMyAdvertsQuery__
 *
 * To run a query within a React component, call `useMyAdvertsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyAdvertsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyAdvertsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useMyAdvertsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyAdvertsQuery, MyAdvertsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyAdvertsQuery, MyAdvertsQueryVariables>(MyAdvertsDocument, baseOptions);
      }
export function useMyAdvertsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyAdvertsQuery, MyAdvertsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyAdvertsQuery, MyAdvertsQueryVariables>(MyAdvertsDocument, baseOptions);
        }
export type MyAdvertsQueryHookResult = ReturnType<typeof useMyAdvertsQuery>;
export type MyAdvertsLazyQueryHookResult = ReturnType<typeof useMyAdvertsLazyQuery>;
export type MyAdvertsQueryResult = ApolloReactCommon.QueryResult<MyAdvertsQuery, MyAdvertsQueryVariables>;
export const MyFanbaseDocument = gql`
    query myFanbase($page: String) {
  myFanbase(page: $page) {
    age
    countLikes
    countMatches
    countSuperLikes
    currentLocation
    distance
    enabled
    firstName
    id
    image {
      approved
      blur
      errors
      id
      invalids
      middleUrl
      primary
      primaryInvalids
      recognized
      shouldDestroy
      smallUrl
      url
    }
    neighborhood
    premium
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    userProfileId
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
  }
}
    `;

/**
 * __useMyFanbaseQuery__
 *
 * To run a query within a React component, call `useMyFanbaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFanbaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFanbaseQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useMyFanbaseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyFanbaseQuery, MyFanbaseQueryVariables>) {
        return ApolloReactHooks.useQuery<MyFanbaseQuery, MyFanbaseQueryVariables>(MyFanbaseDocument, baseOptions);
      }
export function useMyFanbaseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyFanbaseQuery, MyFanbaseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyFanbaseQuery, MyFanbaseQueryVariables>(MyFanbaseDocument, baseOptions);
        }
export type MyFanbaseQueryHookResult = ReturnType<typeof useMyFanbaseQuery>;
export type MyFanbaseLazyQueryHookResult = ReturnType<typeof useMyFanbaseLazyQuery>;
export type MyFanbaseQueryResult = ApolloReactCommon.QueryResult<MyFanbaseQuery, MyFanbaseQueryVariables>;
export const MyLikesDocument = gql`
    query myLikes($page: String) {
  myLikes(page: $page) {
    age
    countLikes
    countMatches
    countSuperLikes
    currentLocation
    distance
    enabled
    firstName
    id
    image {
      approved
      blur
      errors
      id
      invalids
      middleUrl
      primary
      primaryInvalids
      recognized
      shouldDestroy
      smallUrl
      url
    }
    neighborhood
    premium
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    userProfileId
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
  }
}
    `;

/**
 * __useMyLikesQuery__
 *
 * To run a query within a React component, call `useMyLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyLikesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useMyLikesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyLikesQuery, MyLikesQueryVariables>) {
        return ApolloReactHooks.useQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, baseOptions);
      }
export function useMyLikesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyLikesQuery, MyLikesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, baseOptions);
        }
export type MyLikesQueryHookResult = ReturnType<typeof useMyLikesQuery>;
export type MyLikesLazyQueryHookResult = ReturnType<typeof useMyLikesLazyQuery>;
export type MyLikesQueryResult = ApolloReactCommon.QueryResult<MyLikesQuery, MyLikesQueryVariables>;
export const MyPopularityDocument = gql`
    query myPopularity {
  myPopularity {
    advertsInfo {
      countNewAdverts
      lastMessage
      photoModerationPassed
      videoModerationPassed
    }
    conversations {
      actual
      blocked
      chatExpired
      chatId
      countMessages
      expireAt
      haveSuperLike
      iRecovered
      isMyTurn
      lastMessage
      matchPhotoModerationPassed
      matchUser {
        age
        firstName
        id
        profilePhoto
        userProfileId
      }
      matchVideoModerationPassed
      recovered
      secondUserReconnect
      secondUserUnmatch
      sentSuperLike
      unreadMessagesCount
      userRecovered
    }
    intros {
      actual
      blocked
      chatExpired
      chatId
      countMessages
      expireAt
      haveSuperLike
      iRecovered
      isMyTurn
      lastMessage
      matchPhotoModerationPassed
      matchUser {
        age
        firstName
        id
        profilePhoto
        userProfileId
      }
      matchVideoModerationPassed
      recovered
      secondUserReconnect
      secondUserUnmatch
      sentSuperLike
      unreadMessagesCount
      userRecovered
    }
    likes {
      count
      lastSender {
        age
        firstName
        id
        profilePhoto
        userProfileId
      }
      photoModerationPassed
      videoModerationPassed
    }
    matches {
      actual
      blocked
      chatExpired
      chatId
      countMessages
      expireAt
      haveSuperLike
      iRecovered
      isMyTurn
      lastMessage
      matchPhotoModerationPassed
      matchUser {
        age
        firstName
        id
        profilePhoto
        userProfileId
      }
      matchVideoModerationPassed
      recovered
      secondUserReconnect
      secondUserUnmatch
      sentSuperLike
      unreadMessagesCount
      userRecovered
    }
  }
}
    `;

/**
 * __useMyPopularityQuery__
 *
 * To run a query within a React component, call `useMyPopularityQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPopularityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPopularityQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPopularityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyPopularityQuery, MyPopularityQueryVariables>) {
        return ApolloReactHooks.useQuery<MyPopularityQuery, MyPopularityQueryVariables>(MyPopularityDocument, baseOptions);
      }
export function useMyPopularityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyPopularityQuery, MyPopularityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyPopularityQuery, MyPopularityQueryVariables>(MyPopularityDocument, baseOptions);
        }
export type MyPopularityQueryHookResult = ReturnType<typeof useMyPopularityQuery>;
export type MyPopularityLazyQueryHookResult = ReturnType<typeof useMyPopularityLazyQuery>;
export type MyPopularityQueryResult = ApolloReactCommon.QueryResult<MyPopularityQuery, MyPopularityQueryVariables>;
export const MyPreferencesDocument = gql`
    query myPreferences {
  myPreferences {
    attitudeToAlcohol
    attitudeToAlcoholsList {
      id
      name
    }
    attitudeToKids
    attitudeToKidsList {
      conditions {
        checked
        conditionId
        name
        visible
      }
      id
      name
    }
    attitudeToMarijuana
    attitudeToMarijuanaList {
      id
      name
    }
    attitudeToPet
    attitudeToPetsList {
      id
      name
    }
    attitudeToSmoking
    attitudeToSmokingList {
      id
      name
    }
    distance
    educationLevel
    educationLevelsList {
      id
      name
    }
    gender
    gendersList {
      id
      name
    }
    id
    maxAge
    maxHeight
    minAge
    minHeight
    physicalActivitiesList {
      id
      name
    }
    physicalActivity
    political
    relationshipGoals
    relationshipGoalsList {
      id
      name
    }
    relationshipStatus
    relationshipStatusList {
      id
      name
    }
    religion
    religionsList {
      id
      name
    }
  }
}
    `;

/**
 * __useMyPreferencesQuery__
 *
 * To run a query within a React component, call `useMyPreferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPreferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPreferencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPreferencesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyPreferencesQuery, MyPreferencesQueryVariables>) {
        return ApolloReactHooks.useQuery<MyPreferencesQuery, MyPreferencesQueryVariables>(MyPreferencesDocument, baseOptions);
      }
export function useMyPreferencesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyPreferencesQuery, MyPreferencesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyPreferencesQuery, MyPreferencesQueryVariables>(MyPreferencesDocument, baseOptions);
        }
export type MyPreferencesQueryHookResult = ReturnType<typeof useMyPreferencesQuery>;
export type MyPreferencesLazyQueryHookResult = ReturnType<typeof useMyPreferencesLazyQuery>;
export type MyPreferencesQueryResult = ApolloReactCommon.QueryResult<MyPreferencesQuery, MyPreferencesQueryVariables>;
export const MyProfileDocument = gql`
    query myProfile {
  myProfile {
    likeToMeetGender
    attitudeToAlcoholBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToKidsBlock {
      chosenConditionIds
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        id
        name
      }
      visibility
    }
    attitudeToMarijuanaBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToPetBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToSmokingBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    birthDate
    educationBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      nameOfSchool
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    genderBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    heightBlock {
      description
      title
      value {
        heightFt
        heightIn
        heightM
        heightCm
      }
      visibility
    }
    id
    jobBlock {
      description
      title
      value {
        jobDescription
        placeOfWork
      }
      visibility
    }
    nativeLanguageBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    neighborhoodBlock {
      description
      title
      value {
        inNeighborhood
        lat
        lon
        neighborhood
      }
      visibility
    }
    photoModerationPassed
    physicalActivityBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    placeOfBirthBlock {
      description
      title
      value {
        placeOfBirth
      }
      visibility
    }
    politicalIdeologyBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    preferenceLat
    preferenceLon
    relationshipGoalBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    relationshipStatusBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    religionBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    sleep
    userAccount {
      appleUserId
      countLikes
      countMatches
      countSuperLikes
      dropAfter
      email
      emailConfirmed
      enabled
      fbId
      fbToken
      firstName
      id
      image {
        errors
        id
        moderation {
          approved
          invalids {
            general
            primary
          }
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      newAdverts
      phone
      photoModerationPassed
      premium
      premiumExpireAt
      profileFilled
      profileImage {
        errors
        id
        moderation {
          approved
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      pushExpiringConversation
      pushExpiringMessages
      pushNewLike
      pushNewMatch
      pushNewMessage
      pushNewSuperLike
      userQueries {
        attributive
        id
        queryMessages {
          createdAt
          files
          id
          message
          seenAt
          sender
        }
      }
      videoFilled
      videoModerationPassed
      voximplantId
      voximplantName
    }
    userAccountId
    videoModerationPassed
    zodiacBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
          conditions {
            conditionId
            name
            visible
            checked
          }
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
  }
}
    `;

/**
 * __useMyProfileQuery__
 *
 * To run a query within a React component, call `useMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, baseOptions);
      }
export function useMyProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, baseOptions);
        }
export type MyProfileQueryHookResult = ReturnType<typeof useMyProfileQuery>;
export type MyProfileLazyQueryHookResult = ReturnType<typeof useMyProfileLazyQuery>;
export type MyProfileQueryResult = ApolloReactCommon.QueryResult<MyProfileQuery, MyProfileQueryVariables>;
export const MyQuestionsDocument = gql`
    query myQuestions {
  myQuestions {
    screen1 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen2 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen3 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen4 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen5 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen6 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
    screen7 {
      answered {
        approved
        errors
        id
        invalids
        question {
          answerDurations {
            full
            min
          }
          audio {
            duration
            url
          }
          enabled
          id
          name
          topic
        }
        recognized
        screenUrl
        url
      }
      questions {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
    }
  }
}
    `;

/**
 * __useMyQuestionsQuery__
 *
 * To run a query within a React component, call `useMyQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQuestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyQuestionsQuery, MyQuestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyQuestionsQuery, MyQuestionsQueryVariables>(MyQuestionsDocument, baseOptions);
      }
export function useMyQuestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyQuestionsQuery, MyQuestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyQuestionsQuery, MyQuestionsQueryVariables>(MyQuestionsDocument, baseOptions);
        }
export type MyQuestionsQueryHookResult = ReturnType<typeof useMyQuestionsQuery>;
export type MyQuestionsLazyQueryHookResult = ReturnType<typeof useMyQuestionsLazyQuery>;
export type MyQuestionsQueryResult = ApolloReactCommon.QueryResult<MyQuestionsQuery, MyQuestionsQueryVariables>;
export const MySuperLikesDocument = gql`
    query mySuperLikes($page: String) {
  mySuperLikes(page: $page) {
    age
    firstName
    id
    profilePhoto
    userProfileId
  }
}
    `;

/**
 * __useMySuperLikesQuery__
 *
 * To run a query within a React component, call `useMySuperLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySuperLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySuperLikesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useMySuperLikesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MySuperLikesQuery, MySuperLikesQueryVariables>) {
        return ApolloReactHooks.useQuery<MySuperLikesQuery, MySuperLikesQueryVariables>(MySuperLikesDocument, baseOptions);
      }
export function useMySuperLikesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MySuperLikesQuery, MySuperLikesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MySuperLikesQuery, MySuperLikesQueryVariables>(MySuperLikesDocument, baseOptions);
        }
export type MySuperLikesQueryHookResult = ReturnType<typeof useMySuperLikesQuery>;
export type MySuperLikesLazyQueryHookResult = ReturnType<typeof useMySuperLikesLazyQuery>;
export type MySuperLikesQueryResult = ApolloReactCommon.QueryResult<MySuperLikesQuery, MySuperLikesQueryVariables>;
export const PublicUserAccountDocument = gql`
    query publicUserAccount($userAccountId: String) {
  publicUserAccount(userAccountId: $userAccountId) {
    age
    countLikes
    countMatches
    countSuperLikes
    distance
    enabled
    firstName
    id
    image {
      approved
      blur
      errors
      id
      invalids
      middleUrl
      primary
      primaryInvalids
      recognized
      shouldDestroy
      smallUrl
      url
    }
    neighborhood
    premium
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    userProfileId
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
  }
}
    `;

/**
 * __usePublicUserAccountQuery__
 *
 * To run a query within a React component, call `usePublicUserAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicUserAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicUserAccountQuery({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function usePublicUserAccountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicUserAccountQuery, PublicUserAccountQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicUserAccountQuery, PublicUserAccountQueryVariables>(PublicUserAccountDocument, baseOptions);
      }
export function usePublicUserAccountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicUserAccountQuery, PublicUserAccountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicUserAccountQuery, PublicUserAccountQueryVariables>(PublicUserAccountDocument, baseOptions);
        }
export type PublicUserAccountQueryHookResult = ReturnType<typeof usePublicUserAccountQuery>;
export type PublicUserAccountLazyQueryHookResult = ReturnType<typeof usePublicUserAccountLazyQuery>;
export type PublicUserAccountQueryResult = ApolloReactCommon.QueryResult<PublicUserAccountQuery, PublicUserAccountQueryVariables>;
export const PublicUserProfileDocument = gql`
    query publicUserProfile($userProfileId: String) {
  publicUserProfile(userProfileId: $userProfileId) {
    attitudeToAlcohol
    attitudeToKid {
      attitudeToKidId
      attitudeToKidName
      chosenKidsConditions {
        conditionId
        name
        value
      }
      kidsConditionList {
        checked
        conditionId
        name
        visible
      }
    }
    attitudeToMarijuana
    attitudeToPet
    attitudeToSmoking
    birthDate
    currentLocation
    distance
    distanceIn
    educationLevel
    firstName
    gender
    genderShort
    height
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    job
    likeToMeet
    nameOfSchool
    nativeLanguage
    neighborhood
    photoModerationPassed
    physicalActivity
    placeOfBirth
    placeOfWork
    politicalIdeology
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    relationshipGoal
    relationshipStatus
    religion
    userAccountId
    videoModerationPassed
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
    zodiac
  }
}
    `;

/**
 * __usePublicUserProfileQuery__
 *
 * To run a query within a React component, call `usePublicUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicUserProfileQuery({
 *   variables: {
 *      userProfileId: // value for 'userProfileId'
 *   },
 * });
 */
export function usePublicUserProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PublicUserProfileQuery, PublicUserProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<PublicUserProfileQuery, PublicUserProfileQueryVariables>(PublicUserProfileDocument, baseOptions);
      }
export function usePublicUserProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PublicUserProfileQuery, PublicUserProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PublicUserProfileQuery, PublicUserProfileQueryVariables>(PublicUserProfileDocument, baseOptions);
        }
export type PublicUserProfileQueryHookResult = ReturnType<typeof usePublicUserProfileQuery>;
export type PublicUserProfileLazyQueryHookResult = ReturnType<typeof usePublicUserProfileLazyQuery>;
export type PublicUserProfileQueryResult = ApolloReactCommon.QueryResult<PublicUserProfileQuery, PublicUserProfileQueryVariables>;
export const ScreenQuestionsDocument = gql`
    query screenQuestions($screenNumber: String!) {
  screenQuestions(screenNumber: $screenNumber) {
    answered {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
    questions {
      answerDurations {
        full
        min
      }
      audio {
        duration
        url
      }
      enabled
      id
      name
      topic
    }
  }
}
    `;

/**
 * __useScreenQuestionsQuery__
 *
 * To run a query within a React component, call `useScreenQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useScreenQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScreenQuestionsQuery({
 *   variables: {
 *      screenNumber: // value for 'screenNumber'
 *   },
 * });
 */
export function useScreenQuestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScreenQuestionsQuery, ScreenQuestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<ScreenQuestionsQuery, ScreenQuestionsQueryVariables>(ScreenQuestionsDocument, baseOptions);
      }
export function useScreenQuestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScreenQuestionsQuery, ScreenQuestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ScreenQuestionsQuery, ScreenQuestionsQueryVariables>(ScreenQuestionsDocument, baseOptions);
        }
export type ScreenQuestionsQueryHookResult = ReturnType<typeof useScreenQuestionsQuery>;
export type ScreenQuestionsLazyQueryHookResult = ReturnType<typeof useScreenQuestionsLazyQuery>;
export type ScreenQuestionsQueryResult = ApolloReactCommon.QueryResult<ScreenQuestionsQuery, ScreenQuestionsQueryVariables>;
export const SearchDocument = gql`
    query search($page: String) {
  search(page: $page) {
    attitudeToAlcohol
    attitudeToKid {
      attitudeToKidId
      attitudeToKidName
      chosenKidsConditions {
        conditionId
        name
        value
      }
      kidsConditionList {
        checked
        conditionId
        name
        visible
      }
    }
    attitudeToMarijuana
    attitudeToPet
    attitudeToSmoking
    birthDate
    distance
    currentLocation
    educationLevel
    enabled
    firstName
    gender
    genderShort
    height
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    job
    likeToMeet
    likedMe
    nameOfSchool
    nativeLanguage
    neighborhood
    photoModerationPassed
    physicalActivity
    placeOfBirth
    placeOfWork
    politicalIdeology
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    relationshipGoal
    relationshipStatus
    religion
    superlikedMe
    userAccountId
    videoModerationPassed
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
    zodiac
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export const StaticPageDocument = gql`
    query staticPage($id: ID, $name: String) {
  staticPage(id: $id, name: $name) {
    description
    id
    imageUrl
    name
    options {
      id
      name
      value
    }
    text
  }
}
    `;

/**
 * __useStaticPageQuery__
 *
 * To run a query within a React component, call `useStaticPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaticPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaticPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useStaticPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StaticPageQuery, StaticPageQueryVariables>) {
        return ApolloReactHooks.useQuery<StaticPageQuery, StaticPageQueryVariables>(StaticPageDocument, baseOptions);
      }
export function useStaticPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StaticPageQuery, StaticPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StaticPageQuery, StaticPageQueryVariables>(StaticPageDocument, baseOptions);
        }
export type StaticPageQueryHookResult = ReturnType<typeof useStaticPageQuery>;
export type StaticPageLazyQueryHookResult = ReturnType<typeof useStaticPageLazyQuery>;
export type StaticPageQueryResult = ApolloReactCommon.QueryResult<StaticPageQuery, StaticPageQueryVariables>;
export const SurveyDocument = gql`
    query survey($name: String!) {
  survey(name: $name) {
    baseModal
    description
    feedbacks {
      description
      id
      name
      title
    }
    id
    modals {
      attributives {
        action
        feedback
        header
        id
        mandatory
        name
        navigateTo
        title
      }
      buttons {
        action
        feedback
        id
        name
        navigateTo
        title
        visible
      }
      description
      id
      name
      title
    }
    name
  }
}
    `;

/**
 * __useSurveyQuery__
 *
 * To run a query within a React component, call `useSurveyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSurveyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SurveyQuery, SurveyQueryVariables>) {
        return ApolloReactHooks.useQuery<SurveyQuery, SurveyQueryVariables>(SurveyDocument, baseOptions);
      }
export function useSurveyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SurveyQuery, SurveyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SurveyQuery, SurveyQueryVariables>(SurveyDocument, baseOptions);
        }
export type SurveyQueryHookResult = ReturnType<typeof useSurveyQuery>;
export type SurveyLazyQueryHookResult = ReturnType<typeof useSurveyLazyQuery>;
export type SurveyQueryResult = ApolloReactCommon.QueryResult<SurveyQuery, SurveyQueryVariables>;
export const UserGendersDocument = gql`
    query userGenders {
  userGenders {
    current {
      base {
        id
        name
        shortName
      }
      other {
        id
        name
        shortName
      }
      selected {
        id
        name
        shortName
      }
      visibility
    }
    likeToMeet {
      list {
        id
        name
      }
      selected {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useUserGendersQuery__
 *
 * To run a query within a React component, call `useUserGendersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGendersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGendersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGendersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserGendersQuery, UserGendersQueryVariables>) {
        return ApolloReactHooks.useQuery<UserGendersQuery, UserGendersQueryVariables>(UserGendersDocument, baseOptions);
      }
export function useUserGendersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserGendersQuery, UserGendersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserGendersQuery, UserGendersQueryVariables>(UserGendersDocument, baseOptions);
        }
export type UserGendersQueryHookResult = ReturnType<typeof useUserGendersQuery>;
export type UserGendersLazyQueryHookResult = ReturnType<typeof useUserGendersLazyQuery>;
export type UserGendersQueryResult = ApolloReactCommon.QueryResult<UserGendersQuery, UserGendersQueryVariables>;
export const ProcessErrorDocument = gql`
    subscription processError($userAccountId: String!) {
  processError(userAccountId: $userAccountId)
}
    `;

/**
 * __useProcessErrorSubscription__
 *
 * To run a query within a React component, call `useProcessErrorSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProcessErrorSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcessErrorSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useProcessErrorSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ProcessErrorSubscription, ProcessErrorSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ProcessErrorSubscription, ProcessErrorSubscriptionVariables>(ProcessErrorDocument, baseOptions);
      }
export type ProcessErrorSubscriptionHookResult = ReturnType<typeof useProcessErrorSubscription>;
export type ProcessErrorSubscriptionResult = ApolloReactCommon.SubscriptionResult<ProcessErrorSubscription>;
export const ReconnectionChatDocument = gql`
    subscription reconnectionChat($matchId: String!) {
  reconnectionChat(matchId: $matchId) {
    chatExpired
    createdAt
    fileType
    fileUrl
    id
    matchId
    secondUserReconnect
    secondUserUnmatch
    seen
    seenAt
    text
    userAccountId
  }
}
    `;

/**
 * __useReconnectionChatSubscription__
 *
 * To run a query within a React component, call `useReconnectionChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReconnectionChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReconnectionChatSubscription({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useReconnectionChatSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ReconnectionChatSubscription, ReconnectionChatSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ReconnectionChatSubscription, ReconnectionChatSubscriptionVariables>(ReconnectionChatDocument, baseOptions);
      }
export type ReconnectionChatSubscriptionHookResult = ReturnType<typeof useReconnectionChatSubscription>;
export type ReconnectionChatSubscriptionResult = ApolloReactCommon.SubscriptionResult<ReconnectionChatSubscription>;
export const UpdateChatDocument = gql`
    subscription updateChat($matchId: String!) {
  updateChat(matchId: $matchId) {
    chatExpired
    createdAt
    fileType
    fileUrl
    id
    matchId
    secondUserReconnect
    secondUserUnmatch
    seen
    seenAt
    text
    userAccountId
  }
}
    `;

/**
 * __useUpdateChatSubscription__
 *
 * To run a query within a React component, call `useUpdateChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateChatSubscription({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useUpdateChatSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateChatSubscription, UpdateChatSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateChatSubscription, UpdateChatSubscriptionVariables>(UpdateChatDocument, baseOptions);
      }
export type UpdateChatSubscriptionHookResult = ReturnType<typeof useUpdateChatSubscription>;
export type UpdateChatSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateChatSubscription>;
export const UpdateConversationsDocument = gql`
    subscription updateConversations($userAccountId: String!) {
  updateConversations(userAccountId: $userAccountId) {
    actual
    blocked
    chatId
    countMessages
    expireAt
    haveSuperLike
    iRecovered
    isMyTurn
    lastMessage
    matchPhotoModerationPassed
    matchUser {
      age
      firstName
      id
      profilePhoto
      userProfileId
    }
    matchVideoModerationPassed
    recovered
    sentSuperLike
    unreadMessagesCount
    userRecovered
  }
}
    `;

/**
 * __useUpdateConversationsSubscription__
 *
 * To run a query within a React component, call `useUpdateConversationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateConversationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateConversationsSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateConversationsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateConversationsSubscription, UpdateConversationsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateConversationsSubscription, UpdateConversationsSubscriptionVariables>(UpdateConversationsDocument, baseOptions);
      }
export type UpdateConversationsSubscriptionHookResult = ReturnType<typeof useUpdateConversationsSubscription>;
export type UpdateConversationsSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateConversationsSubscription>;
export const UpdateIntrosDocument = gql`
    subscription updateIntros($userAccountId: String!) {
  updateIntros(userAccountId: $userAccountId) {
    actual
    blocked
    chatId
    countMessages
    expireAt
    haveSuperLike
    iRecovered
    isMyTurn
    lastMessage
    matchPhotoModerationPassed
    matchUser {
      age
      firstName
      id
      profilePhoto
      userProfileId
    }
    matchVideoModerationPassed
    recovered
    sentSuperLike
    unreadMessagesCount
    userRecovered
  }
}
    `;

/**
 * __useUpdateIntrosSubscription__
 *
 * To run a query within a React component, call `useUpdateIntrosSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateIntrosSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateIntrosSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateIntrosSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateIntrosSubscription, UpdateIntrosSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateIntrosSubscription, UpdateIntrosSubscriptionVariables>(UpdateIntrosDocument, baseOptions);
      }
export type UpdateIntrosSubscriptionHookResult = ReturnType<typeof useUpdateIntrosSubscription>;
export type UpdateIntrosSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateIntrosSubscription>;
export const UpdateMatchesDocument = gql`
    subscription updateMatches($userAccountId: String!) {
  updateMatches(userAccountId: $userAccountId) {
    actual
    blocked
    chatId
    countMessages
    expireAt
    haveSuperLike
    isMyTurn
    lastMessage
    matchPhotoModerationPassed
    matchUser {
      age
      firstName
      id
      profilePhoto
      userProfileId
    }
    matchVideoModerationPassed
    recovered
    sentSuperLike
    unreadMessagesCount
  }
}
    `;

/**
 * __useUpdateMatchesSubscription__
 *
 * To run a query within a React component, call `useUpdateMatchesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatchesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateMatchesSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateMatchesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateMatchesSubscription, UpdateMatchesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateMatchesSubscription, UpdateMatchesSubscriptionVariables>(UpdateMatchesDocument, baseOptions);
      }
export type UpdateMatchesSubscriptionHookResult = ReturnType<typeof useUpdateMatchesSubscription>;
export type UpdateMatchesSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateMatchesSubscription>;
export const UpdateProfileDocument = gql`
    subscription updateProfile($userAccountId: String!) {
  updateProfile(userAccountId: $userAccountId) {
    attitudeToAlcoholBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          conditions {
            checked
            conditionId
            name
            visible
          }
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToKidsBlock {
      chosenConditionIds
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        id
        name
      }
      visibility
    }
    attitudeToMarijuanaBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToPetBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    attitudeToSmokingBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    birthDate
    educationBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      nameOfSchool
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    genderBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    heightBlock {
      description
      title
      value {
        heightFt
        heightIn
        heightM
      }
      visibility
    }
    id
    jobBlock {
      description
      title
      value {
        jobDescription
        placeOfWork
      }
      visibility
    }
    nativeLanguageBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    neighborhoodBlock {
      description
      title
      value {
        inNeighborhood
        lat
        lon
        neighborhood
      }
      visibility
    }
    photoModerationPassed
    physicalActivityBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    placeOfBirthBlock {
      description
      title
      value {
        placeOfBirth
      }
      visibility
    }
    politicalIdeologyBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    preferenceLat
    preferenceLon
    relationshipGoalBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    relationshipStatusBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    religionBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
    sleep
    userAccount {
      appleUserId
      countLikes
      countMatches
      countSuperLikes
      dropAfter
      email
      emailConfirmed
      enabled
      fbId
      fbToken
      firstName
      id
      image {
        errors
        id
        moderation {
          approved
          invalids {
            general
            primary
          }
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      newAdverts
      phone
      photoModerationPassed
      premium
      premiumExpireAt
      profileFilled
      profileImage {
        errors
        id
        moderation {
          approved
          recognized
        }
        shouldDestroy
        urls {
          blur
          middle
          original
          small
        }
      }
      pushExpiringConversation
      pushExpiringMessages
      pushNewLike
      pushNewMatch
      pushNewMessage
      pushNewSuperLike
      userQueries {
        attributive
        id
        queryMessages {
          createdAt
          files
          id
          message
          seenAt
          sender
        }
      }
      videoFilled
      videoModerationPassed
      voximplantId
      voximplantName
    }
    userAccountId
    videoModerationPassed
    zodiacBlock {
      description
      list {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      title
      value {
        ... on AttitudeToAlcohol {
          id
          name
        }
        ... on AttitudeToKid {
          id
          name
        }
        ... on AttitudeToMarijuana {
          id
          name
        }
        ... on AttitudeToPet {
          id
          name
        }
        ... on AttitudeToSmoking {
          id
          name
        }
        ... on EducationLevel {
          id
          name
        }
        ... on Gender {
          id
          name
          shortName
        }
        ... on NativeLanguage {
          id
          name
        }
        ... on PhysicalActivity {
          id
          name
        }
        ... on PoliticalIdeology {
          id
          name
        }
        ... on RelationshipGoal {
          id
          name
        }
        ... on RelationshipStatus {
          id
          name
        }
        ... on Religion {
          id
          name
        }
        ... on Zodiac {
          id
          name
        }
      }
      visibility
    }
  }
}
    `;

/**
 * __useUpdateProfileSubscription__
 *
 * To run a query within a React component, call `useUpdateProfileSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateProfileSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateProfileSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateProfileSubscription, UpdateProfileSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateProfileSubscription, UpdateProfileSubscriptionVariables>(UpdateProfileDocument, baseOptions);
      }
export type UpdateProfileSubscriptionHookResult = ReturnType<typeof useUpdateProfileSubscription>;
export type UpdateProfileSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateProfileSubscription>;
export const UpdateVideoPreviewDocument = gql`
    subscription updateVideoPreview($userAccountId: String!) {
  updateVideoPreview(userAccountId: $userAccountId) {
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
    videosNumber
  }
}
    `;

/**
 * __useUpdateVideoPreviewSubscription__
 *
 * To run a query within a React component, call `useUpdateVideoPreviewSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoPreviewSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateVideoPreviewSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateVideoPreviewSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateVideoPreviewSubscription, UpdateVideoPreviewSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateVideoPreviewSubscription, UpdateVideoPreviewSubscriptionVariables>(UpdateVideoPreviewDocument, baseOptions);
      }
export type UpdateVideoPreviewSubscriptionHookResult = ReturnType<typeof useUpdateVideoPreviewSubscription>;
export type UpdateVideoPreviewSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateVideoPreviewSubscription>;
export const UpdateWhoLikesYouDocument = gql`
    subscription updateWhoLikesYou($userAccountId: String!) {
  updateWhoLikesYou(userAccountId: $userAccountId) {
    age
    countLikes
    countMatches
    countSuperLikes
    distance
    enabled
    firstName
    id
    image {
      approved
      blur
      errors
      id
      invalids
      middleUrl
      primary
      primaryInvalids
      recognized
      shouldDestroy
      smallUrl
      url
    }
    neighborhood
    premium
    profileImage {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    userProfileId
    videos {
      approved
      errors
      id
      invalids
      question {
        answerDurations {
          full
          min
        }
        audio {
          duration
          url
        }
        enabled
        id
        name
        topic
      }
      recognized
      screenUrl
      url
    }
  }
}
    `;

/**
 * __useUpdateWhoLikesYouSubscription__
 *
 * To run a query within a React component, call `useUpdateWhoLikesYouSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateWhoLikesYouSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateWhoLikesYouSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdateWhoLikesYouSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdateWhoLikesYouSubscription, UpdateWhoLikesYouSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdateWhoLikesYouSubscription, UpdateWhoLikesYouSubscriptionVariables>(UpdateWhoLikesYouDocument, baseOptions);
      }
export type UpdateWhoLikesYouSubscriptionHookResult = ReturnType<typeof useUpdateWhoLikesYouSubscription>;
export type UpdateWhoLikesYouSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateWhoLikesYouSubscription>;
export const UpdatedAccountPhotoDocument = gql`
    subscription updatedAccountPhoto($userAccountId: String!) {
  updatedAccountPhoto(userAccountId: $userAccountId) {
    errors
    id
    moderation {
      approved
      invalids {
        general
        primary
      }
      recognized
    }
    shouldDestroy
    urls {
      blur
      middle
      original
      small
    }
  }
}
    `;

/**
 * __useUpdatedAccountPhotoSubscription__
 *
 * To run a query within a React component, call `useUpdatedAccountPhotoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedAccountPhotoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedAccountPhotoSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdatedAccountPhotoSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdatedAccountPhotoSubscription, UpdatedAccountPhotoSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdatedAccountPhotoSubscription, UpdatedAccountPhotoSubscriptionVariables>(UpdatedAccountPhotoDocument, baseOptions);
      }
export type UpdatedAccountPhotoSubscriptionHookResult = ReturnType<typeof useUpdatedAccountPhotoSubscription>;
export type UpdatedAccountPhotoSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdatedAccountPhotoSubscription>;
export const UpdatedUserLikesDocument = gql`
    subscription updatedUserLikes($userAccountId: String!) {
  updatedUserLikes(userAccountId: $userAccountId) {
    count
    lastSender {
      age
      firstName
      id
      profilePhoto
      userProfileId
    }
    photoModerationPassed
    videoModerationPassed
  }
}
    `;

/**
 * __useUpdatedUserLikesSubscription__
 *
 * To run a query within a React component, call `useUpdatedUserLikesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUserLikesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUserLikesSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdatedUserLikesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdatedUserLikesSubscription, UpdatedUserLikesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdatedUserLikesSubscription, UpdatedUserLikesSubscriptionVariables>(UpdatedUserLikesDocument, baseOptions);
      }
export type UpdatedUserLikesSubscriptionHookResult = ReturnType<typeof useUpdatedUserLikesSubscription>;
export type UpdatedUserLikesSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdatedUserLikesSubscription>;
export const UpdatedUserSuperLikesDocument = gql`
    subscription updatedUserSuperLikes($userAccountId: String!) {
  updatedUserSuperLikes(userAccountId: $userAccountId) {
    appleUserId
    countLikes
    countMatches
    countSuperLikes
    dropAfter
    email
    emailConfirmed
    enabled
    fbId
    fbToken
    firstName
    id
    image {
      errors
      id
      moderation {
        approved
        invalids {
          general
          primary
        }
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    newAdverts
    phone
    photoModerationPassed
    premium
    premiumExpireAt
    profileFilled
    profileImage {
      errors
      id
      moderation {
        approved
        recognized
      }
      shouldDestroy
      urls {
        blur
        middle
        original
        small
      }
    }
    pushExpiringConversation
    pushExpiringMessages
    pushNewLike
    pushNewMatch
    pushNewMessage
    pushNewSuperLike
    userQueries {
      attributive
      id
      queryMessages {
        createdAt
        files
        id
        message
        seenAt
        sender
      }
    }
    videoFilled
    videoModerationPassed
    voximplantId
    voximplantName
  }
}
    `;

/**
 * __useUpdatedUserSuperLikesSubscription__
 *
 * To run a query within a React component, call `useUpdatedUserSuperLikesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUserSuperLikesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUserSuperLikesSubscription({
 *   variables: {
 *      userAccountId: // value for 'userAccountId'
 *   },
 * });
 */
export function useUpdatedUserSuperLikesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UpdatedUserSuperLikesSubscription, UpdatedUserSuperLikesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UpdatedUserSuperLikesSubscription, UpdatedUserSuperLikesSubscriptionVariables>(UpdatedUserSuperLikesDocument, baseOptions);
      }
export type UpdatedUserSuperLikesSubscriptionHookResult = ReturnType<typeof useUpdatedUserSuperLikesSubscription>;
export type UpdatedUserSuperLikesSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdatedUserSuperLikesSubscription>;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AccountPhoto: ResolverTypeWrapper<AccountPhoto>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Advert: ResolverTypeWrapper<Advert>;
  AdvertsInfo: ResolverTypeWrapper<AdvertsInfo>;
  AnswerDurations: ResolverTypeWrapper<AnswerDurations>;
  AttitudeToAlcohol: ResolverTypeWrapper<AttitudeToAlcohol>;
  AttitudeToKid: ResolverTypeWrapper<AttitudeToKid>;
  AttitudeToKids: ResolverTypeWrapper<AttitudeToKids>;
  AttitudeToMarijuana: ResolverTypeWrapper<AttitudeToMarijuana>;
  AttitudeToPet: ResolverTypeWrapper<AttitudeToPet>;
  AttitudeToSmoking: ResolverTypeWrapper<AttitudeToSmoking>;
  Attributive: ResolverTypeWrapper<Attributive>;
  Audio: ResolverTypeWrapper<Audio>;
  AuthToken: ResolverTypeWrapper<AuthToken>;
  BlockInput: BlockInput;
  Button: ResolverTypeWrapper<Button>;
  Chat: ResolverTypeWrapper<Chat>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ChatMessages: ResolverTypeWrapper<ChatMessages>;
  DefaultBlock: ResolverTypeWrapper<Omit<DefaultBlock, 'list' | 'value'> & { list: Array<ResolversTypes['Value']>, value?: Maybe<ResolversTypes['Value']> }>;
  DeleteAccountInput: DeleteAccountInput;
  EducationBlock: ResolverTypeWrapper<Omit<EducationBlock, 'list' | 'value'> & { list: Array<ResolversTypes['Value']>, value?: Maybe<ResolversTypes['Value']> }>;
  EducationLevel: ResolverTypeWrapper<EducationLevel>;
  ExampleVideo: ResolverTypeWrapper<ExampleVideo>;
  Feedback: ResolverTypeWrapper<Feedback>;
  Gender: ResolverTypeWrapper<Gender>;
  Genders: ResolverTypeWrapper<Genders>;
  Height: ResolverTypeWrapper<Height>;
  HeightBlock: ResolverTypeWrapper<HeightBlock>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']>;
  IconChat: ResolverTypeWrapper<IconChat>;
  ImageInvalids: ResolverTypeWrapper<ImageInvalids>;
  ImageModeration: ResolverTypeWrapper<ImageModeration>;
  Job: ResolverTypeWrapper<Job>;
  JobBlock: ResolverTypeWrapper<JobBlock>;
  KidsBlock: ResolverTypeWrapper<Omit<KidsBlock, 'list'> & { list: Array<ResolversTypes['Value']> }>;
  KidsCondition: ResolverTypeWrapper<KidsCondition>;
  KidsConditionChosen: ResolverTypeWrapper<KidsConditionChosen>;
  KidsValue: ResolverTypeWrapper<KidsValue>;
  Like: ResolverTypeWrapper<Like>;
  LikeInput: LikeInput;
  LikeToMeet: ResolverTypeWrapper<LikeToMeet>;
  LikeToMeets: ResolverTypeWrapper<LikeToMeets>;
  MatchUser: ResolverTypeWrapper<MatchUser>;
  Message: ResolverTypeWrapper<Message>;
  Modal: ResolverTypeWrapper<Modal>;
  Mutation: ResolverTypeWrapper<{}>;
  MyLikes: ResolverTypeWrapper<MyLikes>;
  NativeLanguage: ResolverTypeWrapper<NativeLanguage>;
  Neighborhood: ResolverTypeWrapper<Neighborhood>;
  NeighborhoodBlock: ResolverTypeWrapper<NeighborhoodBlock>;
  Phone: ResolverTypeWrapper<Scalars['Phone']>;
  PhotoUrls: ResolverTypeWrapper<PhotoUrls>;
  PhysicalActivity: ResolverTypeWrapper<PhysicalActivity>;
  PlaceOfBirth: ResolverTypeWrapper<PlaceOfBirth>;
  PlaceOfBirthBlock: ResolverTypeWrapper<PlaceOfBirthBlock>;
  PoliticalIdeology: ResolverTypeWrapper<PoliticalIdeology>;
  Popularity: ResolverTypeWrapper<Popularity>;
  Preference: ResolverTypeWrapper<Preference>;
  PreferenceInput: PreferenceInput;
  PublicAccount: ResolverTypeWrapper<PublicAccount>;
  PublicAccountFull: ResolverTypeWrapper<PublicAccountFull>;
  PublicProfile: ResolverTypeWrapper<PublicProfile>;
  Query: ResolverTypeWrapper<{}>;
  QueryMessage: ResolverTypeWrapper<QueryMessage>;
  QueryMessageInput: QueryMessageInput;
  Question: ResolverTypeWrapper<Question>;
  QuestionsPart: ResolverTypeWrapper<QuestionsPart>;
  Reconnection: ResolverTypeWrapper<Reconnection>;
  RelationshipGoal: ResolverTypeWrapper<RelationshipGoal>;
  RelationshipStatus: ResolverTypeWrapper<RelationshipStatus>;
  Religion: ResolverTypeWrapper<Religion>;
  StaticPage: ResolverTypeWrapper<StaticPage>;
  StaticPageOption: ResolverTypeWrapper<StaticPageOption>;
  Subscription: ResolverTypeWrapper<{}>;
  Survey: ResolverTypeWrapper<Survey>;
  UnlikeInput: UnlikeInput;
  UserAccount: ResolverTypeWrapper<UserAccount>;
  UserAccountImage: ResolverTypeWrapper<UserAccountImage>;
  UserAccountInput: UserAccountInput;
  UserAccountQuestions: ResolverTypeWrapper<UserAccountQuestions>;
  UserAccountSignFbInput: UserAccountSignFbInput;
  UserAccountSignIosInput: UserAccountSignIosInput;
  UserAccountVideo: ResolverTypeWrapper<UserAccountVideo>;
  UserGenders: ResolverTypeWrapper<UserGenders>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserProfileInput: UserProfileInput;
  UserQuery: ResolverTypeWrapper<UserQuery>;
  UserQueryInput: UserQueryInput;
  UserSignByPhoneInput: UserSignByPhoneInput;
  UserSignInInput: UserSignInInput;
  Value: ResolversTypes['AttitudeToAlcohol'] | ResolversTypes['AttitudeToKid'] | ResolversTypes['AttitudeToMarijuana'] | ResolversTypes['AttitudeToPet'] | ResolversTypes['AttitudeToSmoking'] | ResolversTypes['EducationLevel'] | ResolversTypes['Gender'] | ResolversTypes['NativeLanguage'] | ResolversTypes['PhysicalActivity'] | ResolversTypes['PoliticalIdeology'] | ResolversTypes['RelationshipGoal'] | ResolversTypes['RelationshipStatus'] | ResolversTypes['Religion'] | ResolversTypes['Zodiac'];
  VideoPreview: ResolverTypeWrapper<VideoPreview>;
  Zodiac: ResolverTypeWrapper<Zodiac>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  AccountPhoto: AccountPhoto;
  ID: Scalars['ID'];
  Advert: Advert;
  AdvertsInfo: AdvertsInfo;
  AnswerDurations: AnswerDurations;
  AttitudeToAlcohol: AttitudeToAlcohol;
  AttitudeToKid: AttitudeToKid;
  AttitudeToKids: AttitudeToKids;
  AttitudeToMarijuana: AttitudeToMarijuana;
  AttitudeToPet: AttitudeToPet;
  AttitudeToSmoking: AttitudeToSmoking;
  Attributive: Attributive;
  Audio: Audio;
  AuthToken: AuthToken;
  BlockInput: BlockInput;
  Button: Button;
  Chat: Chat;
  Int: Scalars['Int'];
  ChatMessages: ChatMessages;
  DefaultBlock: Omit<DefaultBlock, 'list' | 'value'> & { list: Array<ResolversParentTypes['Value']>, value?: Maybe<ResolversParentTypes['Value']> };
  DeleteAccountInput: DeleteAccountInput;
  EducationBlock: Omit<EducationBlock, 'list' | 'value'> & { list: Array<ResolversParentTypes['Value']>, value?: Maybe<ResolversParentTypes['Value']> };
  EducationLevel: EducationLevel;
  ExampleVideo: ExampleVideo;
  Feedback: Feedback;
  Gender: Gender;
  Genders: Genders;
  Height: Height;
  HeightBlock: HeightBlock;
  ISO8601DateTime: Scalars['ISO8601DateTime'];
  IconChat: IconChat;
  ImageInvalids: ImageInvalids;
  ImageModeration: ImageModeration;
  Job: Job;
  JobBlock: JobBlock;
  KidsBlock: Omit<KidsBlock, 'list'> & { list: Array<ResolversParentTypes['Value']> };
  KidsCondition: KidsCondition;
  KidsConditionChosen: KidsConditionChosen;
  KidsValue: KidsValue;
  Like: Like;
  LikeInput: LikeInput;
  LikeToMeet: LikeToMeet;
  LikeToMeets: LikeToMeets;
  MatchUser: MatchUser;
  Message: Message;
  Modal: Modal;
  Mutation: {};
  MyLikes: MyLikes;
  NativeLanguage: NativeLanguage;
  Neighborhood: Neighborhood;
  NeighborhoodBlock: NeighborhoodBlock;
  Phone: Scalars['Phone'];
  PhotoUrls: PhotoUrls;
  PhysicalActivity: PhysicalActivity;
  PlaceOfBirth: PlaceOfBirth;
  PlaceOfBirthBlock: PlaceOfBirthBlock;
  PoliticalIdeology: PoliticalIdeology;
  Popularity: Popularity;
  Preference: Preference;
  PreferenceInput: PreferenceInput;
  PublicAccount: PublicAccount;
  PublicAccountFull: PublicAccountFull;
  PublicProfile: PublicProfile;
  Query: {};
  QueryMessage: QueryMessage;
  QueryMessageInput: QueryMessageInput;
  Question: Question;
  QuestionsPart: QuestionsPart;
  Reconnection: Reconnection;
  RelationshipGoal: RelationshipGoal;
  RelationshipStatus: RelationshipStatus;
  Religion: Religion;
  StaticPage: StaticPage;
  StaticPageOption: StaticPageOption;
  Subscription: {};
  Survey: Survey;
  UnlikeInput: UnlikeInput;
  UserAccount: UserAccount;
  UserAccountImage: UserAccountImage;
  UserAccountInput: UserAccountInput;
  UserAccountQuestions: UserAccountQuestions;
  UserAccountSignFbInput: UserAccountSignFbInput;
  UserAccountSignIosInput: UserAccountSignIosInput;
  UserAccountVideo: UserAccountVideo;
  UserGenders: UserGenders;
  UserProfile: UserProfile;
  UserProfileInput: UserProfileInput;
  UserQuery: UserQuery;
  UserQueryInput: UserQueryInput;
  UserSignByPhoneInput: UserSignByPhoneInput;
  UserSignInInput: UserSignInInput;
  Value: ResolversParentTypes['AttitudeToAlcohol'] | ResolversParentTypes['AttitudeToKid'] | ResolversParentTypes['AttitudeToMarijuana'] | ResolversParentTypes['AttitudeToPet'] | ResolversParentTypes['AttitudeToSmoking'] | ResolversParentTypes['EducationLevel'] | ResolversParentTypes['Gender'] | ResolversParentTypes['NativeLanguage'] | ResolversParentTypes['PhysicalActivity'] | ResolversParentTypes['PoliticalIdeology'] | ResolversParentTypes['RelationshipGoal'] | ResolversParentTypes['RelationshipStatus'] | ResolversParentTypes['Religion'] | ResolversParentTypes['Zodiac'];
  VideoPreview: VideoPreview;
  Zodiac: Zodiac;
}>;

export type AccountPhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPhoto'] = ResolversParentTypes['AccountPhoto']> = ResolversObject<{
  errors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  moderation?: Resolver<ResolversTypes['ImageModeration'], ParentType, ContextType>;
  shouldDestroy?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  urls?: Resolver<ResolversTypes['PhotoUrls'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AdvertResolvers<ContextType = any, ParentType extends ResolversParentTypes['Advert'] = ResolversParentTypes['Advert']> = ResolversObject<{
  advertId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  sentAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AdvertsInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertsInfo'] = ResolversParentTypes['AdvertsInfo']> = ResolversObject<{
  countNewAdverts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AnswerDurationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnswerDurations'] = ResolversParentTypes['AnswerDurations']> = ResolversObject<{
  full?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToAlcoholResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToAlcohol'] = ResolversParentTypes['AttitudeToAlcohol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToKidResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToKid'] = ResolversParentTypes['AttitudeToKid']> = ResolversObject<{
  conditions?: Resolver<Maybe<Array<ResolversTypes['KidsCondition']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToKidsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToKids'] = ResolversParentTypes['AttitudeToKids']> = ResolversObject<{
  attitudeToKidId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToKidName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chosenKidsConditions?: Resolver<Maybe<Array<ResolversTypes['KidsConditionChosen']>>, ParentType, ContextType>;
  kidsConditionList?: Resolver<Array<ResolversTypes['KidsCondition']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToMarijuanaResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToMarijuana'] = ResolversParentTypes['AttitudeToMarijuana']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToPetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToPet'] = ResolversParentTypes['AttitudeToPet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttitudeToSmokingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttitudeToSmoking'] = ResolversParentTypes['AttitudeToSmoking']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AttributiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attributive'] = ResolversParentTypes['Attributive']> = ResolversObject<{
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  navigateTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Audio'] = ResolversParentTypes['Audio']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type AuthTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthToken'] = ResolversParentTypes['AuthToken']> = ResolversObject<{
  access?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ButtonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Button'] = ResolversParentTypes['Button']> = ResolversObject<{
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  navigateTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = ResolversObject<{
  actual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatExpired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  countMessages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  expireAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iRecovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType>;
  photoUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoVideoModerationPassed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserReconnect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserUnmatch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userRecovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ChatMessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatMessages'] = ResolversParentTypes['ChatMessages']> = ResolversObject<{
  countMessages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DefaultBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['DefaultBlock'] = ResolversParentTypes['DefaultBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Value']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Value']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type EducationBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationBlock'] = ResolversParentTypes['EducationBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Value']>, ParentType, ContextType>;
  nameOfSchool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Value']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type EducationLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationLevel'] = ResolversParentTypes['EducationLevel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ExampleVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExampleVideo'] = ResolversParentTypes['ExampleVideo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type FeedbackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feedback'] = ResolversParentTypes['Feedback']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type GenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type GendersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genders'] = ResolversParentTypes['Genders']> = ResolversObject<{
  base?: Resolver<Array<ResolversTypes['Gender']>, ParentType, ContextType>;
  other?: Resolver<Array<ResolversTypes['Gender']>, ParentType, ContextType>;
  selected?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type HeightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Height'] = ResolversParentTypes['Height']> = ResolversObject<{
  heightCm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heightFt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heightIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heightM?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type HeightBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeightBlock'] = ResolversParentTypes['HeightBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Height'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type IconChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['IconChat'] = ResolversParentTypes['IconChat']> = ResolversObject<{
  actual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatExpired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countMessages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expireAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  haveSuperLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iRecovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMyTurn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchPhotoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  matchUser?: Resolver<ResolversTypes['MatchUser'], ParentType, ContextType>;
  matchVideoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserReconnect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserUnmatch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sentSuperLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unreadMessagesCount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userRecovered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ImageInvalidsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageInvalids'] = ResolversParentTypes['ImageInvalids']> = ResolversObject<{
  general?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ImageModerationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageModeration'] = ResolversParentTypes['ImageModeration']> = ResolversObject<{
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  invalids?: Resolver<ResolversTypes['ImageInvalids'], ParentType, ContextType>;
  recognized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = ResolversObject<{
  jobDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfWork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type JobBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobBlock'] = ResolversParentTypes['JobBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type KidsBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['KidsBlock'] = ResolversParentTypes['KidsBlock']> = ResolversObject<{
  chosenConditionIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Value']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['KidsValue']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type KidsConditionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KidsCondition'] = ResolversParentTypes['KidsCondition']> = ResolversObject<{
  checked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  conditionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type KidsConditionChosenResolvers<ContextType = any, ParentType extends ResolversParentTypes['KidsConditionChosen'] = ResolversParentTypes['KidsConditionChosen']> = ResolversObject<{
  conditionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type KidsValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['KidsValue'] = ResolversParentTypes['KidsValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = ResolversObject<{
  errorLike?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userLike?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type LikeToMeetResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeToMeet'] = ResolversParentTypes['LikeToMeet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type LikeToMeetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeToMeets'] = ResolversParentTypes['LikeToMeets']> = ResolversObject<{
  list?: Resolver<Array<ResolversTypes['LikeToMeet']>, ParentType, ContextType>;
  selected?: Resolver<Maybe<ResolversTypes['LikeToMeet']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type MatchUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchUser'] = ResolversParentTypes['MatchUser']> = ResolversObject<{
  age?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profilePhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userProfileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  chatExpired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  fileType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondUserReconnect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserUnmatch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ModalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Modal'] = ResolversParentTypes['Modal']> = ResolversObject<{
  attributives?: Resolver<Maybe<Array<ResolversTypes['Attributive']>>, ParentType, ContextType>;
  buttons?: Resolver<Maybe<Array<ResolversTypes['Button']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createQueryMessage?: Resolver<Maybe<Array<ResolversTypes['QueryMessage']>>, ParentType, ContextType, RequireFields<MutationCreateQueryMessageArgs, 'input'>>;
  createUserQuery?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateUserQueryArgs, 'input'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, 'input'>>;
  deleteMatch?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<MutationDeleteMatchArgs, 'matchId'>>;
  messageSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationMessageSeenArgs, 'matchId'>>;
  queryMessagesSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationQueryMessagesSeenArgs, 'userQueryId'>>;
  recoveryMatch?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<MutationRecoveryMatchArgs, 'matchId'>>;
  signOut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userAccountUpdate?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<MutationUserAccountUpdateArgs, 'input'>>;
  userBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUserBlockedArgs, 'input'>>;
  userLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationUserLikeArgs, 'input'>>;
  userPreferenceUpdate?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationUserPreferenceUpdateArgs, 'input'>>;
  userProfileUpdate?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<MutationUserProfileUpdateArgs, 'input'>>;
  userSignByFb?: Resolver<Maybe<ResolversTypes['AuthToken']>, ParentType, ContextType, RequireFields<MutationUserSignByFbArgs, 'input'>>;
  userSignByIos?: Resolver<Maybe<ResolversTypes['AuthToken']>, ParentType, ContextType, RequireFields<MutationUserSignByIosArgs, 'input'>>;
  userSignByPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUserSignByPhoneArgs, 'input'>>;
  userSignIn?: Resolver<Maybe<ResolversTypes['AuthToken']>, ParentType, ContextType, RequireFields<MutationUserSignInArgs, 'input'>>;
  userSkip?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUserSkipArgs, 'input'>>;
  userSuperLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<MutationUserSuperLikeArgs, 'input'>>;
  userUnlike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUserUnlikeArgs, 'input'>>;
}>;

export type MyLikesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyLikes'] = ResolversParentTypes['MyLikes']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSender?: Resolver<Maybe<ResolversTypes['MatchUser']>, ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type NativeLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['NativeLanguage'] = ResolversParentTypes['NativeLanguage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type NeighborhoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Neighborhood'] = ResolversParentTypes['Neighborhood']> = ResolversObject<{
  inNeighborhood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type NeighborhoodBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighborhoodBlock'] = ResolversParentTypes['NeighborhoodBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Neighborhood'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface PhoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Phone'], any> {
  name: 'Phone';
}

export type PhotoUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhotoUrls'] = ResolversParentTypes['PhotoUrls']> = ResolversObject<{
  blur?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PhysicalActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhysicalActivity'] = ResolversParentTypes['PhysicalActivity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PlaceOfBirthResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceOfBirth'] = ResolversParentTypes['PlaceOfBirth']> = ResolversObject<{
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PlaceOfBirthBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceOfBirthBlock'] = ResolversParentTypes['PlaceOfBirthBlock']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['PlaceOfBirth']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PoliticalIdeologyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliticalIdeology'] = ResolversParentTypes['PoliticalIdeology']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PopularityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Popularity'] = ResolversParentTypes['Popularity']> = ResolversObject<{
  advertsInfo?: Resolver<ResolversTypes['AdvertsInfo'], ParentType, ContextType>;
  conversations?: Resolver<Array<ResolversTypes['IconChat']>, ParentType, ContextType>;
  intros?: Resolver<Array<ResolversTypes['IconChat']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['MyLikes']>, ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['IconChat']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PreferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preference'] = ResolversParentTypes['Preference']> = ResolversObject<{
  attitudeToAlcohol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToAlcoholsList?: Resolver<Maybe<Array<ResolversTypes['AttitudeToAlcohol']>>, ParentType, ContextType>;
  attitudeToKids?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToKidsList?: Resolver<Maybe<Array<ResolversTypes['AttitudeToKid']>>, ParentType, ContextType>;
  attitudeToMarijuana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToMarijuanaList?: Resolver<Maybe<Array<ResolversTypes['AttitudeToMarijuana']>>, ParentType, ContextType>;
  attitudeToPet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToPetsList?: Resolver<Maybe<Array<ResolversTypes['AttitudeToPet']>>, ParentType, ContextType>;
  attitudeToSmoking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToSmokingList?: Resolver<Maybe<Array<ResolversTypes['AttitudeToSmoking']>>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educationLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educationLevelsList?: Resolver<Maybe<Array<ResolversTypes['EducationLevel']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gendersList?: Resolver<Maybe<Array<ResolversTypes['LikeToMeet']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxAge?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minAge?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalActivitiesList?: Resolver<Maybe<Array<ResolversTypes['PhysicalActivity']>>, ParentType, ContextType>;
  physicalActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  political?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipGoals?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipGoalsList?: Resolver<Maybe<Array<ResolversTypes['RelationshipGoal']>>, ParentType, ContextType>;
  relationshipStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipStatusList?: Resolver<Maybe<Array<ResolversTypes['RelationshipStatus']>>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  religionsList?: Resolver<Maybe<Array<ResolversTypes['Religion']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PublicAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicAccount'] = ResolversParentTypes['PublicAccount']> = ResolversObject<{
  age?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countLikes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countMatches?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countSuperLikes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['UserAccountImage']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  premium?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  userProfileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<ResolversTypes['UserAccountVideo']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PublicAccountFullResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicAccountFull'] = ResolversParentTypes['PublicAccountFull']> = ResolversObject<{
  attitudeToAlcohol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToKid?: Resolver<Maybe<ResolversTypes['AttitudeToKids']>, ParentType, ContextType>;
  attitudeToMarijuana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToPet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToSmoking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  currentLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educationLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genderShort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heightCm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likeToMeet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likedMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nameOfSchool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  physicalActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfWork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  politicalIdeology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  relationshipGoal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  superlikedMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<ResolversTypes['UserAccountVideo']>>, ParentType, ContextType>;
  zodiac?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type PublicProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicProfile'] = ResolversParentTypes['PublicProfile']> = ResolversObject<{
  attitudeToAlcohol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToKid?: Resolver<Maybe<ResolversTypes['AttitudeToKids']>, ParentType, ContextType>;
  attitudeToMarijuana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToPet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attitudeToSmoking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  currentLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distanceIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educationLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genderShort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heightCm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likeToMeet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameOfSchool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  physicalActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfWork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  politicalIdeology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  relationshipGoal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<ResolversTypes['UserAccountVideo']>>, ParentType, ContextType>;
  zodiac?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  chatMessages?: Resolver<Maybe<ResolversTypes['ChatMessages']>, ParentType, ContextType, RequireFields<QueryChatMessagesArgs, 'matchId'>>;
  chatRoom?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryChatRoomArgs, 'chatId'>>;
  exampleVideo?: Resolver<Maybe<ResolversTypes['ExampleVideo']>, ParentType, ContextType, RequireFields<QueryExampleVideoArgs, never>>;
  me?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  myAccountImage?: Resolver<ResolversTypes['AccountPhoto'], ParentType, ContextType>;
  myAccountVideos?: Resolver<Maybe<ResolversTypes['VideoPreview']>, ParentType, ContextType>;
  myAdverts?: Resolver<Maybe<Array<ResolversTypes['Advert']>>, ParentType, ContextType, RequireFields<QueryMyAdvertsArgs, never>>;
  myFanbase?: Resolver<Maybe<Array<ResolversTypes['PublicAccount']>>, ParentType, ContextType, RequireFields<QueryMyFanbaseArgs, never>>;
  myLikes?: Resolver<Maybe<Array<ResolversTypes['PublicAccount']>>, ParentType, ContextType, RequireFields<QueryMyLikesArgs, never>>;
  myPopularity?: Resolver<ResolversTypes['Popularity'], ParentType, ContextType>;
  myPreferences?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType>;
  myProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  myQuestions?: Resolver<Maybe<ResolversTypes['UserAccountQuestions']>, ParentType, ContextType>;
  mySuperLikes?: Resolver<Maybe<Array<ResolversTypes['MatchUser']>>, ParentType, ContextType, RequireFields<QueryMySuperLikesArgs, never>>;
  publicUserAccount?: Resolver<Maybe<ResolversTypes['PublicAccount']>, ParentType, ContextType, RequireFields<QueryPublicUserAccountArgs, never>>;
  publicUserProfile?: Resolver<Maybe<ResolversTypes['PublicProfile']>, ParentType, ContextType, RequireFields<QueryPublicUserProfileArgs, never>>;
  screenQuestions?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType, RequireFields<QueryScreenQuestionsArgs, 'screenNumber'>>;
  search?: Resolver<Maybe<Array<ResolversTypes['PublicAccountFull']>>, ParentType, ContextType, RequireFields<QuerySearchArgs, never>>;
  staticPage?: Resolver<Maybe<ResolversTypes['StaticPage']>, ParentType, ContextType, RequireFields<QueryStaticPageArgs, never>>;
  survey?: Resolver<ResolversTypes['Survey'], ParentType, ContextType, RequireFields<QuerySurveyArgs, 'name'>>;
  userGenders?: Resolver<ResolversTypes['UserGenders'], ParentType, ContextType>;
}>;

export type QueryMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryMessage'] = ResolversParentTypes['QueryMessage']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  answerDurations?: Resolver<ResolversTypes['AnswerDurations'], ParentType, ContextType>;
  audio?: Resolver<ResolversTypes['Audio'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type QuestionsPartResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionsPart'] = ResolversParentTypes['QuestionsPart']> = ResolversObject<{
  answered?: Resolver<Maybe<ResolversTypes['UserAccountVideo']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<ResolversTypes['Question']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ReconnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reconnection'] = ResolversParentTypes['Reconnection']> = ResolversObject<{
  chatExpired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  fileType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondUserReconnect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secondUserUnmatch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type RelationshipGoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationshipGoal'] = ResolversParentTypes['RelationshipGoal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type RelationshipStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationshipStatus'] = ResolversParentTypes['RelationshipStatus']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ReligionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Religion'] = ResolversParentTypes['Religion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type StaticPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaticPage'] = ResolversParentTypes['StaticPage']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['StaticPageOption']>>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type StaticPageOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaticPageOption'] = ResolversParentTypes['StaticPageOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  processError?: SubscriptionResolver<ResolversTypes['String'], "processError", ParentType, ContextType, RequireFields<SubscriptionProcessErrorArgs, 'userAccountId'>>;
  reconnectionChat?: SubscriptionResolver<Maybe<ResolversTypes['Reconnection']>, "reconnectionChat", ParentType, ContextType, RequireFields<SubscriptionReconnectionChatArgs, 'matchId'>>;
  updateChat?: SubscriptionResolver<Maybe<ResolversTypes['Message']>, "updateChat", ParentType, ContextType, RequireFields<SubscriptionUpdateChatArgs, 'matchId'>>;
  updateConversations?: SubscriptionResolver<Maybe<Array<ResolversTypes['IconChat']>>, "updateConversations", ParentType, ContextType, RequireFields<SubscriptionUpdateConversationsArgs, 'userAccountId'>>;
  updateIntros?: SubscriptionResolver<Maybe<Array<ResolversTypes['IconChat']>>, "updateIntros", ParentType, ContextType, RequireFields<SubscriptionUpdateIntrosArgs, 'userAccountId'>>;
  updateMatches?: SubscriptionResolver<Maybe<Array<ResolversTypes['IconChat']>>, "updateMatches", ParentType, ContextType, RequireFields<SubscriptionUpdateMatchesArgs, 'userAccountId'>>;
  updateProfile?: SubscriptionResolver<Maybe<ResolversTypes['UserProfile']>, "updateProfile", ParentType, ContextType, RequireFields<SubscriptionUpdateProfileArgs, 'userAccountId'>>;
  updateVideoPreview?: SubscriptionResolver<ResolversTypes['VideoPreview'], "updateVideoPreview", ParentType, ContextType, RequireFields<SubscriptionUpdateVideoPreviewArgs, 'userAccountId'>>;
  updateWhoLikesYou?: SubscriptionResolver<Maybe<ResolversTypes['PublicAccount']>, "updateWhoLikesYou", ParentType, ContextType, RequireFields<SubscriptionUpdateWhoLikesYouArgs, 'userAccountId'>>;
  updatedAccountPhoto?: SubscriptionResolver<ResolversTypes['AccountPhoto'], "updatedAccountPhoto", ParentType, ContextType, RequireFields<SubscriptionUpdatedAccountPhotoArgs, 'userAccountId'>>;
  updatedUserLikes?: SubscriptionResolver<Maybe<ResolversTypes['MyLikes']>, "updatedUserLikes", ParentType, ContextType, RequireFields<SubscriptionUpdatedUserLikesArgs, 'userAccountId'>>;
  updatedUserSuperLikes?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "updatedUserSuperLikes", ParentType, ContextType, RequireFields<SubscriptionUpdatedUserSuperLikesArgs, 'userAccountId'>>;
}>;

export type SurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Survey'] = ResolversParentTypes['Survey']> = ResolversObject<{
  baseModal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feedbacks?: Resolver<Array<ResolversTypes['Feedback']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  modals?: Resolver<Array<ResolversTypes['Modal']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccount'] = ResolversParentTypes['UserAccount']> = ResolversObject<{
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countLikes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countMatches?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countSuperLikes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dropAfter?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailConfirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  fbId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fbToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  newAdverts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['Phone']>, ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premium?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  premiumExpireAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  profileFilled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  pushExpiringConversation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pushExpiringMessages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pushNewLike?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pushNewMatch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pushNewMessage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pushNewSuperLike?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userQueries?: Resolver<Maybe<Array<ResolversTypes['UserQuery']>>, ParentType, ContextType>;
  videoFilled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  voximplantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voximplantName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserAccountImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccountImage'] = ResolversParentTypes['UserAccountImage']> = ResolversObject<{
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blur?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invalids?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  middleUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryInvalids?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  recognized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldDestroy?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  smallUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserAccountQuestionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccountQuestions'] = ResolversParentTypes['UserAccountQuestions']> = ResolversObject<{
  screen1?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen2?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen3?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen4?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen5?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen6?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  screen7?: Resolver<Maybe<ResolversTypes['QuestionsPart']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserAccountVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccountVideo'] = ResolversParentTypes['UserAccountVideo']> = ResolversObject<{
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invalids?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  recognized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  screenUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserGendersResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGenders'] = ResolversParentTypes['UserGenders']> = ResolversObject<{
  current?: Resolver<ResolversTypes['Genders'], ParentType, ContextType>;
  likeToMeet?: Resolver<ResolversTypes['LikeToMeets'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = ResolversObject<{
  attitudeToAlcoholBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  attitudeToKidsBlock?: Resolver<ResolversTypes['KidsBlock'], ParentType, ContextType>;
  attitudeToMarijuanaBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  attitudeToPetBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  attitudeToSmokingBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  educationBlock?: Resolver<ResolversTypes['EducationBlock'], ParentType, ContextType>;
  genderBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  heightBlock?: Resolver<ResolversTypes['HeightBlock'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobBlock?: Resolver<ResolversTypes['JobBlock'], ParentType, ContextType>;
  likeToMeetGender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeLanguageBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  neighborhoodBlock?: Resolver<ResolversTypes['NeighborhoodBlock'], ParentType, ContextType>;
  photoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  physicalActivityBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  placeOfBirthBlock?: Resolver<ResolversTypes['PlaceOfBirthBlock'], ParentType, ContextType>;
  politicalIdeologyBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  preferenceLat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferenceLon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipGoalBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  relationshipStatusBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  religionBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  sleep?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userAccount?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>;
  userAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoModerationPassed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zodiacBlock?: Resolver<ResolversTypes['DefaultBlock'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UserQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserQuery'] = ResolversParentTypes['UserQuery']> = ResolversObject<{
  attributive?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  queryMessages?: Resolver<Array<ResolversTypes['QueryMessage']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Value'] = ResolversParentTypes['Value']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AttitudeToAlcohol' | 'AttitudeToKid' | 'AttitudeToMarijuana' | 'AttitudeToPet' | 'AttitudeToSmoking' | 'EducationLevel' | 'Gender' | 'NativeLanguage' | 'PhysicalActivity' | 'PoliticalIdeology' | 'RelationshipGoal' | 'RelationshipStatus' | 'Religion' | 'Zodiac', ParentType, ContextType>;
}>;

export type VideoPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoPreview'] = ResolversParentTypes['VideoPreview']> = ResolversObject<{
  profileImage?: Resolver<Maybe<ResolversTypes['AccountPhoto']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<ResolversTypes['UserAccountVideo']>>, ParentType, ContextType>;
  videosNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ZodiacResolvers<ContextType = any, ParentType extends ResolversParentTypes['Zodiac'] = ResolversParentTypes['Zodiac']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AccountPhoto?: AccountPhotoResolvers<ContextType>;
  Advert?: AdvertResolvers<ContextType>;
  AdvertsInfo?: AdvertsInfoResolvers<ContextType>;
  AnswerDurations?: AnswerDurationsResolvers<ContextType>;
  AttitudeToAlcohol?: AttitudeToAlcoholResolvers<ContextType>;
  AttitudeToKid?: AttitudeToKidResolvers<ContextType>;
  AttitudeToKids?: AttitudeToKidsResolvers<ContextType>;
  AttitudeToMarijuana?: AttitudeToMarijuanaResolvers<ContextType>;
  AttitudeToPet?: AttitudeToPetResolvers<ContextType>;
  AttitudeToSmoking?: AttitudeToSmokingResolvers<ContextType>;
  Attributive?: AttributiveResolvers<ContextType>;
  Audio?: AudioResolvers<ContextType>;
  AuthToken?: AuthTokenResolvers<ContextType>;
  Button?: ButtonResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatMessages?: ChatMessagesResolvers<ContextType>;
  DefaultBlock?: DefaultBlockResolvers<ContextType>;
  EducationBlock?: EducationBlockResolvers<ContextType>;
  EducationLevel?: EducationLevelResolvers<ContextType>;
  ExampleVideo?: ExampleVideoResolvers<ContextType>;
  Feedback?: FeedbackResolvers<ContextType>;
  Gender?: GenderResolvers<ContextType>;
  Genders?: GendersResolvers<ContextType>;
  Height?: HeightResolvers<ContextType>;
  HeightBlock?: HeightBlockResolvers<ContextType>;
  ISO8601DateTime?: GraphQLScalarType;
  IconChat?: IconChatResolvers<ContextType>;
  ImageInvalids?: ImageInvalidsResolvers<ContextType>;
  ImageModeration?: ImageModerationResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobBlock?: JobBlockResolvers<ContextType>;
  KidsBlock?: KidsBlockResolvers<ContextType>;
  KidsCondition?: KidsConditionResolvers<ContextType>;
  KidsConditionChosen?: KidsConditionChosenResolvers<ContextType>;
  KidsValue?: KidsValueResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikeToMeet?: LikeToMeetResolvers<ContextType>;
  LikeToMeets?: LikeToMeetsResolvers<ContextType>;
  MatchUser?: MatchUserResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Modal?: ModalResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MyLikes?: MyLikesResolvers<ContextType>;
  NativeLanguage?: NativeLanguageResolvers<ContextType>;
  Neighborhood?: NeighborhoodResolvers<ContextType>;
  NeighborhoodBlock?: NeighborhoodBlockResolvers<ContextType>;
  Phone?: GraphQLScalarType;
  PhotoUrls?: PhotoUrlsResolvers<ContextType>;
  PhysicalActivity?: PhysicalActivityResolvers<ContextType>;
  PlaceOfBirth?: PlaceOfBirthResolvers<ContextType>;
  PlaceOfBirthBlock?: PlaceOfBirthBlockResolvers<ContextType>;
  PoliticalIdeology?: PoliticalIdeologyResolvers<ContextType>;
  Popularity?: PopularityResolvers<ContextType>;
  Preference?: PreferenceResolvers<ContextType>;
  PublicAccount?: PublicAccountResolvers<ContextType>;
  PublicAccountFull?: PublicAccountFullResolvers<ContextType>;
  PublicProfile?: PublicProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryMessage?: QueryMessageResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionsPart?: QuestionsPartResolvers<ContextType>;
  Reconnection?: ReconnectionResolvers<ContextType>;
  RelationshipGoal?: RelationshipGoalResolvers<ContextType>;
  RelationshipStatus?: RelationshipStatusResolvers<ContextType>;
  Religion?: ReligionResolvers<ContextType>;
  StaticPage?: StaticPageResolvers<ContextType>;
  StaticPageOption?: StaticPageOptionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Survey?: SurveyResolvers<ContextType>;
  UserAccount?: UserAccountResolvers<ContextType>;
  UserAccountImage?: UserAccountImageResolvers<ContextType>;
  UserAccountQuestions?: UserAccountQuestionsResolvers<ContextType>;
  UserAccountVideo?: UserAccountVideoResolvers<ContextType>;
  UserGenders?: UserGendersResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserQuery?: UserQueryResolvers<ContextType>;
  Value?: ValueResolvers;
  VideoPreview?: VideoPreviewResolvers<ContextType>;
  Zodiac?: ZodiacResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
