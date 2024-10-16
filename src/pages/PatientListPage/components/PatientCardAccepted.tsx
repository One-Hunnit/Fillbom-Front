import { Text, View } from 'react-native';
import IcoDocumentState from '@/assets/svgs/ico_document_state.svg';
import IcoRaderState from '@/assets/svgs/icon_rader_state.svg';
import { acceptedCardStyles, patientCardStyles } from '../styles';
import { type IPatient } from '../types';
interface PatientCardPendingProps {
  patient: IPatient;
}

const PatientCardAccepted = ({ patient }: PatientCardPendingProps) => {
  return (
    <View style={acceptedCardStyles.container}>
      <View style={patientCardStyles.profilWrapper}>
        <View style={patientCardStyles.profileImage}></View>
        <View style={patientCardStyles.infoWrapper}>
          <Text style={patientCardStyles.name}>{patient.name}</Text>
          <Text style={patientCardStyles.relation}>{patient.relation}</Text>
        </View>
      </View>
      <View style={acceptedCardStyles.buttonsWrapper}>
        <View style={acceptedCardStyles.showDetailButton}>
          <IcoDocumentState />
          <Text style={acceptedCardStyles.showDetailText}>상세 정보 보기</Text>
        </View>
        <View style={acceptedCardStyles.wanderingDetectionButton}>
          <IcoRaderState />
          <Text style={acceptedCardStyles.showDetailText}>배회 감지</Text>
        </View>
      </View>
    </View>
  );
};

export default PatientCardAccepted;
