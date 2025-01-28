import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import Button from '@/components/Button';
import { styles } from './styles';

const DiaryPage = () => {
  const router = useRouter();

  const handleAddDiaryButtonPress = useCallback(() => {
    router.push('/patient/write-diary');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Diary Page</Text>
      <Button onPress={handleAddDiaryButtonPress} text="+" />
    </View>
  );
};

export default DiaryPage;
