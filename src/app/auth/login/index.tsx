import { login } from '@react-native-seoul/kakao-login';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import infoIconBlack from '@/assets/svgs/infoIconBlack.svg';
import { Button } from '@/components/Button';
import colors from '@/constants/color';
import { userState } from '@/stores/authStore';

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const router = useRouter();

  const handleLogin = () => {
    const userData = { id: '1', name: 'test' };
    setUser(userData);
    router.push('/');
  };

  const signInWithKakao = async () => {
    try {
      const token = await login();
      if (token) {
        console.log(token);
      } else {
        console.log('토큰이 없습니다.');
      }
    } catch (err) {
      console.error('login err', err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <Button
        title="로그인"
        layoutType="iconText"
        svgIcon={infoIconBlack}
        pressedButtonColor={colors.blue[300]}
        disabledButtonColor={colors.blue[200]}
        defaultButtonColor={colors.blue[500]}
        pressedTextColor={colors.blue[200]}
        disabledTextColor={colors.blue[300]}
        defaultTextColor={colors.gray[100]}
        onPress={handleLogin}
      />
      <Button
        title="카카오 로그인"
        layoutType="iconText"
        svgIcon={infoIconBlack}
        pressedButtonColor={colors.blue[300]}
        disabledButtonColor={colors.blue[200]}
        defaultButtonColor={colors.blue[500]}
        pressedTextColor={colors.blue[200]}
        disabledTextColor={colors.blue[300]}
        defaultTextColor={colors.gray[100]}
        onPress={signInWithKakao}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flex: 1,
    gap: 10,
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
