/* eslint-disable import/namespace */
import React, { useState } from "react";
import { Text, Pressable, View, Modal, Alert, TextInput } from "react-native";
import styles from './styles';

interface EditModalProps {
  visible?: boolean;
  price?: String;
  cb?: () => void;
  setVisible?: any;
}

const EditModal = ({
  visible,
  price,
  cb,
  setVisible,
}: EditModalProps) => {

  const setClose = () => {
    setVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Changes Saved.");
          setClose();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Description"
              // value={description}
              // onChangeText={setEmail}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Cost"
              // value={description}
              // onChangeText={setEmail}
              style={styles.textInput}
            />
            <View style={styles.buttonsContainer}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setClose()}
              >
                <Text style={styles.cancelText}>CANCEL</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => setClose()}
              >
                <Text style={styles.textStyle}>SAVE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      </View>
  );
};

export default EditModal;