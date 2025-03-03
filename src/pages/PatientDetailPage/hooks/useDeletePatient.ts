import { useDeleteMutation } from '@/api/hooks';

const useDeletePatient = (patientId: number) => {
  const mutation = useDeleteMutation('/caregiver/patients/{patientId}');

  const deletePatient = async () => {
    try {
      mutation.mutate({
        params: {
          path: {
            patientId: patientId,
          },
        },
      });
      return { isSuccess: true, isError: false, error: null };
    } catch (e) {
      return { isSuccess: false, error: e };
    }
  };

  return {
    deletePatient,
    isLoading: mutation.isPending,
  };
};
export default useDeletePatient;
