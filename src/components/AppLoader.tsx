import AsyncStorage from '@react-native-async-storage/async-storage';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/stores/authStore';

export function AppLoader({ children }: { children: React.ReactNode }) {
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(true);

  const loadAssetsAsync = async () => {
    try {
      const imageAssets = await Asset.loadAsync([
        require('../assets/fonts/AppleSDGothicNeoB.ttf'),
        require('../assets/fonts/AppleSDGothicNeoEB.ttf'),
        require('../assets/fonts/AppleSDGothicNeoH.ttf'),
        require('../assets/fonts/AppleSDGothicNeoL.ttf'),
        require('../assets/fonts/AppleSDGothicNeoM.ttf'),
        require('../assets/fonts/AppleSDGothicNeoR.ttf'),
        require('../assets/fonts/AppleSDGothicNeoSB.ttf'),
        require('../assets/fonts/AppleSDGothicNeoT.ttf'),
        require('../assets/fonts/AppleSDGothicNeoUL.ttf'),
      ]);
      return imageAssets;
    } catch (error) {
      console.error('Error loading assets:', error);
    }
  };
  useEffect(() => {
    const loadUserData = async () => {
      const savedUser = await AsyncStorage.getItem('userState');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      await loadAssetsAsync();
      setLoading(false);
    };

    loadUserData();
  }, [setUser]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return <>{children}</>;
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
