import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import IcoCareSolid from '@/assets/svgs/ico_care_solid.svg';
import IcoCareStroke from '@/assets/svgs/ico_care_stroke.svg';
import type { ITab } from '@/types/route';

const CAREGIVER_TABS: ITab[] = [
  {
    name: 'index',
    title: '홈',
    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
  },
  {
    name: 'patient-list',
    title: '환자 관리',
    tabBarIcon: ({ focused }) => (focused ? <IcoCareStroke /> : <IcoCareSolid />),
  },
  {
    name: 'settings',
    title: '설정',
    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
  },
] as const;

export default () => (
  <Tabs screenOptions={{ headerShown: false }}>
    {CAREGIVER_TABS.map((tab) => (
      <Tabs.Screen key={tab.name} name={tab.name} options={{ title: tab.title, tabBarIcon: tab.tabBarIcon }} />
    ))}
  </Tabs>
);
