import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const styles = StyleSheet.create({
  informText: {
    ...TEXT_STYLES.SUBTEXT_SMALL_MEDIUM,
  },
  patientRelationInputWrapper: {
    width: '100%',
    gap: 11,
    padding: 20,
    backgroundColor: FILLBOM_COLOR.GRAY[100],
  },

  testWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    position: 'absolute',
    bottom: 20,
    backgroundColor: FILLBOM_COLOR.PINK[200],
  },

  temp: {
    width: '100%',
    backgroundColor: '#fff',
  },
  bottomFixButtonStyle: {
    marginTop: 10,
    width: 350,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default styles;
