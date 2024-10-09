import { useRouter } from 'expo-router';
import { useSetRecoilState } from 'recoil';
import { type IAuth, authState } from '@/stores/authStore';

// @TODO 추후 로그인 API 연동
const mockAuthData: Pick<IAuth, 'accessToken' | 'refreshToken'> = { accessToken: 'access', refreshToken: 'refresh' };
const mockAccountData: IAuth['account'] = {
  id: '1',
  name: 'test',
  role: 'patient',
  email: 'sjsjsj1246@gmail.com',
  profileImage: 'https://avatars.githubusercontent.com/u/24623403?v=4',
  status: 'SIGNUP_PENDING',
};

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
