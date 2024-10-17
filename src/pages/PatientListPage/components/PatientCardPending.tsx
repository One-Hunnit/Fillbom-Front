import { Pressable, Text, View } from 'react-native';
import { patientCardStyles } from '../styles';
import { type IPatient } from '../types';
interface PatientCardPendingProps {
  patient: IPatient;
}

const PatientCardPending = ({ patient }: PatientCardPendingProps) => {
  return (
    <View style={patientCardStyles.container}>
      <Pressable style={patientCardStyles.profilWrapper}>
        <View style={patientCardStyles.infoWrapper}>
          <View style={patientCardStyles.profileImage}></View>
          <View style={patientCardStyles.infoTextWrapper}>
            <Text style={patientCardStyles.name}>{patient.name}</Text>
            <Text style={patientCardStyles.relation}>{patient.relation}</Text>
          </View>
        </View>
      </Pressable>
      <View style={patientCardStyles.pendingWrapper}>
        <Text style={patientCardStyles.pendingText}> 수락 대기 중...</Text>
      </View>
    </View>
  );
};

export default PatientCardPending;
