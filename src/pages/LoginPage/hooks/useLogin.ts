import { login } from '@react-native-seoul/kakao-login';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { client } from '@/api/client';
import useAccount from '@/hooks/useAccount';
import { useAuthStore } from '@/stores/authStore';

export default function useLogin() {
  const { setState, initState } = useAuthStore();
  const { refetch } = useAccount();
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const getServiceToken = async (idToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
    const { data } = await client.POST('/oauth/kakao', { body: { idToken } });
    if (data?.data) {
      const { accessToken, refreshToken } = data.data;
      setState('accessToken', accessToken);
      setState('refreshToken', refreshToken);

      return { accessToken: accessToken!, refreshToken: refreshToken! };
    } else {
      throw new Error('서비스 토큰을 가져오는데 실패했습니다.');
    }
  };

  const signInWithKakao = async () => {
    try {
      const { idToken } = await login();
      if (idToken) {
        await getServiceToken(idToken);
        await refetch();
        router.replace('/');
      }
    } catch (e) {
      console.error(e);
      initState();
      setModalVisible(true);
    }
  };

  const signInWithApple = async () => {
    try {
      const { identityToken: idToken } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (idToken) {
        await getServiceToken(idToken);
        await refetch();
        router.replace('/');
      }
    } catch (e) {
      console.error(e);
      setModalVisible(true);
    }
  };

  return {
    modalVisible,
    signInWithKakao,
    signInWithApple,
    setModalVisible,
  };
}
