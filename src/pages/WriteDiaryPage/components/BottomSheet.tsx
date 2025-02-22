import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { forwardRef, memo, useReducer } from 'react';
import { Text, Dimensions, View, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '@/components/Button';
import Check from '@/components/Check';
import { FILLBOM_COLOR } from '@/constants/color';
import TEXT_STYLES from '@/styles/textStyles';
import { DEFAULT_PROFILE_IMAGES } from '@/constants';

interface BottomSheetProps {
  onSubmit: () => void;
}

const BottomSheet = memo(
  forwardRef<BottomSheetModal, BottomSheetProps>(({ onSubmit }, ref) => {
    const [checked, toggleChecked] = useReducer((checked) => !checked, false);

    const images = [null, DEFAULT_PROFILE_IMAGES[0], DEFAULT_PROFILE_IMAGES[1]];

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={[`${(408 / Dimensions.get('window').height) * 100}`]}
        backdropComponent={(props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.6} />}
      >
        <BottomSheetView style={styles.container}>
          <View style={styles.titleContainer}>
            <Image src={DEFAULT_PROFILE_IMAGES[0]} style={styles.titleImage} />
            <Text style={styles.title}>2024.12.04</Text>
          </View>

          <Text style={styles.addImageLabel}>사진 추가하기</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageSlider}>
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.carouselImage} />
                ) : (
                  <Pressable onPress={() => console.log('Add Image')}>
                    <View style={styles.addImageButton}>
                      <Text style={styles.addImageButtonText}>+</Text>
                    </View>
                  </Pressable>
                )}
              </View>
            ))}
          </ScrollView>

          <Pressable onPress={toggleChecked} style={styles.termValueContainer}>
            <Text style={styles.termTitle}>보호자에게 일기를 공유할까요?</Text>
            <Check containerStyle={styles.check} checked={checked} onPress={toggleChecked} />
          </Pressable>

          <Button
            text="저장"
            onPress={onSubmit}
            defaultBackgoundColor={FILLBOM_COLOR.BLUE[500]}
            defaultTextColor={FILLBOM_COLOR.GRAY[100]}
            pressedBackgroundColor={FILLBOM_COLOR.BLUE[300]}
            pressedTextColor={FILLBOM_COLOR.BLUE[200]}
            disabledBackgroundColor={FILLBOM_COLOR.GRAY[200]}
            disabledTextColor={FILLBOM_COLOR.GRAY[400]}
            buttonStyle={styles.confirmButton}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  }),
);

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  titleImage: {
    width: 24,
    height: 24,
  },
  title: {
    ...TEXT_STYLES.SUBTITLE_LARGE_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  addImageLabel: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
    marginVertical: 11,
  },
  imageSlider: {
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 10,
  },
  addImageButton: {
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: FILLBOM_COLOR.GRAY[200],
    borderRadius: 12,
  },
  addImageButtonText: {
    fontSize: 24,
    color: FILLBOM_COLOR.GRAY[600],
  },
  carouselImage: {
    width: 96,
    height: 96,
  },
  check: {
    alignSelf: 'center',
  },
  termValueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  termTitle: {
    ...TEXT_STYLES.BODY_MEDIUM_SEMI_BOLD,
    color: FILLBOM_COLOR.GRAY[800],
  },
  confirmButton: {
    marginTop: 20,
    marginBottom: 40,
  },
});
