import { NaverMapMarkerOverlay, NaverMapPolygonOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import useLocationTracking from '@/hooks/useLocationTracking';
import { styles } from './styles';

interface IPolygonData {
  type: 'MultiPolygon';
  coordinates: [number, number][][][];
  properties: {
    sig_cd: '11110';
    sig_eng_nm: 'Jongno-gu';
    full_nm: '서울특별시 종로구';
    sig_kor_nm: '종로구';
  };
}
const CaregiverHomePage = () => {
  const locationCoords = useLocationTracking();
  const [polygonData, setPolygonData] = useState<IPolygonData>();
  const polygonTest = async () => {
    const response = await fetch(
      'https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_C_ADEMD_INFO&key=1762E293-20A4-3796-8080-9790292D50ED&domain=https://lowfloorbus.site&attrFilter=emdCd:=:50110253',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    setPolygonData(data.response.result.featureCollection.features[0].geometry);
  };

  useEffect(() => {
    polygonTest();
  }, []);

  return (
    <View style={styles.container}>
      <NaverMapView
        initialRegion={{
          latitude: locationCoords.latitude,
          longitude: locationCoords.longitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0022,
        }}
        isShowScaleBar={false}
        style={styles.mapContainer}
      >
        <NaverMapMarkerOverlay
          latitude={locationCoords.latitude}
          longitude={locationCoords.longitude}
          anchor={{ x: 0.5, y: 1 }}
          width={40}
          height={40}
          image={require('@/assets/images/png/currentLocationIcon.png')}
        ></NaverMapMarkerOverlay>
        {polygonData &&
          polygonData.coordinates.map((deps1) =>
            deps1.map((coordinates) => (
              <NaverMapPolygonOverlay
                outlineWidth={5}
                outlineColor={'#f2f2'}
                color={'#0068'}
                coords={
                  coordinates.map(([longitude, latitude]) => ({
                    latitude,
                    longitude,
                  })) ?? []
                }
              />
            )),
          )}
      </NaverMapView>
    </View>
  );
};

export default CaregiverHomePage;
