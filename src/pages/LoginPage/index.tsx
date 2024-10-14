import { View, Text, SafeAreaView } from 'react-native';
import AppleLogoIcon from '@/assets/svgs/ico_apple_logo.svg';
import KakaoLogoIcon from '@/assets/svgs/ico_kakao_logo.svg';
import Button from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import useLogin from './hooks/useLogin';
import ModalComponent from './modal';
import { styles } from './styles';

const LoginPage = () => {
  const { handleLogin, signInWithKakao, modalVisible, setModalVisible } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>로그인 페이지</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="카카오톡으로 시작하기"
          icon={KakaoLogoIcon}
          defaultBackgoundColor="#FFE300"
          defaultTextColor={FILLBOM_COLOR.GRAY[900]}
          defaultIconColor={FILLBOM_COLOR.GRAY[900]}
          pressedBackgroundColor="#FFEF70"
          pressedTextColor={FILLBOM_COLOR.GRAY[700]}
          pressedIconColor={FILLBOM_COLOR.GRAY[700]}
          onPress={signInWithKakao}
          iconStyle={styles.buttonIcon}
        />
        {/* <Button
          text="Apple ID로 시작하기"
          icon={AppleLogoIcon}
          defaultBackgoundColor={FILLBOM_COLOR.GRAY[900]}
          defaultTextColor={FILLBOM_COLOR.GRAY[100]}
          defaultIconColor={FILLBOM_COLOR.GRAY[100]}
          pressedBackgroundColor={FILLBOM_COLOR.GRAY[700]}
          pressedTextColor={FILLBOM_COLOR.GRAY[400]}
          pressedIconColor={FILLBOM_COLOR.GRAY[400]}
          onPress={handleLogin}
          iconStyle={styles.buttonIcon}
        /> */}
      </View>
      <ModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
};

export default LoginPage;
