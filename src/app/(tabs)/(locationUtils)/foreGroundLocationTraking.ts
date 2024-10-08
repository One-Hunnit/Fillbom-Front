import * as Location from 'expo-location';

interface Coordinates {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

export const foreGroundLocationTraking = async (): Promise<Coordinates> => {
  return new Promise<Coordinates>((resolve, reject) => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 0,
      },
      (location) => {
        const coords: Coordinates = location.coords;
        console.log('foreground', coords);
        resolve(coords);
      },
    ).catch(reject);
  });
};
