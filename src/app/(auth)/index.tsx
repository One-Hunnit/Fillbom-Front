import { Redirect } from 'expo-router';
import { match } from 'ts-pattern';
import useAccount from '@/hooks/useAccount';
import { ACCOUNT_ROLE } from '@/constants';

export default () => {
  const { account } = useAccount();

  return match(account?.role)
    .with(ACCOUNT_ROLE.PATIENT, () => <Redirect href="/patient" />)
    .with(ACCOUNT_ROLE.CAREGIVER, () => <Redirect href="/caregiver" />)
    .with(null, () => <Redirect href="/caregiver" />)
    .otherwise(() => <Redirect href="/login" />);
};
