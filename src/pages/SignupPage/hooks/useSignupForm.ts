import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ACCOUNT_ROLE, GENDER } from '@/constants';
import { SIGNUP_STEP_KEY } from '../constants';

const signupformSchema = z.object({
  [SIGNUP_STEP_KEY.ROLE]: z
    .enum([ACCOUNT_ROLE.CAREGIVER, ACCOUNT_ROLE.PATIENT])
    .optional()
    .refine((val) => val !== undefined),
  [SIGNUP_STEP_KEY.NAME]: z.string().min(1).max(20),
  [SIGNUP_STEP_KEY.BIRTH]: z
    .string()
    .min(10)
    .regex(/^\d{4}.\d{2}.\d{2}$/),
  [SIGNUP_STEP_KEY.GENDER]: z
    .enum([GENDER.MAN, GENDER.WOMAN])
    .optional()
    .refine((val) => val !== undefined),
  [SIGNUP_STEP_KEY.PHONE]: z
    .string()
    .length(11)
    .regex(/^\d{11}$/),
});

export type TSignupFormData = z.infer<typeof signupformSchema>;

export const useSignupForm = () => {
  const { formState, control, handleSubmit, getValues } = useForm<TSignupFormData>({
    resolver: zodResolver(signupformSchema),
    mode: 'onChange',
  });

  return {
    formState,
    control,
    handleSubmit,
    getValues,
  };
};
