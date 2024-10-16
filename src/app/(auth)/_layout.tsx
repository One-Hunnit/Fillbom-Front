import { Redirect, Stack, usePathname } from 'expo-router';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';
import useAccount from '@/hooks/useAccount';

export default () => {
  const { account } = useAccount();
  const pathname = usePathname();

  if (!account) {
    return <Redirect href="/login" />;
  } else if (account.status === 'SIGNUP_PENDING') {
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
