import { useState } from 'react';
import { client } from '@/api/client';
import { type IPatientInfo } from '@/types/patient';

export default function useSearchPatient() {
  const [patientList, setPatientList] = useState<IPatientInfo[] | null>(null);

  const postSearchPatient = async (phoneNumber: string) => {
    console.log('phine');
    const { data } = await client.POST('/patients/search', { body: { phoneNumber } });
    console.log(data);
    if (data?.data && data.data.length > 0) {
      setPatientList(data.data as IPatientInfo[]);
    } else {
      /** 삭제 */
      setPatientList([
        {
          name: '김필봄1',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄2',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄3',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄4',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄5',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄6',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄7',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄8',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
        {
          name: '김필봄9',
          phoneNumber: '01012345678',
          profileImageUrl: 'https://fillbom.s3.ap-northeast-2.amazonaws.com/1619822389000.png',
        },
      ]);
    }
  };

  return { postFindPatient: postSearchPatient, patientList };
}
