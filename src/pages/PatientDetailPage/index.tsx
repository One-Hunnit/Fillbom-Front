/* eslint-disable react-native/no-inline-styles */
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Divider, Menu, PaperProvider } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import CloseNormal from '@/assets/svgs/ico_close_normal.svg';
import CorrectNormal from '@/assets/svgs/ico_correct_normal.svg';
import IconResponse from '@/assets/svgs/ico_response.svg';
import CommonModal from '@/components/CommonModal';
import Header from '@/components/Header';
import CMenu from '@/components/Menu';
import { ToastMessage } from '@/components/ToastMessage';
import { FILLBOM_COLOR } from '@/constants/color';
import PatientInfoCard from './components/PatientInfoCard';
import PatientInfoSkeleton from './components/PatientInfoSkeleton';
import PatientLastPosition from './components/PatientLastPosition';
import PatientLastPositionSkeleton from './components/PatientLastPositionSkeleton';
import useDeletePatient from './hooks/useDeletePatient';
import useGetPatientDetail from './hooks/useGetPatientDetail';
import { indexStyle } from './styles/index.style';
const PatientDetailPage = () => {
  const [isRightMenuVisible, setIsRightMenuVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const { patientId } = useLocalSearchParams();
  const { data: patientDetailData, refetch, isLoading } = useGetPatientDetail(Number(patientId));
  const { deletePatient } = useDeletePatient(Number(patientId));

  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get('window');

  const openMenu = () => {
    setIsRightMenuVisible(true);
  };
  const closeMenu = () => {
    setIsRightMenuVisible(false);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={indexStyle.safeArea} edges={['left', 'right', 'top', 'bottom']}>
        <Header
          backButtonVisible={true}
          actionButton={<CMenu containerStyle={styles.container} onPress={openMenu} />}
          containerStyle={indexStyle.headerContainer}
          title="환자 상세보기"
        />
        {visible && (
          <CommonModal
            visible={true}
            onClose={() => {
              setVisible(false);
              setIsRightMenuVisible(false);
            }}
            confirmText="삭제"
            title={`환자 관리 리스트에서 \n 삭제하시겠습니까?`}
            onConfirm={async () => {
              const { isSuccess, error } = await deletePatient();

              setIsRightMenuVisible(false);
              setVisible(false);

              if (isSuccess) {
                ToastMessage(`${patientDetailData?.name}님이 환자 관리에서 삭제되었습니다.`, <IconResponse />);
                router.replace('/(auth)/caregiver/(tabs)/managePatient');
              } else {
                ToastMessage(`삭제에 실패했습니다. ${error?.message ?? error}`, <Text>❗️</Text>);
              }
            }}
            onCancel={() => {
              setVisible(false);
              setIsRightMenuVisible(false);
            }}
          />
        )}
        <Menu
          contentStyle={indexStyle.menu}
          visible={isRightMenuVisible}
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
        <View style={{ width: '100%', height: '100%', paddingHorizontal: 20 }}>
          {isLoading ? <PatientInfoSkeleton /> : <PatientInfoCard patientInfo={patientDetailData} />}
          {isLoading ? (
            <PatientLastPositionSkeleton />
          ) : (
            <PatientLastPosition
              onRefresh={refetch}
              location={patientDetailData?.location}
              profileImageUrl={patientDetailData?.profileImageUrl}
            />
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};
export default PatientDetailPage;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
  },
});
