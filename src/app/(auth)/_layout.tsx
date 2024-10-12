import { Redirect, Stack, usePathname } from 'expo-router';
import { useRecoilValue } from 'recoil';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';
import { authState } from '@/stores/authStore';

export default () => {
  const auth = useRecoilValue(authState);
  const pathname = usePathname();

  if (!auth) {
    return <Redirect href="/login" />;
  } else if (auth.account.status === 'SIGNUP_PENDING') {
    if (pathname !== '/signup') {
      return <Redirect href="/signup" />;
    }
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
