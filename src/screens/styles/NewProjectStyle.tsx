/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  inputContainer: {
    width: "100%",
    height: 90,
    justifyContent: "space-between",
    marginVertical: 16,
  },
  inputHeader: {
    fontSize: 18,
    fontWeight: "600",
  },
  inputField: {
    borderWidth: 0.5,
    borderColor: "rgba(190, 190, 190,1)",
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(245, 245, 245,0.5)",
    borderRadius: 4,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0079FB",
    marginVertical: 16,
    borderRadius: 4,
  },
  fillButton: {
    color: "white",
    padding: 16,
  },
});

export default styles;
