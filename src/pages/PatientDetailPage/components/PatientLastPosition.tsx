import { NaverMapMarkerOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { useState } from 'react';
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import patientLastPositionStyle from '../styles/patientLastPosition.style';
import RefreshIconNormal from '@/assets/svgs/ico_refresh_normal.svg';
import RefreshIconPressed from '@/assets/svgs/ico_refresh_pressed.svg';

interface IPatientLastPositionProps {
  location?: {
    latitude?: string;
    longitude?: string;
  };
  profileImageUrl?: string;
}
const PatientLastPosition = ({ location, profileImageUrl }: IPatientLastPositionProps) => {
  console.log(location);
  const [isRefreshButtonPressed, setIsRefreshButtonPressed] = useState(false);
  const latitude = location?.latitude ? Number(location.latitude) : 37.5665;
  const longitude = location?.longitude ? Number(location.longitude) : 126.978;
  return (
    <ScrollView>
      <View style={patientLastPositionStyle.lastLocationHeader}>
        <Text style={patientLastPositionStyle.lastLocationHeaderText}> 환자의 마지막 위치</Text>
        <Pressable
          onPressIn={() => setIsRefreshButtonPressed(true)}
          onPressOut={() => setIsRefreshButtonPressed(false)}
        >
          {isRefreshButtonPressed ? <RefreshIconPressed /> : <RefreshIconNormal />}
        </Pressable>
      </View>

      <View style={patientLastPositionStyle.mapContainer}>
        <NaverMapView
          camera={{
            zoom: 15,
            latitude: latitude,
            longitude: longitude,
          }}
          isShowScaleBar={false}
          isShowZoomControls={false}
          style={patientLastPositionStyle.mapContainer}
        >
          <NaverMapMarkerOverlay
            latitude={latitude}
            longitude={longitude}
            anchor={{ x: 0.5, y: 0.5 }}
            width={48}
            height={48}
          >
            <View style={patientLastPositionStyle.markerContainer}>
              <ImageBackground
                source={require('@/assets/images/png/icon_pin.png')} // 기본 파란 마커
                style={patientLastPositionStyle.markerImage}
                resizeMode="contain"
              >
                <Image src={profileImageUrl} style={patientLastPositionStyle.profileImage} />
              </ImageBackground>
            </View>
          </NaverMapMarkerOverlay>
        </NaverMapView>
      </View>
    </ScrollView>
  );
};

export default PatientLastPosition;
