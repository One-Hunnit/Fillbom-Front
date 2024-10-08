import { NaverMapMarkerOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import currentLocationIcon from '@/assets/images/png/currentLocationIcon.png';
import { backgroundLocationTraking } from './(locationUtils)/backgroundLocationTraking';
import { defineLocationTrackingTask } from './(locationUtils)/defineLocationTrackingTask';
import { foreGroundLocationTraking } from './(locationUtils)/foreGroundLocationTraking';
import { requestLocationPermissions } from './(locationUtils)/requestLocationPermissions';
interface LocationCoords {
  latitude: number;
  longitude: number;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Coordinates {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}
export default function Home() {
  const [locationCoords, setLocationCoords] = useState<LocationCoords>({
    latitude: 37.6540767,
    longitude: 127.0566033,
  });
  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermissions();
      if (!hasPermission) return;
      defineLocationTrackingTask();
      const location: Coordinates = await foreGroundLocationTraking();
      setLocationCoords({ latitude: location.latitude, longitude: location.longitude });
      await backgroundLocationTraking();
    })();
  }, []);
  return (
    <View style={styles.container}>
      <NaverMapView
        initialRegion={{
          latitude: locationCoords.latitude,
          longitude: locationCoords.longitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0022,
        }}
        isShowScaleBar={false}
        isShowZoomControls={false}
        style={styles.mapContainer}
      >
        <NaverMapMarkerOverlay
          latitude={locationCoords.latitude}
          longitude={locationCoords.longitude}
          anchor={{ x: 0.5, y: 1 }}
          width={40}
          height={40}
          image={currentLocationIcon}
        ></NaverMapMarkerOverlay>
      </NaverMapView>
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
