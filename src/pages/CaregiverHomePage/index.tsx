import { StyleSheet, Text, View } from 'react-native';

const CaregiverHomePage = () => {
  return (
    <View style={styles.container}>
      <Text>보호자용 홈 페이지</Text>
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

export default CaregiverHomePage;
