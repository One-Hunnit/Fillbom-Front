import { Redirect } from 'expo-router';
import { useRecoilValue } from 'recoil';
import { match } from 'ts-pattern';
import { authState } from '@/stores/authStore';

export default () => {
  const auth = useRecoilValue(authState);

  return match(auth?.account.role)
    .with('patient', () => <Redirect href="/patient" />)
    .with('caregiver', () => <Redirect href="/caregiver" />)
    .otherwise(() => <Redirect href="/login" />);
};
