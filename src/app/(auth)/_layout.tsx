import { Redirect, Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';
import { authState } from '@/stores/authStore';

export default () => {
  const auth = useRecoilValue(authState);

  if (!auth) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: ROOT_BACKGROUND_COLOR } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="patient" />
      <Stack.Screen name="caregiver" />
    </Stack>
  );
};
