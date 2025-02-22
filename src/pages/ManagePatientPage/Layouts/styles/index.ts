import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import { HEADER_HEIGHT } from '@/constants/ui';
import TEXT_STYLES from '@/styles/textStyles';

export const commonStyles = StyleSheet.create({
  example: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    borderBottomWidth: 0,
    borderBottomColor: 'none',
    height: HEADER_HEIGHT,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
  pressableContainer: {
    width: '100%',
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
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: FILLBOM_COLOR.BLUE[200],
  },
  pageWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: HEADER_HEIGHT,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
});
