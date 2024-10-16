import AsyncStorage from '@react-native-async-storage/async-storage';
import createClient, { type Middleware } from 'openapi-fetch';
import { type StorageValue } from 'zustand/middleware';
import { type IAuthState } from '@/stores/authStore';
import { type paths } from './types';

let accessToken: string | null = null;

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
  onResponse({ response }) {
    if (response.status === 401) {
      accessToken = null;
    }
    return response;
  },
};

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const client = createClient<paths>({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

client.use(authMiddleware);
