import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
import NoPatients from './components/NoPatients';
import PatientCardPending from './components/PatientCardPending';
import { styles } from './styles';
import { type IPatient } from './types';

const PatientListPage = () => {
  const patients: IPatient[] = [
    {
      id: '1',
      name: '홍길동',
      birth: '1990-01-01',
      relation: '아들',
    },
    {
      id: '2',
      name: '홍길순',
      birth: '1992-02-02',
      relation: '딸',
    },
    {
      id: '3',
      name: '홍길숙',
      birth: '1994-03-03',
      relation: '어머니',
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
      <Header containerStyle={styles.headerContainer} title="환자 관리" />
      <View style={styles.container}>
        {patients.length === 0 ? (
          <NoPatients />
        ) : (
          patients.map((patient, index) => <PatientCardPending key={index} patient={patient} />)
        )}
        <Text>환자 관리 페이지</Text>
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
