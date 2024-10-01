import type { TextProps } from './Themed';
import { Text } from './Themed';

export function MonoText(props: TextProps) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text {...props} style={[props.style]} />;
}
