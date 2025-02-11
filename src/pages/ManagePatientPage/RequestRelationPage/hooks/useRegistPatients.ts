import { client } from '@/api/client';

const useRegistPatients = async (patientId: number, relationship: string) => {
  const { data } = await client.POST(`/caregiver/registration/patients/{patientId}`, {
    params: {
      path: {
        patientId,
      },
    },
    body: {
      relationship: relationship,
    },
  });
  return { data: data?.data, status: data?.status };
};
export default useRegistPatients;
