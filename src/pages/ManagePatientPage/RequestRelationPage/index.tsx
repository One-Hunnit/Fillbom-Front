/* eslint-disable react-native/no-inline-styles */
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, Text, View, type ViewStyle } from 'react-native';
import IconCancel from '@/assets/svgs/ico_cancel.svg';
import Button from '@/components/Button';
import InputWithIcon from '@/components/InputWithIcon';
import { FILLBOM_COLOR } from '@/constants/color';
import useCheckButton from '@/hooks/useCheckButton';
import useGetKeyboardHeight from '@/hooks/useGetKeyboardHeight';
import { patientCardStyles } from '@/pages/PatientListPage/styles';
import useKeyboardVisible from '@/pages/SignupPage/hooks/useKeyboardVisible';
import TEXT_STYLES from '@/styles/textStyles';
import ManagePatientLayout from '../Layouts';
import useRegistPatients from './hooks/useRegistPatients';
import styles from './styles';
import formattedPhoneNumber from './utils/formatingPhoneNumber';
import MaskedName from '../SearchPatientPage/components/MaskedName';

const RequestRelationPage = () => {
  const { patientInfo } = useLocalSearchParams();

  const patient = patientInfo ? JSON.parse(decodeURIComponent(patientInfo as string)) : null;

  const { getCheckButtonIcon } = useCheckButton();

  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [relation, setRelation] = useState<string>('');
  const CheckButtonIcon = getCheckButtonIcon();
  const keyboardVisible = useKeyboardVisible();
  const keyboardHeight = useGetKeyboardHeight();
  const buttonStyle: ViewStyle = keyboardVisible
    ? { width: '100%', bottom: keyboardHeight - 34, borderRadius: 0 }
    : styles.bottomFixButtonStyle;

  const inputIcon = useMemo(() => {
    return relation.length > 0 ? IconCancel : null;
  }, [relation, isInputFocused]);

  const onResearchPatientButtonPress = () => {
    router.replace('/caregiver/addPatient');
  };
  const onRequestButtonPress = async () => {
    await useRegistPatients(patient.patientId, relation);
  };

  return (
    <ManagePatientLayout
      status="REQUEST"
      setIsInputFocused={setIsInputFocused}
      headerText="환자 추가하기"
      titleText={`환자와의 관계를 입력하고 \n 수락 요청을 보내세요`}
    >
      <View style={styles.patientInfoSection}>
        <Text style={styles.text}>추가 하고 싶은 환자</Text>
        <View style={[patientCardStyles.container, { width: '100%' }]}>
          <View style={patientCardStyles.profilWrapper}>
            <View style={patientCardStyles.profileImageInfoTextWrapper}>
              <Image src={patient.profileImageUrl} style={patientCardStyles.profileImage} />
              <View style={patientCardStyles.infoTextWrapper}>
                <Text style={patientCardStyles.name}> {MaskedName(patient.name)}</Text>
                <Text numberOfLines={1} style={patientCardStyles.phoneNumber}>
                  {formattedPhoneNumber(patient.phoneNumber)}
                </Text>
              </View>
            </View>
            <View>
              <CheckButtonIcon />
            </View>
          </View>
        </View>
        <View style={styles.patientRelationInputWrapper}>
          <Text style={styles.text}>환자와의 관계</Text>
          <InputWithIcon
            isFocused={isInputFocused}
            setIsFocused={setIsInputFocused}
            placeholder="아버지"
            value={relation}
            keyboardType="default"
            selectedBorderColor={FILLBOM_COLOR.BLUE[200]}
            defaultBorderColor={FILLBOM_COLOR.GRAY[100]}
            defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
            pressedBackgroundColor={FILLBOM_COLOR.GRAY[200]}
            defaultTextColor={FILLBOM_COLOR.GRAY[800]}
            pressedTextColor={FILLBOM_COLOR.GRAY[400]}
            activatedTextColor={FILLBOM_COLOR.GRAY[900]}
            defaultIconColor={FILLBOM_COLOR.GRAY[500]}
            pressedIconColor={FILLBOM_COLOR.GRAY[400]}
            onChangeText={setRelation}
            onIconPress={() => setRelation('')}
            icon={inputIcon}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="다시 검색"
          onPress={onResearchPatientButtonPress}
          disabled={relation.length === 0}
          defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
          defaultTextColor={FILLBOM_COLOR.GRAY[700]}
          pressedBackgroundColor={FILLBOM_COLOR.GRAY[300]}
          pressedTextColor={FILLBOM_COLOR.GRAY[500]}
          disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
          disabledTextColor={FILLBOM_COLOR.GRAY[700]}
          textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
          buttonStyle={styles.researchPatientButton}
        />
        <Button
          text="수락요청 보내기"
          onPress={onRequestButtonPress}
          disabled={relation.length === 0}
          defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
          defaultTextColor={FILLBOM_COLOR.GRAY[700]}
          pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
          pressedTextColor={FILLBOM_COLOR.BLUE[200]}
          disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
          disabledTextColor={FILLBOM_COLOR.GRAY[700]}
          activatedBackgroundColor={FILLBOM_COLOR.BLUE[500]}
          activatedTextColor={FILLBOM_COLOR.GRAY[100]}
          textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
          isActive={relation.length > 0}
          buttonStyle={buttonStyle}
        />
      </View>
    </ManagePatientLayout>
  );
};

export default RequestRelationPage;
