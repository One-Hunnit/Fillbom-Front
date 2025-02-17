import { useMutation } from '@tanstack/react-query';
import { client } from '@/api/client';

const registerPatient = async (patientId: number, relationship: string) => {
  const { data, error } = await client.POST('/caregiver/registration/patients/{patientId}', {
    params: { path: { patientId } },
    body: { relationship },
  });

  if (error) {
    throw new Error(error?.message || '환자 등록 실패');
  }

  return data;
};

export const useRegisterPatient = () => {
  return useMutation({
    mutationFn: ({ patientId, relationship }: { patientId: number; relationship: string }) =>
      registerPatient(patientId, relationship),
  });
};
