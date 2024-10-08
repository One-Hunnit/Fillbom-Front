import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../constants/color';

interface ButtonProps {
  title: string;
  onPress: () => void;
  svgIcon?: React.FC;
  layoutType?: 'text' | 'iconTextSeparate' | 'iconTextTogether';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  colorVariant?: keyof typeof colors;
}
export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  svgIcon: SvgIcon = null,
  layoutType = 'text',
  buttonStyle = {},
  textStyle = {},
  disabled = false,
  colorVariant = '',
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getButtonColor = () => {
    if (disabled) {
      return colors[colorVariant][200];
    }
    if (isPressed) {
      console.log(colors[colorVariant][300]);
      return colors[colorVariant][300];
    }
    return colors[colorVariant][500];
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: getButtonColor() }, buttonStyle]}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {layoutType === 'text' && <Text style={[styles.text, textStyle]}>{title}</Text>}

      {layoutType === 'iconTextSeparate' && SvgIcon && (
        <View style={styles.separate}>
          <SvgIcon />
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      )}

      {layoutType === 'iconTextTogether' && SvgIcon && (
        <View style={styles.together}>
          <View style={styles.iconWrapper}>
            <SvgIcon />
          </View>
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
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
    color: '#FFF',
    fontSize: 16,
  },
  together: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
