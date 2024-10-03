import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/authStore';

const About = () => {
  const user = useRecoilValue(userState);
  return (
    <View>
      <Text>About Page - 환영합니다. {user?.name}님</Text>
    </View>
  );
};
export default About;
