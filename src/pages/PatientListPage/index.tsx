import { StyleSheet, Text, View } from 'react-native';

const PatientListPage = () => {
  return (
    <View style={styles.container}>
      <Text>환자 관리 페이지</Text>
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

export default PatientListPage;
