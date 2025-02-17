import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const PatientDetailPage = () => {
  return (
    <View>
      <Text>PatientDetailPage</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};
export default PatientDetailPage;
