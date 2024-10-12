import { type TValues } from '@/types/util';

export const ACCOUNT_ROLE = {
  PATIENT: 'patient',
  CAREGIVER: 'caregiver',
} as const;

export type TAcccountRole = TValues<typeof ACCOUNT_ROLE>;

export const GENDER = {
  MAN: 'man',
  WOMAN: 'woman',
} as const;

export type TGender = TValues<typeof GENDER>;
