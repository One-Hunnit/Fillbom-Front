import { Stack } from 'expo-router';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: ROOT_BACKGROUND_COLOR } }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="refresh" />
    </Stack>
  );
};
