import { type ReactNode } from 'react';
import Toast from 'react-native-toast-message';

export const ToastMessage = (message: string, icon: ReactNode) => {
  Toast.show({
    type: 'ToastPopup',
    props: {
      text: message,
      icon: icon,
    },
    visibilityTime: 1000,
  });
};
