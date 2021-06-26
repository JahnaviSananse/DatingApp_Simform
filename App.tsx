import 'react-native-gesture-handler';

import {ApolloProvider} from '@apollo/react-hooks';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import {ActionCable, Cable} from '@kesha-antonov/react-native-action-cable';
import AsyncStorage from '@react-native-community/async-storage';
import {
  HttpLink,
  IntrospectionFragmentMatcher,
  fromPromise,
} from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {getMainDefinition} from 'apollo-utilities';
import axios, {AxiosResponse} from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';

import config from './src/configs/config';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from './src/screens/SplashScreen';
import fragmentTypes from './src/store/generated/fragmentTypes.json';
import ActionCableLink from './src/utils/ActionCableLink';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
});

type RefreshTokenResponse = {
  data: RefreshTokenData;
};

type RefreshTokenData = {
  access: string;
  access_expires_at: string;
};

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.warn = () => {};
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  console.reportErrorsAsExceptions = false;

  const [client, setClient] = useState<ApolloClient<unknown> | undefined>(
    undefined,
  );
  const [animationFinished, setAnimationFinished] = useState(false);

  const [baseToken, setBaseToken] = useState<string | null>(null);
  const [logout, setLogout] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  // OneSignal message callbacks
  // const onReceived = useCallback((notification) => {
  //   console.log('Notification received: ', notification);
  // }, []);

  // const onOpened = useCallback((openResult) => {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);
  // }, []);

  const onIds = useCallback((device) => {
     // console.log('Device info: ', device);
  }, []);

  // Setup OneSignal client
  useEffect(() => {
    // Comment this method to stop OneSignal Debugging
    OneSignal.setLogLevel(6, 0);

    // Init OneSignal
    // OneSignal.init(config.ONE_SIGNAL_APP_ID);
    OneSignal.init(config.ONE_SIGNAL_APP_ID, {
      kOSSettingsKeyAutoPrompt: false, // permission
      kOSSettingsKeyInAppLaunchURL: true, //false for deep link
    });

    // Controls what should happen if a notification is received while the app is open.
    // 2 means that the notification will go directly to the device's notification center.
    OneSignal.inFocusDisplaying(2);

    // Add listeners
    // OneSignal.addEventListener('received', onReceived);
    // OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    // Unsubscribe listeners
    return () => {
      // OneSignal.removeEventListener('received', onReceived);
      // OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  });

  // Get a new token
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNewToken = async () => {
    return axios
      .post(
        `${config.BASE_URL}/api/user_accounts/refresh`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Refresh-Token': await AsyncStorage.getItem('refresh-token'),
            accept: 'application/json',
          },
        },
      )
      .then(async (response: AxiosResponse<RefreshTokenResponse>) => {
        const {access} = response.data.data;

        // Save a new token to the storage
        await AsyncStorage.setItem('token', access);

        setBaseToken(access);

        // Return the token upper
        return access;
      });
  };

  // Setup Apollo client
  useEffect(() => {
    const clientSetup = async () => {
      const errorLink = onError(
        ({graphQLErrors, networkError, operation, forward}) => {
          if (graphQLErrors) {
            for (const err of graphQLErrors) {
              console.log(err);
              if (err.message === 'User blocked') {
                setIsBlocked(true);
              }
              switch (err?.extensions?.code) {
                case 'UNAUTHENTICATED':
                  return fromPromise(
                    getNewToken().catch((error) => {
                      // Handle token refresh errors e.g clear stored tokens, redirect to login
                      setLogout(true);
                      console.log(error);
                      return;
                    }),
                  )
                    .filter((value) => Boolean(value))
                    .flatMap((accessToken) => {
                      const oldHeaders = operation.getContext().headers;
                      // modify the operation context with a new token
                      operation.setContext({
                        headers: {
                          ...oldHeaders,
                          authorization: `${accessToken}`,
                        },
                      });

                      // retry the request, returning the new observable
                      return forward(operation);
                    });
              }
            }
          }
        },
      );

      // Query and mutations
      const httpLink = new HttpLink({
        credentials: 'include',
        uri: `${config.BASE_URL}/graphql`,
      });

      const authLink = setContext(async (_, {headers}) => {
        // get the authentication token from local storage if it exists
        const token = await AsyncStorage.getItem('token');
        // return the headers to the context so httpLink can read them
        setBaseToken(token);
        return {
          headers: {
            ...headers,
            authorization: token ?? '',
          },
        };
      });

      // Subscription
      const subscriptionToken =
        (await AsyncStorage.getItem('token')) || baseToken;
      const actionCable = ActionCable.createConsumer(
        `${config.BASE_URL}/cable?token=${subscriptionToken}`,
      );
      const cable = new Cable({});

      // Check the request has subscription
      const hasSubscriptionOperation = ({query}) => {
        const {kind, operation} = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      };

      // Compare links
      const link = ApolloLink.split(
        hasSubscriptionOperation,
        new ActionCableLink(
          {actionCable, cable},
          await AsyncStorage.getItem('token'),
        ),
        authLink.concat(httpLink),
      );

      // Setup your Apollo Link, and any other Apollo packages here.
      const apolloClient = new ApolloClient({
        cache: new InMemoryCache({
          addTypename: true,
          fragmentMatcher: fragmentMatcher,
        }),
        link: ApolloLink.from([errorLink, link]),
      });

      // Set client
      setClient(apolloClient);
    };

    clientSetup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseToken]);

  const onAnimationFinish = useCallback(() => {
    setAnimationFinished(true);
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {client && (
        <ApolloProvider client={client}>
          <RootNavigator
            isLogout={logout}
            setLogout={setLogout}
            setBaseToken={setBaseToken}
            isAnimatedFinished={animationFinished}
            isBlocked={isBlocked}
            setIsBlocked={setIsBlocked}
          />
        </ApolloProvider>
      )}
      {!animationFinished && (
        <SplashScreen onAnimationFinish={onAnimationFinish} />
      )}
    </>
  );
};

export default App;
