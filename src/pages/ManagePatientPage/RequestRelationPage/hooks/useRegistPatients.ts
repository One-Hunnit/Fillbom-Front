import { client } from '@/api/client';

const useRegistPatients = async (patientId: number) => {
  const { data } = await client.POST(`/caregiver/registration/patients/{patientId}`, {
    params: {
      path: {
        patientId,
      },
    },
    body: {},
  });
  console.log(data);
  return data?.data;
};
export default useRegistPatients;
