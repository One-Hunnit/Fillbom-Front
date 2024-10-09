import * as Location from 'expo-location';
import { BACKGROUND_SETTING, LOCATION_TRACKING_TASK } from '@/constants/location';

export const backgroundLocationTraking = async () => {
  await Location.startLocationUpdatesAsync(LOCATION_TRACKING_TASK, BACKGROUND_SETTING);
};
