import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const patientLastPositionStyle = StyleSheet.create({
  lastLocationHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 4,
    marginVertical: 11,
  },
  lastLocationHeaderText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  mapContainer: {
    width: '100%',
    height: '60%',
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: FILLBOM_COLOR.GRAY[300],
  },
  markerContainer: {
    width: 48,
    height: 48,
  },
  markerImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 8,
    backgroundColor: 'red', // @TODO: 삭제 예정
    zIndex: 1,
  },
});

export default patientLastPositionStyle;
