import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomWidth: 0,
    borderBottomColor: 'none',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export const patientCardStyles = StyleSheet.create({
  container: {
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    borderRadius: 12,
    width: '100%',
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  relationText: {
    ...TEXT_STYLES.SUBTEXT_SMALL_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[600],
  },
  name: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  relation: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
  infoWrapper: {
    flexDirection: 'column',
  },
  profilWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    gap: 16,
  },
  pendingText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    fontSize: 14,
    color: FILLBOM_COLOR.BLUE[500],
  },
  pendingWrapper: {
    height: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
    textAlign: 'right',
    borderRadius: 1500,
    backgroundColor: FILLBOM_COLOR.BLUE[100],
    justifyContent: 'center',
  },
});

export const acceptedCardStyles = StyleSheet.create({
  container: {
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    borderRadius: 12,
    width: '100%',
    padding: 20,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  showDetailButton: {
    width: 161,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: FILLBOM_COLOR.GRAY[200],
  },
  showDetailText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[700],
  },
  wanderingDetectionButton: {
    width: 137,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: FILLBOM_COLOR.GRAY[200],
  },
});
