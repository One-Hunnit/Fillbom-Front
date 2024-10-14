import AsyncStorage from '@react-native-async-storage/async-storage';
import createClient, { type Middleware } from 'openapi-fetch';
import { AUTH_STATE_KEY, type IAuth } from '@/stores/authStore';
import { type paths } from './types';

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const auth = (await AsyncStorage.getItem(AUTH_STATE_KEY)) as IAuth | null;
    auth && request.headers.set('Authorization', `Bearer ${auth.accessToken}`);
    return request;
  },
};

export const client = createClient<paths>({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

client.use(authMiddleware);
