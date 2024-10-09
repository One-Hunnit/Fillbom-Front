import { View, Text, Button, StyleSheet } from 'react-native';
import useLogin from './useLogin';

const LoginPage = () => {
  const { handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <Button title="로그인" onPress={handleLogin} />
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

export default LoginPage;
