import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flex: 1,
    gap: 10,
    height: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
  loadingOverlay: {
    alignItems: 'center',
    backgroundColor: '#fff',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
