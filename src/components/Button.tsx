import React, { useState } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, StyleSheet, View, Pressable } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  svgIcon?: React.FC;
  layoutType?: 'text' | 'iconTextSeparate' | 'iconTextTogether';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  pressedButtonColor?: string;
  disabledButtonColor?: string;
  defaultButtonColor?: string;
  pressedTextColor?: string;
  disabledTextColor?: string;
  defaultTextColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  svgIcon: SvgIcon = null,
  layoutType = 'text',
  buttonStyle = {},
  textStyle = {},
  disabled = false,
  pressedButtonColor,
  disabledButtonColor,
  defaultButtonColor,
  pressedTextColor,
  disabledTextColor,
  defaultTextColor,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getButtonColor = () => {
    if (disabled) {
      return disabledButtonColor;
    }
    if (isPressed) {
      return pressedButtonColor;
    }
    return defaultButtonColor;
  };

  const getTextColor = () => {
    if (disabled) {
      return disabledTextColor;
    }
    if (isPressed) {
      return pressedTextColor;
    }
    return defaultTextColor;
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: getButtonColor() }, buttonStyle]}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {layoutType === 'text' && <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>}
      {layoutType === 'iconTextSeparate' && SvgIcon && (
        <View style={styles.separate}>
          <SvgIcon />
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
        </View>
      )}

      {layoutType === 'iconTextTogether' && SvgIcon && (
        <View style={styles.together}>
          <View style={styles.iconWrapper}>
            <SvgIcon />
          </View>
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    display: 'flex',
    height: 52,
    padding: 10,
    width: 342,
  },
  iconWrapper: {
    marginRight: 10,
  },
  separate: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  together: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
