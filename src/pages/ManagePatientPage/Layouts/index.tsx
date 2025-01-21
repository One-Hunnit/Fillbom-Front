import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';
import React from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { HEADER_HEIGHT } from '@/constants/ui';
import { commonStyles } from './styles';

interface ManagePatientLayoutProps {
  headerText: string;
  setIsInputFocused: (value: boolean) => void;
  children: React.ReactNode;
  titleText: string;
  status: 'REQUEST' | 'ADD';
}

const ManagePatientLayout = ({
  headerText,
  setIsInputFocused,
  children,
  titleText,
  status,
}: ManagePatientLayoutProps) => {
  const childrenArray = React.Children.toArray(children);
  const PRESSABLE_HEIGHT = status === 'REQUEST' ? WINDOW_HEIGHT - HEADER_HEIGHT - 88 : 116 + 142;
  return (
    <KeyboardAwareScrollView contentContainerStyle={commonStyles.safeArea}>
      <SafeAreaView style={commonStyles.safeArea} edges={['left', 'right', 'top', 'bottom']}>
        <Header backButtonVisible={true} containerStyle={commonStyles.headerContainer} title={headerText} />
        <View style={commonStyles.pageWrapper}>
          <Pressable
            onPress={() => {
              setIsInputFocused(false);
              Keyboard.dismiss();
            }}
            style={[commonStyles.pressableContainer, { height: PRESSABLE_HEIGHT }]}
          >
            <View>
              <View style={commonStyles.titleWrapper}>
                <Text style={commonStyles.title}>{titleText}</Text>
              </View>
              {childrenArray[0]}
            </View>
          </Pressable>
          <View style={[commonStyles.example, { height: WINDOW_HEIGHT - HEADER_HEIGHT - PRESSABLE_HEIGHT }]}>
            {childrenArray[1]}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ManagePatientLayout;
