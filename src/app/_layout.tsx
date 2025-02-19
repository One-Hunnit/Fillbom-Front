import * as Sentry from '@sentry/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, SplashScreen, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { setCurrentPathname } from '@/api/client';
import Loading from '@/components/Loading';
import useInitializeApp from '@/hooks/useInitializeApp';
import { useUIStore } from '@/stores/ui';

Sentry.init({
  dsn: 'https://8c5970fe203209588ed807d99cc63a2a@o4508675532521472.ingest.us.sentry.io/4508675542679552',
});

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default () => {
  const [loaded, error] = useInitializeApp();
  const { loading } = useUIStore();
  const pathName = usePathname();

  useEffect(() => {
    setCurrentPathname(pathName);
  }, [pathName]);

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
