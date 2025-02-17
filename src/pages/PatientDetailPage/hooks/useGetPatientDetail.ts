import { useGetQuery } from '@/api/hooks';

const useGetPatientDetail = (patientId: number) => {
  const { data, isLoading, error, isError } = useGetQuery('/patients/{patientId}', {
    params: {
      path: {
        patientId: patientId,
      },
    },
  });

  return { data, isLoading, error, isError };
};

export default useGetPatientDetail;
