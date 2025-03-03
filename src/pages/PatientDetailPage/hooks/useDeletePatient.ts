import { useDeleteMutation } from '@/api/hooks';

const useDeletePatient = (patientId: number) => {
  const mutation = useDeleteMutation('/caregiver/patients/{patientId}', {
    onSuccess: () => {
      console.log('환자를 삭제했습니다.');
    },
  });

  const deletePatient = () => {
    mutation.mutate({
      params: {
        path: {
          patientId: patientId,
        },
      },
    });
  };

  return { deletePatient };
};
export default useDeletePatient;
