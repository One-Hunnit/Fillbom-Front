import { useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import MenuDisabled from '@/assets/svgs/ico_menu_disabled.svg';
import MenuNormal from '@/assets/svgs/ico_menu_normal.svg';
import MenuPressed from '@/assets/svgs/ico_menu_pressed.svg';

interface IMenuProps {
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
  isDisabled?: boolean;
}

const Menu = ({ isDisabled, containerStyle, iconStyle, onPress }: IMenuProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const renderIcon = () => {
    if (isDisabled) return <MenuDisabled style={iconStyle} />;

    return isPressed ? <MenuPressed style={iconStyle} /> : <MenuNormal style={iconStyle} />;
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

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});
