import * as ImagePicker from 'expo-image-picker';

export const pickImageFromLibrary = async (): Promise<string | undefined> => {
  try {
    await ImagePicker.getMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (result.canceled || !result.assets) {
      throw new Error('no image selected');
    }

    return result.assets[0].base64!;
  } catch (error) {
    console.log(error);
  }
};

export const pickImageFromCamera = async (): Promise<string | undefined> => {
  try {
    await ImagePicker.getCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (result.canceled || !result.assets) {
      throw new Error('no image selected');
    }

    return result.assets[0].base64!;
  } catch (error) {
    console.log(error);
  }
};
