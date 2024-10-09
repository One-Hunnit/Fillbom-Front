import { useEffect, useState } from 'react';
import { backgroundLocationTraking } from '@/utils/location/backgroundLocationTraking';
import { defineLocationTrackingTask } from '@/utils/location/defineLocationTrackingTask';
import { foreGroundLocationTraking } from '@/utils/location/foreGroundLocationTraking';
import { requestLocationPermissions } from '@/utils/location/requestLocationPermissions';

interface LocationCoords {
  latitude: number;
  longitude: number;
}

const useLocationTracking = () => {
  const [locationCoords, setLocationCoords] = useState<LocationCoords>({
    latitude: 37.6540767,
    longitude: 127.0566033,
  });

  useEffect(() => {
    const startLocationTracking = async () => {
      const hasPermission = await requestLocationPermissions();
      if (!hasPermission) return;
      defineLocationTrackingTask();
      const location = await foreGroundLocationTraking();
      setLocationCoords({ latitude: location.latitude, longitude: location.longitude });
      await backgroundLocationTraking();
    };

    startLocationTracking();
  }, []);

  return locationCoords;
};

export default useLocationTracking;
