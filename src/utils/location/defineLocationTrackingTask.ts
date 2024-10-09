import * as TaskManager from 'expo-task-manager';
import type { ILocationEvent } from '@/\btypes';

const LOCATION_TRACKING_TASK = 'location-tracking';

interface LocationData {
  locations: ILocationEvent[];
}
interface CustomTaskManagerError extends TaskManager.TaskManagerError {
  name?: string;
}

export const defineLocationTrackingTask = () => {
  TaskManager.defineTask(
    LOCATION_TRACKING_TASK,
    ({ data, error }: { data: LocationData | undefined; error: CustomTaskManagerError | null }) => {
      console.log('데이터', data);
      if (error) {
        console.error('위치 추적 오류:', error);
        return;
      }
      if (data?.locations?.length) {
        const location = data.locations;
        console.log('새로운 위치는:', location);
      } else {
        console.log('위치 데이터를 받지 못했습니다. 다시 시도하세요.');
      }
    },
  );
};
