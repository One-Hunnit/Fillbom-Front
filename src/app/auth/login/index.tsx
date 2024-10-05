import * as KakaoLogins from '@react-native-seoul/kakao-login';
import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/stores/authStore';

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const router = useRouter();

  const handleLogin = () => {
    const userData = { id: '1', name: 'test' };
    setUser(userData);
    router.push('/');
  };

  const loginWithKakao = () => {
    try {
      const token = KakaoLogins.login();
      const profile = KakaoLogins.getProfile();
      // const userData = { id: '1', name: 'test' };
      // setUser(userData);
      console.log(token, profile);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <Button title="로그인" onPress={handleLogin} />
      <Button title="카카오 로그인" onPress={loginWithKakao} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default Login;
