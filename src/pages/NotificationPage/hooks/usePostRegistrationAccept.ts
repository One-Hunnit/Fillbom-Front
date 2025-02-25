import { usePostMutation } from '@/api/hooks';

const usePostRegistrationAccept = () => {
  const { mutate, isPending, isError, data } = usePostMutation(
    '/patients/registration/caregivers/{caregiverId}/accept',
    {
      onSuccess: (response) => {
        console.log('Success:', response);
        alert('요청이 성공적으로 처리되었습니다.');
      },
      onError: (error) => {
        console.error('Error:', error);
        alert('요청을 처리하는 동안 오류가 발생했습니다.');
      },
    },
  );

  const handleAcceptCaregiver = (caregiverId: number, status: 'ACCEPT' | 'REJECT') => {
    mutate({
      params: {
        path: { caregiverId },
        query: {
          status,
        },
      },
    });
  };
  return { isPending, isError, data, handleAcceptCaregiver };
};

export default usePostRegistrationAccept;
