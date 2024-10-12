import { StyleSheet } from 'react-native';
import TEXT_STYLES from '@/styles/textStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TEXT_STYLES.TITLE_XL_BOLD,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 40,
  },
  buttonIcon: {
    position: 'absolute',
    left: 20,
  },
});
