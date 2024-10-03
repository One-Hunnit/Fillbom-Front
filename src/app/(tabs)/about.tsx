import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from 'ctx';

const About = () => {
  const { user } = useAuth();

  return (
    <View>
      <Text>About Page - 환영합니다. {user?.name}님</Text>
    </View>
  );
};
export default About;
