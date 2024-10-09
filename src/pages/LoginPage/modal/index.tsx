import React from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import FillbomButton from '@/components/FillbomButton';
import { FILLBOM_COLOR } from '@/constants/color';

interface IModalComponentProps {
  visible: boolean;
  onClose: () => void;
}
const ModalComponent: React.FC<IModalComponentProps> = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.contentWrapper}>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>로그인에 실패했어요</Text>
              <Text style={styles.message}>다시 시도해주세요</Text>
            </View>
            <FillbomButton
              title="확인"
              layoutType="modal"
              defaultButtonColor={FILLBOM_COLOR.GRAY[200]}
              pressedButtonColor={FILLBOM_COLOR.GRAY[300]}
              defaultTextColor={FILLBOM_COLOR.GRAY[700]}
              pressedTextColor={FILLBOM_COLOR.GRAY[500]}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'column',
    gap: 20,
    height: 128,
    margin: 'auto',
    width: 280,
  },
  message: {
    color: FILLBOM_COLOR.GRAY[800],
    fontFamily: 'Pretendard',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
  },
  messageContainer: {
    width: 'auto',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 168,
    width: 360,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});
export default ModalComponent;
