import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { match } from 'ts-pattern';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
import NoPatients from './components/NoPatients';
import PatientCardAccepted from './components/PatientCardAccepted';
import PatientCardPending from './components/PatientCardPending';
import { patientCardStyles, styles } from './styles';
import { PatientStatus, type IPatient } from './types';

const PatientListPage = () => {
  const patients: IPatient[] = [
    {
      id: '1',
      name: '홍길동',
      birth: '1990-01-01',
      relation: '아들',
      status: PatientStatus.ACCEPTED,
    },
    {
      id: '2',
      name: '홍길순',
      birth: '1992-02-02',
      relation: '딸',
      status: PatientStatus.PENDING,
    },
    {
      id: '1',
      name: '홍길동',
      birth: '1990-01-01',
      relation: '아들',
      status: PatientStatus.ACCEPTED,
    },
    {
      id: '2',
      name: '홍길순',
      birth: '1992-02-02',
      relation: '딸',
      status: PatientStatus.PENDING,
    },
    {
      id: '1',
      name: '홍길동',
      birth: '1990-01-01',
      relation: '아들',
      status: PatientStatus.ACCEPTED,
    },
    {
      id: '2',
      name: '홍길순',
      birth: '1992-02-02',
      relation: '딸',
      status: PatientStatus.PENDING,
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
      <Header containerStyle={styles.headerContainer} title="환자 관리" />
      <View style={styles.container}>
        {patients.length === 0 ? (
          <NoPatients />
        ) : (
          <ScrollView style={patientCardStyles.scrollViewStyle}>
            {patients.map((patient, index) => (
              <View style={styles.listWrapper}>
                {match(patient.status)
                  .with(PatientStatus.PENDING, () => <PatientCardPending key={index} patient={patient} />)
                  .with(PatientStatus.ACCEPTED, () => <PatientCardAccepted key={index} patient={patient} />)
                  .exhaustive()}
              </View>
            ))}
          </ScrollView>
        )}
        <View style={styles.buttonWrapper}>
          <Button
            text="환자 추가하기"
            defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
            defaultTextColor={FILLBOM_COLOR.GRAY[100]}
            pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
            pressedTextColor={FILLBOM_COLOR.BLUE[200]}
            pressedIconColor={FILLBOM_COLOR.GRAY[700]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PatientListPage;
