import { View, Text } from 'react-native';
import infoIconBlack from '@/assets/svgs/infoIconBlack.svg';
import FillbomButton from '@/components/FillbomButton';
import { FILLBOM_COLOR } from '@/constants/color';
import useLogin from './hooks/useLogin';
import { styles } from './styles';

const LoginPage = () => {
  const { handleLogin, signInWithKakao } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <FillbomButton
        title="로그인"
        layoutType="iconText"
        svgIcon={infoIconBlack}
        pressedButtonColor={FILLBOM_COLOR.BLUE[300]}
        disabledButtonColor={FILLBOM_COLOR.BLUE[200]}
        defaultButtonColor={FILLBOM_COLOR.BLUE[500]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledTextColor={FILLBOM_COLOR.BLUE[300]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        onPress={handleLogin}
      />
      <FillbomButton
        title="카카오 로그인"
        layoutType="iconText"
        svgIcon={infoIconBlack}
        pressedButtonColor={FILLBOM_COLOR.BLUE[300]}
        disabledButtonColor={FILLBOM_COLOR.BLUE[200]}
        defaultButtonColor={FILLBOM_COLOR.BLUE[500]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledTextColor={FILLBOM_COLOR.BLUE[300]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        onPress={signInWithKakao}
      />
    </View>
  );
};

export default LoginPage;
