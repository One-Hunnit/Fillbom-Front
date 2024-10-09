import { type IAuth } from '@/stores/authStore';

// @TODO 추후 로그인 API 연동
export const mockAuthData: Pick<IAuth, 'accessToken' | 'refreshToken'> = {
  accessToken: 'access',
  refreshToken: 'refresh',
};
export const mockAccountData: IAuth['account'] = {
  id: '1',
  name: 'test',
  role: 'patient',
  email: 'sjsjsj1246@gmail.com',
  profileImage: 'https://avatars.githubusercontent.com/u/24623403?v=4',
  status: 'SIGNUP_PENDING',
};
