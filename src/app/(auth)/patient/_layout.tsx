import { Stack } from 'expo-router';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';

export default () => (
  <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: ROOT_BACKGROUND_COLOR } }}>
    <Stack.Screen name="(tabs)" />
  </Stack>
);
