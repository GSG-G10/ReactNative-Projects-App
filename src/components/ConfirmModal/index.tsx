/* eslint-disable import/namespace */
import React, { useState } from "react";
import { Text, Pressable, View, Modal, Alert } from "react-native";
import styles from './styles';

interface EditModalProps {
  visible?: boolean;
  setVisible?: any;
  cb?: () => void; 
}

const ConfirmModal = ({
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
          <Text style={styles.modalText}>Are you sure you want to delete this Specification?</Text>
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
                <Text style={styles.textStyle}>DELETE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      </View>
  );
};

export default ConfirmModal;