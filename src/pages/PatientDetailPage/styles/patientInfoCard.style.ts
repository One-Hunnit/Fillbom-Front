import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const patientInfoCardStyle = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    paddingVertical: 16,
    paddingLeft: 20,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 92,
    height: 92,
    borderRadius: 50,
    backgroundColor: FILLBOM_COLOR.GRAY[500],
  },
  patientInfoTextWrapper: {
    width: '60%',
    marginLeft: 16,
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    ...TEXT_STYLES.BODY_MEDIUM_MEDIUM,
    color: FILLBOM_COLOR.GRAY[600],
    marginRight: 8, // gap 대신 사용
  },
  value: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[900],
    flexShrink: 1,
  },
  labelValueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '60%',
    overflow: 'hidden',
    flexShrink: 1,
  },
});

export default patientInfoCardStyle;
