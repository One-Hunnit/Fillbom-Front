import { atom } from 'recoil';
import { persistAtom } from '@/utils/recoil';
import { type TAccountStatus, type TAcccountRole } from '@/constants';

export interface IAuth {
  account: {
    id: string;
    name: string;
    email: string;
    profileImage: string;
    role: TAcccountRole;
    status: TAccountStatus;
  };
  accessToken: string;
  refreshToken: string;
}

export const AUTH_STATE_KEY = 'authState';

const defaultAuthState = null;

export const authState = atom<IAuth | null>({
  key: AUTH_STATE_KEY,
  default: defaultAuthState,
  effects_UNSTABLE: [persistAtom(AUTH_STATE_KEY)],
});
