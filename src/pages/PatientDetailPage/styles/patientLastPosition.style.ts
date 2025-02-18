import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const patientLastPositionStyle = StyleSheet.create({
  lastLocationHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 4,
  },
  lastLocationHeaderText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[600],
  },
});

export default patientLastPositionStyle;
