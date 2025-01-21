import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View, type ViewStyle } from 'react-native';
import Button from '@/components/Button';
import InputWithIcon from '@/components/InputWithIcon';
import { FILLBOM_COLOR } from '@/constants/color';
import useCheckButton from '@/hooks/useCheckButton';
import { patientCardStyles } from '@/pages/PatientListPage/styles';
import useKeyboardVisible from '@/pages/SignupPage/hooks/useKeyboardVisible';
import TEXT_STYLES from '@/styles/textStyles';
import MaskedName from '../AddPatientPage/components/MaskedName';
import ManagePatientLayout from '../Layouts';
import { commonStyles } from '../styles';
import styles from './styles';
import formattedPhoneNumber from './utils/formatingPhoneNumber';

const RequestRelationPage = () => {
  const { patientInfo } = useLocalSearchParams();
  const { setCheckButtonState, handleCheckButtonPressIn, handleCheckButtonPressOut, getCheckButtonIcon } =
    useCheckButton();
  const patient = JSON.parse(patientInfo as string);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [relation, setRelation] = useState<string>('');
  const CheckButtonIcon = getCheckButtonIcon();
  const keyboardVisible = useKeyboardVisible();
  const buttonStyle: ViewStyle = keyboardVisible
    ? commonStyles.buttonKeyboardVisible
    : { marginLeft: 20, marginRight: 20, marginBottom: 20, width: 350 };

  useEffect(() => {
    setCheckButtonState({ isPressed: false, isSelected: true });
  }, []);

  useEffect(() => {
    console.log('keyboardVisible', keyboardVisible);
  }, [keyboardVisible]);

  const onRequestButtonPress = () => {
    console.log('환자 추가 요청');
  };

  return (
    <ManagePatientLayout
      setIsInputFocused={setIsInputFocused}
      headerText="환자 추가하기"
      titleText={`환자와의 관계를 입력하고 \n 수락 요청을 보내세요`}
    >
      <View style={styles.temp}>
        <Text>추가 하고 싶은 환자</Text>
        <View style={patientCardStyles.container}>
          <Pressable style={patientCardStyles.profilWrapper}>
            <View style={patientCardStyles.profileImageInfoTextWrapper}>
              <Image src={patient.profileImageUrl} style={patientCardStyles.profileImage}></Image>
              <View style={patientCardStyles.infoTextWrapper}>
                <Text style={patientCardStyles.name}> {MaskedName(patient.name)}</Text>
                <Text style={patientCardStyles.phoneNumber}> {formattedPhoneNumber(patient.phoneNumber)}</Text>
              </View>
            </View>
            <Pressable onPressIn={handleCheckButtonPressIn} onPressOut={handleCheckButtonPressOut}>
              <CheckButtonIcon />
            </Pressable>
          </Pressable>
        </View>
        <View style={styles.patientRelationInputWrapper}>
          <Text>환자와의 관계</Text>
          <InputWithIcon
            isFocused={isInputFocused}
            setIsFocused={setIsInputFocused}
            placeholder="아버지"
            value={relation}
            keyboardType="default"
            selectedBorderColor={FILLBOM_COLOR.BLUE[500]}
            defaultBorderColor={FILLBOM_COLOR.GRAY[100]}
            defaultBackgoundColor={FILLBOM_COLOR.GRAY[100]}
            pressedBackgroundColor={FILLBOM_COLOR.GRAY[200]}
            defaultTextColor={FILLBOM_COLOR.GRAY[100]}
            pressedTextColor={FILLBOM_COLOR.GRAY[400]}
            activatedTextColor={FILLBOM_COLOR.GRAY[900]}
            defaultIconColor={FILLBOM_COLOR.GRAY[500]}
            pressedIconColor={FILLBOM_COLOR.GRAY[400]}
            onChangeText={setRelation}
            textContentType="telephoneNumber"
          />
        </View>
      </View>
      <View style={styles.testWrapper}>
        <Button
          text="다시 검색"
          onPress={onRequestButtonPress}
          disabled={relation.length === 0}
          defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
          defaultTextColor={FILLBOM_COLOR.GRAY[100]}
          pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
          pressedTextColor={FILLBOM_COLOR.BLUE[200]}
          disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
          disabledTextColor={FILLBOM_COLOR.GRAY[700]}
          textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
          buttonStyle={styles.bottomFixButtonStyle}
        />
      </View>
      <Button
        text="수락요청 보내기"
        onPress={onRequestButtonPress}
        disabled={relation.length === 0}
        defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
        disabledTextColor={FILLBOM_COLOR.GRAY[700]}
        textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
        buttonStyle={buttonStyle}
      />
    </ManagePatientLayout>
  );
};

export default RequestRelationPage;
