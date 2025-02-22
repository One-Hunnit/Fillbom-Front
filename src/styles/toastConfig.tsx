/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import { type ToastConfigParams } from 'react-native-toast-message';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from './textStyles';

interface IToastProps {
  text: string;
  icon: React.ReactNode;
}

export const toastConfig = {
  ToastPopup: ({ props }: ToastConfigParams<IToastProps>) => (
    <View
      style={{
        marginTop: 8,
        width: 350,
        height: 54,
        backgroundColor: 'rgba(33, 33, 33, 0.70);',
        borderRadius: 28,
        display: 'flex',
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
      }}
    >
      {props.icon}
      <Text
        style={{
          ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
          color: FILLBOM_COLOR.GRAY[100],
        }}
      >
        {props.text}
      </Text>
    </View>
  ),

  NotificationPopUp: ({ props }: ToastConfigParams<IToastProps>) => (
    <View
      style={{
        maxWidth: 350,
        minHeight: 56,
        maxHeight: 76,
        backgroundColor: FILLBOM_COLOR.GRAY[50],
        borderRadius: 28,
        display: 'flex',
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        // Android Shadow
        elevation: 8,
      }}
    >
      {props.icon}
      <Text numberOfLines={2} ellipsizeMode="tail">
        {props.text}
      </Text>
    </View>
  ),
};
