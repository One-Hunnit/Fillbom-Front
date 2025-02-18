import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import patientLastPositionStyle from '../styles/patientLastPosition.style';
import RefreshIconNormal from '@/assets/svgs/ico_refresh_normal.svg';
import RefreshIconPressed from '@/assets/svgs/ico_refresh_pressed.svg';
const PatientLastPosition = () => {
  const [isRefreshButtonPressed, setIsRefreshButtonPressed] = useState(false);
  return (
    <View>
      <View style={patientLastPositionStyle.lastLocationHeader}>
        <Text style={patientLastPositionStyle.lastLocationHeaderText}> 환자의 마지막 위치</Text>
        <Pressable
          onPressIn={() => setIsRefreshButtonPressed(true)}
          onPressOut={() => setIsRefreshButtonPressed(false)}
        >
          {isRefreshButtonPressed ? <RefreshIconPressed /> : <RefreshIconNormal />}
        </Pressable>
      </View>
      <View>
        <Text>지도</Text>
      </View>
    </View>
  );
};

export default PatientLastPosition;
