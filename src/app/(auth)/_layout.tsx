import { Redirect, Stack } from 'expo-router';
import Loading from '@/components/Loading';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';
import useAccount from '@/hooks/useAccount';

export default () => {
  const { account, isLoading } = useAccount();

  if (isLoading) {
    return <Loading />;
  }

  if (!account) {
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
