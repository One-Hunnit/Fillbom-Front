import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { registerDeviceToken } from '@/api/notification';
import { useAuthStore } from '@/stores/authStore';
import { getFCMToken, onTokenRefresh, requestUserPermission } from '@/utils/firebase';

export default function useInitializeApp() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { setDeviceToken } = useAuthStore();

  useEffect(() => {
    async function initialize() {
      try {
        // FCM 권한 요청
        await requestUserPermission();

        // FCM 토큰 가져오기 및 서버에 등록
        const token = await getFCMToken();
        if (token) {
          setDeviceToken(token);
          await registerDeviceToken(token);
        }

        // 토큰 새로고침 리스너 등록
        onTokenRefresh(async (newToken) => {
          setDeviceToken(newToken);
          await registerDeviceToken(newToken);
        });

        setLoaded(true);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error(String(e)));
        }
      }
    }

    initialize();
  }, [setDeviceToken]);

  const [assetsLoaded, loadAssetError] = useFonts({
    PretendardBlack: require('../assets/fonts/Pretendard-Black.otf'),
    PretendardBold: require('../assets/fonts/Pretendard-Bold.otf'),
    PretendardExtraBold: require('../assets/fonts/Pretendard-ExtraBold.otf'),
    PretendardExtraLight: require('../assets/fonts/Pretendard-ExtraLight.otf'),
    PretendardLight: require('../assets/fonts/Pretendard-Light.otf'),
    PretendardMedium: require('../assets/fonts/Pretendard-Medium.otf'),
    PretendardRegular: require('../assets/fonts/Pretendard-Regular.otf'),
    PretendardSemiBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    PretendardThin: require('../assets/fonts/Pretendard-Thin.otf'),
  });

  // @TODO 추후 GA, Sentry 등 초기화 로직 추가
  const loadedAssets = assetsLoaded;
  const errorAssets = loadAssetError;

  return [loaded, error] as const;
}
