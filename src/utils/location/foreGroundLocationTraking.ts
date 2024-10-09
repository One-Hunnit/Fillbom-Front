import * as Location from 'expo-location';
import { FOREGROUND_SETTING } from '@/constants/location';

export const foreGroundLocationTraking = async () => {
  await Location.watchPositionAsync(FOREGROUND_SETTING, (location) => {
    console.log('foreground', location.coords);
  });
};
