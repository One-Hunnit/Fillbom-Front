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
        text="로그인"
        icon={IconInfo}
        pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
        disabledBackgroundColor={FILLBOM_COLOR.BLUE[200]}
        defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledTextColor={FILLBOM_COLOR.BLUE[300]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        onPress={handleLogin}
      />
      <Button
        text="카카오 로그인"
        icon={IconInfo}
        pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
        disabledBackgroundColor={FILLBOM_COLOR.BLUE[200]}
        defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
        pressedTextColor={FILLBOM_COLOR.BLUE[200]}
        disabledTextColor={FILLBOM_COLOR.BLUE[300]}
        defaultTextColor={FILLBOM_COLOR.GRAY[100]}
        onPress={signInWithKakao}
      />
    </View>
  );
};

export default LoginPage;
