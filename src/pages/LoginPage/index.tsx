import { View, Text } from 'react-native';
import IconInfo from '@/assets/svgs/icon-info.svg';
import Button from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import useLogin from './hooks/useLogin';
import { styles } from './styles';

const LoginPage = () => {
  const { handleLogin, signInWithKakao } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <Button
        title="로그인"
        type="iconText"
        svgIcon={IconInfo}
        pressedButtonColor={FILLBOM_COLOR.BLUE[300]}
        disabledButtonColor={FILLBOM_COLOR.BLUE[200]}
        defaultButtonColor={FILLBOM_COLOR.BLUE[500]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledTextColor={FILLBOM_COLOR.BLUE[300]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        onPress={handleLogin}
      />
      <Button
        title="카카오 로그인"
        type="iconText"
        svgIcon={IconInfo}
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
