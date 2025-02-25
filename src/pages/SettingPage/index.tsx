import * as Sentry from '@sentry/react-native';
import { useRouter } from 'expo-router';
import { Button, Image, Text, View } from 'react-native';
import useAccount from '@/hooks/useAccount';
import { useAuthStore } from '@/stores/authStore';
import { logEvent } from '@/utils/firebase';
import { styles } from './styles';

const SettingPage = () => {
  const router = useRouter();
  const { account, reset } = useAccount();
  const { initState } = useAuthStore();

  return (
    <View style={styles.container}>
      <Image src={account?.profileImage ?? ''} style={styles.avatar} />
      <Text>설정 페이지</Text>
      <Text>이름 {account?.name}</Text>
      <Button title="테스트용으로 로그인 페이지 이동하기" onPress={() => router.replace('/login')} />
      <Button title="테스트용으로 회원가입 페이지 이동하기" onPress={() => router.replace('/signup')} />
      <Button
        title="센트리 에러 테스트"
        onPress={() => {
          Sentry.captureException(new Error('test error'));
        }}
      />
      <Button
        title="GA 로깅 데스트"
        onPress={() => {
          logEvent('test_event', { test: 'test' });
        }}
      />
      <Button
        title="테스트용으로 authState 제거하기"
        onPress={() => {
          initState();
          reset();
        }}
      />
      <Button
        title="테스트용으로 알림 모아보기 페이지로 이동"
        onPress={() => {
          router.replace('/notification');
        }}
      />
    </View>
  );
};

export default SettingPage;
