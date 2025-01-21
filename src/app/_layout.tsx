import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Loading from '@/components/Loading';
import useInitializeApp from '@/hooks/useInitializeApp';
import { useUIStore } from '@/stores/ui';

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default () => {
  const [loaded, error] = useInitializeApp();
  const { loading } = useUIStore();

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
        {loading && <Loading fullScreen />}
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
