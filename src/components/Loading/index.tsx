import LottieView from 'lottie-react-native';
import { Dimensions, StyleSheet, View, type ViewStyle } from 'react-native';

interface ILoadingProps {
  containerStyle?: ViewStyle;
  fullScreen?: boolean;
}

const Loading = ({ containerStyle, fullScreen }: ILoadingProps) => {
  return (
    <View
      style={[
        fullScreen ? { ...styles.fullScreen, height: Dimensions.get('window').height } : styles.container,
        containerStyle,
      ]}
    >
      <LottieView style={styles.lottie} speed={1.5} source={require('@/assets/lotties/loading.json')} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fullScreen: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.195)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 128,
    height: 128,
  },
});

export default Loading;
