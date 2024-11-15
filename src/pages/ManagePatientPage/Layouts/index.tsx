import React from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { commonStyles } from '../styles';

interface ManagePatientLayoutProps {
  headerText: string;
  setIsInputFocused: (value: boolean) => void;
  children: React.ReactNode; // ReactNode로 변경하여 배열과 단일 컴포넌트 모두 허용
  titleText: string;
}

const ManagePatientLayout = ({ headerText, setIsInputFocused, children, titleText }: ManagePatientLayoutProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <SafeAreaView style={commonStyles.safeArea} edges={['left', 'right', 'top']}>
      <Header backButtonVisible={true} containerStyle={commonStyles.headerContainer} title={headerText} />
      <View style={commonStyles.pageWrapper}>
        <Pressable
          onPress={() => {
            setIsInputFocused(false);
            Keyboard.dismiss();
          }}
          style={commonStyles.pressableContainer}
        >
          <View style={commonStyles.titleWrapper}>
            <Text style={commonStyles.title}>{titleText}</Text>
          </View>
          {childrenArray[0]}
        </Pressable>
        {childrenArray[1]}
      </View>
    </SafeAreaView>
  );
};

export default ManagePatientLayout;
