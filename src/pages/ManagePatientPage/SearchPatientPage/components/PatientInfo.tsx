import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Check from '@/components/Check';
import { type IPatientInfo } from '@/types/patient';
import { patientInfoStyles } from '../styles';
import MaskedName from './MaskedName';

interface IPatientInfoProps {
  patientInfo: IPatientInfo;
  selectedPatientInfo: IPatientInfo | null;
  setSelectedPatientInfo: (patientInfo: IPatientInfo | null) => void | null;
}

const PatientInfo = ({ patientInfo, setSelectedPatientInfo }: IPatientInfoProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setSelectedPatientInfo(patientInfo);
    } else {
      setSelectedPatientInfo(null);
    }
  }, [isChecked]);

  return (
    <View style={patientInfoStyles.wrapper}>
      <Pressable
        style={patientInfoStyles.patientInfoWrapper}
        onPressIn={() => {
          setIsChecked((prev) => !prev);
        }}
      >
        <View style={patientInfoStyles.patientImageInfoWrapper}>
          <Image src={patientInfo.profileImageUrl} style={patientInfoStyles.profileImage} />
          <View style={patientInfoStyles.patientNamePhoneNumberWrapper}>
            {MaskedName(patientInfo.name)}
            <Text style={patientInfoStyles.patientPhoneNumber}>{patientInfo.phoneNumber}</Text>
          </View>
        </View>
        <View>
          <Check
            checked={isChecked}
            onPress={() => {
              setIsChecked((prev) => !prev);
            }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PatientInfo;
