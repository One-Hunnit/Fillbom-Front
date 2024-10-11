import React, { useState } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { match } from 'ts-pattern';
import { type TValues } from '@/types/util';

export const BUTTON_TYPE = {
  ICON_TEXT: 'iconText',
  ICON_ONLY: 'iconOnly',
  TEXT_ONLY: 'textOnly',
  SOCIAL: 'social',
} as const;

type TButtonType = TValues<typeof BUTTON_TYPE>;

interface IButtonProps {
  title?: string;
  onPress?: () => void;
  svgIcon?: React.FC<SvgProps>;
  iconColor?: string;

  type?: TButtonType;
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

const Button = ({
  title,
  onPress,
  svgIcon: SvgIcon,
  type = BUTTON_TYPE.TEXT_ONLY,
  buttonStyle = {},
  textStyle = {},
  disabled = false,
  pressedButtonColor,
  disabledButtonColor,
  defaultButtonColor,
  pressedTextColor,
  disabledTextColor,
  defaultTextColor,
}: IButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const getIconColor = () => {
    if (disabled) {
      return disabledTextColor;
    }
    if (isPressed) {
      return pressedTextColor;
    }
    return defaultTextColor;
  };

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
      <View style={styles.contentWrapper}>
        {match(type)
          .with(BUTTON_TYPE.TEXT_ONLY, () => (
            <Text style={[styles.text, textStyle, { color: getTextColor() }]}>{title}</Text>
          ))
          .with(BUTTON_TYPE.ICON_ONLY, () => <View>{SvgIcon && <SvgIcon color={getIconColor()} />}</View>)
          .with(BUTTON_TYPE.ICON_TEXT, () => (
            <View style={styles.wrapper}>
              {SvgIcon && <SvgIcon color={getIconColor()} />}
              <Text style={[styles.text, textStyle, { color: getTextColor() }]}>{title}</Text>
            </View>
          ))
          .with(BUTTON_TYPE.SOCIAL, () => (
            <View style={styles.socialContentWrapper}>
              <View style={styles.social}>
                {SvgIcon && <SvgIcon color={getIconColor()} />}
                <View style={styles.textWrapper}>
                  <Text style={[styles.text, textStyle, { color: getTextColor() }]}>{title}</Text>
                </View>
              </View>
            </View>
          ))
          .exhaustive()}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    display: 'flex',
    height: 52,
    width: '100%',
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

export default Button;
