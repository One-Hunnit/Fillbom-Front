import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import ImageResizer from 'react-native-image-resizer';

interface IPickImageOptions {
  useCamera: boolean;
  maxFileSizeMB?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export interface ImagePickerResult {
  base64?: string;
  uri?: string;
}

export const pickImage = async ({
  useCamera = false,
  maxFileSizeMB = 3,
  maxWidth = 1200,
  maxHeight = 1200,
}: IPickImageOptions): Promise<ImagePickerResult | undefined> => {
  try {
    // 권한 요청
    if (useCamera) {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Camera permission denied');
      }
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Media library permission denied');
      }
    }

    // 이미지 선택 (카메라 또는 라이브러리)
    const result = useCamera
      ? await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });

    if (result.canceled || !result.assets) {
      throw new Error('No image selected');
    }

    let imageUri = result.assets[0].uri;
    let quality = 100; // 초기 품질 100%

    while (true) {
      // 리사이즈
      const resizedImage = await ImageResizer.createResizedImage(imageUri, maxWidth, maxHeight, 'JPEG', quality);

      // 파일 크기 확인
      const fileInfo = await FileSystem.getInfoAsync(resizedImage.uri);

      if (!fileInfo.exists) {
        throw new Error('File not found');
      }

      const fileSizeInMB = fileInfo.size! / (1024 * 1024); // 바이트 → MB 변환
      if (fileSizeInMB <= maxFileSizeMB) {
        // 3MB 이하라면 base64로 변환
        const base64Image = await FileSystem.readAsStringAsync(resizedImage.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        return { base64: base64Image, uri: resizedImage.uri };
      }

      // 용량 초과 시 품질 및 크기 조정
      quality -= 10; // 품질 감소
      maxWidth -= 100; // 너비 감소
      maxHeight -= 100; // 높이 감소

      if (quality < 10 || maxWidth < 100 || maxHeight < 100) {
        throw new Error('Unable to resize image under the maximum size');
      }

      imageUri = resizedImage.uri;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
