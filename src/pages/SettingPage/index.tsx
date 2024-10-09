import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { authState } from '@/stores/authStore';

const SettingPage = () => {
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);
  return (
    <View style={styles.container}>
      <Text>설정 페이지</Text>
      <Button title="테스트용으로 로그인 페이지 이동하기" onPress={() => router.replace('/login')} />
      <Button title="테스트용으로 회원가입 페이지 이동하기" onPress={() => router.replace('/signup')} />
      <Button title="테스트용으로 authState 제거하기" onPress={() => setAuthState(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SettingPage;
