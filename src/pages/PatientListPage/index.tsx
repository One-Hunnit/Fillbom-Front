import { Text, View } from 'react-native';
import Button from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import { styles } from './styles';

const PatientListPage = () => {
  return (
    <View style={styles.container}>
      <Text>환자 관리 페이지</Text>
      <View style={styles.buttonWrapper}>
        <Button
          text="환자 추가하기"
          defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
          defaultTextColor={FILLBOM_COLOR.GRAY[100]}
          pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
          pressedTextColor={FILLBOM_COLOR.BLUE[200]}
          pressedIconColor={FILLBOM_COLOR.GRAY[700]}
        />
      </View>
    </View>
  );
};

export default PatientListPage;
