import { Image, Text, View } from 'react-native';
import formatPhoneNumber from '@/utils/formatPhoneNumber';
import { type PatientDetailData } from '../hooks/useGetPatientDetail';
import patientInfoCardStyle from '../styles/patientInfoCard.style';

interface PatientInfoCardProps {
  patientInfo: PatientDetailData;
}
const PatientInfoCard = ({ patientInfo }: PatientInfoCardProps) => {
  const gender = patientInfo?.gender === 'MAN' ? '남' : '여';
  return (
    <View style={patientInfoCardStyle.Wrapper}>
      <Image src={patientInfo?.profileImageUrl} style={patientInfoCardStyle.profileImage} />
      <View style={patientInfoCardStyle.patientInfoTextWrapper}>
        {patientInfo?.name && (
          <View style={patientInfoCardStyle.labelValueWrapper}>
            <Text style={patientInfoCardStyle.label}>이름:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={patientInfoCardStyle.value}>
              {patientInfo?.name}
            </Text>
          </View>
        )}
        {patientInfo?.gender && (
          <View style={patientInfoCardStyle.labelValueWrapper}>
            <Text style={patientInfoCardStyle.label}>성별:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={patientInfoCardStyle.value}>
              {gender}
            </Text>
          </View>
        )}
        {patientInfo?.birthday && (
          <View style={patientInfoCardStyle.labelValueWrapper}>
            <Text style={patientInfoCardStyle.label}>생년월일:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={patientInfoCardStyle.value}>
              {patientInfo?.birthday}
            </Text>
          </View>
        )}
        {patientInfo?.phoneNumber && (
          <View style={patientInfoCardStyle.labelValueWrapper}>
            <Text style={patientInfoCardStyle.label}>전화번호:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={patientInfoCardStyle.value}>
              {formatPhoneNumber(patientInfo?.phoneNumber)}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default PatientInfoCard;
