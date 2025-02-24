import { useGetQuery } from '@/api/hooks';

const useGetPatientList = () => {
  const { data, isLoading } = useGetQuery('/caregiver/patients/list');
  const response = data?.data?.data;
  if (response) {
    return { data: response, isLoading };
  }
};

export default useGetPatientList;
