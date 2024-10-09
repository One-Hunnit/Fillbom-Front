import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AtomEffect } from 'recoil';

export function persistAtom<T>(key: string): AtomEffect<T> {
  return ({ setSelf, onSet, trigger }) => {
    const loadPersisted = async () => {
      const savedValue = await AsyncStorage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    if (trigger === 'get') {
      loadPersisted();
    }

    onSet((newValue, _, isReset) => {
      isReset ? AsyncStorage.removeItem(key) : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
}
