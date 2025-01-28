import { RichText, Toolbar, useEditorBridge, useEditorContent } from '@10play/tentap-editor';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import Button from '@/components/Button';
import { styles } from './styles';

const WriteDiaryPage = () => {
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: '일기 쓰기',
  });

  const content = useEditorContent(editor, { type: 'html' });

  return (
    <SafeAreaView style={styles.container}>
      <RichText editor={editor} />
      <View>
        <Button onPress={() => console.log(content)} text="Save" />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.toolbar}>
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteDiaryPage;
