import { View, Text, Button } from 'react-native';
import useLogin from './hooks/useLogin';
import styles from './styles';

const LoginPage = () => {
  const { handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
