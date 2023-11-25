import {Dialog as DialoContent, Paragraph, Portal} from 'react-native-paper';
import If from '../If';
import {styleDialog, ButtonDialog, TextButtonDialog} from './styles';

interface DialogProps {
  visibleDialog?: boolean;
  setVisible?: () => void;
  title?: string;
  paragraph?: string;
  paragraphLineTwo?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  optionTwo?: () => void;
  confirmTextTwo?: string;
  cancelText?: string;
}

export function Dialog({
  visibleDialog,
  setVisible,
  title,
  paragraph,
  paragraphLineTwo,
  onConfirm,
  onCancel,
  confirmText,
  optionTwo,
  confirmTextTwo,
  cancelText,
}: DialogProps) {
  return (
    <Portal>
      <DialoContent
        visible={visibleDialog || false}
        style={styleDialog.container}
        onDismiss={setVisible}
      >
        <DialoContent.Title style={styleDialog.title}>
          {title}
        </DialoContent.Title>
        <DialoContent.Content>
          <Paragraph style={styleDialog.text}>{paragraph}</Paragraph>
          <Paragraph style={styleDialog.text}>{paragraphLineTwo}</Paragraph>
        </DialoContent.Content>
        <DialoContent.Actions>
          <If condition={!!onCancel}>
            <ButtonDialog onPress={onCancel}>
              <TextButtonDialog>{cancelText || 'Não'}</TextButtonDialog>
            </ButtonDialog>
          </If>

          <If condition={!!optionTwo}>
            <ButtonDialog onPress={optionTwo}>
              <TextButtonDialog>{confirmTextTwo}</TextButtonDialog>
            </ButtonDialog>
          </If>

          <ButtonDialog onPress={onConfirm}>
            <TextButtonDialog>{confirmText || 'Sim'}</TextButtonDialog>
          </ButtonDialog>
        </DialoContent.Actions>
      </DialoContent>
    </Portal>
  );
}
