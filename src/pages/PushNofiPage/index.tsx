import { SafeAreaView } from 'react-native-safe-area-context';
import useGetPatientList from '../PatientListPage/hooks/useGetPatientList';
import { styles } from '../PatientListPage/styles';

const list = () => {
  const result = useGetPatientList();
  return <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}></SafeAreaView>;
};

export default list;
