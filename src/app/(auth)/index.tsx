import { Redirect } from 'expo-router';
import { match } from 'ts-pattern';
import useAccount from '@/hooks/useAccount';

export default () => {
  const { account } = useAccount();

  return match(account?.role)
    .with('patient', () => <Redirect href="/patient" />)
    .with('caregiver', () => <Redirect href="/caregiver" />)
    .with(null, () => <Redirect href="/caregiver" />)
    .otherwise(() => <Redirect href="/login" />);
};
