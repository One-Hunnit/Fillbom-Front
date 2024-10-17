import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { styles } from './styles';

const AddPatientPage = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
      <Header backButtonVisible={true} containerStyle={styles.headerContainer} title="환자 추가하기" />
    </SafeAreaView>
  );
};

export default AddPatientPage;
