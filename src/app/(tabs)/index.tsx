import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <Text>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
