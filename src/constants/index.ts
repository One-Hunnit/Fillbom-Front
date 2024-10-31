import { type TValues } from '@/types/util';

export const ACCOUNT_ROLE = {
  PATIENT: 'PATIENT',
  CAREGIVER: 'CAREGIVER',
} as const;

export type TAcccountRole = TValues<typeof ACCOUNT_ROLE>;

export const ACCOUNT_STATUS = {
  SIGNUP_PENDING: 'SIGNUP_PENDING',
  DONE: 'DONE',
};

export type TAccountStatus = TValues<typeof ACCOUNT_STATUS>;

export const GENDER = {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
} as const;

export type TGender = TValues<typeof GENDER>;

export const THUMBNAIL_TYPE = {
  PROFILE: 'profile',
} as const;

export type TThumbnailType = TValues<typeof THUMBNAIL_TYPE>;

export const THUMBNAIL_QUERY_MAP = {
  [THUMBNAIL_TYPE.PROFILE]: '?type=f&w=300&h=300&quality=90&faceopt=true&ttype=jpg',
} as const;
