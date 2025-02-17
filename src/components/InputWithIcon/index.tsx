import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, type TextInputProps as RNTextInputProps } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

interface IInputWithIconProps extends RNTextInputProps {
  icon?: React.FC<SvgProps> | null;
  error?: boolean;
  maxLength?: number;
  defaultBackgoundColor?: string;
  defaultBorderColor?: string;
  defaultIconColor?: string;
  defaultTextColor?: string;
  pressedBackgroundColor?: string;
  pressedIconColor?: string;
  pressedTextColor?: string;
  errorBackgroundColor?: string;
  errorTextColor?: string;
  selectedBorderColor?: string;
  activatedTextColor?: string;
  isFocused?: boolean;
  onSubmitEditing?: (e: any) => void;
  onIconPress?: () => void | undefined;
  setIsFocused: (isFocused: boolean) => void;
}

const InputWithIcon = ({
  icon: SvgIcon,
  placeholder,
  value: inputValue,
  error,
  onPress,
  onIconPress,
  onChangeText,
  isFocused,
  setIsFocused,
  maxLength,
  defaultBackgoundColor,
  defaultBorderColor,
  defaultIconColor,
  defaultTextColor,
  pressedBackgroundColor,
  pressedIconColor,
  pressedTextColor,
  errorBackgroundColor,
  errorTextColor,
  selectedBorderColor,
  activatedTextColor,
  onSubmitEditing,
  ...props
}: IInputWithIconProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const getBackgroundColor = () => {
    if (error) return errorBackgroundColor;
    if (isPressed) return pressedBackgroundColor;
    return defaultBackgoundColor;
  };
  const getBorderColor = () => {
    if (error) return errorBackgroundColor;
    if (isPressed) return pressedBackgroundColor;
    if (isFocused) return selectedBorderColor;
    return defaultBorderColor;
  };
  const getTextColor = () => {
    if (inputValue?.length == maxLength) return activatedTextColor;
    if (error) return errorTextColor;
    if (isPressed) return pressedTextColor;
    return defaultTextColor;
  };

  const getIconColor = () => {
    if (error) return defaultIconColor;
    if (isPressed) return pressedIconColor;
    return defaultIconColor;
  };

  return (
    <Pressable
      style={[
        styles.inputWrapper,
        { backgroundColor: getBackgroundColor(), borderColor: getBorderColor() },
        error && styles.errorInputWrapper,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <TextInput
        onFocus={() => setIsFocused(true)}
        autoFocus={true}
        placeholder={placeholder}
        value={inputValue}
        style={[styles.input, { color: getTextColor() }]}
        onChangeText={onChangeText}
        onSubmitEditing={(e) => onSubmitEditing && onSubmitEditing(e)}
        maxLength={maxLength}
        {...props}
      />
      <Pressable onPress={onIconPress}>{SvgIcon && <SvgIcon color={getIconColor()} />}</Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    width: '100%',
    height: 50,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: FILLBOM_COLOR.BLUE[200],
    color: FILLBOM_COLOR.GRAY[500],
    flexDirection: 'row',
  },
  errorInputWrapper: {
    borderColor: FILLBOM_COLOR.PINK[500],
  },
  input: {
    flex: 1,
    height: '100%',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    color: FILLBOM_COLOR.GRAY[500],
  },
});

export default InputWithIcon;
