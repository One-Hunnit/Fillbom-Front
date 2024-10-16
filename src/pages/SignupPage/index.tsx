import { type BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { useAuthStore } from '@/stores/authStore';
import { ACCOUNT_STATUS } from '@/constants';
import BottomButton from './components/BottomButton';
import BottomSheet from './components/BottomSheet';
import FormPagertView from './components/FormPagerView';
import ProgressBar from './components/ProgressBar';
import { type TSignupFormData, useSignupForm } from './hooks/useSignupForm';
import useSignupStep from './hooks/useSignupStep';
import { styles } from './styles';

const SignupPage = () => {
  const router = useRouter();
  const { account, setState } = useAuthStore();
  const { currentStepIndex, currentStepKey, changeStep, isLastStep, progress, isfirstStep } = useSignupStep();
  const { formState, control, getValues, handleSubmit } = useSignupForm();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handleBack = () => changeStep(currentStepIndex - 1);
  const handleSignup = (formData: TSignupFormData) => {
    console.log(formData);
    account && setState('account', { ...account, status: ACCOUNT_STATUS.DONE });
    router.replace('/');
  };

  const handlePress = () => {
    isLastStep ? bottomSheetRef.current?.present() : changeStep(currentStepIndex + 1);
  };

  return (
    <BottomSheetModalProvider>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
          <Header
            title="회원가입"
            containerStyle={styles.headerContainer}
            backButtonVisible={!isfirstStep}
            onBack={handleBack}
          />
          <View style={styles.container}>
            {progress ? <ProgressBar progress={progress} /> : null}
            <FormPagertView index={currentStepIndex} changeStep={changeStep} getValues={getValues} control={control} />
          </View>
        </SafeAreaView>
        <BottomButton
          formState={formState}
          currentStepKey={currentStepKey}
          isLastStep={isLastStep}
          onPress={handlePress}
        />
        <BottomSheet ref={bottomSheetRef} onSubmit={handleSubmit(handleSignup)} />
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};

export default SignupPage;
