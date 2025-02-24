import { type EditorBridge, RichText, Toolbar } from '@10play/tentap-editor';
import { memo } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import TEXT_STYLES from '@/styles/textStyles';

interface IEditorProps {
  title: string;
  editor: EditorBridge;
}

const Write = memo(({ title, editor }: IEditorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.editorContainer}>
        <RichText editor={editor} />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.toolbar}>
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </View>
  );
});

export default Write;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    ...TEXT_STYLES.TITLE_XL_SEMI_BOLD,
  },
  editorContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  toolbar: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
