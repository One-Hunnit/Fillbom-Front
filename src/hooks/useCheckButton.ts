import { useState } from 'react';
import CheckButtonNormal from '@/assets/svgs/check_button_normal.svg';
import CheckButtonPressed from '@/assets/svgs/check_button_pressed.svg';
import CheckButtonSelected from '@/assets/svgs/check_button_selected.svg';
import CheckButtonSelectedPressed from '@/assets/svgs/check_button_selected_presssed.svg';

const useCheckButton = () => {
  const [checkButtonState, setCheckButtonState] = useState({
    isPressed: false,
    isSelected: false,
  });

  const handleCheckButtonPressIn = () => {
    setCheckButtonState((prev) => ({ ...prev, isPressed: true }));
  };

  const handleCheckButtonPressOut = () => {
    setCheckButtonState((prev) => ({
      isPressed: false,
      isSelected: !prev.isSelected,
    }));
  };

  const getCheckButtonIcon = () => {
    return checkButtonState.isPressed
      ? checkButtonState.isSelected
        ? CheckButtonSelectedPressed
        : CheckButtonPressed
      : checkButtonState.isSelected
        ? CheckButtonSelected
        : CheckButtonNormal;
  };

  return {
    checkButtonState,
    handleCheckButtonPressIn,
    handleCheckButtonPressOut,
    getCheckButtonIcon,
    setCheckButtonState,
  };
};

export default useCheckButton;
