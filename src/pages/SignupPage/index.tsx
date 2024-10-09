import { StyleSheet, Text, View } from 'react-native';

const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text>회원가입 페이지</Text>
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
});

export default SignupPage;
