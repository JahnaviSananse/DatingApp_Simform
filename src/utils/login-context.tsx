import React from 'react';

import {AccessLevelType} from '../navigation/RootNavigator';

export type ContextProps = {
  signIn: (token: string, refreshToken: string) => void;
  giveAccess: (level: AccessLevelType) => void;
  signOut: () => void;
  isAnimatedFinished: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});
