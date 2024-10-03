import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface User {
  id: string;
  name: string;
}
const { persistAtom } = recoilPersist({
  key: 'persist-atom-key',
  storage: localStorage,
});
export const userState = atom<User | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
