import { Redirect, Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';
import { authState } from '@/stores/authStore';

export default () => {
  const auth = useRecoilValue(authState);

  if (auth) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="refresh" />
    </Stack>
  );
};
