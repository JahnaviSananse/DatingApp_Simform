import {VideoErrorType, VideoErrors} from '../../hooks/useCheckVideos';
import {Education} from '../../hooks/useUpdateProfileField';
import {Job} from '../../store/generated/graphql';

export default {
  BlockedScreen: {
    LogOut: 'Log Out',
    message:
      'Your profile was flagged for posting content that is prohibited by our Community Guidelines. We want to create a positive and welcoming space for our ffwd crew so we operate on a zero-tolerance basis for any conduct that compromises the safety and well-being of our members. Because of your repeated violations of our Guidelines, we have decided to terminate your account.  If you have any questions or would like to address this issue further, contact us at\nsupport@ffwd-dating.com.\n\nWe wish you good luck.\n\nThe ffwd Safety Crew',
    name: 'Safety crew',
    text: 'You’re account has\nbeen terminated!',
    why: 'Why?',
  },
  ageConfirm: {
    confirm: 'Confirm',
    edit: 'Edit',
    message2:
      'Once you confirm, you won’t be able to\nmake changes to your age.',
    title: 'You can’t change this later.\nDoes this look right?',
    yearsOld: (year: number, date: string) =>
      `You’re ${year}.\nBorn on ${date
        .substr(4, date.length)
        .replace(' 0', ' ')}.`,
  },
  apiGoogle: {
    nothing: 'No matches found',
    placeOfBirth: 'City, State, Country',
  },
  betaSearchScreen: {
    gotIt: 'Got it',
    keepingPart1: 'Keeping it ',
    keepingPart2: 'real',
    message:
      'During beta you’ll start with model profiles as\nyour matches, prior to being connected with live\nusers. They’re made by real people so interact\nwith them as you would any other profile. As our\nuser base grows these profiles will be phased out.\nBut until then, it should help give you a feel for all\nthe possibilities we’re building throughout beta\nand beyond.',
    messageNoUsers:
      'There’s no more matches right now, but good\nthings come to those who ffwd. So keep\ncoming back to find new matches and\npossibilities. More matches are on the way!',
    title: 'You’ve ffwd’d to the\nend... for now',
  },
  chatIntro: {
    cancel: 'Cancel',
    delete: 'Delete',
    deleteChatMessage:
      'If you delete this Convo, it will be\npermanently erased from your chats.\nYour match can still contact you until the\nConvo times out.',
    deleteChatTitle: 'Are you sure?',
    emptyConvo: `You don't have any conversations`,
    emptyIntro: `You dont have any intros`,
    exConversation: 'Convo lapsed',
    exIntro: 'Intro lapsed',
    listHeaderTitleConversations: '7d to take the Convo off FFWD',
    listHeaderTitleIntro: '48h to respond to an Intro',
    messageItem: {
      popUpText: (name: string) =>
        `This Profile cannot be accessed because there is an issue with ${name}'s account.\nOnce the issue is resolved ${name}'s Profile will be back up.`,
      popUpTitle: 'Profile is Currently Unavailable',
    },
    pageTitle: 'Chat',
    rematch: 'Rematch',
    restore: 'Reconnect',
    swipeButtonFirst: 'Unmatch',
    swipeButtonSecond: 'Report',
    swipeButtonThird: 'Delete\nConvo',
    turnButtonTheir: 'Their turn',
    turnButtonYou: 'Your turn',
    unmatch: 'Unmatch',
    whoLikesYou: 'FANBASE',
    whoMatchesYou: 'matches',
    whoMatchesYouTime: '48h to make an Intro',
    youSuperliked: 'You Superliked ',
  },
  chatRoom: {
    alertDots: {
      firstButton: 'Report',
      secondButton: 'Unmatch',
      thirdButtonCancel: 'Cancel',
    },
    attachModal: {
      albums: 'Albums',
      cancel: 'Cancel',
      label: 'Add up to3 photos at a time',
      recent: 'Recent',
      send: 'Send',
    },
    howMustRestoreConvo: (name: string) =>
      `Your screentime expired but ${name} may\nwant to reconnect for 48h.`,
    howMustRestoreIntro: (name: string) =>
      `It’s ${name} turn to respond to your Intro\nso only they can reconnect with you.`,
    myTurn: 'Your turn',
    placeholder: 'Send a message',
    reconnectMsg: 'Your screentime expired but you\ncan reconnect for 48h.',
    startAbout: 'Don’t let the connection get away!',
    startTitle: 'Start Chatting!',
    theirTurn: 'Their Turn To Restore!',
  },
  checkYourFlick: {
    editFlickModal: {
      message:
        'Your entire Scene will be deleted.\nYou can also redo any individual Scene\nanswers.',
      negative: 'Start over',
      positive: 'Cancel',
      title: 'Are you sure?',
    },
    editSingleFlickModal: {
      message:
        'Any new answers will be saved over old\nones. This is permanent.',
      negative: 'Redo',
      positive: 'Cancel',
      title: 'Ready for a second take?',
    },
    editWrongFlickModal: {
      message:
        'Your Scene failed our moderation. Please no inappropriate content and show your face clearly. You’ll have to re-record before you can like & match with others.',
      positive: 'Got it',
      title: 'Your Scene needs tweaking!',
    },
    getVideoError: (error: VideoErrorType): VideoErrors => {
      switch (error) {
        case 'DEFICIENCY':
          return {
            description:
              'Finish recording your Scene\nto start liking and matching.',
            title: 'Finish your Scene!',
          };
        case 'MODERATION':
          return {
            description: '',
            title: 'Your Scene will be up in a jiffy!',
          };
        case 'EMPTY':
          return {
            description: 'Record your Scene to start\nliking and matching.',
            title: 'Record your Scene!',
          };
      }
    },
    reRecord: 'Re-Record Entire Flick',
    reRecordQuestion: 'Re-Record this\nQuestion',
    save: 'Save',
    title: 'Check out your Scene!',
    videoProcessing: 'Video is being processed',
  },
  deleteAccModa: {
    'itemData1-1': 'Hmm, actually let’s wait',
    'itemData1-2': 'I’m taken. Delete my account.',
    'itemData2-1': 'Provide feedback',
    'itemData2-2': 'Delete my account.',
    itemData4: 'Something else',
    itemTitle: 'I met someone',
    itemTitle2: 'I don’t like the experience',
    itemTitle3: 'Billing issue',
    message:
      'We’d really appreciate the reason for why\nyou want to delete your account so that we\ncan improve the ffwd experience.',
    message1:
      'We’re sincerely thrilled for you & wish you\nlots of luck. While we hope to never see you\nagain, we will securely save your profile for\n30 days. Sort of like a relationship warranty.\nIf you come back within 30 days with the\nsame credentials, your account will be\nrestored & you can find someone else who\nmakes you want to delete your account.',
    message2:
      'We’re sorry you’re not happy with ffwd.\nWe would really appreciate your feedback\non how we can improve the experience. We\naim to please and maybe we’ll see you\nagain once we make the necessary\nchanges.',
    title: 'Please help improve!',
    title1: 'Congrats!',
    title2: 'We’d love feedback!',
  },
  editProfile: {
    education: {
      educationLevel: {
        label: 'Education Level',
      },
      getFormatEducation: (education: Education): string | undefined => {
        const hasEducationFilled =
          (education.nameOfSchool ?? undefined) ||
          (education.educationLevel ?? undefined);
        const educationField = `${education.educationLevel?.name ?? ''}${
          education.educationLevel && education.nameOfSchool ? ' at ' : ''
        }${education.nameOfSchool ?? ''}`;
        return hasEducationFilled ? educationField : undefined;
      },
      nameOfSchool: {
        description: 'List the school where you received the highest degree',
        label: 'Give a shout out to your school!',
        placeholder: 'School name',
      },
    },
    fields: {
      add: 'Add',
      birthPlace: 'Birthplace',
    },
    gender: {
      otherGender: {
        message: 'How you identify is valid.\nSelect from the list below.',
        placeholder: 'Find your gender',
      },
    },
    header: {
      done: 'Done',
    },
    height: {
      getHeight: (value: number) => {
        const feet = (value * 0.032808).toFixed(1).toString();
        const formattedFeet = feet.replace('.', '’');
        return `${formattedFeet} (${value} cm)`;
      },
      maxHeight: `7’0 (213 cm)`,
      minHeight: `4’0 (122 cm)`,
    },
    job: {
      getFormatJob: (job: Job): string | undefined => {
        const hasJobFilled =
          (job.placeOfWork ?? undefined) || (job.jobDescription ?? undefined);
        const jobField = `${job.jobDescription ?? ''}${
          job.placeOfWork && job.jobDescription ? ' at ' : ''
        }${job.placeOfWork ?? ''}`;
        return hasJobFilled ? jobField : undefined;
      },
      jobDescription: {
        label: 'What do you do?',
        placeholder: 'Job',
      },
      placeOfWork: {
        label: 'Where do you work?',
        placeholder: 'Work place',
      },
    },
    placeOfBirth: {
      label: 'City, State or Region or Province, Country',
    },
    subHeader: {
      flick: 'Flick',
      information: 'Information',
    },
    video: {
      edit: 'Record',
      finish: 'Finish',
      record: 'Record',
    },
  },
  emailScreen: {
    addValidEmail: 'Sorry please add valid email',
    emailUsed: 'Sorry, the email already used.',
    label: 'Where ya @?',
    modalText:
      'You can also add your email later (and if you change your mind, you can make changes to your email settings). ',
    modalTitle: 'We want to keep you in the loop about all things FFWD',
    placeholder: 'Email',
    subTitle:
      'As a member of our beta community, your\nopinions will help shape the ways of FFWD. We\nmight send an email every now and then to ask\nyour opinions and share exciting new updates.',
    subTitle2:
      'We value your privacy and your inbox. Your\ninformation will never be sold and we promise to\nnever send spam. You may opt out at any time.',
  },
  errorAgeScreen: {
    button: 'Log Out',
    messageAbout:
      'You must be at least 18 to ffwd.\nUntil then, let’s pause and finish signing\nup when you turn 18. See you then!',
    // terms: 'Terms of Service',
    title: 'Let’s slow down\nbefore we ffwd.',
  },
  feedbackFlow: {
    attach: 'Attach file',
    emailLabel: 'We’ll write back to your registered email',
    enterEmail: 'Please enter valid email',
    enterMessageAndEmail: 'Please enter your message and email',
    fileType: 'File types: jpeg. png. no more than 5MB.',
    label:
      "Please  help  us  make  ffwd  a  safe \nand welcoming  place  for  our crew by\ntelling us why you’re reporting. And\ndon't worry, this is confidential!",
    optional: ' (optional)',
    photoError: 'Error upload photo',
    placeholderEmail: 'Email',
    placeholderMessage: 'Type your message',
    report: 'Report',
    send: 'Send',
    sendLabel:
      'Please provide details so that we can better\naddress the issue.',
    sendLabelOptional:
      'Feel free to let us know more details so that we\ncan better address the issue.',
    tellMore: 'Tell us more.',
    tellMoreOptional: 'Would you like to tell us more?',
    title: 'What’s wrong?',
    unmatch: 'Unmatch',
    unmatchLabel:
      "Please  help  us  make  ffwd  a  safe \nand welcoming  place  for  our  crew\nby letting us know of any issues. And\ndon't worry, this is confidential!",
    unmatchTitle: 'Did something happen?',
    wrong: 'Something went wrong, please try again',
    wrongFormat: 'Wrong format',
  },
  gender: {
    add: 'Add',
    enter: 'How you identify is valid.\nSelect from the list bellow.',
    everyone: 'Everyone',
    label: 'Who do you want\nto meet on ffwd?',
    male: 'Male',
    other: 'More options',
    placeholder: 'Find your gender',
    subTitle: 'This info won’t be visible on your profile',
    visibility:
      'Click this icon if you’d like your\ngender to be visible on your profile.',
    woman: 'Woman',
  },
  internetError: {
    btnText: 'Check connection',
    offline: 'You’re offline!',
  },
  intro: {
    apple: 'Continue with Apple',
    cookies: {
      text: 'Cookies Policy',
      url: 'https://www.ffwd-dating.com/privacy-policy/cookies',
    },
    facebook: 'Continue with Facebook',
    getInfoText: (termsUrl: string, privacyUrl: string, cookiesUrl: string) =>
      `By clicking the buttons above, you agree to our ${termsUrl} and ${privacyUrl} and how we use cookies\n and similar techologies in our ${cookiesUrl}`,
    getTermsText: (termsUrl: string) => `Read our ${termsUrl}`,
    phone: 'Continue with phone number',
    privacy: {
      text: 'Privacy Policy',
      url: 'https://www.ffwd-dating.com/privacy-policy/',
    },
    social: 'Continue with:',
    terms: {
      text: 'Terms &\n Conditions',
      url: 'https://www.ffwd-dating.com/terms-and-conditions/',
    },
    titleFirst: 'Less bad dates.\nMore real people.',
    titleSecond: 'FFWD. Make a Scene.',
    version: 'Beta Version',
  },
  locationOnlyWarning: {
    confirmButton: 'Confirm',
    message:
      "We're currently live in the New York City region only, but we plan to expand to other U.S. cities (and beyond) soon. If you're not in NYC, keep your eyes and ears open for our launch in your city.",
    title: 'Welcome to the beta launch of FFWD!',
  },
  mapPage: {
    about: 'Which neighborhood do you live in?',
    // allowAccessMessage: 'This will accurately give us the city & neighborhood where you’re currently located so that we can find matches near you. We don’t track or share your exact location.',
    // allowAccessTitle: 'We’d like to access your location',

    // allowAccessPositive: 'Allow while using the App',
    // allowAccessNegative: 'Don`t allow',
    // allowAccessPositiveOnce: 'Allow once',
    button: 'Go to your current location',
    negative: 'OK',
    permissionsAlertDescription:
      'We need to know where you’re currently located so that we can find matches near you. We don’t track or share your exact location.',
    permissionsAlertDescription2:
      'This will accurately give us the city & neighborhood where you’re currently located so that we can find matches near you. We don’t track or share your exact location.',
    permissionsAlertTitle: 'Need location access',
    positive: 'Open Settings',
    skip: 'Skip',
  },
  matchPreferenceSettings: {
    age: {
      ageRange: 'Age range',
      maxAge: '65+',
      minAge: '18',
    },
    distance: {
      distance: 'Distance',
      maxDisance: '50 mi (80 km)',
      minDistance: '0 mi (0 km)',
      within: 'Within',
    },
    height: {
      height: 'Height',
      maxHeight: `7’ (213 cm)`,
      minHeight: `4’0 (122 cm)`,
    },
    interested: {
      everyone: 'Everyone',
      label: 'I’m interested in...',
      men: 'Man',
      woman: 'Woman',
    },
    kids: {
      value1: 'Open to blended family',
      value2: 'Only want their own kids',
    },
    messages: {
      alcohol: ' How often are corks poppin at their place?',
      education: 'How much homework did they do?',
      kids: 'What’s their future fam look like?',
      marijuana: 'How often do they partake in this\nrecreational activity?',
      pets: 'What fur babies should you\nhave in common?',
      physicalActivity: 'How many gym dates do you\nwant to have?',
      relationshipGoal: 'What should your boo want to ffwd to?',
      relationshipStatus: 'What’s your future boo’s current status?',
      religion: 'Looking to pray together to stay together?',
      smoking: 'Thoughts on smoke breaks?',
    },
    openAll: 'Open to all',
  },
  matchingModal: {
    buttonNegative: {
      mutuallySuperLike: 'Continue browsing',
      sendSuperLike: 'Cancel',
      superLikeFrom: 'Cancel',
    },
    buttonPositive: {
      mutuallySuperLike: 'Start chatting',
      sendSuperLike: 'Send Superlike',
      superLikeFrom: 'Go to Profile',
    },
    description: {
      getSendSuperLike: (partnerName: string) =>
        `Wow you really like ${partnerName}! They’ll get a message that you think they're extra special.`,
      getSuperLikeFrom: (partnerName: string) =>
        `${partnerName} made a bold first move by sending you a Superlike. Go to ${partnerName}’s profile to know them better.`,
      mutuallySuperLike:
        'Contact one other within 48 hours or poof the chance will be gone.',
    },
    title: {
      getSuperLikeFrom: (partnerName: string) =>
        `A Superlike from ${partnerName}!`,
      mutuallySuperLike: 'Bam! It’s a match!\nLet’s Fast Forward!',
      sendSuperLike: 'Send a Superlike!',
    },
  },
  navigationPage: {
    beta: 'Beta Release',
    edit: 'Edit Profile',
    match: 'MATCH PREFERENCES',
    preferences: 'Match Preferences',
    settings: 'Settings',
    warningModalModerationPassed: {
      cancel: 'Later',
      changePhoto: 'Update',
      checkingMessage:
        'We’re still finishing our moderation on\nyour profile. But it’ll be up and running\nin no time.',
      checkingTitle: 'Your profile isn’t public yet.',
      goToProfile: 'Update',
      gotIt: 'Got it',
      issueWith: (value: string) => `Your ${value} needs tweaking!`,
      negative: 'Cancel',
      noPhoto: {
        add: 'Add',
        later: 'Later',
        message:
          'You have to upload a cover pic before\nyou can like & match with other.',
        title: 'Let’s add a cover\nphoto for your Scene!',
      },
      noVideoOrPhotoMessage:
        'Your profile won’t be public until you\nfinish recording your Scene (and don’t\nforgot to add a cover!)',
      notLoadedProfile: {
        later: 'Later',
        message: (videos: number) =>
          `You have to ${
            videos === 0 ? 'record' : 'finish recording'
          } your Scene before you can like & match with others.`,
        positiveText: (value: number) => (value === 0 ? 'Record' : 'Finish'),
        title: (videos: number) =>
          `Let’s ${videos === 0 ? 'record' : 'finish'} your Scene!`,
      },
      notPublic: 'Your profile isn’t public.',
      reRecord: 'Record',
      text: (value: 'flick' | 'photo' | 'photo&flick'): string => {
        switch (value) {
          case 'flick':
            return 'Your Scene failed our moderation. Please no inappropriate content and show your face clearly. You’ll have to re-record before you can like & match with others.';
          case 'photo':
            return 'Your cover failed our moderation. Please no inappropriate content, no unaccompanied children, and show your face clearly. You’ll have to add a new cover before you can like & match with others.';
          case 'photo&flick':
            return 'Oh no! Your Scene & cover photo failed our moderation.  Please no inappropriate content, no unaccompanied children, and show your face clearly. You’ll have to redo your Scene & add a new cover before you can like & match with others.';
        }
      },
      validationFailedProfileControl:
        'Your profile failed our moderation. Make\nsure it complies with our guidelines so\nthat we show it to users and you can\nstart binge watching your way to a great\nmatch.',
    },
  },
  onBoardingBirthday: {
    about:
      'We’ll ask you to confirm your age because you won’t be able to change it later',
    dateFormat: 'MM/DD/YYYY',
    label: 'You weren’t born\nyesterday. Or were you?',
    subTitle: 'Your age will appear on your profile',
    yourAre: 'You’re',
  },
  onBoardingCode: {
    about: 'Send another code!',
    cancel: 'Cancel',
    edit: 'Edit Phone number',
    error: 'Phone number is not correct',
    label: 'Secret code',
    resend: 'Send Again',
    subTitle: 'Enter the code sent to ',
    timer: (timer: number) => `You can re-send the code via ${timer} seconds`,
  },
  onBoardingName: {
    label: 'What should we\ncall you?',
    // label: 'What’s your first name?',
    placeholder: 'First name',
    subTitle: 'Your first name will appear on your profile.',
  },
  onBoardingPhone: {
    about:
      'Honesty is everything in a relationship. We’ll send\nyou a text with a validation code to make sure\nyou’re you. Messages and data rates may apply.',
    confirm: 'Confirm',
    edit: 'Edit',
    label: "What's your number?",
    messageModal: (number: string) => `+${number}`,
    messageText: 'Your secret code will be sent to the\nfollowing number:',

    placeholderModal: 'Search',

    remark: '(message and data rates apply)',

    subTitle: '',
    // subTitle: 'Let’s start with your digits!',
    titleModal: 'Confirm your number',
  },
  onBoardingPhoto: {
    about: 'Drag photos to rearrange order',
    alertTitle: 'Let’s try another pic',
    alertTitleSure: 'Are you sure?',
    errorMessage: (invalid) => `there is no ${invalid} in this photo`,
    errorMessagePrimary: (invalid: string) =>
      `This photo can't be primary because there is no ${invalid}`,
    label: 'Let’s give your\nScene a cover!',
    photoLabel: 'Profile photo',
    profilePhoto: 'Profile photo',
    subTitle: 'Add at least 3 photos',
    text: 'Are you sure you wont to delete this photo?',
    waiting: 'Please, waiting for upload photo',
    waitingUpdate: 'Please, waiting for update photo position',
  },
  otherGender: {
    emptyList: 'Sorry, no match found. Try searching our list!',
    label: 'More options',
  },
  phoneModalWarning: {
    confirm: 'Confirm',
    edit: 'Edit',
    message: (
      countryCallCode: number,
      countryName: string,
      textInput: string,
    ) =>
      `Your secret code will be sent to the following number: +${countryCallCode(
        countryName,
      )}${textInput}`,
    title: 'Confirm your number',
  },
  photoFlow: {
    alerts: {
      moderation: {
        delete: 'Delete',
        replace: 'Replace',
        title: 'Let’s try another pic',
      },
      removing: {
        cancel: 'Cancel',
        delete: 'Delete',
        message: 'Are you sure you want to delete this photo?',
        title: 'Are you sure?',
      },
    },
    other: {
      primaryPhoto: 'Primary Photo',
    },
    permissions: {
      buttons: {
        ok: 'OK',
        openSettings: 'Open Settings',
      },
      cameraPermissions: {
        message:
          'Access to Camera was denied or restricted. Please allow FFWD access in order to take photos and start browsing!',
        title: 'Need Access Please',
      },
      storagePermissions: {
        message:
          'Access to Photo Library was denied or restricted. Please allow FFWD access in order to add photos and start browsing.',
        title: 'Need Access Please',
      },
    },
  },
  publicProfile: {
    block: 'Block & Report',
    currentLocation: 'Current location',
    neighborhood: 'Neighborhood',
    placeOfBirth: 'Place of birth',
  },
  questionsModal: {
    chooseQuestion: 'Choose your question',
    getStepsText: (step: number, totalSteps: number) => `${step}/${totalSteps}`,
    moreQuestions: 'More Questions',
    next: 'Next',
  },
  relationActionBtn: {
    message: (value?: string) =>
      `Looks like you’re ready to send ${value} a SuperStar.  Good move!`,
    negativeText: 'Cancel',
    positiveText: 'Super Star',
    title: 'You found someone\nsuper special!',
  },
  searchPeople: {
    modalMessage:
      'Love waits for no one. You’ve got 48\nhours to contact each other or it’ll be a\nmatch & a miss. But hey, you already\nmatched! So there’s at least one thing\nyou have in common. Don’t\noverthink it.',
    modalTitle: 'You’ve matched!\nNow make your move!',
    negativeText: 'Later',
    positive: 'Say hi',
  },
  settings: {
    addEmail: 'Email',
    addPhoneNumber: 'Phone Number',
    additionalTextPush:
      'You may miss a great connection\nor a message if your notifications are off',
    btnSend: 'Send',
    contact: 'Contact Us',
    cookiesPolicy: 'Cookies Policy',
    deleAccCencel: 'Cancel',
    deleteAccMessage:
      'Deleting your account will delete all\nmatches and chats.  And we’ll miss you!',
    deleteAccQuestion: 'Sure You Want to Delete?',
    deleteAccount: 'Delete Account',
    email: 'Email',
    faq: 'FAQ',
    helpSupport: 'Help & Support',
    logOut: 'Log Out',
    numberAndEmail: 'PHONE NUMBER & EMAIL',
    phoneNumber: 'PHONE NUMBER',
    privacy: 'Privacy',
    privacyPolicy: 'Privacy Policy',
    pushNotofication: 'Push Notifications',
    scene: 'Scene Tutorial',
    sendMail: {
      attach: 'Attach file',
      email: 'Email',
      fileType: 'File types: jpeg, png, no more than 5MB.',
      message: 'Type your message',
      messageModal: 'Your message will be deleted if you\ncancel.',
      negativeModal: 'Cancel',
      positiveModal: 'Continue',
      positiveModalError: 'Ok',
      title: 'We’ll write back to your registered email',
      titleModal: 'Sure you want to cancel?',
      titleModalError: 'Issue',
    },
    termsOfUse: 'Terms of Use',
  },
  videoRecord: {
    modal: {
      message:
        'If you choose to stop recording, your\nanswers will be saved but your profile won’t\nbe visible and matching is paused until you\ncomplete your Scene.',
      negative: 'Pause',
      positive: 'Cancel',
      title: 'Pressing pause?',
    },
    titles: {
      doingAwesome: 'You’re doing awesome!\nA couple more questions to go.',
      fewMoreQuestions:
        'A few more questions to go!\nChoose your next question!',
      lastQuestion: 'Woohoo! Last question!',
    },
    tutorialPrompt: {
      goText: 'Got it',
      // next: 'Or save your answer & go\nto the next question',
      // reRecord: {
      //   content:
      //     'Press record when ready and stop when\nyou’re done. Tap the arrow if you like your\nanswer or record button to try again. And\ndon’t stress about rehearsing to perfection,\ngenuine answers work best.',
      //   title: 'Next, record and move on.',
      // },
      record: {
        content:
          'Press record when ready and stop when\nyou’re done. Tap the arrow if you like your\nanswer or record button to try again. And\ndon’t stress about rehearsing to perfection,\ngenuine answers work best.',
        title: 'Next, record and move on.',
      },
      showMore: {
        content: 'Tap the question or\n“+” button\nto see different options',
        title: 'Choose your question.',
      },
      swipe: {
        content:
          'Swipe the question card in any direction to\nchoose a new question.',
        title: 'First, choose your question.',
      },
    },
  },
  videoRecordIntro: {
    cameraPermissions: {
      message:
        'Access to Camera and Microphone was denied or restricted. Please allow FFWD access in order to create your Flick and start matching!',
      negative: 'OK',
      positive: 'Open Settings',
      title: 'Oh oh!',
    },
    description:
      'It’s SIMPLE, FUN, and FAST.\nFirst, we ask you 4 “this or that” questions and then 3 open ended questions. You can choose each question and re-record as much as you want. Review your Flick once you are done recording all the questions. And then away you go to find your match!',
    letsRecord: 'Record',
    makeScene: 'Make a Scene!',
    modal: {
      message:
        'We know you’re ready to start binge\nwatching your way to the best date, but you\nwon’t be able to like or match with anyone\nuntil you’ve finished your  Scene.',
      negative: 'Skip for now',
      positive: 'Record',
      title: 'You can ffwd a lot of\nthings but not this!',
    },
    skipAndBrowse: 'Skip for now',
    title: "Final Step: Let's Record\nYour Personal Flick!",
  },
  whatsGender: {
    label: 'How do you define your\ngender?',
  },
  whoLikesYou: {
    emptyMessage: 'Don’t sweat!\nYour fans will be swarming soon!',
  },
  wouldLikeMeet: {
    message: 'This won’t be visible on your profile.',
  },
};
