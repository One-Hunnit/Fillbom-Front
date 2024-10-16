import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { setAccessToken } from '@/api/client';
import { type TStore } from '@/types/store';
import { type TAccountStatus, type TAcccountRole, type TGender } from '@/constants';

export const AUTH_STATE_KEY = 'authState';

export interface IAuthState {
  account?: {
    id: number;
    email: string;
    provider: 'KAKAO' | 'APPLE';
    profile_image: string | null;
    name: string | null;
    age: number | null;
    phone: string | null;
    gender: TGender | null;
    birthday: string | null;
    role: TAcccountRole | null;
    status: TAccountStatus;
  };
  accessToken?: string;
  refreshToken?: string;
}

const initialState: IAuthState = {
  account: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

export const useAuthStore = create<TStore<IAuthState>>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setState: (key, value) =>
          set(
            produce(get(), (draft: IAuthState) => {
              if (key === 'accessToken' || key === 'refreshToken') {
                if (value) {
                  setAccessToken(value as string);
                }
              }

              draft[key] = value;
            }),
          ),
        initState: () => set({ ...initialState }),
      }),
      {
        name: 'useAuthStore',
        partialize: ({ account, accessToken, refreshToken }: TStore<IAuthState>) => {
          if (accessToken) setAccessToken(accessToken);
          return {
            account,
            accessToken,
            refreshToken,
          };
        },
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
