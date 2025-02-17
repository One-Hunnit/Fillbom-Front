import { Stack, Tabs } from 'expo-router';

export default function ManagePatientLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '환자 목록',
        }}
      />
      <Stack.Screen
        name="patientDetail/[patientId]"
        options={{
          title: '환자 상세',
        }}
      />
    </Tabs>
  );
}
