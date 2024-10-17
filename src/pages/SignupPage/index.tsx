import { type BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import BottomButton from './components/BottomButton';
import BottomSheet from './components/BottomSheet';
import FormPagertView from './components/FormPagerView';
import ProgressBar from './components/ProgressBar';
import useSignup from './hooks/useSignup';
import { useSignupForm } from './hooks/useSignupForm';
import useSignupStep from './hooks/useSignupStep';
import { styles } from './styles';

const SignupPage = () => {
  const { currentStepIndex, currentStepKey, changeStep, isLastStep, progress, isfirstStep } = useSignupStep();
  const { formState, control, getValues, handleSubmit } = useSignupForm();
  const { handleSignup } = useSignup();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handleBack = () => changeStep(currentStepIndex - 1);
  const handlePressBottomButton = () => {
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
          onPress={handlePressBottomButton}
        />
        <BottomSheet ref={bottomSheetRef} onSubmit={handleSubmit(handleSignup)} />
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};

export default SignupPage;
