import { match } from 'ts-pattern';
import { type TValues } from '@/types/util';
import { GENDER } from '@/constants';

export interface ISignupStep {
  title: string;
  subTitle?: string;
  formInfo?: IFormInfo;
}

export interface IFormInfo {
  formTitle: string;
  placeholder?: string;
  guideText?: string;
}

export const SIGNUP_STEP_KEY = {
  ROLE: 'role',
  NAME: 'name',
  BIRTH: 'birth',
  GENDER: 'gender',
  PHONE: 'phone',
  CONFIRM: 'confirm',
} as const;

export type TSignupStepKey = TValues<typeof SIGNUP_STEP_KEY>;

export const SIGNUP_STEPS: Record<TSignupStepKey, ISignupStep> = {
  [SIGNUP_STEP_KEY.ROLE]: {
    title: '환자인신가요\n보호자이신가요?',
  },
  [SIGNUP_STEP_KEY.NAME]: {
    title: '이름을 입력해주세요',
    formInfo: {
      formTitle: '이름',
      placeholder: '김필봄',
      guideText: '두 자리(성과 이름) 이상을 입력해주세요.',
    },
  },
  [SIGNUP_STEP_KEY.BIRTH]: {
    title: '생년월일을 입력해주세요',
    subTitle: '정확한 생년월일은 추후 의료기관 전달에 도움이 됩니다.',
    formInfo: {
      formTitle: '생년월일',
      placeholder: '1990.01.01',
      guideText: '연, 월, 일 모두 입력해 주세요.',
    },
  },
  [SIGNUP_STEP_KEY.GENDER]: {
    title: '성별을 선택해주세요',
    subTitle: '정확한 성별은 추후 의료기관 전달에 도움이 됩니다.',
    formInfo: {
      formTitle: '성별',
    },
  },
  [SIGNUP_STEP_KEY.PHONE]: {
    title: '전화번호를 입력해주세요',
    subTitle: '서비스 이용을 위한 정확한 번호를 입력해주세요.',
    formInfo: {
      formTitle: '전화번호',
      placeholder: '01012345678',
      guideText: '띄어쓰기 없이 11자리를 입력해주세요.',
    },
  },
  [SIGNUP_STEP_KEY.CONFIRM]: {
    title: '마지막 단계입니다!\n입력된 정보를 확인해주세요',
  },
};

export const SIGNUP_STEPS_ENTRIES = Object.entries(SIGNUP_STEPS) as [TSignupStepKey, ISignupStep][];
export const SIGNUP_STEPS_KEYS = Object.keys(SIGNUP_STEPS) as TSignupStepKey[];

export const toKorean = (value: string): string => {
  return match(value)
    .with(GENDER.MAN, () => '남성')
    .with(GENDER.WOMAN, () => '여성')
    .otherwise(() => value);
};

export const TERMS_KEY = {
  SERVICE: 'service',
  PRIVACY: 'privacy',
  LOCATION: 'location',
  PUSH: 'push',
};

export type TTermsKey = TValues<typeof TERMS_KEY>;

export const TERMS = {
  [TERMS_KEY.SERVICE]: {
    title: '서비스 이용약관',
    required: true,
  },
  [TERMS_KEY.PRIVACY]: {
    title: '개인정보 수집 및 이용',
    required: true,
  },
  [TERMS_KEY.LOCATION]: {
    title: '위치기반 서비스 이용약관',
    required: false,
  },
  [TERMS_KEY.PUSH]: {
    title: '푸시 알림 수신',
    required: false,
  },
} as const;
