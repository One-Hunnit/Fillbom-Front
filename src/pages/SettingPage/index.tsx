import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useAuthStore } from '@/stores/authStore';
import { styles } from './styles';

const SettingPage = () => {
  const router = useRouter();
  const { account, initState } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text>설정 페이지</Text>
      <Text>이름 {account?.name}</Text>
      <Button title="테스트용으로 로그인 페이지 이동하기" onPress={() => router.replace('/login')} />
      <Button title="테스트용으로 회원가입 페이지 이동하기" onPress={() => router.replace('/signup')} />
      <Button title="테스트용으로 authState 제거하기" onPress={initState} />
    </View>
  );
};

export default SettingPage;
