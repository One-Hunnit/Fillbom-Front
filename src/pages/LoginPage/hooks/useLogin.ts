import { login } from '@react-native-seoul/kakao-login';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { client } from '@/api/client';
import { authState, type IAuth } from '@/stores/authStore';
import { mockAccountData, mockAuthData } from '../constants';

export default function useLogin() {
  const [auth, setAuth] = useRecoilState(authState);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setAuth({ account: mockAccountData, ...mockAuthData });
    router.replace('/');
  };

  const signInWithKakao = async () => {
    try {
      const { idToken } = await login();
      if (idToken) {
        const res = (await client.GET('/oauth/kakao', { body: { idToken } })).data;
        if (res?.data) {
          const { accessToken, refreshToken } = res.data;
          setAuth({ accessToken: accessToken!, refreshToken: refreshToken! });
        }
        const { data } = await client.GET('/accounts/me');
        if (data?.data && auth) {
          setAuth({ ...auth, account: data.data as unknown as IAuth['account'] });
        }
        router.replace('/');
      } else {
        console.log('토큰이 없습니다.');
      }
    } catch (err) {
      console.log(err);
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
