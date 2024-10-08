import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { backgroundLocationTraking } from './(locationUtils)/backgroundLocationTraking';
import { defineLocationTrackingTask } from './(locationUtils)/defineLocationTrackingTask';
import { foreGroundLocationTraking } from './(locationUtils)/foreGroundLocationTraking';
import { requestLocationPermissions } from './(locationUtils)/requestLocationPermissions';

export default function Home() {
  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermissions();
      if (!hasPermission) return;
      defineLocationTrackingTask();
      await foreGroundLocationTraking();
      await backgroundLocationTraking();
    })();
  }, []);
  return (
    <View style={styles.container}>
      <NaverMapView style={styles.mapContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});
