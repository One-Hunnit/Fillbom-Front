import { useState } from 'react';
import { usePostMutation } from '@/api/hooks';
import { type IPatientInfo } from '@/types/patient';

interface IResPatientSearch {
  data: {
    data: IPatientInfo[];
  };
}
export default function useSearchPatient() {
  const [patientList, setPatientList] = useState<IPatientInfo[] | null>(null);
  const mutation = usePostMutation('/patients/search', {
    onSuccess: (data: unknown) => {
      const response = data as IResPatientSearch;
      const patientData = response?.data.data;
      if (patientData) {
        setPatientList(patientData);
      }
    },
    onError: (error) => {
      console.error('환자 검색 실패:', error);
    },
  });

  const postSearchPatient = (phoneNumber: string) => {
    mutation.mutate({
      body: { phoneNumber },
    });
  };

  return {
    postFindPatient: postSearchPatient,
    patientList,
    setPatientList,
    error: mutation.error,
  };
}
