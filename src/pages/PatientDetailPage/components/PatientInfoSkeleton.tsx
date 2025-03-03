import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';

const PatientInfoSkeleton = () => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  const AnimatedView = Animated.createAnimatedComponent(View);

  return (
    <View style={styles.wrapper}>
      <AnimatedView style={[styles.profileImage, { opacity: fadeAnim }]} />
      <View style={styles.infoWrapper}>
        <AnimatedView style={[styles.textLine, styles.nameLine, { opacity: fadeAnim }]} />
        <AnimatedView style={[styles.textLine, styles.shortLine, { opacity: fadeAnim }]} />
        <AnimatedView style={[styles.textLine, styles.mediumLine, { opacity: fadeAnim }]} />
        <AnimatedView style={[styles.textLine, styles.longLine, { opacity: fadeAnim }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 174,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: FILLBOM_COLOR.GRAY[100],
    paddingVertical: 16,
    paddingLeft: 20,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 92,
    height: 92,
    borderRadius: 50,
    backgroundColor: FILLBOM_COLOR.GRAY[300],
  },
  infoWrapper: {
    width: '60%',
    marginLeft: 16,
    justifyContent: 'center',
    gap: 10,
  },
  textLine: {
    height: 18,
    borderRadius: 4,
    backgroundColor: FILLBOM_COLOR.GRAY[300],
  },
  nameLine: {
    width: '80%',
  },
  shortLine: {
    width: '40%',
  },
  mediumLine: {
    width: '70%',
  },
  longLine: {
    width: '90%',
  },
});

export default PatientInfoSkeleton;
