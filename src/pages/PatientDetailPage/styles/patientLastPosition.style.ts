import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const patientLastPositionStyle = StyleSheet.create({
  lastLocationHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 4,
    marginBottom: 11,
  },
  lastLocationHeaderText: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  mapContainer: {
    width: '100%',
    height: 404,
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
    width: 24, // 프로필 이미지 크기를 마커 크기의 절반으로
    height: 24,
    borderRadius: 15, // 동그란 프로필 이미지
    borderWidth: 2,
    marginTop: 8,
    backgroundColor: 'red', // 프로필 이미지 테두리
    zIndex: 1,
  },
});

export default patientLastPositionStyle;
