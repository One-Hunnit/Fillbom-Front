import { useGetQuery } from '@/api/hooks';

const useNotificationPage = () => {
  const { data: notifications, isLoading } = useGetQuery('/notification/all');

  return {
    notifications: notifications?.data?.data ?? [],
    isLoading,
  };
};

export default useNotificationPage;
