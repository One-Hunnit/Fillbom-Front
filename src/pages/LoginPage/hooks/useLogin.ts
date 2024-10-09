import { useRouter } from 'expo-router';
import { useSetRecoilState } from 'recoil';
import { authState } from '@/stores/authStore';
import { mockAccountData, mockAuthData } from '../constants';

export default function useLogin() {
  const setAuth = useSetRecoilState(authState);
  const router = useRouter();

  const handleLogin = () => {
    setAuth({ account: mockAccountData, ...mockAuthData });
    router.replace('/');
  };

  return {
    handleLogin,
  };
}
