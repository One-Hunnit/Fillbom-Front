import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Loading from '@/components/Loading';
import useInitializeApp from '@/hooks/useInitializeApp';

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default () => {
  const [loaded, error] = useInitializeApp();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
