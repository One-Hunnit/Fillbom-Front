// import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
// import { useSetRecoilState } from 'recoil';
import { Button } from '@/components/Button';
import colors from '@/constants/color';
import infoIconBlack from '../../../assets/svgs/infoIconBlack.svg';
// import { userState } from '@/stores/authStore';

const Login = () => {
  // const setUser = useSetRecoilState(userState);
  // const router = useRouter();

  // const handleLogin = () => {
  //   const userData = { id: '1', name: 'test' };
  //   setUser(userData);
  //   router.push('/');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      {/* <Button title="로그인" onPress={handleLogin} /> */}
      <Button
        title="아이콘 텍스트"
        onPress={() => console.log('아이콘 텍스트 떨어져 있는 버튼 클릭됨')}
        layoutType="iconTextSeparate"
        svgIcon={infoIconBlack}
        pressedButtonColor={colors.blue[300]}
        disabledButtonColor={colors.blue[200]}
        defaultButtonColor={colors.blue[500]}
        pressedTextColor={colors.blue[200]}
        disabledTextColor={colors.blue[300]}
        defaultTextColor={colors.gray[100]}
      />
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
