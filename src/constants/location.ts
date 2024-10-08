import * as Location from 'expo-location';

export const LOCATION_TRACKING_TASK = 'location-tracking';

export const BACKGROUND_SETTING = {
  accuracy: Location.Accuracy.High,
  timeInterval: 1000,
  distanceInterval: 50,
  showsBackgroundLocationIndicator: true,
  foregroundService: {
    notificationTitle: 'Background Location Tracking',
    notificationBody: 'Your location is being tracked in the background',
  },
};

export const FOREGROUND_SETTING = {
  accuracy: Location.Accuracy.High,
  timeInterval: 1000,
  distanceInterval: 0,
};
