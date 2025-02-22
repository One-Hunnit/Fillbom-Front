import { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Calendar, type DateData, LocaleConfig } from 'react-native-calendars';
import { type DayProps } from 'react-native-calendars/src/calendar/day';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { DEFAULT_PROFILE_IMAGES } from '@/constants';

// 캘린더의 언어를 한글로 설정
LocaleConfig.locales['ko'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

// 임시 데이터 예시
const diaryEntries = {
  '2025-02-10': {
    marked: true,
    customStyles: {
      container: {
        position: 'relative',
      },
      text: {
        color: 'black',
      },
    },
  },
  '2025-02-15': {
    marked: true,
    customStyles: {
      container: {
        position: 'relative',
      },
      text: {
        color: 'black',
      },
    },
  },
};

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const renderDay = ({ date, marking }: DayProps & { date: DateData }) => {
    return (
      <Pressable style={styles.dayContainer} onPress={() => setSelectedDate(date.dateString)}>
        <Text style={[styles.dayText, date.dateString === selectedDate && styles.selectedText]}>{date.day}</Text>
        {marking?.marked && <Image src={DEFAULT_PROFILE_IMAGES[0]} style={styles.markImage} />}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="일기작성" containerStyle={styles.hader} />
        <Calendar
          style={styles.calendar}
          headerStyle={styles.calendarHeader}
          markedDates={diaryEntries}
          markingType="custom"
          dayComponent={renderDay}
          theme={{
            textMonthFontSize: 20,
            textMonthFontWeight: '600',
            arrowColor: 'black',
          }}
          monthFormat={'yyyy년 MM월'}
        />
        <Button buttonStyle={styles.floatingButton} textStyle={styles.floatingButtonText} onPress={() => {}} text="+" />
      </View>
    </SafeAreaView>
  );
};

export default DiaryPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
  container: {
    flex: 1,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
    marginHorizontal: 10,
  },
  hader: {
    borderBottomWidth: 0,
  },
  calendar: {
    width: '100%',
    height: '100%',
  },
  calendarHeader: {
    gap: 20,
    marginTop: 24,
    marginBottom: 24,
  },
  dayContainer: {
    height: 56,
    gap: 4,
    alignItems: 'center',
  },
  dayText: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[800],
  },
  selectedText: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: '#d9d9d9',
  },
  markImage: {
    width: 32,
    height: 32,
  },
  floatingButton: {
    width: 52,
    height: 52,
    borderRadius: 52,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: FILLBOM_COLOR.GRAY[50],
    borderColor: FILLBOM_COLOR.GRAY[300],
    borderWidth: 1,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: 300,
    color: FILLBOM_COLOR.GRAY[700],
  },
});
