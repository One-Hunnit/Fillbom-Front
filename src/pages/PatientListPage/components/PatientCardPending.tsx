import { Text, View } from 'react-native';
import { patientCardStyles } from '../styles';
import { type IPatient } from '../types';
interface PatientCardPendingProps {
  patient: IPatient;
}

const PatientCardPending = ({ patient }: PatientCardPendingProps) => {
  return (
    <View style={patientCardStyles.container}>
      <View style={patientCardStyles.profilWrapper}>
        <View style={patientCardStyles.profileImage}></View>
        <View style={patientCardStyles.infoWrapper}>
          <Text style={patientCardStyles.name}>{patient.name}</Text>
          <Text>{patient.relation}</Text>
        </View>
      </View>
      <View style={patientCardStyles.pendingWrapper}>
        <Text style={patientCardStyles.pendingText}> 수락 대기 중...</Text>
      </View>
    </View>
  );
};

export default PatientCardPending;
