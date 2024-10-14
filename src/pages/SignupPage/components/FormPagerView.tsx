import { memo } from 'react';
import { Controller, type UseFormReturn } from 'react-hook-form';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { match } from 'ts-pattern';
import IconSymbol from '@/assets/svgs/ico_symbol.svg';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import TextInput from '@/components/TextInput';
import { FILLBOM_COLOR } from '@/constants/color';
import { ACCOUNT_ROLE, type TGender, type TAcccountRole, GENDER } from '@/constants';
import InputLayout from '../../../components/InputLayout';
import { SIGNUP_STEP_KEY, SIGNUP_STEPS, SIGNUP_STEPS_ENTRIES, toKorean } from '../constants';
import { type TSignupFormData } from '../hooks/useSignupForm';
import { confirmStyles, selectGenderStyles, selectRoleStyles, styles } from '../styles';

interface ISelectRoleProps {
  selectedValue: TAcccountRole;
  onBlur: () => void;
  onChange: (role: string) => void;
}

const SelectRole = memo(({ selectedValue, onBlur, onChange }: ISelectRoleProps) => (
  <View style={selectRoleStyles.container}>
    {[
      { key: ACCOUNT_ROLE.PATIENT, value: '환자' },
      { key: ACCOUNT_ROLE.CAREGIVER, value: '보호자' },
    ].map(({ key, value }) => (
      <Pressable key={key} onBlur={onBlur} onPress={() => onChange(key)} style={selectRoleStyles.pressable}>
        <View style={[selectRoleStyles.card, selectedValue === key && selectRoleStyles.cardActive]}>
          <Text>{value}</Text>
        </View>
      </Pressable>
    ))}
  </View>
));

interface ISelectGenderProps {
  selectedValue: TGender | undefined;
  onBlur: () => void;
  onChange: (gender: TGender) => void;
}

const SelectGender = memo(({ selectedValue, onChange }: ISelectGenderProps) => (
  <View style={selectGenderStyles.container}>
    {Object.entries(GENDER).map(([key, value]) => (
      <Chip key={key} title={toKorean(value)} selected={selectedValue === value} onPress={() => onChange(value)} />
    ))}
  </View>
));

interface IListItemProps {
  label: string;
  value: string;
  onPress: () => void;
}

const ListItem = memo(({ label, value, onPress }: IListItemProps) => (
  <View style={confirmStyles.listItem}>
    <Text style={confirmStyles.label}>{label}</Text>
    <Text style={confirmStyles.value}>{value}</Text>
    <Button
      text="수정"
      onPress={onPress}
      buttonStyle={confirmStyles.button}
      defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
      defaultTextColor={FILLBOM_COLOR.GRAY[700]}
    />
  </View>
));

interface IConfirmCardProps {
  formData: TSignupFormData;
  changeStep: (index: number) => void;
}
const ConfirmCard = memo(({ formData, changeStep }: IConfirmCardProps) => (
  <View style={confirmStyles.container}>
    <View style={confirmStyles.title}>
      <IconSymbol style={confirmStyles.title} />
      <Text style={confirmStyles.titleText}>
        <Text style={confirmStyles.titleName}>{formData.name}</Text> 님 환영합니다!
      </Text>
    </View>
    {(Object.entries(formData) as [keyof TSignupFormData, string][]).slice(1).map(([key, value], index) => (
      <ListItem
        key={key}
        label={SIGNUP_STEPS[key].formInfo!.formTitle}
        value={key === SIGNUP_STEP_KEY.GENDER ? toKorean(value) : value}
        onPress={() => changeStep(index + 1)}
      />
    ))}
  </View>
));

interface IFormPagerViewProps extends Pick<UseFormReturn<TSignupFormData>, 'control' | 'getValues'> {
  index: number;
  changeStep: (index: number) => void;
}

const FormPagertView = ({ control, getValues, index, changeStep }: IFormPagerViewProps) => {
  return SIGNUP_STEPS_ENTRIES.map(([key, { title, formInfo }]) => (
    <ScrollView style={styles.section} key={key}>
      <Text style={styles.title}>{title}</Text>
      {match(key)
        .with(SIGNUP_STEP_KEY.ROLE, (key) => (
          <Controller
            name={key}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectRole selectedValue={value} onBlur={onBlur} onChange={onChange} />
            )}
          />
        ))
        .with(SIGNUP_STEP_KEY.NAME, (key) => (
          <Controller
            name={key}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputLayout label={formInfo?.formTitle} guide={formInfo?.guideText} error={!!error}>
                <TextInput
                  autoFocus
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder={formInfo?.placeholder}
                  error={!!error}
                />
              </InputLayout>
            )}
          />
        ))
        .with(SIGNUP_STEP_KEY.PHONE, SIGNUP_STEP_KEY.BIRTH, (key) => (
          <Controller
            name={key}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputLayout label={formInfo?.formTitle} guide={formInfo?.guideText} error={!!error}>
                <TextInput
                  autoFocus
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder={formInfo?.placeholder}
                  error={!!error}
                  keyboardType="numbers-and-punctuation"
                />
              </InputLayout>
            )}
          />
        ))
        .with(SIGNUP_STEP_KEY.GENDER, (key) => (
          <Controller
            name={key}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState }) => (
              <InputLayout label={formInfo?.formTitle} guide={formInfo?.guideText} error={!!fieldState.error}>
                <SelectGender onChange={onChange} onBlur={onBlur} selectedValue={value} />
              </InputLayout>
            )}
          />
        ))
        .with(SIGNUP_STEP_KEY.CONFIRM, () => <ConfirmCard formData={getValues()} changeStep={changeStep} />)
        .exhaustive()}
    </ScrollView>
  ))[index];
};

export default FormPagertView;
