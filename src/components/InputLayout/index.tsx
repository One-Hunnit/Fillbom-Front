import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoIcon from '@/assets/svgs/icon-info.svg';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

interface IInputLayoutProps {
  label?: string;
  error?: boolean;
  guide?: string;
  children: React.ReactNode;
}

const InputLayout = ({ label, error, guide, children }: IInputLayoutProps) => {
  const color = error ? FILLBOM_COLOR.PINK[500] : FILLBOM_COLOR.GRAY[700];

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color }]}>{label}</Text>}
      {children}
      {guide && (
        <View style={styles.guideContainer}>
          <InfoIcon color={color} style={styles.guideIcon} />
          <Text style={[styles.guideText, { color }]}>{guide}</Text>
        </View>
      )}
    </View>
  );
};

export default InputLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  label: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[700],
    marginBottom: 10,
  },
  guideContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 4,
    alignItems: 'center',
    height: 24,
  },
  guideIcon: {
    width: 24,
    height: 24,
  },
  guideText: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[500],
  },
});
