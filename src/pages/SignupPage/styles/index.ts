import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  title: {
    ...TEXT_STYLES.TITLE_XL_SEMI_BOLD,
    marginTop: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pagerView: {
    flex: 1,
  },
  cardList: {
    marginTop: 24,
    gap: 24,
  },
  card: {
    width: '100%',
    height: 158,
    padding: 24,
    borderRadius: 16,
    backgroundColor: FILLBOM_COLOR.BLUE[100],
  },
  ctaText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[100],
  },
  buttonKeyboardVisible: {
    borderRadius: 0,
    marginBottom: 0,
  },
});

export const progressBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 4,
    marginBottom: -4,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
    borderRadius: 4,
  },
  progress: {
    height: '100%',
    backgroundColor: FILLBOM_COLOR.BLUE[200],
    borderRadius: 4,
  },
});

export const selectRoleStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  pressable: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: 158,
    padding: 24,
    borderRadius: 16,
    backgroundColor: FILLBOM_COLOR.BLUE[100],
  },
  cardActive: {
    backgroundColor: FILLBOM_COLOR.BLUE[200],
  },
});

export const selectGenderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});

export const confirmStyles = StyleSheet.create({
  container: {
    marginTop: 12,
    padding: 12,
    gap: 10,
    borderRadius: 12,
    backgroundColor: FILLBOM_COLOR.GRAY[100],
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleIcon: {
    width: 48,
    height: 48,
  },
  titleText: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
    color: FILLBOM_COLOR.GRAY[700],
  },
  titleName: {
    color: FILLBOM_COLOR.GRAY[900],
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: FILLBOM_COLOR.GRAY[200],
  },
  label: {
    ...TEXT_STYLES.BODY_MEDIUM_MEDIUM,
    width: 96,
    color: FILLBOM_COLOR.GRAY[600],
  },
  value: {
    ...TEXT_STYLES.BODY_MEDIUM_MEDIUM,
    fontWeight: 900,
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
    color: FILLBOM_COLOR.GRAY[800],
  },
  button: {
    width: 44,
    height: 22,
    borderRadius: 10,
  },
});

export const buttonSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  selectAllButton: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  termItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
  },
  check: {
    alignSelf: 'center',
  },
  termValueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  termLabel: {
    ...TEXT_STYLES.BODY_MEDIUM_MEDIUM,
    color: FILLBOM_COLOR.GRAY[600],
  },
  termTitle: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  termButton: {
    width: 'auto',
    height: 24,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  confirmButton: {
    marginVertical: 20,
  },
});
