import strings from '../configs/styles/strings';
import NavigationKey from '../navigation/NavigationKey';

type Props = {
  isDataChecking?: boolean | null | undefined;
  photoValidation?: boolean | null | undefined;
  flickValidation?: boolean | null | undefined;
  openSettings?: () => void;
  videoCount?: number;
  hasPhoto?: boolean;
  onPressNegative?: () => void;
  fromProfileControl?: boolean;
  navigate: (
    stackName: string,
    screenName: {screen: string; params: {}},
  ) => void;
};
export const photoFlickValidationAction = ({
  isDataChecking,
  photoValidation,
  flickValidation,
  openSettings,
  videoCount = 7,
  hasPhoto = true,
  onPressNegative,
  navigate,
  fromProfileControl = false,
}: Props) => {
  const openEditProfile = (isCover = false) => {
    if (openSettings) {
      openSettings();
    }
    navigate(NavigationKey.EditProfileNavigator, {
      params: {hideWarningModal: isCover, openCover: isCover},
      screen: NavigationKey.EditProfile,
    });
  };

  if (fromProfileControl) {
    if (isDataChecking) {
      return {
        hideCloseButton: true,
        message:
          strings.navigationPage.warningModalModerationPassed.checkingMessage,
        // onPressPositive: openSettings,
        oneBtn: true,
        positiveText: strings.navigationPage.warningModalModerationPassed.gotIt,
        textAlign: 'center',
        title:
          strings.navigationPage.warningModalModerationPassed.checkingTitle,
      };
    }

    if (videoCount < 7 || !hasPhoto) {
      return {
        hideCloseButton: true,
        message:
          strings.navigationPage.warningModalModerationPassed
            .noVideoOrPhotoMessage,
        negativeText:
          strings.navigationPage.warningModalModerationPassed.negative,
        onPressNegative,
        onPressPositive: () => openEditProfile(!(videoCount < 7)),
        oneBtn: false,
        positiveText:
          strings.navigationPage.warningModalModerationPassed.reRecord,
        textAlign: 'center',
        title:
          strings.navigationPage.warningModalModerationPassed.checkingTitle,
      };
    }
    if (!photoValidation || !flickValidation) {
      return {
        hideCloseButton: true,
        message:
          strings.navigationPage.warningModalModerationPassed
            .validationFailedProfileControl,
        negativeText:
          strings.navigationPage.warningModalModerationPassed.negative,
        onPressNegative,
        onPressPositive: () => openEditProfile(!!flickValidation),
        oneBtn: false,
        positiveText: strings.navigationPage.edit,
        textAlign: 'center',
        title: strings.navigationPage.warningModalModerationPassed.notPublic,
      };
    }
  }

  if (videoCount < 7) {
    return {
      hideCloseButton: true,
      message: strings.navigationPage.warningModalModerationPassed.notLoadedProfile.message(
        videoCount,
      ),
      negativeText:
        strings.navigationPage.warningModalModerationPassed.notLoadedProfile
          .later,
      onPressNegative,
      onPressPositive: openEditProfile,
      oneBtn: false,
      positiveText: strings.navigationPage.warningModalModerationPassed.notLoadedProfile.positiveText(
        videoCount,
      ),
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.notLoadedProfile.title(
        videoCount,
      ),
    };
  }
  if (!hasPhoto) {
    return {
      hideCloseButton: true,
      message:
        strings.navigationPage.warningModalModerationPassed.noPhoto.message,
      negativeText:
        strings.navigationPage.warningModalModerationPassed.noPhoto.later,
      onPressNegative,
      onPressPositive: () => openEditProfile(true),
      oneBtn: false,
      positiveText:
        strings.navigationPage.warningModalModerationPassed.noPhoto.add,
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.noPhoto.title,
    };
  }

  if (isDataChecking) {
    return {
      hideCloseButton: true,
      message:
        strings.navigationPage.warningModalModerationPassed.checkingMessage,
      // onPressPositive: openSettings,
      oneBtn: true,
      positiveText: strings.navigationPage.warningModalModerationPassed.gotIt,
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.checkingTitle,
    };
  }

  if (photoValidation && !flickValidation) {
    return {
      hideCloseButton: true,
      message: strings.navigationPage.warningModalModerationPassed.text(
        'flick',
      ),
      negativeText: strings.navigationPage.warningModalModerationPassed.cancel,
      onPressNegative,
      onPressPositive: openEditProfile,
      oneBtn: false,
      positiveText:
        strings.navigationPage.warningModalModerationPassed.reRecord,
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.issueWith(
        'Scene',
      ),
    };
  } else if (!photoValidation && flickValidation) {
    return {
      hideCloseButton: true,
      message: strings.navigationPage.warningModalModerationPassed.text(
        'photo',
      ),
      negativeText: strings.navigationPage.warningModalModerationPassed.cancel,
      onPressNegative,
      onPressPositive: () => openEditProfile(true),
      oneBtn: false,
      positiveText:
        strings.navigationPage.warningModalModerationPassed.changePhoto,
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.issueWith(
        'cover photo',
      ),
    };
  } else {
    return {
      hideCloseButton: true,
      message: strings.navigationPage.warningModalModerationPassed.text(
        'photo&flick',
      ),
      negativeText: strings.navigationPage.warningModalModerationPassed.cancel,
      onPressNegative,
      onPressPositive: openEditProfile,
      oneBtn: false,
      positiveText:
        strings.navigationPage.warningModalModerationPassed.goToProfile,
      textAlign: 'center',
      title: strings.navigationPage.warningModalModerationPassed.issueWith(
        'profile',
      ),
    };
  }
};
