import * as Location from 'expo-location';
export const requestLocationPermissions = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('위치 권한이 필요합니다!');
    return false;
  }

  const { status: bgStatus } = await Location.requestBackgroundPermissionsAsync();
  if (bgStatus !== 'granted') {
    alert('백그라운드 위치 권한이 필요합니다!');
    return false;
  }

  return true;
};
