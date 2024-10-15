import { type TNotificationType } from '@/constants/notification';

export interface INotification {
  id: number;
  type: TNotificationType;
  senderId: number | null;
  senderProfileImage: string | null;
  receiverId: number;
  deepLink: string;
  isRead: boolean;
  content: string;
  createdAt: string;
}
