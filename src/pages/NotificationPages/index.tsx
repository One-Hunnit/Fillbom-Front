/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const notificationList = () => {
  const styles = {
    container: {
      padding: 10,
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 16,
      color: '#000',
    }
  };

  const renderItem = (item) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>{item.createdAt}</Text>
      </View>
    );
  };

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
        <View key={index}>{renderItem(notification)}</View>
      ))}
    </View>
  );
};

export default notificationList;
