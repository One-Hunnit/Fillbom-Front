import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import Button from '@/components/Button';
import { styles } from './styles';

const PatientHomePage = () => {
  const router = useRouter();

  const handleNotificationPress = useCallback(() => {
    router.push('/notification');
  }, [router]);

  return (
    <View style={styles.container}>
      <Button onPress={handleNotificationPress} text="알림 페이지로 이동" />
      <Text>환자용 홈 페이지</Text>
    </View>
  );
};

export default PatientHomePage;
