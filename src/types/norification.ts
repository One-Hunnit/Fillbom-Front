import { type TValues } from './util';

export interface INotification {
  id: number;
  title: string;
  type: TNotificationType;
  senderId: number | null;
  senderProfileImage?: string | null;
  receiverId: number;
  isRead: boolean;
  body: string;
  createdAt: string;
}

const NOTIFICATION_TYPE = {
  RELATIONSHIP_RESPONSE: 'RELATIONSHIP_RESPONSE',
  RELATIONSHIP_REQUEST: 'RELATIONSHIP_REQUEST',
  SCHEDULE_REMINDER: 'SCHEDULE_REMINDER',
  DIARY_CREATED: 'DIARY_CREATED',
  MEDICATION_REMINDER: 'MEDICATION_REMINDER',
  RELEASED: 'RELEASED',
  ETC: 'ETC',
};

type TNotificationType = TValues<typeof NOTIFICATION_TYPE>;
