/* eslint-disable react-native/no-inline-styles */
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, Text, View, type ViewStyle } from 'react-native';
import CheckButtonSelected from '@/assets/svgs/check_button_selected.svg';
import IconCancel from '@/assets/svgs/ico_cancel.svg';
import IconToastMessage from '@/assets/svgs/ico_toast_message.svg';
import Button from '@/components/Button';
import InputWithIcon from '@/components/InputWithIcon';
import { ToastMessage } from '@/components/ToastMessage';
import { FILLBOM_COLOR } from '@/constants/color';
import useGetKeyboardHeight from '@/hooks/useGetKeyboardHeight';
import { patientCardStyles } from '@/pages/PatientListPage/styles';
import useKeyboardVisible from '@/pages/SignupPage/hooks/useKeyboardVisible';
import TEXT_STYLES from '@/styles/textStyles';
import ManagePatientLayout from '../Layouts';
import { useRegisterPatient } from './hooks/useRegistPatients';
import styles from './styles';
import formatPhoneNumber from '../../../utils/formatPhoneNumber';
import MaskedName from '../SearchPatientPage/components/MaskedName';

const RequestRelationPage = () => {
  const { patientInfo } = useLocalSearchParams();

  const patient = patientInfo ? JSON.parse(decodeURIComponent(patientInfo as string)) : null;

  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [relation, setRelation] = useState<string>('');
  const keyboardVisible = useKeyboardVisible();
  const keyboardHeight = useGetKeyboardHeight();
  const buttonStyle: ViewStyle = keyboardVisible
    ? { width: '100%', bottom: keyboardHeight - 34, borderRadius: 0 }
    : styles.bottomFixButtonStyle;

  const inputIcon = useMemo(() => {
    return relation.length > 0 ? IconCancel : null;
  }, [relation]);

  const onResearchPatientButtonPress = () => {
    router.replace('/caregiver/addPatient');
  };

  const { mutate: registerPatient } = useRegisterPatient();
  const onRequestButtonPress = () => {
    registerPatient(
      { patientId: patient.patientId, relationship: relation },
      {
        onSuccess: (data) => {
          if (data?.status === 'SUCCESS') {
            ToastMessage('success', '상대방에게 수락 요청을 보냈습니다.', <IconToastMessage />);
            router.replace('/(auth)/caregiver/(tabs)/managePatient');
          }
        },
        onError: (error) => {
          ToastMessage('error', error.message || '환자 등록에 실패했습니다.', <Text>❗️</Text>);
        },
      },
    );
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
                  {formatPhoneNumber(patient.phoneNumber)}
                </Text>
              </View>
            </View>
            <View style={{ position: 'absolute', right: 40 }}>
              <CheckButtonSelected />
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
