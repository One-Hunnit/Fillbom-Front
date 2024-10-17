import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

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

export const patientCardStyles = StyleSheet.create({
  container: {
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    borderRadius: 12,
    width: 350,
    height: 100,
    paddingHorizontal: 12,
    overflow: 'scroll',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: '100%',
    paddingBottom: 100,
    backgroundColor: '#fff',
  },
  profilWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  infoTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  pressedText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[500],
  },
  relation: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
  pendingWrapper: {
    height: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: FILLBOM_COLOR.BLUE[100],
    textAlign: 'right',
    justifyContent: 'center',
    borderRadius: 1500,
  },
  pendingText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    fontSize: 14,
    color: FILLBOM_COLOR.BLUE[500],
  },
});

export const acceptedCardStyles = StyleSheet.create({
  container: {
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    borderRadius: 12,
    width: 350,
    paddingHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  iconWrapper: {
    height: '100%',
  },
  acceptedProfileWrapper: {
    marginVertical: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    gap: 8,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
  },
  buttonPressed: {
    backgroundColor: FILLBOM_COLOR.GRAY[300],
  },
  showDetailText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[700],
  },
  textPressed: {
    color: FILLBOM_COLOR.GRAY[500],
  },
  wanderingDetectionButton: {
    width: 137,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
  },
});
