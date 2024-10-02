import { atom } from 'recoil';

interface User {
  id: string;
  name: string;
}
export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
