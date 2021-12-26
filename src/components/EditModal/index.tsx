/* eslint-disable import/namespace */
import React, { useState } from "react";
import { Text, Pressable, View, Modal, Alert, TextInput } from "react-native";
import styles from './styles';

interface EditModalProps {
  visible?: boolean;
  setVisible?: any;
  cb?: () => void;
}

const EditModal = ({
  visible,
  setVisible,
  cb,
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
              // onChangeText={setDescription}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Cost"
              // value={price}
              // onChangeText={setPrice}
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