import analytics, { type FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';
import messaging, { type FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import Constants from 'expo-constants';

let analyticsInstance: FirebaseAnalyticsTypes.Module | null = null;
let messagingInstance: FirebaseMessagingTypes.Module | null = null;

// 개발 환경에서도 FCM 사용
messagingInstance = messaging();

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

// FCM 권한 요청
export const requestUserPermission = async () => {
  if (!messagingInstance) {
    console.log('messagingInstance is not initialized');
    return;
  }

  const authStatus = await messagingInstance.requestPermission();
  console.log('FCM Permission Status:', authStatus);

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('FCM Permission granted');
  } else {
    console.log('FCM Permission denied');
  }
};

// FCM 토큰 가져오기
export const getFCMToken = async () => {
  if (!messagingInstance) {
    console.log('messagingInstance is not initialized');
    return null;
  }

  try {
    const token = await messagingInstance.getToken();
    console.log('FCM Token:', token);

    if (!token) {
      console.log('No FCM token received');
      return null;
    }

    return token;
  } catch (error) {
    console.error('FCM Token Error:', error);
    return null;
  }
};

// FCM 토큰 새로고침 리스너
export const onTokenRefresh = (callback: (token: string) => void) => {
  if (!messagingInstance) return () => {};

  return messagingInstance.onTokenRefresh(callback);
};

// FCM 메시지 리스너
export const onMessage = (callback: (message: FirebaseMessagingTypes.RemoteMessage) => void) => {
  if (!messagingInstance) return () => {};

  return messagingInstance.onMessage(callback);
};

// 백그라운드/종료 상태에서의 메시지 처리
export const setBackgroundMessageHandler = (
  handler: (message: FirebaseMessagingTypes.RemoteMessage) => Promise<void>,
) => {
  if (!messagingInstance) return;

  messagingInstance.setBackgroundMessageHandler(handler);
};
