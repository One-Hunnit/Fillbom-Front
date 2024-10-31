import { produce } from 'immer';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { type TStore } from '@/types/store';

export const AUTH_STATE_KEY = 'authState';

export interface IUIState {
  loading: boolean;
}

const initialState: IUIState = {
  loading: false,
};

export const useUIStore = create<TStore<IUIState>>()(
  devtools((set, get) => ({
    ...initialState,
    setState: (key, value) =>
      set(
        produce(get(), (draft: IUIState) => {
          draft[key] = value;
        }),
      ),
    initState: () => set({ ...initialState }),
  })),
);
