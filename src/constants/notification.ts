import { type TValues } from '@/types/util';

export const NOTIFICATION_TYPE = {
  RELATIONSHIP_RESPONSE: 'relationship_response',
  RELATIONSHIP_REQUEST: 'relationship_request',
  SCHEDULE_REMINDER: 'schedule_reminder',
  DIARY_CREATED: 'diary_created',
  MEDICATION_REMINDER: 'medication_reminder',
  RELEASED: 'released',
  ETC: 'etc',
};

export type TNotificationType = TValues<typeof NOTIFICATION_TYPE>;
