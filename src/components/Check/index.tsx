import { useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import CheckButtonNormal from '@/assets/svgs/check_button_normal.svg';
import CheckButtonPressed from '@/assets/svgs/check_button_pressed.svg';
import CheckButtonSelected from '@/assets/svgs/check_button_selected.svg';
import CheckButtonSelectedPressed from '@/assets/svgs/check_button_selected_presssed.svg';

interface ICheckProps {
  checked?: boolean;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
}

const Check = ({ checked, containerStyle, iconStyle, onPress }: ICheckProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        onPress?.();
      }}
      style={[styles.container, containerStyle]}
    >
      {match([!!checked, isPressed])
        .with([true, true], () => <CheckButtonSelectedPressed style={iconStyle} />)
        .with([true, false], () => <CheckButtonSelected style={iconStyle} />)
        .with([false, true], () => <CheckButtonPressed style={iconStyle} />)
        .with([false, false], () => <CheckButtonNormal style={iconStyle} />)
        .exhaustive()}
    </Pressable>
  );
};

export default Check;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
