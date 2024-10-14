/* eslint-disable react-native/no-inline-styles */
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { progressBarStyles } from '../styles';

interface IProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: IProgressBarProps) => {
  const barWidthPercent = useSharedValue(progress);

  const progressAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${barWidthPercent.value}%`,
    };
  });

  useEffect(() => {
    barWidthPercent.value = withSpring(progress, { duration: 800, dampingRatio: 1, stiffness: 200 });
  }, [progress]);

  return (
    <View style={progressBarStyles.container}>
      <Animated.View style={[progressBarStyles.progress, progressAnimatedStyle]} />
    </View>
  );
};

export default ProgressBar;
