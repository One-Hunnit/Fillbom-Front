import { Redirect, Stack } from 'expo-router';
import { useRecoilValue } from 'recoil';
import { ROOT_BACKGROUND_COLOR } from '@/constants/ui';
import { authState } from '@/stores/authStore';

export default () => {
  const auth = useRecoilValue(authState);

  if (auth) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: ROOT_BACKGROUND_COLOR } }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="refresh" />
    </Stack>
  );
};
