import React, { useState } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, StyleSheet, View, Pressable } from 'react-native';

interface IFillbomButtonProps {
  title?: string;
  onPress?: () => void;
  svgIcon?: React.FC;
  layoutType?: 'iconText' | 'iconOnly' | 'textOnly' | 'social';
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

const FillbomButton: React.FC<IFillbomButtonProps> = ({
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
      {layoutType === 'textOnly' && (
        <View style={styles.contentWrapper}>
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
        </View>
      )}
      {layoutType === 'iconOnly' && SvgIcon && (
        <View style={styles.contentWrapper}>
          <View>
            <SvgIcon />
          </View>
        </View>
      )}
      {layoutType === 'iconText' && SvgIcon && (
        <View style={styles.contentWrapper}>
          <View style={styles.wrapper}>
            <SvgIcon />
            <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
          </View>
        </View>
      )}

      {layoutType === 'social' && SvgIcon && (
        <View style={styles.contentWrapper}>
          <View style={styles.socialContentWrapper}>
            <View style={styles.social}>
              <SvgIcon />
              <View style={styles.textWrapper}>
                <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
              </View>
            </View>
          </View>
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
    width: 342,
  },
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  social: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  socialContentWrapper: {
    flexDirection: 'row',
    height: '100%',
    width: 302,
  },
  text: {
    fontSize: 16,
  },
  textWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 24,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

export default FillbomButton;
