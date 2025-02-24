import { useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import CloseDisabled from '@/assets/svgs/ico_close_disabled.svg';
import CloseNormal from '@/assets/svgs/ico_close_normal.svg';
import ClosePressed from '@/assets/svgs/ico_close_pressed.svg';
import CloseSelected from '@/assets/svgs/ico_close_selected.svg';
import CloseSelectedPressed from '@/assets/svgs/ico_close_selected_pressed.svg';

interface ICloseProps {
  isSelected?: boolean;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
  isDisabled?: boolean;
}

const Close = ({ isSelected, containerStyle, iconStyle, onPress, isDisabled }: ICloseProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const renderIcon = () => {
    if (isDisabled) {
      return <CloseDisabled style={iconStyle} />;
    }
    return match([isSelected, isPressed])
      .with([true, true], () => <CloseSelectedPressed style={iconStyle} />)
      .with([true, false], () => <CloseSelected style={iconStyle} />)
      .with([false, true], () => <ClosePressed style={iconStyle} />)
      .with([false, false], () => <CloseNormal style={iconStyle} />)
      .otherwise(() => <CloseDisabled style={iconStyle} />);
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

export default Close;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
