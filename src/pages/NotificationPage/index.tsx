import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import NotificationList from './components/NotificationList';
import useNotificationPage from './hooks/useNotificationPage';

const NotificationPage = () => {
  const { notifications } = useNotificationPage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="알림 모아보기" backButtonVisible containerStyle={styles.header} />
      <View style={styles.container}>
        {Object.entries(notifications).map(([date, items]) => (
          <NotificationList key={date} date={date} items={items} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 24,
  },
  header: {
    borderBottomWidth: 0,
  },
});
