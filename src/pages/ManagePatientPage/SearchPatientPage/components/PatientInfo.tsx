import { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import useCheckButton from '@/hooks/useCheckButton';
import { type IPatientInfo } from '@/types/patient';
import { patientInfoStyles } from '../styles';
import MaskedName from './MaskedName';

interface IPatientInfoProps {
  patientInfo: IPatientInfo;
  selectedPatientInfo: IPatientInfo | null;
  setSelectedPatientInfo: (patientInfo: IPatientInfo | null) => void | null;
}

const PatientInfo = ({ patientInfo, setSelectedPatientInfo }: IPatientInfoProps) => {
  const {
    checkButtonState,
    handleCheckButtonPressIn,
    setCheckButtonState,
    handleCheckButtonPressOut,
    getCheckButtonIcon,
  } = useCheckButton();

  useEffect(() => {
    setCheckButtonState((prev) => ({
      ...prev,
      isSelected: false,
    }));
  }, [patientInfo]);

  useEffect(() => {
    if (checkButtonState.isSelected) {
      setSelectedPatientInfo(patientInfo);
    } else {
      setSelectedPatientInfo(null);
    }
  }, [checkButtonState]);

  const handlePressOut = () => {
    handleCheckButtonPressOut();
  };

  const CheckButtonIcon = getCheckButtonIcon();
  return (
    <View style={patientInfoStyles.wrapper}>
      <Pressable
        style={patientInfoStyles.patientInfoWrapper}
        onPressIn={handleCheckButtonPressIn}
        onPressOut={handlePressOut}
      >
        <View style={patientInfoStyles.patientImageInfoWrapper}>
          <Image src={patientInfo.profileImageUrl} style={patientInfoStyles.profileImage} />
          <View style={patientInfoStyles.patientNamePhoneNumberWrapper}>
            {MaskedName(patientInfo.name)}
            <Text style={patientInfoStyles.patientPhoneNumber}>{patientInfo.phoneNumber}</Text>
          </View>
        </View>
        <View>
          <CheckButtonIcon />
        </View>
      </Pressable>
    </View>
  );
};

export default PatientInfo;
