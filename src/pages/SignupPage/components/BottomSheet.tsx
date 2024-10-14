import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { forwardRef, memo, useCallback } from 'react';
import { Text, Dimensions, View, Pressable } from 'react-native';
import IconCheck from '@/assets/svgs/ico_check.svg';
import Button from '@/components/Button';
import Check from '@/components/Check';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { TERMS, type TTermsKey } from '../constants';
import useTermAgreement from '../hooks/useTermAgreement';
import { buttonSheetStyles } from '../styles';

interface TermItemProps {
  title: string;
  required: boolean;
  checked: boolean;
  onPress?: () => void;
}

const TermItem = memo(({ title, required, checked, onPress }: TermItemProps) => {
  return (
    <View style={buttonSheetStyles.termItemContainer}>
      <Check containerStyle={buttonSheetStyles.check} checked={checked} onPress={onPress} />
      <Pressable onPress={onPress} style={buttonSheetStyles.termValueContainer}>
        <Text style={buttonSheetStyles.termLabel}>{required ? '(필수)' : '(선택)'}</Text>
        <Text style={buttonSheetStyles.termTitle}>{title}</Text>
      </Pressable>
      <Button
        buttonStyle={buttonSheetStyles.termButton}
        text="보기"
        defaultBackgoundColor={FILLBOM_COLOR.GRAY[200]}
        defaultTextColor={FILLBOM_COLOR.GRAY[700]}
        pressedBackgroundColor={FILLBOM_COLOR.GRAY[300]}
        pressedTextColor={FILLBOM_COLOR.GRAY[500]}
        textStyle={TEXT_STYLES.SUBTEXT_SMALL_MEDIUM}
      />
    </View>
  );
});

interface BottomSheetProps {
  onSubmit: () => void;
}

const BottomSheet = memo(
  forwardRef<BottomSheetModal, BottomSheetProps>(({ onSubmit }, ref) => {
    const { agreeMap, allAgreed, requiredAgreed, toggleAgree, toggleAllAgree } = useTermAgreement();

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={[`${(450 / Dimensions.get('window').height) * 100}`]}
        backdropComponent={(props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.6} />}
      >
        <BottomSheetView style={buttonSheetStyles.container}>
          <Text style={buttonSheetStyles.title}>약관에 동의해주세요</Text>
          <Button
            text="전체 동의하기"
            icon={IconCheck}
            onPress={toggleAllAgree}
            defaultBackgoundColor={allAgreed ? FILLBOM_COLOR.BLUE[500] : FILLBOM_COLOR.GRAY[200]}
            defaultTextColor={allAgreed ? FILLBOM_COLOR.GRAY[100] : FILLBOM_COLOR.GRAY[700]}
            defaultIconColor={allAgreed ? FILLBOM_COLOR.GRAY[100] : FILLBOM_COLOR.GRAY[400]}
            pressedBackgroundColor={allAgreed ? FILLBOM_COLOR.BLUE[300] : FILLBOM_COLOR.GRAY[300]}
            pressedTextColor={allAgreed ? FILLBOM_COLOR.BLUE[200] : FILLBOM_COLOR.GRAY[500]}
            pressedIconColor={allAgreed ? FILLBOM_COLOR.BLUE[200] : FILLBOM_COLOR.GRAY[500]}
            buttonStyle={buttonSheetStyles.selectAllButton}
          />

          {Object.entries(TERMS).map(([key, { title }]) => (
            <TermItem
              key={key}
              title={title}
              required={TERMS[key as TTermsKey].required}
              checked={agreeMap[key as TTermsKey]}
              onPress={() => toggleAgree(key as TTermsKey)}
            />
          ))}

          <Button
            text="동의하고 시작하기"
            onPress={onSubmit}
            disabled={!requiredAgreed}
            defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
            defaultTextColor={FILLBOM_COLOR.GRAY[100]}
            pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
            pressedTextColor={FILLBOM_COLOR.BLUE[200]}
            disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
            disabledTextColor={FILLBOM_COLOR.GRAY[400]}
            buttonStyle={buttonSheetStyles.confirmButton}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  }),
);

export default BottomSheet;
