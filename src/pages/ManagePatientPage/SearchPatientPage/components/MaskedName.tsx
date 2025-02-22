import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconHideText from '@/assets/svgs/ico_hidetext.svg';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const MaskedName = (name: string) => {
  if (name?.length === 1) {
    return <Text style={styles.text}>{name}</Text>;
  }

  const renderMaskedName = () => {
    switch (name.length) {
      case 2:
        return (
          <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name[0]}</Text>
            <IconHideText />
          </View>
        );
      case 3:
        return (
          <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name[0]}</Text>
            <IconHideText />
            <Text style={styles.text}>{name[2]}</Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name[0]}</Text>
            <IconHideText />
            <Text style={styles.text}>{name.slice(2, 4)}</Text>
          </View>
        );
      case 5:
        return (
          <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name.slice(0, 2)}</Text>
            <IconHideText />
            <Text style={styles.text}>{name.slice(2, 4)}</Text>
          </View>
        );
      default:
        return (
          <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name.slice(0, 2)}</Text>
            <IconHideText />
            <Text style={styles.text}>{name.slice(2)}</Text>
          </View>
        );
    }
  };

  return <>{renderMaskedName()}</>;
};

export default MaskedName;

const styles = StyleSheet.create({
  nameWrapper: {
    display: 'flex',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
});
