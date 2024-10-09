import { StyleSheet, Text, View } from 'react-native';

const DiaryPage = () => {
  return (
    <View style={styles.container}>
      <Text>Diary Page</Text>
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

export default DiaryPage;
