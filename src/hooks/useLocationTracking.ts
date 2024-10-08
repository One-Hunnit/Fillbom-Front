import { useEffect } from 'react';
import { backgroundLocationTraking } from '@/app/(tabs)/(locationUtils)/backgroundLocationTraking';
import { defineLocationTrackingTask } from '@/app/(tabs)/(locationUtils)/defineLocationTrackingTask';
import { foreGroundLocationTraking } from '@/app/(tabs)/(locationUtils)/foreGroundLocationTraking';
import { requestLocationPermissions } from '@/app/(tabs)/(locationUtils)/requestLocationPermissions';

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
