import { type FormState } from 'react-hook-form';
import { type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { match } from 'ts-pattern';
import Button from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { SIGNUP_STEP_KEY, type TSignupStepKey } from '../constants';
import useKeyboardVisible from '../hooks/useKeyboardVisible';
import { type TSignupFormData } from '../hooks/useSignupForm';
import { styles } from '../styles';

interface IBottomButtonProps {
  formState: FormState<TSignupFormData>;
  currentStepKey: TSignupStepKey;
  isLastStep: boolean;
  onPress: () => void;
}

const BottomButton = ({ formState, currentStepKey, isLastStep, onPress }: IBottomButtonProps) => {
  const { errors, dirtyFields, isValid } = formState;
  const keyboardVisible = useKeyboardVisible();
  const buttonTitle = isLastStep ? '약관에 동의하기' : '다음';
  const buttonDisabled = match(currentStepKey)
    .with(
      SIGNUP_STEP_KEY.ROLE,
      SIGNUP_STEP_KEY.NAME,
      SIGNUP_STEP_KEY.BIRTH,
      SIGNUP_STEP_KEY.GENDER,
      SIGNUP_STEP_KEY.PHONE,
      (key) => !!errors[key] || !dirtyFields[key],
    )
    .with(SIGNUP_STEP_KEY.CONFIRM, () => !isValid)
    .exhaustive();

  const { left, right, bottom } = useSafeAreaInsets();
  const buttonStyle: ViewStyle = keyboardVisible
    ? styles.buttonKeyboardVisible
    : { marginLeft: left + 20, marginRight: right + 20, marginBottom: bottom, width: 'auto' };

  return (
    <Button
      text={buttonTitle}
      onPress={onPress}
      disabled={buttonDisabled}
      defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
      defaultTextColor={FILLBOM_COLOR.GRAY[100]}
      pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
      pressedTextColor={FILLBOM_COLOR.BLUE[200]}
      disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
      disabledTextColor={FILLBOM_COLOR.GRAY[700]}
      textStyle={TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD}
      buttonStyle={buttonStyle}
    />
  );
};

export default BottomButton;
