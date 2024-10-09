import { StyleSheet, Text, View } from 'react-native';

const RefreshPage = () => {
  return (
    <View style={styles.container}>
      <Text>리프레시 페이지</Text>
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

export default RefreshPage;
