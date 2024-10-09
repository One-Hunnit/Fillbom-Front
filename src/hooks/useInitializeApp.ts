import { useFonts } from 'expo-font';

export default function useInitializeApp() {
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
  const loaded = assetsLoaded;
  const error = loadAssetError;

  return [loaded, error];
}
