import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";
import { Color } from "../utils/Color";

interface ModalAction {
  onClose: () => void;
  onPress: () => void;
  visible: boolean;
  surahName: string;
}

const Modal = (props: ModalAction) => {
  return (
    <Provider>
      <Portal>
        <Dialog visible={props.visible} onDismiss={props.onClose}>
          <Dialog.Content>
            <Paragraph style={{ textAlign: "center" }}>
              {props.surahName}
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={props.onPress}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default Modal;
