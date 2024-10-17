import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import IcoArrowNextState from '@/assets/svgs/ico_arrow_next_state.svg';
import IcoArrowNextStatePressed from '@/assets/svgs/ico_arrow_next_state_pressed.svg';
import IcoDocumentState from '@/assets/svgs/ico_document_state.svg';
import IcoRaderState from '@/assets/svgs/icon_rader_state.svg';
import { acceptedCardStyles, patientCardStyles } from '../styles';
import { type IPatient } from '../types';
interface PatientCardPendingProps {
  patient: IPatient;
}

const PatientCardAccepted = ({ patient }: PatientCardPendingProps) => {
  const [isProfileWrapperPressed, setIsProfileWrapperPressed] = useState<boolean>(false);

  return (
    <View style={acceptedCardStyles.container}>
      <Pressable
        onPressIn={() => {
          setIsProfileWrapperPressed(true);
        }}
        onPressOut={() => setIsProfileWrapperPressed(false)}
        style={patientCardStyles.profilWrapper}
      >
        <View style={patientCardStyles.infoWrapper}>
          <View
            style={isProfileWrapperPressed ? patientCardStyles.profileImage : patientCardStyles.profileImage}
          ></View>
          <View style={patientCardStyles.infoTextWrapper}>
            <Text style={isProfileWrapperPressed ? patientCardStyles.pressedText : patientCardStyles.name}>
              {patient.name}
            </Text>
            <Text style={isProfileWrapperPressed ? patientCardStyles.pressedText : patientCardStyles.relation}>
              {patient.relation}
            </Text>
          </View>
        </View>
        {isProfileWrapperPressed ? <IcoArrowNextStatePressed /> : <IcoArrowNextState />}
      </Pressable>
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
