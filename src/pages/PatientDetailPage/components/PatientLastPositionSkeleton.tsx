import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import patientLastPositionStyle from '../styles/patientLastPosition.style';
import { FILLBOM_COLOR } from '@/constants/color';

const PatientLastPositionSkeleton = () => {
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
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ width: '100%', height: '100%' }}>
      <View style={patientLastPositionStyle.lastLocationHeader}>
        <AnimatedView style={[styles.lastLocationHeaderText, { opacity: fadeAnim }]} />
        <AnimatedView style={[styles.refreshButton, { opacity: fadeAnim }]} />
      </View>
      <View style={[patientLastPositionStyle.mapContainer, { borderColor: FILLBOM_COLOR.GRAY[200] }]}>
        <AnimatedView style={[styles.mapSkeleton, { opacity: fadeAnim }]} />
        <View style={styles.markerContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  refreshButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: FILLBOM_COLOR.GRAY[300],
  },
  mapSkeleton: {
    width: '100%',
    height: '100%',
    backgroundColor: FILLBOM_COLOR.GRAY[200],
    position: 'absolute',
  },
  markerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  lastLocationHeaderText: {
    width: 150,
    height: 20,
    backgroundColor: FILLBOM_COLOR.GRAY[300],
    borderRadius: 8,
  },
});

export default PatientLastPositionSkeleton;
