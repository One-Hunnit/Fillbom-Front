import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import TEXT_STYLES from '@/styles/textStyles';

export default () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Link>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
  },
});
