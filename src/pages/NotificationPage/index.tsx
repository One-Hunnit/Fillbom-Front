import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import NotificationList from './components/NotificationList';
import useNotificationPage from './hooks/useNotificationPage';

const NotificationPage = () => {
  const { notifications, isLoading } = useNotificationPage();

  if (isLoading) return <Loading fullScreen />;

  if (notifications.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header title="알림 모아보기" backButtonVisible containerStyle={styles.header} />
        <View style={styles.container}>
          <Text style={styles.noNotificationText}>알림이 없습니다.</Text>
        </View>
      </SafeAreaView>
    );
  }

  console.log(notifications);

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
  noNotificationText: {
    textAlign: 'center',
    ...TEXT_STYLES.BODY_MEDIUM_REGULAR,
    color: FILLBOM_COLOR.GRAY[800],
  },
  header: {
    borderBottomWidth: 0,
  },
});
