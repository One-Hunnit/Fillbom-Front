import { login } from '@react-native-seoul/kakao-login';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '@/stores/authStore';
import { mockAccountData, mockAuthData } from '../constants';

export default function useLogin() {
  const setAuth = useSetRecoilState(authState);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setAuth({ account: mockAccountData, ...mockAuthData });
    router.replace('/');
  };

  const signInWithKakao = async () => {
    try {
      const token = await login();
      if (token) {
        console.log(token);
        setAuth({ account: mockAccountData, ...mockAuthData });
        router.replace('/');
      } else {
        console.log('토큰이 없습니다.');
      }
    } catch (err) {
      setModalVisible(true);
    }
  };

  const signInWithApple = async () => {
    try {
      const token = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (token) {
        console.log(token);
        setAuth({ account: mockAccountData, ...mockAuthData });
        router.replace('/');
      } else {
        console.log('토큰이 없습니다.');
      }
    } catch (err) {
      setModalVisible(true);
    }
  };

  return {
    handleLogin,
    signInWithKakao,
    signInWithApple,
    modalVisible,
    setModalVisible,
    loading,
    setLoading,
  };
}
