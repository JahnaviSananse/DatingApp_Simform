import React from 'react';

export const MuteState = {
  GLOBAL: 'global-mute-state',
  PROFILE: 'profile-mute-state',
};

export type MuteContextProps = {
  muted: boolean;
  profileMuted: boolean;
  switchMuted: () => void;
  switchProfileMuted: () => void;
};

export const MuteContext = React.createContext<MuteContextProps>({
  muted: false,
  profileMuted: false,
  switchMuted: () => void 0,
  switchProfileMuted: () => void 0,
});
