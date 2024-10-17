import { type TAcccountRole, type TAccountStatus, type TGender } from '@/constants';

export interface IAccount {
  id: number;
  email: string;
  provider: 'KAKAO' | 'APPLE';
  profile_image: string | null;
  name: string | null;
  age: number | null;
  phone: string | null;
  gender: TGender | null;
  birthday: string | null;
  role: TAcccountRole | null;
  status: TAccountStatus;
}
