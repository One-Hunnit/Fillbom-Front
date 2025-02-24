import React, { memo } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { DEFAULT_PROFILE_IMAGES } from '@/constants';

interface IFeelingProps {
  seledtedValue: string | null;
  onSelect: (feeling: string) => void;
}

const Feeling = memo(({ seledtedValue, onSelect }: IFeelingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 감정을 선택해주세요.</Text>
      <View style={styles.feelingList}>
        {['행복', '슬픔', '평온', '분노', '걱정'].map((feeling) => {
          const isSelected = seledtedValue === feeling;
          return (
            <Pressable
              key={feeling}
              style={[styles.feelingItem, isSelected && styles.selectedFeelingItem]}
              onPress={() => onSelect(feeling)}
            >
              <Image src={DEFAULT_PROFILE_IMAGES[0]} style={styles.feelingImage} />
              <Text style={[styles.feelingLabel, isSelected && styles.selectedFeelingLabel]}>{feeling}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
  title: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
    marginBottom: 28,
  },
  feelingList: {
    gap: 12,
  },
  feelingItem: {
    borderRadius: 12,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectedFeelingItem: {
    backgroundColor: FILLBOM_COLOR.BLUE[100],
  },
  feelingLabel: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[700],
  },
  selectedFeelingLabel: {
    color: FILLBOM_COLOR.GRAY[900],
  },
  feelingImage: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
});

export default Feeling;
