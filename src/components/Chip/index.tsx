import { useState } from 'react';
import { Pressable, StyleSheet, Text, type TextStyle, type ViewStyle } from 'react-native';
import { match } from 'ts-pattern';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

interface IChipProps {
  title: string;
  selected?: boolean;
  defaultBackgroundColor?: string;
  defaultTextColor?: string;
  defaultBorderColor?: string;
  pressedBackgroundColor?: string;
  pressedTextColor?: string;
  pressedBorderColor?: string;
  selectedBackgroundColor?: string;
  selectedTextColor?: string;
  selectedBorderColor?: string;
  selectedPressedBackgroundColor?: string;
  selectedPressedTextColor?: string;
  selectedPressedBorderColor?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

const Chip = ({
  selected,
  title,
  defaultBackgroundColor = FILLBOM_COLOR.GRAY[100],
  defaultTextColor = FILLBOM_COLOR.GRAY[700],
  defaultBorderColor = FILLBOM_COLOR.GRAY[300],
  pressedBackgroundColor = FILLBOM_COLOR.GRAY[300],
  pressedTextColor = FILLBOM_COLOR.GRAY[500],
  pressedBorderColor = FILLBOM_COLOR.GRAY[400],
  selectedBackgroundColor = FILLBOM_COLOR.BLUE[100],
  selectedTextColor = FILLBOM_COLOR.BLUE[500],
  selectedBorderColor = FILLBOM_COLOR.BLUE[200],
  selectedPressedBackgroundColor = FILLBOM_COLOR.BLUE[300],
  selectedPressedTextColor = FILLBOM_COLOR.BLUE[200],
  selectedPressedBorderColor = FILLBOM_COLOR.BLUE[300],
  containerStyle,
  textStyle,
  onPress,
}: IChipProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const getContainerColor = () => {
    return match([!!selected, isPressed])
      .with([true, true], () => ({
        borderColor: selectedPressedBorderColor,
        backgroundColor: selectedPressedBackgroundColor,
      }))
      .with([true, false], () => ({
        borderColor: selectedBorderColor,
        backgroundColor: selectedBackgroundColor,
      }))
      .with([false, true], () => ({
        borderColor: pressedBorderColor,
        backgroundColor: pressedBackgroundColor,
      }))
      .with([false, false], () => ({
        borderColor: defaultBorderColor,
        backgroundColor: defaultBackgroundColor,
      }))
      .exhaustive();
  };

  const getTextColor = () => {
    return match([!!selected, isPressed])
      .with([true, true], () => ({
        color: selectedPressedTextColor,
      }))
      .with([true, false], () => ({
        color: selectedTextColor,
      }))
      .with([false, true], () => ({
        color: pressedTextColor,
      }))
      .with([false, false], () => ({
        color: defaultTextColor,
      }))
      .exhaustive();
  };

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        onPress?.();
      }}
      style={[styles.container, getContainerColor(), containerStyle]}
    >
      <Text style={[styles.text, getTextColor(), textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    height: 32,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TEXT_STYLES.BODY_MEDIUM_MEDIUM,
  },
});
