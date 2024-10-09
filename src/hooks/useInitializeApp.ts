import { useFonts } from 'expo-font';

export default function useInitializeApp() {
  const [assetsLoaded, loadAssetError] = useFonts({
    Apple100: require('../assets/fonts/AppleSDGothicNeoT.ttf'),
    Apple200: require('../assets/fonts/AppleSDGothicNeoUL.ttf'),
    Apple300: require('../assets/fonts/AppleSDGothicNeoL.ttf'),
    Apple400: require('../assets/fonts/AppleSDGothicNeoR.ttf'),
    Apple500: require('../assets/fonts/AppleSDGothicNeoM.ttf'),
    Apple600: require('../assets/fonts/AppleSDGothicNeoSB.ttf'),
    Apple700: require('../assets/fonts/AppleSDGothicNeoB.ttf'),
    Apple800: require('../assets/fonts/AppleSDGothicNeoEB.ttf'),
    Apple900: require('../assets/fonts/AppleSDGothicNeoH.ttf'),
  });

  // @TODO 추후 GA, Sentry 등 초기화 로직 추가
  const loaded = assetsLoaded;
  const error = loadAssetError;

  return [loaded, error];
}
