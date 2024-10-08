import { useEffect } from 'react';
import { backgroundLocationTraking } from '@/utils/location/backgroundLocationTraking';
import { defineLocationTrackingTask } from '@/utils/location/defineLocationTrackingTask';
import { foreGroundLocationTraking } from '@/utils/location/foreGroundLocationTraking';
import { requestLocationPermissions } from '@/utils/location/requestLocationPermissions';

const useLocationTracking = () => {
  useEffect(() => {
    const startLocationTracking = async () => {
      const hasPermission = await requestLocationPermissions();
      if (!hasPermission) return;
      defineLocationTrackingTask();
      await foreGroundLocationTraking();
      await backgroundLocationTraking();
    };

    startLocationTracking();
  }, []);
};

export default useLocationTracking;
