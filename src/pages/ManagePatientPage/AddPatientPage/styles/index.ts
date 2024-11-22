import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

export const patientInfoStyles = StyleSheet.create({
  container: {
    margin: 10,
    height: '100%',
    paddingBottom: 120,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,
    borderBottomWidth: 1,
    borderBottomColor: FILLBOM_COLOR.GRAY[200],
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  patientInfoWrapper: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    flex: 1,
  },
  patientNamePhoneNumberWrapper: {
    flexDirection: 'column',
    padding: 16,
  },
  patientName: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[900],
  },
  patientPhoneNumber: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
});

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
    flex: 1,
    padding: 20,
  },
  titleWrapper: {
    paddingTop: 4,
    paddingBottom: 20,
  },
  title: {
    ...TEXT_STYLES.TITLE_XL_SEMI_BOLD,
    color: '#2D2E35',
  },
  smallTitleWrapper: {
    paddingVertical: 8,
    justifyContent: 'center',
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  smallTitle: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  input: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    width: '100%',
    height: 50,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: FILLBOM_COLOR.BLUE[200],
  },
  errorInput: {
    borderColor: FILLBOM_COLOR.PINK[500],
  },
  buttonKeyboardVisible: {
    borderRadius: 0,
    marginBottom: 0,
  },
});
