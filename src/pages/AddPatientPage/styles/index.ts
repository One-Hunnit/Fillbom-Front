import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomWidth: 0,
    borderBottomColor: 'none',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    paddingTop: 12,
    justifyContent: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
  listWrapper: {
    paddingBottom: 80,
    paddingTop: 12,
  },
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
  },
});
