/* eslint-disable import/namespace */
import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View, Modal, Alert } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
import EditModal from '../EditModal';
import ConfirmModal from '../ConfirmModal';

interface SpecificationItemProps {
  name?: String;
  price?: String;
  cb?: () => void;
}

const styles = StyleSheet.create({
  listContainer: {
    //@ts-ignore
    flexDirection: "row",
    alignContent: "center",
    width: '100%',
  },
  dataContainer: {
    //@ts-ignore
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "70%"
  },
  iconsContainer: {
    //@ts-ignore
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: 'center',
    width: "30%"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const SpecificationItem = ({
  name,
  price,
  cb,
}: SpecificationItemProps) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(false);

  return (
    <View style={styles.listContainer}>
        <View style={styles.dataContainer}>
          <Text style={{ padding: 8 }}>{name}</Text>
          <Text style={{ padding: 8 }}>{price}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Feather name="edit-2" size={20} color="#2196F3" style={{ padding: 8 }} />
          </Pressable>
          <Pressable onPress={() => setConfirmVisible(true)}>
            <Ionicons name="trash-outline" size={22} color="#d32f2f" style={{ padding: 8 }}/>
          </Pressable>
        </View>
        <EditModal visible={modalVisible} setVisible={setModalVisible}/>
        <ConfirmModal visible={ConfirmVisible} setVisible={setConfirmVisible}/>
      </View>
  );
};

export default SpecificationItem;