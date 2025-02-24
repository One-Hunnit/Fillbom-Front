import { router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { client, setAccessToken } from '@/api/client';
import Loading from '@/components/Loading';
import { useAuthStore } from '@/stores/authStore';
import { styles } from './styles';

const RefreshPage = () => {
  const { initState, refreshToken, setState } = useAuthStore();

  const refresh = async () => {
    try {
      if (!refreshToken) {
        throw new Error('refreshToken is not found');
      }
      setAccessToken(null);
      const data = (await client.POST('/oauth/refresh-token', { body: { refreshToken: refreshToken! } })).data;
      if (data?.data) {
        setState('accessToken', data.data.accessToken);
        setState('refreshToken', data.data.refreshToken);
      }
    } catch (error) {
      initState();
      router.replace('/login');
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
};

export default RefreshPage;
