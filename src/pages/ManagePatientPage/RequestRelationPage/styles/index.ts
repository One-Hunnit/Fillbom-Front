import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const styles = StyleSheet.create({
  text: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  patientRelationInputWrapper: {
    width: '100%',
    gap: 11,
    paddingTop: 35,
  },
  buttonWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  researchPatient: {
    width: '100%',
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'yellow',
  },
  patientInfoSection: {
    width: '100%',
    height: 382,
  },
  bottomFixButtonStyle: {
    marginTop: 10,
    width: 350,
    bottom: 0,
    justifyContent: 'center',
  },
  researchPatientButton: {
    width: 350,
    justifyContent: 'center',
  },
  requestButton: {
    width: '100%',
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
