import { useRouter } from 'expo-router';
import { usePostMutation } from '@/api/hooks';
import useAccount from '@/hooks/useAccount';
import { type TSignupFormData } from './useSignupForm';

const useSignup = () => {
  const { mutateAsync: signup } = usePostMutation('/accounts/sign-up');
  const { refetch } = useAccount();
  const router = useRouter();

  const handleSignup = async (formData: TSignupFormData) => {
    try {
      const { error } = await signup({ body: formData });
      if (error) {
        console.log(error);
        throw new Error(error);
      }

      await refetch();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleSignup,
  };
};

export default useSignup;
