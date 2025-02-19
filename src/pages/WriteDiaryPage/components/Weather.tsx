import React, { memo } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { DEFAULT_PROFILE_IMAGES } from '@/constants';

interface IWeatherProps {
  selectedWeather: string | null;
  onSelect: (weather: string) => void;
}

const Weather = memo(({ selectedWeather, onSelect }: IWeatherProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 날씨를 선택해주세요.</Text>
      <View style={styles.weatherList}>
        {['맑음', '구름', '눈', '비', '소나기'].map((weather) => {
          const isSelected = selectedWeather === weather;
          return (
            <Pressable
              key={weather}
              style={[styles.weatherItem, isSelected && styles.selectedWeatherItem]}
              onPress={() => onSelect(weather)}
            >
              <Image src={DEFAULT_PROFILE_IMAGES[0]} style={styles.weatherImage} />
              <Text style={[styles.weatherLabel, isSelected && styles.selectedWeatherLabel]}>{weather}</Text>
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
  weatherList: {
    gap: 12,
  },
  weatherItem: {
    borderRadius: 12,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectedWeatherItem: {
    backgroundColor: FILLBOM_COLOR.BLUE[100],
  },
  weatherLabel: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[700],
  },
  selectedWeatherLabel: {
    color: FILLBOM_COLOR.BLUE[500],
  },
  weatherImage: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
});

export default Weather;
