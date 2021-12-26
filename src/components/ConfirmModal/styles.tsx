// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonsContainer: {
    //@ts-ignore
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    width: "100%",
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
    borderRadius: 4,
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
    borderRadius: 4,
    padding: 10,
    elevation: 2
  },
  buttonSave: {
    backgroundColor: "#2196F3",
  },
  buttonCancel: {
    borderWidth: 1,
    borderColor: "lightgray",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cancelText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    width: "90%",
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
  },
});

export default styles;