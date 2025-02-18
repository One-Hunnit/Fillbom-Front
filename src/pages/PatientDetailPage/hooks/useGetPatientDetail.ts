import { useGetQuery } from '@/api/hooks';
import { type components } from '@/api/types';

export type PatientDetailData = components['schemas']['ResponseDtoDetail']['data'];

const useGetPatientDetail = (patientId: number) => {
  const { data, isLoading, error, isError } = useGetQuery('/patients/{patientId}', {
    params: {
      path: {
        patientId: patientId,
      },
    },
  });

  const responseData = (data?.data?.data as PatientDetailData) || undefined;

  return { data: responseData, isLoading, error, isError };
};

export default useGetPatientDetail;
