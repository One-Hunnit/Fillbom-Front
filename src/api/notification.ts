import { client } from './client';

export const registerDeviceToken = async (deviceToken: string) => {
  try {
    const response = await client.POST('/notifications/device-token', {
      body: {
        deviceToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
