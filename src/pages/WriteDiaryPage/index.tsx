import { useEditorBridge } from '@10play/tentap-editor';
import { type BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
// import useAccount from '@/hooks/useAccount';
import BottomSheet from './components/BottomSheet';
import Feeling from './components/Feeling';
import Weather from './components/Weather';
import Write from './components/Write';
import { WRITE_DIARY_STEP_KEY } from './constants';

const WriteDiaryPage = () => {
  const [index, setIndex] = useState(0);
  // const { account } = useAccount();
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const questions = [
    {
      title: '좋아하는 과일이나 채소는\n무엇인가요?',
      editor: useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
      }),
    },
    {
      title: '학창 시절 가장 즐거웠던 기억은\n무엇인가요?',
      editor: useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
      }),
    },
    {
      title: '오늘 무슨 색의 옷을 입었나요?',
      editor: useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
      }),
    },
    {
      title: '자유롭게 일기를 써주세요',
      editor: useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
      }),
    },
  ];
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();

  const handleHeaderBack = () => {
    navigation.goBack();
  };

  const buttonText = index === Object.keys(WRITE_DIARY_STEP_KEY).length - 1 ? '저장' : '다음';

  const handleButtonPress = useCallback(() => {
    if (index === Object.keys(WRITE_DIARY_STEP_KEY).length - 1) {
      bottomSheetRef.current?.present();
    } else {
      setIndex((prev) => prev + 1);
    }
  }, [index]);

  const onSelectWeather = useCallback((weather: string) => {
    setSelectedWeather(weather);
  }, []);

  const onSelectFeeling = useCallback((feeling: string) => {
    setSelectedFeeling(feeling);
  }, []);

  const contentsByStep = [
    <Feeling seledtedValue={selectedFeeling} onSelect={onSelectFeeling} />,
    <Weather selectedWeather={selectedWeather} onSelect={onSelectWeather} />,
    ...questions.map(({ title, editor }) => <Write key={index} title={title} editor={editor} />),
  ];

  return (
    <BottomSheetModalProvider>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>
          <Header
            title="일기작성"
            containerStyle={styles.headerContainer}
            onBack={handleHeaderBack}
            backButtonVisible
            actionButton={
              <Button
                text={buttonText}
                defaultTextColor={FILLBOM_COLOR.BLUE[500]}
                buttonStyle={styles.nextButtonStyle}
                onPress={handleButtonPress}
              />
            }
          />
          <View style={styles.container}>{contentsByStep[index]}</View>
        </SafeAreaView>
        <BottomSheet ref={bottomSheetRef} onSubmit={() => {}} />
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};

export default WriteDiaryPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    backgroundColor: FILLBOM_COLOR.GRAY[50],
  },
  nextButtonStyle: {
    position: 'absolute',
    right: 0,
    width: 80,
  },
});
