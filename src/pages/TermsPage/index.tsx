import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '@/components/Header';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';

const TermsPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="이용 약관" backButtonVisible containerStyle={styles.header} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.body}>
            본 약관은 OneHunnit(이하 "회사")가 제공하는 필봄(이하 "본 서비스")의 이용과 관련하여 회사와 이용자(이하
            "회원") 간의 권리와 의무, 기타 필요한 사항을 규정합니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제1조 (목적)</Text>
          <Text style={styles.body}>
            본 약관은 회사가 제공하는 본 서비스의 이용에 있어 회사와 회원 간의 권리와 의무, 책임 사항 및 기타 필요한
            사항을 규정하는 것을 목적으로 합니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제2조 (약관의 효력 및 변경)</Text>
          <Text style={styles.body}>
            본 약관은 회원이 본 서비스에 가입하고 동의함으로써 효력이 발생합니다. 회사는 필요한 경우 본 약관을 변경할 수
            있으며, 변경된 약관은 본 서비스 내 공지하거나 회원에게 통지합니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제3조 (회원가입 및 이용계약 체결)</Text>
          <Text style={styles.body}>
            본 서비스를 이용하려면 회사가 정한 절차에 따라 회원가입을 해야 합니다. 회원가입 신청은 회사가 이를
            승인함으로써 완료됩니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제4조 (개인정보의 수집 및 이용)</Text>
          <Text style={styles.body}>
            회사는 회원의 개인정보를 다음과 같은 목적을 위해 수집·이용합니다.
            {'\n'}- 본 서비스 제공 및 운영
            {'\n'}- 회원 관리 및 서비스 개선
            {'\n'}- 서비스 관련 공지 및 알림 제공 회사는 관련 법령에 따라 회원의 개인정보를 안전하게 보호하며, 세부
            사항은 회사의 개인정보 처리방침에 따릅니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제5조 (위치기반 서비스)</Text>
          <Text style={styles.body}>
            회사는 회원에게 맞춤형 서비스를 제공하기 위해 위치정보를 수집·이용할 수 있습니다. 위치정보는 회원의 동의를
            기반으로 수집되며, 동의를 거부할 경우 서비스 일부가 제한될 수 있습니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제6조 (푸시 알림 제공)</Text>
          <Text style={styles.body}>
            회사는 회원에게 서비스 관련 정보 및 혜택을 제공하기 위해 푸시 알림을 발송할 수 있습니다. 회원은 푸시 알림
            수신 여부를 설정에서 변경할 수 있습니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제7조 (회원의 의무)</Text>
          <Text style={styles.body}>
            회원은 본 서비스를 이용함에 있어 다음 행위를 금지합니다.
            {'\n'}- 타인의 개인정보 도용
            {'\n'}- 회사 서비스의 부당 이용
            {'\n'}- 법령 및 약관 위반 행위 회원은 본인의 귀책사유로 인해 발생한 손해에 대해 책임을 집니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제8조 (서비스 이용 제한 및 해지)</Text>
          <Text style={styles.body}>
            회사는 회원이 약관을 위반하거나 서비스 운영에 심각한 문제를 일으킬 경우 서비스 이용을 제한하거나 계약을
            해지할 수 있습니다. 회원은 언제든지 계약 해지를 요청할 수 있으며, 회사는 이를 신속히 처리합니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제9조 (책임의 제한)</Text>
          <Text style={styles.body}>
            회사는 천재지변, 시스템 장애 등 불가항력으로 인해 서비스 제공이 불가능한 경우 책임을 지지 않습니다. 회원의
            귀책사유로 인해 발생한 손해에 대해서는 회사가 책임을 지지 않습니다.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>제10조 (기타)</Text>
          <Text style={styles.body}>
            본 약관에서 규정하지 않은 사항은 관계 법령 및 상관례에 따릅니다. 본 약관에 따른 분쟁이 발생할 경우, 회사의
            본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderBottomWidth: 0,
  },
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    marginBottom: 4,
  },
  body: {
    ...TEXT_STYLES.SUBTEXT_SMALL_REGULAR,
    color: FILLBOM_COLOR.GRAY[500],
  },
});
