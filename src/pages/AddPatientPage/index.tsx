import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCancel from '@/assets/svgs/ico_cancel.svg';
import IconSearch from '@/assets/svgs/ico_search.svg';
import Header from '@/components/Header';
import InputLayout from '@/components/InputLayout';
import InputWithIcon from '@/components/InputWithIcon';
import { FILLBOM_COLOR } from '@/constants/color';
import { styles } from './styles';

const AddPatientPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const error = phoneNumber.length > 0 && !/\d{11}/g.test(phoneNumber);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top']}>
      <Header backButtonVisible={true} containerStyle={styles.headerContainer} title="환자 추가하기" />
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>전화번호를 입력하면{`\n`}환자를 찾을 수 있습니다</Text>
        </View>
        <InputLayout label={'전화번호 검색'} guide={'띄어쓰기 없이 11자리를 입력해주세요.'} error={error}>
          <InputWithIcon
            error={error}
            placeholder={'01012345678'}
            value={phoneNumber}
            maxLength={11}
            keyboardType="number-pad"
            selectedBorderColor={FILLBOM_COLOR.BLUE[500]}
            defaultBorderColor={FILLBOM_COLOR.GRAY[100]}
            defaultBackgoundColor={FILLBOM_COLOR.GRAY[100]}
            pressedBackgroundColor={FILLBOM_COLOR.GRAY[200]}
            defaultTextColor={FILLBOM_COLOR.GRAY[100]}
            pressedTextColor={FILLBOM_COLOR.GRAY[400]}
            activatedTextColor={FILLBOM_COLOR.GRAY[900]}
            defaultIconColor={FILLBOM_COLOR.GRAY[500]}
            pressedIconColor={FILLBOM_COLOR.GRAY[400]}
            onChangeText={setPhoneNumber}
            icon={phoneNumber.length > 0 ? IconCancel : IconSearch}
            textContentType="telephoneNumber"
          />
        </InputLayout>
      </View>
    </SafeAreaView>
  );
};

export default AddPatientPage;
