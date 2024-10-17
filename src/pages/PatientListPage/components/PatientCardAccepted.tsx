import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import IcoArrowNextState from '@/assets/svgs/ico_arrow_next_state.svg';
import IcoArrowNextStatePressed from '@/assets/svgs/ico_arrow_next_state_pressed.svg';
import IcoDocumentStatePressed from '@/assets/svgs/ico_document_pressed.svg';
import IcoDocumentState from '@/assets/svgs/ico_document_state.svg';
import IcoRaderState from '@/assets/svgs/icon_rader_state.svg';
import IcoRaderStatePressed from '@/assets/svgs/icon_rader_state_pressed.svg';
import { acceptedCardStyles, patientCardStyles } from '../styles';
import { type IPatient } from '../types';
interface PatientCardPendingProps {
  patient: IPatient;
}

const PatientCardAccepted = ({ patient }: PatientCardPendingProps) => {
  const [isProfileWrapperPressed, setIsProfileWrapperPressed] = useState<boolean>(false);
  const [isShowDetailButtonPressed, setIsShowDetailButtonPressed] = useState<boolean>(false);
  const [isWanderingDetectionButtonPressed, setIsWanderingDetectionButtonPressed] = useState<boolean>(false);

  return (
    <View style={acceptedCardStyles.container}>
      <Pressable
        onPressIn={() => {
          setIsProfileWrapperPressed(true);
        }}
        onPressOut={() => setIsProfileWrapperPressed(false)}
        style={[patientCardStyles.profilWrapper, acceptedCardStyles.acceptedProfileWrapper]}
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
        <View style={acceptedCardStyles.iconWrapper}>
          {isProfileWrapperPressed ? <IcoArrowNextStatePressed /> : <IcoArrowNextState />}
        </View>
      </Pressable>
      <View style={acceptedCardStyles.buttonsWrapper}>
        <Pressable
          onPressIn={() => setIsShowDetailButtonPressed(true)}
          onPressOut={() => setIsShowDetailButtonPressed(false)}
          style={[acceptedCardStyles.showDetailButton, isShowDetailButtonPressed && acceptedCardStyles.buttonPressed]}
        >
          {isShowDetailButtonPressed ? <IcoDocumentStatePressed /> : <IcoDocumentState />}
          <Text
            style={[acceptedCardStyles.showDetailText, isShowDetailButtonPressed && acceptedCardStyles.textPressed]}
          >
            상세 정보 보기
          </Text>
        </Pressable>
        <Pressable
          onPressIn={() => setIsWanderingDetectionButtonPressed(true)}
          onPressOut={() => setIsWanderingDetectionButtonPressed(false)}
          style={[
            acceptedCardStyles.wanderingDetectionButton,
            isWanderingDetectionButtonPressed && acceptedCardStyles.buttonPressed,
          ]}
        >
          {isWanderingDetectionButtonPressed ? <IcoRaderStatePressed /> : <IcoRaderState />}
          <Text
            style={[
              acceptedCardStyles.showDetailText,
              isWanderingDetectionButtonPressed && acceptedCardStyles.textPressed,
            ]}
          >
            배회 감지
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PatientCardAccepted;
