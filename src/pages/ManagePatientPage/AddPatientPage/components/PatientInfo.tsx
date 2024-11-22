import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import CheckButtonNormal from '@/assets/svgs/check_button_normal.svg';
import CheckButtonPressed from '@/assets/svgs/check_button_pressed.svg';
import CheckButtonSelected from '@/assets/svgs/check_button_selected.svg';
import CheckButtonSelectedPressed from '@/assets/svgs/check_button_selected_presssed.svg';
import { type IPatientInfo } from '@/types/patient';
import { patientInfoStyles } from '../styles';
import MaskedName from './MaskedName';

interface IPatientInfoProps {
  patientInfo: IPatientInfo;
  selectedPatientInfo: IPatientInfo | null;
  setSelectedPatientInfo: (patientInfo: IPatientInfo | null) => void | null;
}

const PatientInfo = ({ patientInfo, selectedPatientInfo, setSelectedPatientInfo }: IPatientInfoProps) => {
  const [checkButtonState, setCheckButtonState] = useState({
    isPressed: false,
    isSelected: false,
  });

  useEffect(() => {
    setCheckButtonState((prev) => ({
      ...prev,
      isSelected: selectedPatientInfo === patientInfo,
    }));
  }, [selectedPatientInfo, patientInfo]);

  const handlePressIn = () => setCheckButtonState((prev) => ({ ...prev, isPressed: true }));

  const handlePressOut = () => {
    setCheckButtonState((prev) => ({
      isPressed: false,
      isSelected: !prev.isSelected,
    }));
    setSelectedPatientInfo(patientInfo);
  };

  const CheckButtonIcon = checkButtonState.isPressed
    ? checkButtonState.isSelected
      ? CheckButtonSelectedPressed
      : CheckButtonPressed
    : checkButtonState.isSelected
      ? CheckButtonSelected
      : CheckButtonNormal;

  return (
    <View style={patientInfoStyles.wrapper}>
      <View style={patientInfoStyles.patientInfoWrapper}>
        <Image src={patientInfo.profileImageUrl} style={patientInfoStyles.profileImage} />
        <View style={patientInfoStyles.patientNamePhoneNumberWrapper}>
          {MaskedName(patientInfo.name)}
          <Text style={patientInfoStyles.patientPhoneNumber}>{patientInfo.phoneNumber}</Text>
        </View>
      </View>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <CheckButtonIcon />
      </Pressable>
    </View>
  );
};

export default PatientInfo;
