import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import ArrowPrevious from '@/assets/svgs/ico_arrow_previous.svg';
import { FILLBOM_COLOR } from '@/constants/color';
import { HEADER_HEIGHT } from '@/constants/ui';
import TEXT_STYLES from '@/styles/textStyles';
import Button from '../Button';

interface IHeaderProps {
  title: string;
  onBack?: () => void;
  backButtonVisible?: boolean;
  containerStyle?: ViewStyle;
}

const Header = ({ title, onBack, backButtonVisible, containerStyle }: IHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {backButtonVisible && (
        <Button buttonStyle={styles.backButton} icon={ArrowPrevious} onPress={onBack ?? handleBack} />
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
