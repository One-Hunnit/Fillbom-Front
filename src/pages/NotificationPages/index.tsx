/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const notifications = () => {
  const mocks = [
    {
      id: 1,
      title: '환자 등록 요청',
      description: '환자 등록 요청을 확인해주세요.',
      createdAt: '2025-05-16',
      isRead: false,
    },
    {
      id: 2,
      title: '환자 등록 요청',
      description: '환자 등록 요청을 확인해주세요.',
      createdAt: '2025-05-16',
      isRead: true,
    },
    {
      id: 3,
      title: '환자 등록 요청',
      description: '환자 등록 요청을 확인해주세요.',
      createdAt: '2025-05-16',
      isRead: true,
    },
    {
      id: 4,
      title: '환자 등록 요청',
      description: '환자 등록 요청을 확인해주세요.',
      createdAt: '2025-05-16',
      isRead: true,
    },
  ];

  return (
    <View>
      {mocks.map((notification, index) => (
        <View key={index}>
          <Text>{notification.title}</Text>
          <Text>{notification.description}</Text>
          <Text>{notification.createdAt}</Text>
        </View>
      ))}
    </View>
  );
};

export default notifications;
