import * as TaskManager from 'expo-task-manager';
import { type ILocationEvent } from '@/types/location';

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
      if (error) {
        return;
      }
      if (data?.locations?.length) {
        // const location = data.locations;
      } else {
      }
    },
  );
};
