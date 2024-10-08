import * as Location from 'expo-location';

export const foreGroundLocationTraking = async () => {
  await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 1000,
      distanceInterval: 0,
    },
    (location) => {
      console.log('foreground', location.coords);
    },
  );
};
