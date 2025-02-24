import { useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import EraserDisabled from '@/assets/svgs/ico_eraser_disabled.svg';
import EraserNormal from '@/assets/svgs/ico_eraser_normal.svg';
import EraserPressed from '@/assets/svgs/ico_eraser_pressed.svg';

interface IEraserProps {
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
  isDisabled?: boolean;
}

const Eraser = ({ isDisabled, containerStyle, iconStyle, onPress }: IEraserProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const renderIcon = () => {
    if (isDisabled) return <EraserDisabled style={iconStyle} />;

    return isPressed ? <EraserPressed style={iconStyle} /> : <EraserNormal style={iconStyle} />;
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

export default Eraser;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
