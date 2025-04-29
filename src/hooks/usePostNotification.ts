import { client } from '@/api/client';
import type { paths } from '@/api/types';

export const postNotification = async (
  payload: paths['/notifications']['post']['requestBody']['content']['application/json'],
) => {
  try {
    const response = await client.POST('/notifications', {
      body: payload,
    });
    console.log('알림 보내기 성공', response);
    return response.data;
  } catch (error) {
    console.error('Failed to send notification:', error);
    throw error;
  }
};
