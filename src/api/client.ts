import AsyncStorage from '@react-native-async-storage/async-storage';
import createClient, { type Middleware } from 'openapi-fetch';
import { type IAuthState } from '@/stores/authStore';
import { type paths } from './types';

let accessToken: string | null = null;

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    if (!accessToken) {
      const auth = (await AsyncStorage.getItem('useAuthStore')) as IAuthState | null;
      if (auth?.accessToken) {
        accessToken = auth.accessToken;
      } else if (auth?.refreshToken) {
        // @TODO 추후 여기서 리프레시 처리
      }
    }

    if (accessToken) {
      request.headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return request;
  },
};

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const client = createClient<paths>({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

client.use(authMiddleware);
