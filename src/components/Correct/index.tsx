import { useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import CorrectDisabled from '@/assets/svgs/ico_correct_disabled.svg';
import CorrectNormal from '@/assets/svgs/ico_correct_normal.svg';
import CorrectPressed from '@/assets/svgs/ico_correct_pressed.svg';

interface ICorrectProps {
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
  isDisabled?: boolean;
}

const Correct = ({ isDisabled, containerStyle, iconStyle, onPress }: ICorrectProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const renderIcon = () => {
    if (isDisabled) return <CorrectDisabled style={iconStyle} />;

    return isPressed ? <CorrectPressed style={iconStyle} /> : <CorrectNormal style={iconStyle} />;
  };

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        onPress?.();
      }}
      style={[styles.container, containerStyle]}
    >
      {renderIcon()}
    </Pressable>
  );
};

export default Correct;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
