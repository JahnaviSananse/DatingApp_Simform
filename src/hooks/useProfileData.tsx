import moment from 'moment';
import {useCallback, useEffect, useRef, useState} from 'react';

import {
  UserProfile,
  useMyProfileLazyQuery,
  useMyProfileQuery,
} from '../store/generated/graphql';

type ProfileImageType = string | undefined;
type FullProfileType = UserProfile | undefined;

type ProfileDataReturnType = {
  userAge: number;
  firstName: string;
  fullProfile: FullProfileType;
  failedModeration: boolean;
  profileImage: ProfileImageType;
  reloadProfileData: () => void;
  updateProfileImage: (photoUri: string) => void;
};

const init: ProfileDataReturnType = {
  failedModeration: false,
  firstName: '',
  fullProfile: undefined,
  profileImage: undefined,
  reloadProfileData: () => {
    // console.log('INIT');
  },
  updateProfileImage: () => {
    // console.log('INIT');
  },
  userAge: 0,
};

const useProfileDataImpl = (): ProfileDataReturnType => {
  const [userAge, setUserAge] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>('');
  const [profileImage, setProfileImage] = useState<ProfileImageType>();
  const [fullProfile, setFullProfile] = useState<FullProfileType>();
  const [failedModeration, setFailedModeration] = useState(false);

  // Setup profile data
  const setupData = useCallback(
    (profile: UserProfile) => {
      if (profile === fullProfile) return;

      // Set full profile
      setFullProfile(profile);

      // Get user account and birthday
      const {userAccount, birthDate} = profile;

      // Setup age
      const age = moment(new Date()).diff(birthDate, 'years');
      setUserAge(age);

      // Setup failed moderation
      setFailedModeration(
        !(profile.userAccount?.photoModerationPassed ?? false) ||
          !(profile.userAccount?.videoModerationPassed ?? false),
      );

      // Setup another data
      setFirstName(userAccount?.firstName ?? '');
      setProfileImage(userAccount.profileImage?.urls.middle ?? undefined);
    },
    [fullProfile],
  );

  // Update profile image
  const updateProfileImage = useCallback(
    (image: ProfileImageType) => {
      if (image !== profileImage) {
        setProfileImage(image);
      }
    },
    [profileImage],
  );

  // Cache storage data
  const {data: cacheData, error: cacheError} = useMyProfileQuery();

  useEffect(() => {
    if (cacheData && cacheData.myProfile) {
      setupData(cacheData.myProfile as UserProfile);
    }
  }, [cacheData, setupData]);

  // Lazy network data
  const [
    loadProfileData,
    {data: lazyNetworkData, error: lazyNetworkError},
  ] = useMyProfileLazyQuery({
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (lazyNetworkData && lazyNetworkData.myProfile) {
      setupData(lazyNetworkData.myProfile as UserProfile);
    }
  }, [lazyNetworkData, setupData]);

  // Load the profile data
  const mounted = useRef(true);
  const reloadProfileData = useCallback(() => {
    if (mounted) {
      loadProfileData();
    }
    return () => {
      mounted.current = false;
    };
  }, [loadProfileData]);

  // Return the data
  return {
    failedModeration: failedModeration,
    firstName: firstName,
    fullProfile: fullProfile,
    profileImage: profileImage,
    reloadProfileData: reloadProfileData,
    updateProfileImage: updateProfileImage,
    userAge: userAge,
  };
};

// export const useProfileData = singletonHook<ProfileDataReturnType>(
//   init,
//   useProfileDataImpl,
// );
export const useProfileData = useProfileDataImpl;
