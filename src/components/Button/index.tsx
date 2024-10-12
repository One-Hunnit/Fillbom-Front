import React, { memo, useState } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { Text, StyleSheet, Pressable } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { type TValues } from '@/types/util';

export const ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

type TIconPosition = TValues<typeof ICON_POSITION>;

interface IButtonProps {
  text?: string;
  subText?: string;
  icon?: React.FC<SvgProps>;
  iconPosition?: TIconPosition;
  onPress?: () => void;
  disabled?: boolean;
  defaultBackgoundColor?: string;
  defaultTextColor?: string;
  defaultIconColor?: string;
  pressedBackgroundColor?: string;
  pressedTextColor?: string;
  pressedIconColor?: string;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  disabledIconColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
}

const Button = memo(
  ({
    text,
    subText,
    onPress,
    icon: SvgIcon,
    iconPosition = ICON_POSITION.LEFT,
    disabled,
    defaultBackgoundColor,
    defaultTextColor,
    defaultIconColor,
    pressedBackgroundColor,
    pressedTextColor,
    pressedIconColor,
    disabledBackgroundColor,
    disabledTextColor,
    disabledIconColor,
    buttonStyle,
    textStyle,
    iconStyle,
  }: IButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const getButtonColor = () => {
      if (disabled) {
        return disabledBackgroundColor;
      }
      if (isPressed) {
        return pressedBackgroundColor;
      }
      return defaultBackgoundColor;
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

    const getIconColor = () => {
      if (disabled) {
        return disabledIconColor;
      }
      if (isPressed) {
        return pressedIconColor;
      }
      return defaultIconColor;
    };

    return (
      <Pressable
        style={[styles.container, { backgroundColor: getButtonColor() }, buttonStyle]}
        disabled={disabled}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {SvgIcon && iconPosition === ICON_POSITION.LEFT && <SvgIcon color={getIconColor()} style={iconStyle} />}
        {text && <Text style={[styles.text, textStyle, { color: getTextColor() }]}>{text}</Text>}
        {subText && <Text style={[styles.subText, textStyle, { color: getTextColor() }]}>{subText}</Text>}
        {SvgIcon && iconPosition === ICON_POSITION.RIGHT && <SvgIcon color={getIconColor()} style={iconStyle} />}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    gap: 8,
  },
  text: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
  },
  subText: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
  },
});

export const MonoButton = (props: IButtonProps) => (
  <Button
    {...props}
    defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
    defaultTextColor={FILLBOM_COLOR.GRAY[700]}
    disabledBackgroundColor={FILLBOM_COLOR.GRAY[400]}
    disabledTextColor={FILLBOM_COLOR.GRAY[200]}
    pressedBackgroundColor={FILLBOM_COLOR.GRAY[500]}
    pressedTextColor={FILLBOM_COLOR.GRAY[300]}
  />
);

export const ColorButton = (props: IButtonProps) => (
  <Button
    {...props}
    defaultBackgoundColor={FILLBOM_COLOR.BLUE[100]}
    defaultTextColor={FILLBOM_COLOR.BLUE[500]}
    disabledBackgroundColor={FILLBOM_COLOR.BLUE[200]}
    disabledTextColor={FILLBOM_COLOR.BLUE[300]}
    pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
    pressedTextColor={FILLBOM_COLOR.BLUE[200]}
  />
);

export default Button;
