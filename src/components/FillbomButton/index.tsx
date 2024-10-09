import React, { useState } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, StyleSheet, View, Pressable } from 'react-native';

interface IFillbomButtonProps {
  title?: string;
  onPress?: () => void;
  svgIcon?: React.FC;
  layoutType?: 'iconText' | 'iconOnly' | 'textOnly' | 'social' | 'modal';
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
                <Text style={[styles.socialText, { color: getTextColor() }, textStyle]}>{title}</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {layoutType === 'modal' && (
        <View style={styles.modalButtonWrapper}>
          <View style={styles.modalTextWrapper}>
            <Text style={[styles.modalText, { color: getTextColor() }, textStyle]}>{title}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 16,
    display: 'flex',
  },
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    width: 342,
  },
  modalButtonWrapper: {
    borderRadius: 12,
    height: 52,
    textAlign: 'center',
    width: 280,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalTextWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
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
  socialText: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
  },
  textWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    height: 24,
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
