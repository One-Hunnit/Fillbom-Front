import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '@/assets/svgs/ico_symbol.svg';
import { ColorButton, MonoButton } from '@/components/Button';
import { FILLBOM_COLOR } from '@/constants/color';
import { NOTIFICATION_TYPE } from '@/constants/notification';
import TEXT_STYLES from '@/styles/textStyles';
import { type INotification } from '@/types/norification';

interface INotificationItemProps {
  item: INotification;
}

const NotificationItem = memo(({ item }: INotificationItemProps) => {
  return (
    <View style={styles.listItem}>
      <Logo width={40} height={40} />
      <View style={styles.list}>
        <Text style={styles.listTitle} numberOfLines={2} ellipsizeMode="tail">
          {item.content}
        </Text>
        <Text style={styles.listDate}>{item.createdAt}</Text>
      </View>
      {item.type === NOTIFICATION_TYPE.RELATIONSHIP_REQUEST ? (
        <View style={styles.relationButtonContainer}>
          <ColorButton buttonStyle={styles.relationButton} text="수락" />
          <MonoButton buttonStyle={styles.relationButton} text="거절" />
        </View>
      ) : null}
    </View>
  );
});

interface INotificationListProps {
  date: string;
  items: INotification[];
}

const NotificationList = memo(({ date, items }: INotificationListProps) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.date}>{date}</Text>
      {items.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </View>
  );
});

export default NotificationList;

const styles = StyleSheet.create({
  date: {
    paddingVertical: 8,
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
  listContainer: {
    paddingLeft: 20,
    paddingRight: 24,
  },
  listItem: {
    flexDirection: 'row',
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: FILLBOM_COLOR.GRAY[200],
    paddingVertical: 16,
  },
  listIcon: {
    width: 40,
    height: 40,
    borderRadius: 400,
    backgroundColor: FILLBOM_COLOR.GRAY[200],
  },
  list: {
    flex: 1,
    gap: 2,
  },
  listTitle: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  listDate: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[600],
  },
  relationButtonContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  relationButton: {
    width: 'auto',
    height: 32,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
