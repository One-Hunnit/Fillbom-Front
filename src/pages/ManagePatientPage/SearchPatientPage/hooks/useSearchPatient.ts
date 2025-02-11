import { useState } from 'react';
import { client } from '@/api/client';
import { type IPatientInfo } from '@/types/patient';

export default function useSearchPatient() {
  const [patientList, setPatientList] = useState<IPatientInfo[] | null>(null);

  const postSearchPatient = async (phoneNumber: string) => {
    const { data } = await client.POST('/patients/search', { body: { phoneNumber } });
    if (data?.data && data.data.length > 0) {
      setPatientList(data.data as IPatientInfo[]);
    }
  };

  return { postFindPatient: postSearchPatient, patientList };
}
