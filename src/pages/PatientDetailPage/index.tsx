import { useState } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { Divider, Menu, PaperProvider } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { indexStyle } from './styles/index.style';
import Header from '@/components/Header';
import CMenu from '@/components/Menu';
const PatientDetailPage = () => {
  const [isRightIconVisible, setIsRightIconVisible] = useState(false);
  const openMenu = () => {
    console.log('openMenu');
    setIsRightIconVisible(true);
  };
  const closeMenu = () => {
    setIsRightIconVisible(false);
  };

  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get('window');

  const handleRightIconPress = () => {
    //수정 삭제 모달 오픈
  };
  return (
    <PaperProvider>
      <SafeAreaView style={indexStyle.safeArea} edges={['left', 'right', 'top', 'bottom']}>
        <Header
          backButtonVisible={true}
          rightIcon={<CMenu onPress={openMenu} />}
          onRightIconPress={openMenu}
          isRightIconVisible={true}
          containerStyle={indexStyle.headerContainer}
          title="환자 상세보기"
        />
        <View>
          <Menu
            visible={isRightIconVisible}
            onDismiss={closeMenu}
            anchorPosition="bottom"
            anchor={{ x: width - 20, y: insets.top + 40 }}
          >
            <Menu.Item onPress={() => {}} title="수정하기" />
            <Divider />
            <Menu.Item onPress={() => {}} title="삭제하기" />
          </Menu>
        </View>
        <Text>PatientDetailPage</Text>
        <Pressable onPress={handleRightIconPress}>
          <Text>Back</Text>
        </Pressable>
      </SafeAreaView>
    </PaperProvider>
  );
};
export default PatientDetailPage;
