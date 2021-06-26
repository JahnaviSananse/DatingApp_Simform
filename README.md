# FFWD_Dating

## Environment setup
Most of the steps are described on the official React Native website
https://reactnative.dev/docs/environment-setup

## Getting Started

To install dependencies and run or build project you need to use [yarn](https://classic.yarnpkg.com/en/docs/install)

To install dependencies in the project root folder run command `yarn install`

### IOS
To Install ios cocoapods run command `yarn generate-pods`

## Usage
To run app in dev mode use next commands
```
yarn start
yarn ios-device
```

If you want to run from Iphone simulator you need to run `yarn ios`. You can change simulator device in `package.json` file. 
 Simulator name you can check in XCode simulators list

To make IOS build open XCode and press on build button

To change API URL you should change `config.js` file in `src/configs`

## SDK Service

You can find GOOGLE_API_KEY and ONE_SIGNAL_APP_ID in `src/configs/config.js`

```
GOOGLE_API_KEY: 'AIzaSyCyw5vUidBstOesU7SNg59MAxv17Tq3esk',
ONE_SIGNAL_APP_ID: '0a74c16d-dbe2-4406-b8ea-dc18c0b45365',
```

## Update GraphQL schema
To update GraphQl schema you should manually make changes in `src/store`and run command `yarn codegen`


## Troubleshooting
If you have builds problems try to run next steps
```
yarn clean-ios
remove Pods folder
remove Podfile.lock
yarn generate-pods
```


# Directory Structure

```bash
├── scr
│   ├── components
│   │   ├── texts
│   │   │   └── *.tsx
│   │   └── *.tsx
│   ├── configs
│   │   ├── styles
│   │   │   ├── colors.tsx
│   │   │   ├── sizes.tsx
│   │   │   └── strings.ts
│   │   ├── attachments.tsx
│   │   ├── dateFormats.tsx
│   │   └── regExr.tsx
│   ├── hooks
│   │   └── useKeyboardHeight.tsx
│   ├── navigagtion
│   │   ├── *Navigator.tsx
│   │   └── NavigationKey.ts
│   ├── screens
│   │   └── *Screen.tsx
│   └── utils
│       ├── dimensions.tsx
│       └── fonts.tsx
├── App.tsx
└── package.json
```
