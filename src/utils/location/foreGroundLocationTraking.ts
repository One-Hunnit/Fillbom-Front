import * as Location from 'expo-location';
import { type ICoordinates } from '@/types/location';

export const foreGroundLocationTraking = async (): Promise<ICoordinates> => {
  return new Promise<ICoordinates>((resolve, reject) => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 0,
      },
      (location) => {
        const coords: ICoordinates = {
          ...location.coords,
          accuracy: location.coords.accuracy ?? 0,
        };
        console.log('foreground', coords);
        resolve(coords);
      },
    ).catch(reject);
  });
};
