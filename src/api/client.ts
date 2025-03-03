import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import createClient, { type Middleware } from 'openapi-fetch';
import { type StorageValue } from 'zustand/middleware';
import { useAuthStore, type IAuthState } from '@/stores/authStore';
import { type paths } from './types';

let accessToken: string | null = null;
let currentPathname: string = '';
const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const auth = JSON.parse((await AsyncStorage.getItem('useAuthStore')) ?? '') as StorageValue<IAuthState>;
    if (!accessToken) {
      if (auth?.state.accessToken) {
        accessToken = auth.state.accessToken;
      } else if (auth?.state.refreshToken) {
        // @TODO 추후 여기서 리프레시 처리
      }
    }

    if (accessToken) {
      request.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return request;
  },
  async onResponse({ response }) {
    if (response.status === 401) {
      if (currentPathname !== '/refresh') {
        useAuthStore.getState().setState('accessToken', undefined);
        router.replace('/refresh');
      }
    }
    return response;
  },
};

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const setHeaderAccessTokenNull = () => {
  accessToken = null;
};

export const setCurrentPathname = (pathname: string) => {
  currentPathname = pathname;
};

export const client = createClient<paths>({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

client.use(authMiddleware);
