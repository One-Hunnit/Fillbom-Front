import { useState } from 'react';
import { SIGNUP_STEPS_KEYS } from '../constants';

export default function useSignupStep() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStepKey = SIGNUP_STEPS_KEYS[currentStepIndex];
  const isfirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === SIGNUP_STEPS_KEYS.length - 1;
  const progress = (currentStepIndex / (SIGNUP_STEPS_KEYS.length - 1)) * 100;

  const changeStep = (index: number): void => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    currentStepKey,
    isfirstStep,
    isLastStep,
    progress,
    changeStep,
  };
}
