import { Redirect } from 'expo-router';
import { match } from 'ts-pattern';
import { useAuthStore } from '@/stores/authStore';

export default () => {
  const { account } = useAuthStore();

  return match(account?.role)
    .with('patient', () => <Redirect href="/patient" />)
    .with('caregiver', () => <Redirect href="/caregiver" />)
    .with(null, () => <Redirect href="/signup" />)
    .otherwise(() => <Redirect href="/login" />);
};
