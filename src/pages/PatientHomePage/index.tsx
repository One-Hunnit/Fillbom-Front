import { StyleSheet, Text, View } from 'react-native';

const PatientHomePage = () => {
  return (
    <View style={styles.container}>
      <Text>환자용 홈 페이지</Text>
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

export default PatientHomePage;
