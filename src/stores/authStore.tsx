import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { setAccessToken } from '@/api/client';
import { type TStore } from '@/types/store';

export const AUTH_STATE_KEY = 'authState';

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
  deviceToken?: string;
}

const initialState: IAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  deviceToken: undefined,
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
        setDeviceToken: (token: string) => {
          set({ deviceToken: token });
        },
      }),
      {
        name: 'useAuthStore',
        partialize: ({ accessToken, refreshToken, deviceToken }) => ({
          accessToken,
          refreshToken,
          deviceToken,
        }),
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
