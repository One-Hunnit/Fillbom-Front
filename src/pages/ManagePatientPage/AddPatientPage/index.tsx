import { useMemo, useState } from 'react';
import { Keyboard, ScrollView, type ViewStyle } from 'react-native';
import IconCancel from '@/assets/svgs/ico_cancel.svg';
import IconSearch from '@/assets/svgs/ico_search.svg';
import Button from '@/components/Button';
import InputLayout from '@/components/InputLayout';
import InputWithIcon from '@/components/InputWithIcon';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import PatientInfo from './components/PatientInfo';
import { patientInfoStyles } from './styles';
import useKeyboardVisible from '../../SignupPage/hooks/useKeyboardVisible';
import ManagePatientLayout from '../Layouts';
import { commonStyles } from '../styles';
import useFindPatient from './hooks/useAddPatient';

const AddPatientPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { postFindPatient, patientList } = useFindPatient();
  const keyboardVisible = useKeyboardVisible();

  const buttonStyle: ViewStyle = keyboardVisible
    ? commonStyles.buttonKeyboardVisible
    : { marginLeft: 20, marginRight: 20, marginBottom: 20, width: 350 };

  const error = phoneNumber.length > 0 && !/\d{11}/g.test(phoneNumber);

  const inputIcon = useMemo(() => {
    return phoneNumber.length > 0 ? IconCancel : isInputFocused ? IconSearch : null;
  }, [phoneNumber, isInputFocused]);

  const onIconPress = useMemo(() => {
    if (inputIcon === IconCancel) {
      return () => setPhoneNumber('');
    } else if (inputIcon === IconSearch) {
      return async () => {
        setIsInputFocused(false);
        await postFindPatient(phoneNumber);
      };
    }
    return undefined;
  }, [inputIcon]);

  return (
    <ManagePatientLayout
      headerText="환자 추가하기"
      setIsInputFocused={setIsInputFocused}
      titleText="전화번호를 입력하면{`\n`}환자를 찾을 수 있습니다"
    >
      <InputLayout label="전화번호 검색" guide="띄어쓰기 없이 11자리를 입력해주세요." error={error}>
        <InputWithIcon
          isFocused={isInputFocused}
          setIsFocused={setIsInputFocused}
          error={error}
          placeholder="01012345678"
          value={phoneNumber}
          maxLength={11}
          keyboardType="number-pad"
          selectedBorderColor={FILLBOM_COLOR.BLUE[500]}
          defaultBorderColor={FILLBOM_COLOR.GRAY[100]}
          defaultBackgoundColor={FILLBOM_COLOR.GRAY[100]}
          pressedBackgroundColor={FILLBOM_COLOR.GRAY[200]}
          defaultTextColor={FILLBOM_COLOR.GRAY[100]}
          pressedTextColor={FILLBOM_COLOR.GRAY[400]}
          activatedTextColor={FILLBOM_COLOR.GRAY[900]}
          defaultIconColor={FILLBOM_COLOR.GRAY[500]}
          pressedIconColor={FILLBOM_COLOR.GRAY[400]}
          onChangeText={setPhoneNumber}
          onIconPress={onIconPress}
          icon={inputIcon}
          textContentType="telephoneNumber"
        />
      </InputLayout>
      <>
        <ScrollView style={patientInfoStyles.container}>
          {patientList && patientList.map((patientInfo) => <PatientInfo key={patientInfo.name} {...patientInfo} />)}
        </ScrollView>
        <Button
          text="다음"
          onPress={async () => {
            await postFindPatient(phoneNumber);
            setIsInputFocused(false);
            Keyboard.dismiss();
          }}
          disabled={phoneNumber.length !== 11}
          defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
          defaultTextColor={FILLBOM_COLOR.GRAY[100]}
          pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
          pressedTextColor={FILLBOM_COLOR.BLUE[200]}
          disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
          disabledTextColor={FILLBOM_COLOR.GRAY[700]}
          textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
          buttonStyle={buttonStyle}
        />
      </>
    </ManagePatientLayout>
  );
};

export default AddPatientPage;
