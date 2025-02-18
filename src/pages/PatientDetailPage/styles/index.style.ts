import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

export const indexStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomWidth: 0,
    borderBottomColor: 'none',
  },
  menu: {
    borderRadius: 12,
    width: 162,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
    elevation: 6, // Android 그림자
    overflow: 'hidden',

    // iOS 그림자
    shadowColor: 'rgba(0, 0, 0, 0.85)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 32,
    paddingVertical: 0,
  },

  menuItem: {
    ...TEXT_STYLES.SUBTEXT_SMALL_SEMI_BOLD,
    overflow: 'hidden',
    color: FILLBOM_COLOR.GRAY[800],
    paddingRight: 24,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
