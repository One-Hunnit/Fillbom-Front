import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import ico_apple_logo from '@/assets/svgs/ico_apple_logo.svg';
import ico_kakao_logo from '@/assets/svgs/ico_kakao_logo.svg';
import LoadingIcon from '@/assets/svgs/loadingIcon.svg';
import FillbomButton from '@/components/FillbomButton';
import { FILLBOM_COLOR } from '@/constants/color';
import { authState } from '@/stores/authStore';
import useLogin from './hooks/useLogin';
import ModalComponent from './modal';
import { styles } from './styles';

const LoginPage = () => {
  const { handleLogin, signInWithKakao, modalVisible, setModalVisible, loading } = useLogin();
  const auth = useRecoilValue(authState);

  if (auth) return null;

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingOverlay}>
          <LoadingIcon />
        </View>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>로그인 페이지</Text>
          </View>
          <ModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} />
          <View style={styles.buttonContainer}>
            <FillbomButton
              title="로그인"
              layoutType="textOnly"
              pressedButtonColor={FILLBOM_COLOR.BLUE[300]}
              disabledButtonColor={FILLBOM_COLOR.BLUE[200]}
              defaultButtonColor={FILLBOM_COLOR.BLUE[500]}
              pressedTextColor={FILLBOM_COLOR.BLUE[200]}
              disabledTextColor={FILLBOM_COLOR.BLUE[300]}
              defaultTextColor={FILLBOM_COLOR.GRAY[100]}
              onPress={handleLogin}
            />
            <FillbomButton
              title="카카오톡으로 시작하기"
              layoutType="social"
              svgIcon={ico_kakao_logo}
              defaultButtonColor={'#FFE300'}
              pressedButtonColor={'#FFE300'}
              defaultTextColor={FILLBOM_COLOR.GRAY[900]}
              pressedTextColor={FILLBOM_COLOR.GRAY[900]}
              onPress={signInWithKakao}
            />
            <FillbomButton
              title="Apple ID로 시작하기"
              layoutType="social"
              svgIcon={ico_apple_logo}
              defaultButtonColor={FILLBOM_COLOR.GRAY[900]}
              pressedButtonColor={FILLBOM_COLOR.GRAY[900]}
              defaultTextColor={FILLBOM_COLOR.GRAY[100]}
              pressedTextColor={FILLBOM_COLOR.GRAY[100]}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default LoginPage;
