import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import CheckButtonNormal from '@/assets/svgs/check_button_normal.svg';
import CheckButtonPressed from '@/assets/svgs/check_button_pressed.svg';
import CheckButtonSelected from '@/assets/svgs/check_button_selected.svg';
import CheckButtonSelectedPressed from '@/assets/svgs/check_button_selected_presssed.svg';
import { patientInfoStyles } from '../styles';
const PatientInfo = () => {
  const [isCheckButtonPressed, setIsCheckButtonPressed] = useState<boolean>(false);
  const [isCheckButtonSelected, setIsCheckButtonSelected] = useState<boolean>(false);

  return (
    <View style={patientInfoStyles.wrapper}>
      <View style={patientInfoStyles.patientInfoWrapper}>
        <View style={patientInfoStyles.profileImage} />
        <View style={patientInfoStyles.patientNamePhoneNumberWrapper}>
          <Text style={patientInfoStyles.patientName}>이효린</Text>
          <Text style={patientInfoStyles.patientPhoneNumber}>01047080104</Text>
        </View>
      </View>
      <Pressable
        onPressIn={() => setIsCheckButtonPressed(true)}
        onPressOut={() => {
          setIsCheckButtonPressed(false);
          setIsCheckButtonSelected(!isCheckButtonSelected);
        }}
      >
        {isCheckButtonPressed ? (
          isCheckButtonSelected ? (
            <CheckButtonSelectedPressed />
          ) : (
            <CheckButtonPressed />
          )
        ) : isCheckButtonSelected ? (
          <CheckButtonSelected />
        ) : (
          <CheckButtonNormal />
        )}
      </Pressable>
    </View>
  );
};

export default PatientInfo;
