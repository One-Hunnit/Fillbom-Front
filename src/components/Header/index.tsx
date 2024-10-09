import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import ArrowPrevious from '@/assets/svgs/ico_arrow_previous.svg';
import { FILLBOM_COLOR } from '@/constants/color';
import { HEADER_HEIGHT } from '@/constants/ui';
import TEXT_STYLES from '@/styles/textStyles';
import Button, { BUTTON_TYPE } from '../Button';

interface IHeaderProps {
  title: string;
  onBack?: () => void;
  backButtonVisible?: boolean;
  containerStyle?: ViewStyle;
}

const Header = ({ title, onBack, backButtonVisible, containerStyle }: IHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {backButtonVisible && (
        <Button type={BUTTON_TYPE.ICON_ONLY} buttonStyle={styles.backButton} svgIcon={ArrowPrevious} onPress={onBack} />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    position: 'relative',
    borderBottomColor: FILLBOM_COLOR.GRAY[400],
    borderBottomWidth: 1,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    width: 24,
    height: 24,
  },
  title: {
    ...TEXT_STYLES.BODY_MEDIUM_BOLD,
    marginHorizontal: 'auto',
  },
});

export default Header;
