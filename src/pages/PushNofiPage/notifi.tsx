import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
import NoPatients from '../PatientListPage/components/NoPatients';
import PatientCardAccepted from '../PatientListPage/components/PatientCardAccepted';
import PatientCardPending from '../PatientListPage/components/PatientCardPending';
import useGetPatientList from '../PatientListPage/hooks/useGetPatientList';
import { patientCardStyles, styles } from '../PatientListPage/styles';

const pushNofiPage = () => {
  const result = useGetPatientList();
  const data = result?.data;

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
      <Header containerStyle={styles.headerContainer} title="환자 관리" />
      <View style={styles.container}>
        {data.length === 0 ? (
          <NoPatients />
        ) : (
          <ScrollView style={patientCardStyles.scrollViewStyle}>
            <View style={styles.listWrapper}>
              {data.map((patient, index) => (
                <View key={index} style={styles.cardWrapper}>
                  {patient.accepted ? (
                    <PatientCardAccepted key={index} patient={patient} />
                  ) : (
                    <PatientCardPending key={index} patient={patient} />
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        )}
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => {
              router.push('/(auth)/caregiver/addPatient');
            }}
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

export default pushNofiPage;
