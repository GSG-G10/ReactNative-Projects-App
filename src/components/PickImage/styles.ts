/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  btnContainer: {
    padding: 8,
    width: "65%",
    backgroundColor: "#0079FB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 4,
    marginVertical: 4,
  },
  takePictureBtn: {
    width: "80%",
    color: "white",
  },
  uploadingProcess: {
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 8,
  },
});

export default styles;
