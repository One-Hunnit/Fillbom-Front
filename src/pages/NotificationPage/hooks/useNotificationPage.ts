import { useGetQuery } from '@/api/hooks';

const useNotificationPage = () => {
  const { data: notifications, isLoading } = useGetQuery('/notifications', {
    params: {
      query: {
        pageNumber: 0,
        pageSize: 100,
      },
    },
  });
  console.log(notifications);
  return {
    notifications: notifications?.data?.data?.content ?? [],
    isLoading,
  };
};

export default useNotificationPage;
