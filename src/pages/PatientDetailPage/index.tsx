/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { Dimensions, Pressable, Text } from 'react-native';
import { Divider, Menu, PaperProvider } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { indexStyle } from './styles/index.style';
import CloseNormal from '@/assets/svgs/ico_close_normal.svg';
import CorrectNormal from '@/assets/svgs/ico_correct_normal.svg';
import CommonModal from '@/components/CommonModal';
import Header from '@/components/Header';
import CMenu from '@/components/Menu';
import { FILLBOM_COLOR } from '@/constants/color';
const PatientDetailPage = () => {
  const [isRightIconVisible, setIsRightIconVisible] = useState(false);
  const openMenu = () => {
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
  const [visible, setVisible] = useState(false);
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
        {visible && (
          <CommonModal
            visible={true}
            onClose={() => {
              setVisible(false);
              setIsRightIconVisible(false);
            }}
            title={`환자 관리 리스트에서 \n 삭제하시겠습니까?`}
            onConfirm={() => {
              setIsRightIconVisible(false);
            }}
            onCancel={() => {
              setVisible(false);
              setIsRightIconVisible(false);
            }}
          />
        )}
        <Menu
          contentStyle={indexStyle.menu}
          visible={isRightIconVisible}
          onDismiss={closeMenu}
          anchorPosition="bottom"
          anchor={{ x: width - 20, y: insets.top + 40 }}
        >
          <Menu.Item
            style={[indexStyle.menuItem, { borderTopLeftRadius: 12, borderTopRightRadius: 12 }]}
            trailingIcon={CorrectNormal}
            onPress={() => {}}
            title="수정하기"
          />
          <Divider style={{ borderColor: FILLBOM_COLOR.GRAY[200] }} />
          <Menu.Item
            style={[indexStyle.menuItem, { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }]}
            onPress={() => {
              setVisible(true);
            }}
            trailingIcon={CloseNormal}
            title="삭제하기"
          />
        </Menu>
        <Text>PatientDetailPage</Text>
        <Pressable onPress={handleRightIconPress}>
          <Text>Back</Text>
        </Pressable>
      </SafeAreaView>
    </PaperProvider>
  );
};
export default PatientDetailPage;
