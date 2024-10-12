import { StyleSheet, TextInput as RNTextInput, type TextInputProps as RNTextInputProps } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

interface ITextInputProps extends RNTextInputProps {
  error?: boolean;
  color?: string;
  errorColor?: string;
}

const TextInput = ({
  error,
  color = FILLBOM_COLOR.BLUE[300],
  errorColor = FILLBOM_COLOR.PINK[500],
  ...props
}: ITextInputProps) => {
  const getStyle = () => ({
    borderColor: error ? errorColor : color,
  });

  return <RNTextInput style={[styles.input, getStyle()]} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    width: '100%',
    paddingBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
});
