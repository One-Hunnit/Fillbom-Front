import { useQueryClient } from '@tanstack/react-query';
import { useGetQuery } from '@/api/hooks';
import { useAuthStore } from '@/stores/authStore';
import { type IAccount } from '@/types/account';

const useAccount = () => {
  const { accessToken } = useAuthStore();
  const {
    isLoading,
    data: account,
    queryKey: accountQueryKey,
    refetch,
  } = useGetQuery('/accounts/me', { rq: { enabled: !!accessToken } });

  const queryClient = useQueryClient();

  const reset = () => {
    queryClient.resetQueries({ queryKey: accountQueryKey });
  };

  return {
    isLoading,
    account: account?.data as IAccount | undefined,
    accountQueryKey,
    reset,
    refetch,
  };
};

export default useAccount;
