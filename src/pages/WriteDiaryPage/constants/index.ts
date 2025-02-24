import { type TValues } from '@/types/util';

export const WRITE_DIARY_STEP_KEY = {
  WEATHER: 'weather',
  FEELING: 'feeling',
  QUESTION1: 'question1',
  QUESTION2: 'question2',
  QUESTION3: 'question3',
  FREE: 'free',
} as const;

export type TSignupStepKey = TValues<typeof WRITE_DIARY_STEP_KEY>;
