import { StyleSheet, Text, View } from 'react-native';
import useLocationTracking from '@/hooks/useLocationTracking';

export default function Home() {
  useLocationTracking();

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
