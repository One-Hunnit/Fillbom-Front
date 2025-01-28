import analytics, { type FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';
import Constants from 'expo-constants';

let analyticsInstance: FirebaseAnalyticsTypes.Module | null = null;

if (Constants.expoConfig?.extra?.isProduction) {
  analyticsInstance = analytics();
}

export const logEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (analyticsInstance) {
    analyticsInstance.logEvent(eventName, params);
  } else {
    console.log(`[LOG] ${eventName}`, params);
  }
};
