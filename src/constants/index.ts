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
  DEFAULT: 'default',
  PROFILE: 'profile',
} as const;

export type TThumbnailType = TValues<typeof THUMBNAIL_TYPE>;

export const THUMBNAIL_QUERY_MAP = {
  [THUMBNAIL_TYPE.DEFAULT]: '?type=w&w=500',
  [THUMBNAIL_TYPE.PROFILE]: '?type=f&w=300&h=300&quality=90&faceopt=true&ttype=jpg',
} as const;

export const IMAGE_BUCKET_URL = 'https://kr.object.ncloudstorage.com/fillbom-bucket/';
export const IMAGE_CDN_URL = 'https://image.fillbom.com/SqBTDUEggs/';

export const DEFAULT_PROFILE_IMAGES = [
  'default_profile_1.png',
  'default_profile_2.png',
  'default_profile_3.png',
  'default_profile_4.png',
  'default_profile_5.png',
  'default_profile_6.png',
  'default_profile_7.png',
  'default_profile_8.png',
  'default_profile_9.png',
  'default_profile_10.png',
].map((path) => IMAGE_BUCKET_URL + path + THUMBNAIL_QUERY_MAP[THUMBNAIL_TYPE.PROFILE]);
