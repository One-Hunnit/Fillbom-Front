import React from 'react';
import { StyleSheet, View, Modal, Text, Dimensions } from 'react-native';
import Button from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

interface IModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<IModalComponentProps> = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>{'로그인에 실패했어요\n다시 시도해주세요'}</Text>
          <Button
            text="확인"
            defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
            defaultTextColor={FILLBOM_COLOR.GRAY[700]}
            pressedBackgroundColor={FILLBOM_COLOR.GRAY[300]}
            pressedTextColor={FILLBOM_COLOR.GRAY[500]}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 20,
    height: 168,
    padding: 20,
    width: Dimensions.get('window').width - 70,
  },
  message: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
    textAlign: 'center',
  },
});
export default ModalComponent;
