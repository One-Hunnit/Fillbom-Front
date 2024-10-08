import * as Location from 'expo-location';

const LOCATION_TRACKING_TASK = 'location-tracking';

export const backgroundLocationTraking = async () => {
  await Location.startLocationUpdatesAsync(LOCATION_TRACKING_TASK, {
    accuracy: Location.Accuracy.High,
    timeInterval: 1000,
    distanceInterval: 50,
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: 'Background Location Tracking',
      notificationBody: 'Your location is being tracked in the background',
    },
  });
};
