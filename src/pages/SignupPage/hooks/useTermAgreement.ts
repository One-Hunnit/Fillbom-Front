import { useState } from 'react';
import { TERMS, type TTermsKey } from '../constants';

export default function useTermAgreement() {
  const [agreeMap, setAgreeMap] = useState(
    Object.keys(TERMS).reduce(
      (acc, key) => {
        acc[key as TTermsKey] = false;
        return acc;
      },
      {} as Record<TTermsKey, boolean>,
    ),
  );

  const allAgreed = Object.values(agreeMap).every((isAgreed) => isAgreed);
  const requiredAgreed = Object.entries(TERMS)
    .filter(([, { required }]) => required)
    .every(([key]) => agreeMap[key as TTermsKey]);

  const toggleAgree = (key: TTermsKey) => {
    setAgreeMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleAllAgree = () => {
    setAgreeMap((prev) => {
      const allAgreed = Object.values(prev).every((isAgreed) => isAgreed);
      return Object.keys(prev).reduce(
        (acc, key) => {
          acc[key as TTermsKey] = !allAgreed;
          return acc;
        },
        {} as Record<TTermsKey, boolean>,
      );
    });
  };

  return { agreeMap, allAgreed, requiredAgreed, toggleAgree, toggleAllAgree };
}
